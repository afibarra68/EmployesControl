import {MigrationInterface, QueryRunner} from "typeorm";

export class employee1645691920735 implements MigrationInterface {
    name = 'employee1645691920735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id_person" SERIAL NOT NULL, "first_name" character varying(30) NOT NULL, "second_name" character varying(30) NOT NULL, "surname" character varying(30) NOT NULL, "second_surname" character varying(30) NOT NULL, "country_employee" character varying(30) NOT NULL, "identification_type" character varying(30) NOT NULL, "identification_number" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "area" character varying(30) NOT NULL, "admission_date" character varying(30) NOT NULL, "state" boolean NOT NULL DEFAULT true, "created_date" TIMESTAMP WITH TIME ZONE NOT NULL, "register_date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_da30b0e1b4e4af7fe00dd57c57c" PRIMARY KEY ("id_person"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
