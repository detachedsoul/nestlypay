-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profilePicture" TEXT;

-- CreateTable
CREATE TABLE "UserTransactions" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "invoiceID" TEXT NOT NULL,

    CONSTRAINT "UserTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoicePreview" (
    "id" TEXT NOT NULL,
    "logoURL" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownerPhoneNumber" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientPhoneNumber" TEXT NOT NULL,
    "netWorth" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "previewURL" TEXT NOT NULL,
    "item" JSONB NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "InvoicePreview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "logoURL" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownerPhoneNumber" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientPhoneNumber" TEXT NOT NULL,
    "netWorth" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "item" JSONB NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvoicePreview" ADD CONSTRAINT "InvoicePreview_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
