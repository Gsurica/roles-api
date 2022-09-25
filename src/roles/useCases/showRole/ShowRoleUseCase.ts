import { IRolesRepository } from './../../repositories/IRolesrepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Role } from '../../entities/Role';

type ShowRoleParams = {
  id: string;
};

@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject('RoleRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);
    if (!role) throw new AppError('Role not found!', 404);
    return role;
  }
}
