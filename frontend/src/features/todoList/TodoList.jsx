import React, { useState } from 'react';
import { Button, Modal } from '@geist-ui/core';

function TodoList() {
  const [state, setState] = useState(false);
  const handler = () => setState(true);

  const closeHandler = (event) => {
    setState(false);
  };

  return (
    <div>
      <Button auto onClick={handler}>Собраться</Button>
      <Modal visible={state} onClose={closeHandler}>
        <Modal.Title>Место</Modal.Title>
        <Modal.Subtitle>Взять с собой:</Modal.Subtitle>
        <Modal.Content>
          <p>Some content contained within the modal.</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>Закрыть</Modal.Action>
      </Modal>
    </div>
  );
}

export default TodoList;
