import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'employee'
})
export class Employee {
  @PrimaryGeneratedColumn({
    name: 'id_person'
  })
  idPerson: number;

  @Column({ name: 'first_name', length: 30 })
  firstName: string;

  @Column({ name: 'second_name', length: 30 })
  secondName: string;

  @Column({ name: 'surname', length: 30 })
  surname: string;

  @Column({ name: 'second_surname', length: 30 })
  secondSurname: string;

  @Column({ name: 'country_employee', length: 30 })
  countryEmployee: string;

  @Column({ name: 'identification_type', length: 30 })
  idType: string;

  @Column({ name: 'identification_number', length: 30 })
  idNumber: string;

  @Column({ name: 'email', length: 30 })
  email: string;

  @Column({ name: 'area', length: 30 })
  area: string;

  @Column({ name: 'admission_date', length: 30 })
  admissionDate: string;

  @Column({ name: 'state', default: true })
  state: boolean;

  @Column({ name: 'created_date', type: 'timestamptz' })
  createdDate: Date;

  @Column({ name: 'register_date', type: 'timestamptz' })
  registerDate: Date;
}
