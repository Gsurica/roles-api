import { isAuthenticated } from './../../../shared/http/middlewares/isAutheticated';
import { CreateLoginController } from './../../useCases/createLogin/CreateLoginController';
import { ListUsersController } from './../../useCases/ListUsers/ListUsersController';
import { CreateUserController } from './../../useCases/createUser/CreateUserController';
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { container } from 'tsyringe';

const usersRoutes = Router();

const createUserController = container.resolve(CreateUserController);
const listUserController = container.resolve(ListUsersController);
const createLoginController = container.resolve(CreateLoginController);

usersRoutes.post(
  '/',
  isAuthenticated,
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
  isAuthenticated,
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

usersRoutes.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createLoginController.handle(request, response);
  },
);

export { usersRoutes };
