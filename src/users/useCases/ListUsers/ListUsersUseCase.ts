import { injectable, inject } from 'tsyringe';
import {
  UsersPaginateProperties,
  IUsersRepository,
} from './../../repositories/IUsersRepositories';

type ListPaginateParams = {
  page: number;
  limit: number;
};

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}
  async execute({
    page,
    limit,
  }: ListPaginateParams): Promise<UsersPaginateProperties> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const users = await this.usersRepository.findAll({ page, skip, take });
    return users;
  }
}
