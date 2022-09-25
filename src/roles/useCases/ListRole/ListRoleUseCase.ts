import { Role } from './../../entities/Role';
import { RolesRepository } from './../../repositories/RolesRepository';

export class ListRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll();
  }
}
