import { IRolesRepository } from './../../repositories/IRolesrepository';
import { AppError } from '@shared/errors/AppError';
import { Role } from 'src/roles/entities/Role';
import { inject, injectable } from 'tsyringe';

type updateRoleDTO = {
  id: string;
  name: string;
};

@injectable()
export class UpdateRoleUseCase {
  constructor(
    @inject('RolesRepository') private roleRepository: IRolesRepository,
  ) {}

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
