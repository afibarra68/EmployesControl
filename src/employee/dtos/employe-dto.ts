import { IsNumber, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class EmployeeDto {
  @IsNumber()
  idPerson: number;

  @IsString()
  firstName: string;

  @IsString()
  surname: string;

  @IsString()
  secondName: string;

  @IsString()
  secondSurname: string;

  @IsString()
  idNumber: string;

  @IsString()
  idType: string;

  @IsString()
  email: string;

  @Expose()
  @IsString()
  countryEmployee: string;

  state: boolean;

  @IsString()
  area: string;

  @IsString()
  admissionDate: string;

  createdDate: Date;

  registerDate: Date;
}
