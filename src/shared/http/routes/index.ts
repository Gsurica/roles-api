import { Router } from 'express';
import { rolesRouter } from 'src/roles/http/routes/roles.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá, Dev!' });
});

routes.use('/roles', rolesRouter);

export { routes };
