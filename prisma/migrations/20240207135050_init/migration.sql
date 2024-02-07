/*
  Warnings:

  - Added the required column `create_date` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_date` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questionnaire" ADD COLUMN     "create_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "update_date" TIMESTAMP(3) NOT NULL;
