import { CreateLoginController } from './../useCases/createLogin/CreateLoginController';
import { CreateUserController } from './../useCases/createUser/CreateUserController';
import { UsersRepository } from './../repositories/UsersRepository';
import { IUsersRepository } from './../repositories/IUsersRepositories';
import { ListUsersController } from '../../users/useCases/ListUsers/ListUsersController';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('CreateLoginController', CreateLoginController);
