import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
