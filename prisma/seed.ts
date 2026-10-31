// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hash password dummy 'password123'
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Upsert user admin dummy
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ikasda.com' },
    update: {},
    create: {
      email: 'admin@ikasda.com',
      name: 'Administrator IKASDA',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // Upsert user alumni dummy
  const alumni = await prisma.user.upsert({
    where: { email: 'alumni@ikasda.com' },
    update: {},
    create: {
      email: 'alumni@ikasda.com',
      name: 'Ahmad Dahlan',
      password: hashedPassword,
      role: 'USER',
    },
  });

  console.log('✅ Seeding berhasil!');
  console.log({ admin, alumni });
}

main()
  .catch((e) => {
    console.error('❌ Seeding gagal:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });