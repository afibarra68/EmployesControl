import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './emp-entitiy/employee.entity';
import { EmployeeControllerController } from './employee-controller/employee-controller.controller';
import { EmployeeServiceService } from './employee-service/employee-service.service';
import { EmployeeServiceServiceImp } from './serviceImplement/employee-service-imp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeControllerController],
  providers: [EmployeeServiceService, EmployeeServiceServiceImp]
})
export class EmployeeModule {}
