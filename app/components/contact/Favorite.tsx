import { ContactRecord } from 'types/contact'
import { Form } from '@remix-run/react';

function Favorite({contact}: {
  contact: ContactRecord,
}) {
  const favorite = contact.favorite
  return (
    <Form method="post">
      <button
      aria-label={
        favorite 
          ? "Remove from favorites"
          : "Add to favorites"
      }
      name="favorite"
      value={favorite ? "false" : "true"}>
        {favorite ? "★" : "☆"}      
      </button>
    </Form>
    )
}

export default Favorite