import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('employee')
export class EmployeeControllerController {
  @Get()
  public getEmployees() {
    return [1, 2, 4];
  }

  @Get('/query')
  public getBy() {
    return [1, 2, 4];
  }

  @Post()
  public createEmployee(@Body() body: any) {
    return body;
  }

  @Put(':id')
  public updateEmployee(@Param('id') id: string, @Body() body: any) {
    return { id, body };
  }

  @Delete(':id')
  public deleteEmployee(@Param('id') id: number) {
    return id;
  }
}
