-- CreateEnum
CREATE TYPE "Status" AS ENUM ('draft', 'accepted', 'rejected', 'sent');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('sto', 'distributor', 'admin');

-- CreateTable
CREATE TABLE "Questionnaire" (
    "id" SERIAL NOT NULL,
    "distributor" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "comment" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL,
    "updated_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributorEmployee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "DistributorEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataSto" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "code_client_avtoevro" TEXT NOT NULL,
    "code_client_avtorus" TEXT NOT NULL,
    "code_client_rossko" TEXT NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "DataSto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IInn" (
    "id" SERIAL NOT NULL,
    "inn" TEXT NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "IInn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SignatoryManager" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "SignatoryManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lifts" (
    "id" SERIAL NOT NULL,
    "twoPostLiftScissors" INTEGER NOT NULL,
    "fourPostLift" INTEGER NOT NULL,
    "fourPostLiftTraverse" INTEGER NOT NULL,
    "pits" INTEGER NOT NULL,
    "pitsEquippedTraverse" INTEGER NOT NULL,
    "postElectronicDiagnostic" INTEGER NOT NULL,
    "postAdditionalEquipment" INTEGER NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "Lifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfirmData" (
    "id" SERIAL NOT NULL,
    "loginOne" TEXT NOT NULL,
    "loginTwo" TEXT NOT NULL,
    "lifts" INTEGER NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "ConfirmData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "questionnaireId" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'sto',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DistributorEmployee_questionnaireId_key" ON "DistributorEmployee"("questionnaireId");

-- CreateIndex
CREATE UNIQUE INDEX "DataSto_questionnaireId_key" ON "DataSto"("questionnaireId");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_questionnaireId_key" ON "Manager"("questionnaireId");

-- CreateIndex
CREATE UNIQUE INDEX "SignatoryManager_questionnaireId_key" ON "SignatoryManager"("questionnaireId");

-- CreateIndex
CREATE UNIQUE INDEX "Lifts_questionnaireId_key" ON "Lifts"("questionnaireId");

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmData_questionnaireId_key" ON "ConfirmData"("questionnaireId");

-- AddForeignKey
ALTER TABLE "DistributorEmployee" ADD CONSTRAINT "DistributorEmployee_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataSto" ADD CONSTRAINT "DataSto_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IInn" ADD CONSTRAINT "IInn_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignatoryManager" ADD CONSTRAINT "SignatoryManager_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lifts" ADD CONSTRAINT "Lifts_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfirmData" ADD CONSTRAINT "ConfirmData_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
