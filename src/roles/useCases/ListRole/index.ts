import { ListRoleUseCase } from './ListRoleUseCase';
import { ListRolesController } from './ListRoleController';
import { RolesRepository } from 'src/roles/repositories/RolesRepository';

const rolesRepository = new RolesRepository();
const listRoleUseCase = new ListRoleUseCase(rolesRepository);
export const listRoleController = new ListRolesController(listRoleUseCase);
