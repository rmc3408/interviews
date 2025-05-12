import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Organization } from './organization.entity';
import { Role } from './role.entity';
import { Task } from './task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 16,
  })
  username: string;

  @Column({
    length: 256,
  })
  password: string;

  @OneToOne(() => Role, (role) => role.name)
  @JoinColumn()
  role: Role;

  @OneToOne(() => Organization, (organization) => organization.name)
  @JoinColumn()
  organization: Organization;

  @OneToMany(() => Task, (task) => task.user)
  @JoinColumn()
  tasks: Task[];
}
