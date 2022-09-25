import { User } from '../../users/entities/User';
import { Role } from 'src/roles/entities/Role';

export type createUserDTO = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  role: Role;
};

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
};

export type UsersPaginateProperties = {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
};

export interface IUsersRepository {
  create({
    name,
    email,
    password,
    isAdmin,
    role,
  }: createUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties>;
  findById(id: string): Promise<User | null>;
  findByName(name: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  delete(user: User): Promise<void>;
}
