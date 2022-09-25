import { DeleteRoleUseCase } from './DeleteRoleUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteRoleUseCase = container.resolve(DeleteRoleUseCase);
    await deleteRoleUseCase.execute({ id });
    return response.status(204).send();
  }
}
