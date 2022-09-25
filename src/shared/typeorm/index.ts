import { createUserTable1664139673515 } from './migrations/1664139673515-createUserTable';
import { Role } from './../../roles/entities/Role';
import { CreateRolesTable1664122363935 } from './migrations/1664122363935-CreateRolesTable';
import { DataSource } from 'typeorm';
import { AddRoleIdToUsersTable1664140244965 } from './migrations/1664140244965-AddRoleIdToUsersTable';
import { User } from '../../users/entities/User';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1664122363935,
    createUserTable1664139673515,
    AddRoleIdToUsersTable1664140244965,
  ],
});
