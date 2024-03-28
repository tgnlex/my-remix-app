import { Form } from '@remix-run/react';

function EditContact() {
  return (
    <Form action="edit">
      <button type="submit">Edit</button>
    </Form>
  )
}

export default EditContact