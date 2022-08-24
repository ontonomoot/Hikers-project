import React, { useState, useEffect } from 'react';
import { Button, Modal } from '@geist-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { loadTasks, selectTasks } from './todoSlice';

function TodoList() {
  const [state, setState] = useState(false);
  const { placeid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks(placeid));
  }, [dispatch, placeid]);

  const tasks = useSelector(selectTasks);

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
          <TodoForm />
          <p>Some content contained within the modal.</p>
          {/*  */}
          {tasks && tasks.map((task) => <TodoItem task={task} />)}
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>Закрыть</Modal.Action>
      </Modal>
    </div>
  );
}

export default TodoList;
