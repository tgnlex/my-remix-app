import prisma from '../prisma';

async function main() {
  const user = await prisma.user.create({
    data: {
      first: "admin",
      last: "administrator",
      email: "siteadmin@mysite.com",
      password: "root",
      username: "admin"
    }
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1);
  })