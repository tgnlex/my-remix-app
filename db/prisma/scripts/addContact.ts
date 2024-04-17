import prisma from 'prisma/prisma';

async function main() {
  const contact = await prisma.contact.create({
    data: {
      first: "test",
      last: "test",
      phone: "777-777-7777",
      email: "test@email.com",
      nickname: "test",
      twitter: "test",
      notes: "test",
      avatar: null,
    }
  })
  console.log(contact)
}

main()