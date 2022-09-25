import { RolesRepository } from 'src/roles/repositories/RolesRepository';
import { UpdateRoleController } from './UpdateRoleController';
import { UpdateRoleUseCase } from './UpdateRoleUseCase';

const rolesRepository = RolesRepository.getInstance();
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository);
export const updateRoleController = new UpdateRoleController(updateRoleUseCase);
