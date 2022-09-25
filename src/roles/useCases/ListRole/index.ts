import { ListRoleUseCase } from './ListRoleUseCase';
import { ListRolesController } from './ListRoleController';
import { RolesRepository } from 'src/roles/repositories/RolesRepository';

const rolesRepository = RolesRepository.getInstance();
const listRoleUseCase = new ListRoleUseCase(rolesRepository);
export const listRoleController = new ListRolesController(listRoleUseCase);
