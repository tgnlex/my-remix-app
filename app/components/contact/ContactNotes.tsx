import { ContactRecord } from "types/contact"

function ContactNotes({contact}: {
  contact: ContactRecord,
}) {
  return(
    
    contact.notes ? <p>{contact.notes}</p>: null
    
   )
  
}

export default ContactNotes