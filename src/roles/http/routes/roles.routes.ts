import { showRoleController } from './../../useCases/showRole/index';
import { createRoleController } from './../../useCases/createRole/index';
import { listRoleController } from 'src/roles/useCases/ListRole';
import { Request, Response, Router } from 'express';

const rolesRouter = Router();

rolesRouter.post('/', (request: Request, response: Response) => {
  return createRoleController.handle(request, response);
});

rolesRouter.get('/', (request: Request, response: Response) => {
  return listRoleController.handle(request, response);
});

rolesRouter.get('/:id', (request: Request, response: Response) => {
  return showRoleController.handle(request, response);
});

export { rolesRouter };
