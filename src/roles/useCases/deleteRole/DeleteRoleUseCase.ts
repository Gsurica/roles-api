import { IRolesRepository } from './../../repositories/IRolesrepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

type deleteUseCaseParams = {
  id: string;
};

@injectable()
export class DeleteRoleUseCase {
  constructor(
    @inject('RolesRepository') private roleRepository: IRolesRepository,
  ) {}

  async execute({ id }: deleteUseCaseParams): Promise<void> {
    const roleExists = await this.roleRepository.findById(id);
    if (!roleExists) throw new AppError('Role not exists!', 404);
    return this.roleRepository.delete(roleExists);
  }
}
