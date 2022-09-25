import { CreateRoleController } from './CreateRoleController';
import { CreateRoleUseCase } from './CreateRoleUseCase';
import { RolesRepository } from './../../repositories/RolesRepository';

const rolesRepository = RolesRepository.getInstance();
const createRoleUseCase = new CreateRoleUseCase(rolesRepository);
export const createRoleController = new CreateRoleController(createRoleUseCase);
