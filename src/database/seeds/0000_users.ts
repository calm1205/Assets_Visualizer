import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { userId } from '../uuid';
import { UserInput } from '~/input/user.input';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const dummyUser: UserInput = {
      id: userId,
      email: 'sample@gmail.com',
      password: 'password',
    };

    await connection
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([dummyUser])
      .execute();
  }
}
