import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator/types/decorator/decorators';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @Prop()
  @IsString()
  @IsNotEmpty()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
