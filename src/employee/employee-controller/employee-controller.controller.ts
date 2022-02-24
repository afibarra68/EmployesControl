import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  HttpCode
} from '@nestjs/common';
import { Paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { EmployeeDto } from '../dtos/employe-dto';
import { EmployeeServiceService } from '../employee-service/employee-service.service';

@Controller('employee')
export class EmployeeControllerController {
  constructor(private service: EmployeeServiceService) {}

  @Get()
  public findAll(
    @Paginate() query: PaginateQuery
  ): Promise<Paginated<EmployeeDto>> {
    return this.service.findEmployees(query);
  }

  @Post()
  @HttpCode(200)
  public createEmployee(@Body() employee: EmployeeDto) {
    return this.service.registerEmployee(employee);
  }

  @Put(':id')
  public updateEmployee(
    @Param('id') id: number,
    @Body() employee: EmployeeDto
  ) {
    return this.service.updateEmployee(id, employee);
  }

  @Delete(':id')
  public deleteEmployee(@Param('id') id: number) {
    return id;
  }
}
