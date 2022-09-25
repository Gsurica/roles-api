import { Request, Response } from 'express';
import { ListRoleUseCase } from './ListRoleUseCase';

export class ListRolesController {
  constructor(private listRoleUseCase: ListRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1;
    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15;
    const roles = await this.listRoleUseCase.execute({ page, limit });
    return response.json(roles);
  }
}
