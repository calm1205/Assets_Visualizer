import {MigrationInterface, QueryRunner} from "typeorm";

export class Inisial1651650705289 implements MigrationInterface {
    name = 'Inisial1651650705289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payments" ALTER COLUMN "paymentDate" SET DEFAULT '"2022-05-04T07:51:45.766Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "payments" ALTER COLUMN "paymentDate" SET DEFAULT '2022-05-03 11:24:08.245'`);
    }

}
