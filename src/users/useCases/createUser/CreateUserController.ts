import { CreateUserUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const { name, email, password, isAdmin, roleId } = request.body;
    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      isAdmin,
      roleId,
    });
    return response.status(201).json(user);
  }
}
