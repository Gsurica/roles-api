import { RolesRepository } from 'src/roles/repositories/RolesRepository';
import { ShowRoleController } from './ShowRoleController';
import { ShowRoleUseCase } from './ShowRoleUseCase';

const rolesRepository = RolesRepository.getInstance();
const showRoleUseCase = new ShowRoleUseCase(rolesRepository);
export const showRoleController = new ShowRoleController(showRoleUseCase);
