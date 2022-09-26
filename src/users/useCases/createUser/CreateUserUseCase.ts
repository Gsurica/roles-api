import { AppError } from './../../../shared/errors/AppError';
import { hash } from 'bcryptjs';
import { User } from '@users/entities/User';
import { IRolesRepository } from './../../../roles/repositories/IRolesrepository';
import { IUsersRepository } from './../../repositories/IUsersRepositories';
import { inject, injectable } from 'tsyringe';

type createUserDTO = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  roleId: string;
};

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('RolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    isAdmin,
    roleId,
  }: createUserDTO): Promise<User> {
    const emailAlreadyInUse = await this.usersRepository.findByEmail(email);
    if (emailAlreadyInUse) throw new AppError('Email address already in use!');
    const role = await this.rolesRepository.findById(roleId);
    if (!role) throw new AppError('Role not found!', 404);
    const hashedPassword = await hash(password, 10);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      role,
    });
    return user;
  }
}
