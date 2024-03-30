import type { ContactRecord } from 'types/contact';
import ContactImage from '~/components/contact/ContactImage.jsx'
import ContactHeader from '~/components/contact/ContactHeader.jsx'
import ContactTwitter from '~/components/contact/ContactTwitter';
import EditContact from '~/components/contact/EditContact';
import {Form, useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';
import prisma from 'db/prisma';
import type {LoaderFunctionArgs} from "@remix-run/node"
import invariant from 'tiny-invariant';


export const loader = async ({
  params
}: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const data = await prisma.contact.findUnique({
    where: {
      id: `${Number(params.contactId)}`
    }
  })
  return json ({data});
}
export default function Contact() {
  const contact = useLoaderData<typeof loader>()
  return (
    <div id="contact">
      <ContactImage  contact={contact} />
      <div id="contact-info">
        <ContactHeader contact={contact} />
        <ContactTwitter contact = {contact} />
        <EditContact /> 
      </div>
    </div>
  )
}