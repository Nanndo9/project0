import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1745359443076 implements MigrationInterface {
    name = 'Default1745359443076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_Position" ADD "departmentId" uuid`);
        await queryRunner.query(`ALTER TABLE "job_Position" ADD CONSTRAINT "FK_2c2b73f0477a36e7aa887b34107" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_Position" DROP CONSTRAINT "FK_2c2b73f0477a36e7aa887b34107"`);
        await queryRunner.query(`ALTER TABLE "job_Position" DROP COLUMN "departmentId"`);
    }

}
