-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "website" TEXT,
    "password" TEXT NOT NULL,
    "sessionID" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sessionID" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "country" TEXT,
    "postalCode" TEXT,
    "state" TEXT,
    "bankName" TEXT,
    "accountNumber" TEXT,
    "accountName" TEXT,
    "acceptTransfer" BOOLEAN NOT NULL DEFAULT false,
    "acceptCrypto" BOOLEAN NOT NULL DEFAULT false,
    "receiveReceipt" BOOLEAN NOT NULL DEFAULT false,
    "customerReceiveReceipt" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_email_key" ON "Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business_companyName_key" ON "Business"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "Business_companyEmail_key" ON "Business"("companyEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
