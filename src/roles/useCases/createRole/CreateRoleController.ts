import { CreateRoleUseCase } from './CreateRoleUseCase';
import { AppError } from './../../../shared/errors/AppError';
import { RolesRepository } from './../../repositories/RolesRepository';
import { Response, Request } from 'express';

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const role = this.createRoleUseCase.execute(name);
    return response.status(201).json(role);
  }
}
