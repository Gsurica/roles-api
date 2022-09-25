import { RolesRepository } from './../../repositories/RolesRepository';
import { Request, Response, Router } from 'express';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request: Request, response: Response) => {
  const { name } = request.body;
  const role = rolesRepository.create({ name });
  return response.status(201).json(role);
});

export { rolesRouter };
