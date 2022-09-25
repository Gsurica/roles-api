import { RolesRepository } from 'src/roles/repositories/RolesRepository';
import { DeleteRoleController } from './DeleteRoleController';
import { DeleteRoleUseCase } from './DeleteRoleUseCase';

const roleRepository = RolesRepository.getInstance();
const deleteRoleUseCase = new DeleteRoleUseCase(roleRepository);
export const deleteRoleController = new DeleteRoleController(deleteRoleUseCase);
