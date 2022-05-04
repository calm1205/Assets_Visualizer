import * as bcrypt from 'bcrypt';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { userId } from '~/database/uuid';
import { SignUpInput } from '~/interfaces/inputs/signup.input';

type DummyUserInput = SignUpInput & { id: string };

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash('passw0rd', salt);

    const dummyUser: DummyUserInput = {
      id: userId,
      email: 'sample@gmail.com',
      password: hashPassword,
      passwordConfirm: 'passw0rd',
    };

    await connection
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([dummyUser])
      .execute();
  }
}
