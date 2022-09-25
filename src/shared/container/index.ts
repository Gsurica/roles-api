import { IRolesRepository } from './../../roles/repositories/IRolesrepository';
import { RolesRepository } from 'src/roles/repositories/RolesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
);
