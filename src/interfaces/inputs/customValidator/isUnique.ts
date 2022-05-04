import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getRepository } from 'typeorm';

@ValidatorConstraint({ async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  async validate(value: unknown, args: ValidationArguments): Promise<any> {
    const {
      constraints: [entity, column],
    } = args;

    const where = { [column]: value };
    return !(await getRepository(entity).findOne(where));
  }
}

/**
 * DBに値が存在していないことをチェックするバリデーション
 * @param entity
 * @param column
 * @param validationOptions
 * @constructor
 */
export function IsUnique(
  entity: unknown,
  column: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string): any {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [entity, column],
      validator: IsUniqueConstraint,
    });
  };
}
