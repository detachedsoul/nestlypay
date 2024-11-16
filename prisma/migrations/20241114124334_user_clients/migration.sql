-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phoneNumber" TEXT;

-- CreateTable
CREATE TABLE "UserClients" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerID" TEXT NOT NULL,

    CONSTRAINT "UserClients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserClients" ADD CONSTRAINT "UserClients_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
