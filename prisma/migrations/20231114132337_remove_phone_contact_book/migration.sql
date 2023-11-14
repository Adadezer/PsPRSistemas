/*
  Warnings:

  - You are about to drop the column `phone` on the `ContactBook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ContactBook" DROP COLUMN "phone",
ALTER COLUMN "name" DROP NOT NULL;
