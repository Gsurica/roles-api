import { showRoleController } from './../../useCases/showRole/index';
import { createRoleController } from './../../useCases/createRole/index';
import { listRoleController } from 'src/roles/useCases/ListRole';
import { updateRoleController } from 'src/roles/useCases/updateRole';
import { deleteRoleController } from 'src/roles/useCases/deleteRole';
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

rolesRouter.put('/:id', (request: Request, response: Response) => {
  return updateRoleController.handle(request, response);
});

rolesRouter.delete('/:id', (request: Request, response: Response) => {
  return deleteRoleController.handle(request, response);
});

export { rolesRouter };
