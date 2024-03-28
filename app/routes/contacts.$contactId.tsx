import type { FunctionComponent} from 'react';
import type { ContactRecord, Avatar } from 'types/contact';
import ContactImage from '~/components/contact/ContactImage.jsx'
import ContactHeader from '~/components/contact/ContactHeader.jsx'
import Favorite from '~/components/contact/Favorite';
import ContactTwitter from '~/components/contact/ContactTwitter';
import EditContact from '~/components/contact/EditContact';
export default function Contact() {
  const contactAvatar: Avatar = {
    url: "https://placekitten.com/g/200/200";
  }; 
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
        {" "}
        <Favorite contact={contact} />
        <ContactTwitter contact = {contact} />
        <EditContact /> 
      </div>
    </div>
  )
}