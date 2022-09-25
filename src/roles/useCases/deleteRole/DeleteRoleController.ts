import { DeleteRoleUseCase } from './DeleteRoleUseCase';
import { Request, Response } from 'express';

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteRoleUseCase.execute({ id });
    return response.status(204).send();
  }
}
