import { AppError } from '@shared/errors/AppError';
import { User } from './../../entities/User';
import { IUsersRepository } from './../../repositories/IUsersRepositories';
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import auth from 'src/config/auth';

type CreateLoginDTO = {
  email: string;
  password: string;
};

type IResponse = {
  user: User;
  token: string;
};

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError('Incorrect email/password combination', 401);
    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed)
      throw new AppError('Incorrect email/password combination', 401);
    const token = sign({}, auth.jwt.secret, {
      expiresIn: auth.jwt.expiresIn,
      subject: user.id,
    });
    return {
      user,
      token,
    };
  }
}
