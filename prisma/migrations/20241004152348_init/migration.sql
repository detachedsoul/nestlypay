-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
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
    "sessionID" TEXT NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_email_key" ON "Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business_companyName_key" ON "Business"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "Business_companyEmail_key" ON "Business"("companyEmail");
