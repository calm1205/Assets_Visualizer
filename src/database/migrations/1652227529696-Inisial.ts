import {MigrationInterface, QueryRunner} from "typeorm";

export class Inisial1652227529696 implements MigrationInterface {
    name = 'Inisial1652227529696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "periodec_payments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "paymentPeriod" character varying NOT NULL, "paymentType" character varying NOT NULL, "annualInterest" double precision NOT NULL DEFAULT '0', "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_9268257c8b8dd3fe72109731f83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."payments_paymenttype_enum" AS ENUM('EXPENSES', 'WASTE', 'INVESTMENT', 'SELF_INVESTMENT')`);
        await queryRunner.query(`CREATE TABLE "payments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "name" character varying(40) NOT NULL, "price" integer NOT NULL, "paymentDate" TIMESTAMP NOT NULL DEFAULT '"2022-05-11T00:05:30.207Z"', "paymentType" "public"."payments_paymenttype_enum" NOT NULL, "satisfaction" smallint, "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "periodec_payments" ADD CONSTRAINT "FK_bef0085754e3b83a5459bb8a4fc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_d35cb3c13a18e1ea1705b2817b1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_d35cb3c13a18e1ea1705b2817b1"`);
        await queryRunner.query(`ALTER TABLE "periodec_payments" DROP CONSTRAINT "FK_bef0085754e3b83a5459bb8a4fc"`);
        await queryRunner.query(`DROP TABLE "payments"`);
        await queryRunner.query(`DROP TYPE "public"."payments_paymenttype_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "periodec_payments"`);
    }

}
