import prisma from 'prisma/prisma';

async function getContact (props: number) {
  const contact = await prisma.contact.findUnique({
    where: {
      id: props
    }
  })
  return contact;
}

export default getContact;