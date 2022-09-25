import { AppError } from '@shared/errors/AppError';
import { Role } from './../../entities/Role';
import { RolesRepository } from './../../repositories/RolesRepository';
type CreateRoleDTO = {
  name: string;
};

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name);
    if (roleAlreadyExists) throw new AppError('Role already exists');
    return this.rolesRepository.create({ name });
  }
}
