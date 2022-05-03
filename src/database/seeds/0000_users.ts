import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { userId } from '../uuid';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([{ id: userId, email: 'sample@gmail.com', password: 'password' }])
      .execute();
  }
}
