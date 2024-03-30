import type { ContactRecord } from 'types/contact';
import ContactImage from '~/components/contact/ContactImage.jsx'
import ContactHeader from '~/components/contact/ContactHeader.jsx'
import ContactTwitter from '~/components/contact/ContactTwitter';
import EditContact from '~/components/contact/EditContact';
export default function Contact() {
  const contact: ContactRecord = {
    first: "Your", 
    last: "name",
    avatar: "https://placekitten.com/g/200/200",
    url: "none",
    twitter: null,
    notes: null,
    favorite: false,
  };
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