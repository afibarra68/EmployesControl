import { Injectable } from '@nestjs/common';
import { Paginated, PaginateQuery } from 'nestjs-paginate';
import { EmployeeDto } from '../dtos/employe-dto';
import { Employee } from '../emp-entitiy/employee.entity';
import { EmployeeServiceServiceImp } from '../serviceImplement/employee-service-imp.service';

@Injectable()
export class EmployeeServiceService {
  constructor(private implementator: EmployeeServiceServiceImp) {}

  findEmployees(query: PaginateQuery): Promise<Paginated<EmployeeDto>> {
    return this.implementator.findAll(query);
  }

  registerEmployee(employeDto: EmployeeDto) {
    return this.implementator.generate(this.convertTOE(employeDto));
  }

  updateEmployee(id: number, employe: EmployeeDto): Promise<EmployeeDto> {
    return this.implementator.updateEmployee(id, this.updateDTO(employe));
  }

  convertTOE(employee: EmployeeDto): Employee {
    const employeed = new Employee();
    employeed.firstName = employee.firstName;
    employeed.secondName = employee.firstName;
    employeed.surname = employee.surname;
    employeed.secondSurname = employee.secondSurname;
    employeed.countryEmployee = employee.countryEmployee;
    employeed.idType = employee.idType;
    employeed.idNumber = employee.idNumber;
    employeed.admissionDate = employee.admissionDate;
    employeed.registerDate = new Date();
    employeed.createdDate = new Date();
    employeed.area = employee.area;
    employeed.state = true;
    employeed.email = this.validateCountry(
      employee.countryEmployee,
      this.validateEmail(employee)
    );
    return employeed;
  }

  updateDTO(employee: EmployeeDto): Employee {
    const employeed = new Employee();
    employeed.idPerson = employee.idPerson;
    employeed.firstName = employee.firstName;
    employeed.secondName = employee.firstName;
    employeed.surname = employee.surname;
    employeed.secondSurname = employee.secondSurname;
    employeed.countryEmployee = employee.countryEmployee;
    employeed.idType = employee.idType;
    employeed.idNumber = employee.idNumber;
    employeed.admissionDate = employee.admissionDate;
    employeed.registerDate = employee.registerDate;
    employeed.createdDate = new Date();
    employeed.area = employee.area;
    employeed.state = true;
    employeed.email = this.validateCountry(
      employee.countryEmployee,
      this.validateEmail(employee)
    );
    return employeed;
  }

  validateEmail(employee: Employee): string {
    const email = new String();
    return email
      .concat(
        employee.firstName +
          '.' +
          this.validateSecondName(employee.secondSurname)
      )
      .toString();
  }

  validateSecondName(secondSurname: string) {
    if (secondSurname.includes(' ')) {
      return secondSurname.trim();
    }
    return secondSurname;
  }

  validateCountry(countryOrig: string, email: string) {
    if (countryOrig == 'Colombia') {
      return email.concat('@cidenet.com.co');
    }
    return email.concat('@cidenet.com.us');
  }
}
