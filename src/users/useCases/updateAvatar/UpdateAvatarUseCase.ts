import path from 'node:path';
import { AppError } from './../../../shared/errors/AppError';
import { User } from '@users/entities/User';
import { IUsersRepository } from './../../repositories/IUsersRepositories';
import { inject, injectable } from 'tsyringe';
import uploadConfig from '../../../config/upload';
import fs from 'node:fs';

type UpdateAvatarDTO = {
  userId: string;
  avatarFileName: string;
};

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ avatarFileName, userId }: UpdateAvatarDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new AppError('Only authenticated users can change avatar!', 401);
    }
    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
      user.avatar = avatarFileName;
      return this.usersRepository.save(user);
    }
  }
}
