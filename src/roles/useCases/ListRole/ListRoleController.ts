import { Role } from './../../entities/Role';
import { Request, Response } from 'express';
import { ListRoleUseCase } from './ListRoleUseCase';

export class ListRolesController {
  constructor(private listRoleUseCase: ListRoleUseCase) {}

  handle(request: Request, response: Response): Response<Role[]> {
    const roles = this.listRoleUseCase.execute();
    return response.json(roles);
  }
}
