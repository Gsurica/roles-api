import { IRolesRepository } from './../../repositories/IRolesrepository';
import { RolesPaginateProperties } from 'src/roles/repositories/IRolesrepository';
import { inject, injectable } from 'tsyringe';

type ListRolesUseCaseParams = {
  page: number;
  limit: number;
};

@injectable()
export class ListRoleUseCase {
  constructor(
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const roles = await this.rolesRepository.findAll({ page, skip, take });
    return roles;
  }
}
