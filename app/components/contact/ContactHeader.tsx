import type { ContactRecord } from 'types/contact'
import Favorite from './Favorite';

export default function ContactHeader({contact}: {
  contact: ContactRecord;
}) {
  return (
    <h1 id="contact-header">
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}  
        </>
      ) : (
        <i>No Name</i>
      )} {" "}
    <Favorite contact={contact} />
    </h1>
  )
}

