import prisma from 'db/prisma';
import {Link} from '@remix-run/react'
import {Form, useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';

export const loader = async () => {
  const contacts = await prisma.contact.findMany({});
  return json({ contacts });
}
export default function ContactList() {2
  const { contacts } = useLoaderData<typeof loader>();
  return (
    <div id="contacts" className="contacts-container">
      <h1 className="contacts-heading">Contacts</h1>
      <nav className="contacts-nav">
        {contacts.length ? (  
        <ul className="contacts-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact list-item">
              <Link to={`/contacts/${contact.id}`}>
                {contact.first || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite ? (
                  <span>*</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        ) : (
          <p>
            <i>No Contacts</i>
          </p>
        )}
      </nav>
    </div>
  )
}