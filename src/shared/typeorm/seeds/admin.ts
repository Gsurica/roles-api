import { dataSource } from './../index';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';

async function create() {
  const connection = await dataSource.initialize();
  const roleId = uuidv4();
  await connection.query(`
    INSERT INTO roles(id, name)
    values('${roleId}', 'Admin')
  `);
  const userId = uuidv4();
  const password = await hash('1234', 10);
  await connection.query(`
    INSERT INTO users(id, name, email, password, "isAdmin", roleId)
    values('${userId}', 'admin', 'a@a.com', '${password}', true, '${roleId}')
  `);
  await connection.destroy();
}

create().then(() => console.log('Admin was created!'));
