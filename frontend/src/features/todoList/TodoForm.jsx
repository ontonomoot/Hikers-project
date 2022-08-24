import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Send from '@geist-ui/icons/send';
import Plus from '@geist-ui/icons/plus';

function TodoForm() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Что-то очень нужное"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        <Plus />
      </Button>
    </InputGroup>
  );
}

export default TodoForm;
