/*
  Warnings:

  - You are about to drop the `Buiness` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Buiness";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "addressOne" TEXT NOT NULL,
    "addressTwo" TEXT,
    "city" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "website" TEXT,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_companyName_key" ON "Business"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "Business_companyEmail_key" ON "Business"("companyEmail");
