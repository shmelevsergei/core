/*
  Warnings:

  - You are about to drop the column `create_date` on the `Questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `update_date` on the `Questionnaire` table. All the data in the column will be lost.
  - Added the required column `created_date` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_date` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "create_date",
DROP COLUMN "update_date",
ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_date" TIMESTAMP(3) NOT NULL;
