-- DropForeignKey
ALTER TABLE "ConfirmData" DROP CONSTRAINT "ConfirmData_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "DataSto" DROP CONSTRAINT "DataSto_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "DistributorEmployee" DROP CONSTRAINT "DistributorEmployee_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "IInn" DROP CONSTRAINT "IInn_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "Lifts" DROP CONSTRAINT "Lifts_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "Manager" DROP CONSTRAINT "Manager_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "SignatoryManager" DROP CONSTRAINT "SignatoryManager_questionnaireId_fkey";

-- AlterTable
ALTER TABLE "Questionnaire" ALTER COLUMN "comment" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "DistributorEmployee" ADD CONSTRAINT "DistributorEmployee_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSto" ADD CONSTRAINT "DataSto_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IInn" ADD CONSTRAINT "IInn_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignatoryManager" ADD CONSTRAINT "SignatoryManager_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lifts" ADD CONSTRAINT "Lifts_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfirmData" ADD CONSTRAINT "ConfirmData_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE CASCADE ON UPDATE CASCADE;
