import { DeleteRoleController } from './../../useCases/deleteRole/DeleteRoleController';
import { UpdateRoleController } from './../../useCases/updateRole/UpdateRoleController';
import { ShowRoleController } from './../../useCases/showRole/ShowRoleController';
import { ListRolesController } from './../../useCases/ListRole/ListRoleController';
import { CreateRoleController } from './../../useCases/createRole/CreateRoleController';
import { container } from 'tsyringe';
import { Request, Response, Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

const rolesRouter = Router();

const createRoleController = container.resolve(CreateRoleController);
const listRoleController = container.resolve(ListRolesController);
const showRoleController = container.resolve(ShowRoleController);
const updateRoleController = container.resolve(UpdateRoleController);
const deleteRoleController = container.resolve(DeleteRoleController);

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request: Request, response: Response) => {
    return createRoleController.handle(request, response);
  },
);

rolesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request: Request, response: Response) => {
    return listRoleController.handle(request, response);
  },
);

rolesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid(),
    }),
  }),
  (request: Request, response: Response) => {
    return showRoleController.handle(request, response);
  },
);

rolesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
    }),
  }),
  (request: Request, response: Response) => {
    return updateRoleController.handle(request, response);
  },
);

rolesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid(),
    }),
  }),
  (request: Request, response: Response) => {
    return deleteRoleController.handle(request, response);
  },
);

export { rolesRouter };
