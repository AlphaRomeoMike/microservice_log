-- CreateTable
CREATE TABLE "LogInformation" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "LogInformation_pkey" PRIMARY KEY ("id")
);
