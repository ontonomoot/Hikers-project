import React, { useState, useEffect } from 'react';
import { Modal } from '@geist-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { loadTasks, selectTasks } from './todoSlice';

function TodoList({ placeid }) {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks(placeid));
  }, [dispatch, placeid]);

  const tasks = useSelector(selectTasks);

  const handler = () => setState(true);
  const closeHandler = () => {
    setState(false);
  };

  return (
    <>
      <Button className="favPlaceBtn" variant="outline-success" onClick={handler}>Собраться</Button>
      <Modal visible={state} onClose={closeHandler}>
        <Modal.Title>Место</Modal.Title>
        <Modal.Subtitle>Взять с собой:</Modal.Subtitle>
        <Modal.Content>
          <TodoForm placeId={placeid} />
          {tasks && tasks
          .filter((el) => el.place_id === placeid)
          .map((task) => <TodoItem task={task} />)}
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>Закрыть</Modal.Action>
      </Modal>
    </>
  );
}

export default TodoList;
