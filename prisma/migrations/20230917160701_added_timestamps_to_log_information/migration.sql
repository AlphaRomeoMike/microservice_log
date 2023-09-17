/*
  Warnings:

  - Added the required column `created_at` to the `LogInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LogInformation" ADD COLUMN     "created_at" TIMESTAMP NOT NULL;
