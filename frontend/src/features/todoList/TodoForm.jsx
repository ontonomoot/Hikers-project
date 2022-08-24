import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TodoForm() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Что-то очень нужное"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Добавить
      </Button>
    </InputGroup>
  );
}

export default TodoForm;
