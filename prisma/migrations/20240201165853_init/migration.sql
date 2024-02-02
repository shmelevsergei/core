-- CreateTable
CREATE TABLE "Anketa" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Anketa_id_key" ON "Anketa"("id");
