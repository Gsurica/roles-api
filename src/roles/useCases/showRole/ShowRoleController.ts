import { ShowRoleUseCase } from './ShowRoleUseCase';
import { Response, Request } from 'express';

export class ShowRoleController {
  constructor(private showRoleUseCase: ShowRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const role = await this.showRoleUseCase.execute({ id });
    return response.json(role);
  }
}
