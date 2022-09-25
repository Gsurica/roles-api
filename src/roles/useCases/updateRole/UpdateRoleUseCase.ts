import { RolesRepository } from 'src/roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';
import { Role } from 'src/roles/entities/Role';

type updateRoleDTO = {
  id: string;
  name: string;
};

export class UpdateRoleUseCase {
  constructor(private roleRepository: RolesRepository) {}

  async execute({ id, name }: updateRoleDTO): Promise<Role> {
    const role = await this.roleRepository.findById(id);
    if (!role) throw new AppError('Role not exists!', 404);
    const roleWithSameName = await this.roleRepository.findByName(name);
    if (roleWithSameName && role.name !== roleWithSameName.name)
      throw new AppError('Role name already in use or not informed!', 400);
    role.name = name;
    return this.roleRepository.save(role);
  }
}
