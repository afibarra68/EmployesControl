import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './emp-entitiy/employee.entity';
import { EmployeeControllerController } from './employee-controller/employee-controller.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeControllerController],
})
export class EmployeeModule {}
