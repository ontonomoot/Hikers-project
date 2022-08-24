import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function TodoItem() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control
        disabled
        defaultValue="рюкзак"
        aria-label="Text input with checkbox"
      />
      {/* Lorem, ipsum dolor sit amet
      consectetur adipisicing elit.
      Velit ad, vero quam ex corporis praesentium
      voluptatum nostrum nisi assumenda tempora
      doloremque eos aliquid in nobis nihil non explicabo ea aut. */}
      <Button variant="outline-secondary" id="button-addon2">
        Удалить
      </Button>
    </InputGroup>
  );
}

export default TodoItem;
