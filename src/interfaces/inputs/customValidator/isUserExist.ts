import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getRepository } from 'typeorm';

import { User } from '~/entities/user.entity';

@ValidatorConstraint({ async: true })
export class IsUserExistConstraint implements ValidatorConstraintInterface {
  private userRepository = getRepository(User);

  async validate(userId: string): Promise<boolean> {
    const user = this.userRepository.findOne(userId);
    return !!user;
  }
}

/**
 *
 * UserがDBに存在しているか
 *
 * @param options
 * @returns
 */
export function IsUserExist(options?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: options,
      constraints: [],
      validator: IsUserExistConstraint,
    });
  };
}
