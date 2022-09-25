import { DeleteRoleController } from './../../roles/useCases/deleteRole/DeleteRoleController';
import { UpdateRoleController } from './../../roles/useCases/updateRole/UpdateRoleController';
import { ListRolesController } from './../../roles/useCases/ListRole/ListRoleController';
import { CreateRoleController } from './../../roles/useCases/createRole/CreateRoleController';
import { IRolesRepository } from './../../roles/repositories/IRolesrepository';
import { RolesRepository } from 'src/roles/repositories/RolesRepository';
import { container } from 'tsyringe';
import { ShowRoleController } from 'src/roles/useCases/showRole/ShowRoleController';

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
);

container.registerSingleton('CreateRoleController', CreateRoleController);
container.registerSingleton('ListRolesController', ListRolesController);
container.registerSingleton('ShowRoleController', ShowRoleController);
container.registerSingleton('UpdateRoleController', UpdateRoleController);
container.registerSingleton('DeleteRoleController', DeleteRoleController);
