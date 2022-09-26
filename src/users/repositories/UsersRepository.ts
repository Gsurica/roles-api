import { Repository } from 'typeorm';
import { User } from '@users/entities/User';
import {
  createUserDTO,
  IUsersRepository,
  PaginateParams,
  UsersPaginateProperties,
} from './IUsersRepositories';
import { dataSource } from '@shared/typeorm';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    name,
    email,
    password,
    isAdmin,
    role,
  }: createUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      isAdmin,
      role,
    });
    return this.repository.save(user);
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }
  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties> {
    const [users, count] = await this.repository
      .createQueryBuilder('r')
      .leftJoinAndSelect('r.role', 'role')
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    };
    return result;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ id });
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOneBy({ name });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOneBy({ email });
    return user;
  }

  async delete(user: User): Promise<void> {
    await this.repository.remove(user);
  }
}
