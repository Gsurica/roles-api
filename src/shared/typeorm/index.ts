import { createUserTable1664139673515 } from './migrations/1664139673515-createUserTable';
import { Role } from './../../roles/entities/Role';
import { CreateRolesTable1664122363935 } from './migrations/1664122363935-CreateRolesTable';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1664122363935, createUserTable1664139673515],
});
