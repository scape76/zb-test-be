/*
  Warnings:

  - You are about to drop the column `email` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Mail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "email",
DROP COLUMN "name";
