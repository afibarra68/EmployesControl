import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { Employee } from '../emp-entitiy/employee.entity';

@Injectable()
export class EmployeeServiceServiceImp {
  constructor(
    @InjectRepository(Employee) private employeRepo: Repository<Employee>
  ) {}

  public findAll(query: PaginateQuery): Promise<Paginated<Employee>> {
    return paginate(query, this.employeRepo, {
      sortableColumns: ['firstName', 'secondName', 'surname', 'secondSurname'],
      searchableColumns: [
        'firstName',
        'secondName',
        'surname',
        'secondSurname',
        'idType',
        'idNumber',
        'countryEmployee',
        'state'
      ],
      defaultSortBy: [['idPerson', 'DESC']]
    });
  }

  findOne(id: number) {
    return this.employeRepo.findOne(id);
  }

  findByEmail(email: string): Promise<Employee[]> {
    return this.employeRepo.find({ where: { email: email } });
  }

  generate(employee: Employee) {
    console.log(employee);
    return this.employeRepo.save(employee);
  }

  async updateEmployee(id: number, body: Employee): Promise<Employee> {
    const employee = await this.employeRepo.findOne(id);
    this.employeRepo.merge(employee, body);
    return employee;
  }

  delete(id: number) {
    const employee = this.employeRepo.findOne(id);
    this.employeRepo.delete(id);
    return employee;
  }
}
