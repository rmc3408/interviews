import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum OrganizationEnumType {
  MANAGEMENT = 'Management',
  SALES = 'Sales',
}

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: OrganizationEnumType;
}
