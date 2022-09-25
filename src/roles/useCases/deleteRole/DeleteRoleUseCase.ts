import { AppError } from '@shared/errors/AppError';
import { RolesRepository } from 'src/roles/repositories/RolesRepository';

type deleteUseCaseParams = {
  id: string;
};

export class DeleteRoleUseCase {
  constructor(private roleRepository: RolesRepository) {}

  async execute({ id }: deleteUseCaseParams): Promise<void> {
    const roleExists = await this.roleRepository.findById(id);
    if (!roleExists) throw new AppError('Role not exists!', 404);
    return this.roleRepository.delete(roleExists);
  }
}
