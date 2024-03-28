import {ContactRecord} from 'types/contact';
export default function ContactImage({contact}: { 
  contact: ContactRecord,
}) {
  return (
  <div id="contact-image">
    <img 
      alt={`${contact.first} ${contact.last} avatar`} 
      key={contact.url}
      src={contact.url}
    />
  </div>
  )
}