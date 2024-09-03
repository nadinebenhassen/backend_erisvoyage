import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  import { Injectable } from '@nestjs/common';
  import { getRepository } from 'typeorm';
  
  @ValidatorConstraint({ async: true })
  @Injectable()
  export class IsUniqueConstraint implements ValidatorConstraintInterface {
    async validate(value: any, args: ValidationArguments) {
      const [entityClass, property] = args.constraints;
      const repository = getRepository(entityClass);
      const existingRecord = await repository.findOne({ where: { [property]: value } });
      return !existingRecord; // Returns true if the value is unique
    }
  
    defaultMessage(args: ValidationArguments) {
      return `${args.property} already exists.`;
    }
  }
  
  export function IsUnique(entityClass: any, property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [entityClass, property],
        validator: IsUniqueConstraint,
      });
    };
  }
  