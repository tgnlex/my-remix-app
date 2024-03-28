import { ContactRecord } from "types/contact"

function ContactTwitter({contact}: {
  contact: ContactRecord
}) {
  return (contact.twitter ? (
      <p>
        <a 
          id="twitter-link"
          className=""
          href={`https://twitter.com.${contact.twitter}`}
        >
      {contact.twitter}  
        </a> 
      </p>
    ) : null 
  )
}

export default ContactTwitter