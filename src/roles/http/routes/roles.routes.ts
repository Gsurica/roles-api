import { showRoleController } from './../../useCases/showRole/index';
import { createRoleController } from './../../useCases/createRole/index';
import { listRoleController } from 'src/roles/useCases/ListRole';
import { updateRoleController } from 'src/roles/useCases/updateRole';
import { deleteRoleController } from 'src/roles/useCases/deleteRole';
import { Request, Response, Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

const rolesRouter = Router();

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
