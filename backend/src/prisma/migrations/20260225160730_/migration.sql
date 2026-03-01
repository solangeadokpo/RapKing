-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'editor');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'admin';
