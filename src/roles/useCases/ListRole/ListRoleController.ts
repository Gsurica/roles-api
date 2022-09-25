import { Request, Response } from 'express';
import { ListRoleUseCase } from './ListRoleUseCase';
import { container } from 'tsyringe';

export class ListRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRoleUseCase = container.resolve(ListRoleUseCase);
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1;
    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15;
    const roles = await listRoleUseCase.execute({ page, limit });
    return response.json(roles);
  }
}
