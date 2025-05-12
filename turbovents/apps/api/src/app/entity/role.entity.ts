import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRoleEnumType {
  ADMIN = 'Admin',
  OWNER = 'Owner',
  VIEWER = 'Viewer',
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: UserRoleEnumType;
}
