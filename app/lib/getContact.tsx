import prisma from 'public/prisma';


const getContact = await prisma.contact.findOne({
  orderBy: {
    id: true
  }
})