import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1744479336045 implements MigrationInterface {
    name = 'Default1744479336045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "departments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "performance_reviews" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "review_date" date NOT NULL, "score" numeric(3,1) NOT NULL, "feedback" character varying, "employeeId" uuid, CONSTRAINT "PK_46f39f620497eb3de4fe6dafdef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "zip_code" character varying NOT NULL, "employeeId" uuid, CONSTRAINT "PK_deb2a222094d803e8d23b13a463" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."benefits_type_enum" AS ENUM('Vale Alimentação', 'Plano de Saúde', 'Vale Transporte')`);
        await queryRunner.query(`CREATE TABLE "benefits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."benefits_type_enum" NOT NULL DEFAULT 'Vale Alimentação', "description" character varying, "value" numeric(10,2), "employeeId" uuid, CONSTRAINT "PK_f83fd5765028f20487943258b46" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "document" character varying NOT NULL, "phone" character varying, "birth_date" date NOT NULL, "hire_date" date NOT NULL, "salary" numeric(10,2) NOT NULL, "active" boolean NOT NULL DEFAULT true, "departmentsId" uuid, "jobPositionId" uuid, CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email"), CONSTRAINT "UQ_8438ee28d3a542b106dcd8d7289" UNIQUE ("document"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job_Position" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "responsibilities" text, "salaryRangeId" uuid, CONSTRAINT "PK_f658370ae9994b0f804aa898b04" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salary_ranges" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "min_salary" numeric(10,2), "max_salary" numeric(10,2), CONSTRAINT "PK_b6ee1519b5ffe4df2e1b4abfc0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "performance_reviews" ADD CONSTRAINT "FK_89c1585d31979b8f709928bd2bf" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_addresses" ADD CONSTRAINT "FK_b291422689ee86dcd469e8baa86" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "benefits" ADD CONSTRAINT "FK_23fe67be68830a94ea3e88960ef" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_2e6666448b25d577f3fad2bfcfd" FOREIGN KEY ("departmentsId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_b36ed8f5517f25406388ac63b8d" FOREIGN KEY ("jobPositionId") REFERENCES "job_Position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_Position" ADD CONSTRAINT "FK_0db5bc1b1aa573d6c941ae062f7" FOREIGN KEY ("salaryRangeId") REFERENCES "salary_ranges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_Position" DROP CONSTRAINT "FK_0db5bc1b1aa573d6c941ae062f7"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_b36ed8f5517f25406388ac63b8d"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_2e6666448b25d577f3fad2bfcfd"`);
        await queryRunner.query(`ALTER TABLE "benefits" DROP CONSTRAINT "FK_23fe67be68830a94ea3e88960ef"`);
        await queryRunner.query(`ALTER TABLE "employee_addresses" DROP CONSTRAINT "FK_b291422689ee86dcd469e8baa86"`);
        await queryRunner.query(`ALTER TABLE "performance_reviews" DROP CONSTRAINT "FK_89c1585d31979b8f709928bd2bf"`);
        await queryRunner.query(`DROP TABLE "salary_ranges"`);
        await queryRunner.query(`DROP TABLE "job_Position"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "benefits"`);
        await queryRunner.query(`DROP TYPE "public"."benefits_type_enum"`);
        await queryRunner.query(`DROP TABLE "employee_addresses"`);
        await queryRunner.query(`DROP TABLE "performance_reviews"`);
        await queryRunner.query(`DROP TABLE "departments"`);
    }

}
