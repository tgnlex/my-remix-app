import ContactImage from '~/components/contact/ContactImage.jsx'
import ContactHeader from '~/components/contact/ContactHeader.jsx'
import ContactTwitter from '~/components/contact/ContactTwitter';
import EditContact from '~/components/contact/EditContact';
import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';
import invariant from 'tiny-invariant';
import getContact from '~/lib/getContact';

export const loader = async ({params} :{
  params: {
    id: number
  }
}) => { 
  invariant(params.id, "Missing contactId param")
  const data = await getContact(params.id);
  if (!data) {
    throw new Response("Not Found", { status: 404})
  }
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