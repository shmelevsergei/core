/*
  Warnings:

  - Made the column `comment` on table `Questionnaire` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'cart';

-- AlterTable
ALTER TABLE "Questionnaire" ALTER COLUMN "comment" SET NOT NULL;
