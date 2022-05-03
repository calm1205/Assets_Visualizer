import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { userId } from '../uuid';
import { UserInput } from '~/inputs/user.input';

type DummyUserInput = UserInput & { id: string };

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const dummyUser: DummyUserInput = {
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
