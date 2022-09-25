import { UsersRepository } from './../repositories/UsersRepository';
import { IUsersRepository } from './../repositories/IUsersRepositories';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
