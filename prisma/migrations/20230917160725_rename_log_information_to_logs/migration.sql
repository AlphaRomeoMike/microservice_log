/*
  Warnings:

  - You are about to drop the `LogInformation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LogInformation";

-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);
