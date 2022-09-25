import { ListUsersController } from './../../useCases/ListUsers/ListUsersController';
import { CreateUserController } from './../../useCases/createUser/CreateUserController';
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { container } from 'tsyringe';

const usersRoutes = Router();

const createUserController = container.resolve(CreateUserController);
const listUserController = container.resolve(ListUsersController);

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response);
  },
);

usersRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request, response) => {
    return listUserController.handle(request, response);
  },
);

export { usersRoutes };
