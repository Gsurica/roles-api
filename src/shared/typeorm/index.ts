import { CreateRolesTable1664122363935 } from './migrations/1664122363935-CreateRolesTable';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1664122363935],
});
