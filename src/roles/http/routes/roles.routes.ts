import { createRoleController } from './../../useCases/createRole/index';
import { RolesRepository } from './../../repositories/RolesRepository';
import { Request, Response, Router } from 'express';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request: Request, response: Response) => {
  return createRoleController.handle(request, response);
});

rolesRouter.get('/', (request: Request, response: Response) => {
  const roles = rolesRepository.findAll();
  return response.json(roles);
});

export { rolesRouter };
