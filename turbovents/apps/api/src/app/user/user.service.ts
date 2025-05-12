import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entity/task.entity';
import { User } from '../entity/user.entity';
import { Role, UserRoleEnumType } from '../entity/role.entity';
import { Organization, OrganizationEnumType } from '../entity/organization.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _usersRepository: Repository<User>,
    @InjectRepository(Role)
    private _roleRepository: Repository<Role>,
    @InjectRepository(Organization)
    private _orgRepository: Repository<Organization>,
    @InjectRepository(Task)
    private _taskRepository: Repository<Task>,
  ) {}

  async register(payload: {
    username: string;
    password: string;
    role: UserRoleEnumType;
    organization: OrganizationEnumType;
  }): Promise<User> {
    // Create a empty task to assign to the user
    try {
      const newUser = new User();
      newUser.username = payload.username.trim().toLowerCase();
      newUser.password = payload.password;
      payload.role = payload.role || UserRoleEnumType.OWNER;
      payload.organization = payload.organization || OrganizationEnumType.MANAGEMENT;

      const newTask = new Task();
      newTask.title = `Welcome ${payload.username} to your todo list`;
      newTask.description = 'This is your first todo';
      const newRole = new Role();
      newRole.name = payload.role;
      const newOrganization = new Organization();
      newOrganization.name = payload.organization;

      const [tasks, roles, organizations] = await Promise.all([
        this._taskRepository.save(newTask),
        this._roleRepository.save(newRole),
        this._orgRepository.save(newOrganization),
      ]);
      newUser.role = roles;
      newUser.organization = organizations;
      newUser.tasks = [tasks];

      return this._usersRepository.save(newUser);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  saveUser(user: User): Promise<User> {
    return this._usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this._usersRepository.find();
  }

  findOne(username: string): Promise<User | null> {
    return this._usersRepository.findOne({
      where: { username },
      relations: ['role'],
    });
  }

  async remove(id: string): Promise<void> {
    this._usersRepository.delete(id);
  }
}
