import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getRepository } from 'typeorm';

@ValidatorConstraint({ async: true })
export class IsExistConstraint implements ValidatorConstraintInterface {
  async validate(value: unknown, args: ValidationArguments): Promise<boolean> {
    const {
      constraints: [entity, column],
    } = args;
    const where = { [column]: value };
    return !!(await getRepository(entity).findOne(where));
  }
}

/**
 * propertyがDBに存在しているか
 */
export function IsExist(
  entity: string,
  column: string,
  options?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: options,
      constraints: [entity, column],
      validator: IsExistConstraint,
    });
  };
}
