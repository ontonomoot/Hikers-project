import React, { useState } from 'react';
import { Button, Modal, Grid, Rating, Text } from '@geist-ui/core';
import Form from 'react-bootstrap/Form';

function ReviewForm() {
  const [state, setState] = useState(false);
  const [value, setValue] = useState(1);
  const handler = () => setState(true);
  const closeHandler = (event) => {
    setState(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const valueForm = {
      title: event.target.title.value,
      description: event.target.description.value,
      date: event.target.date.value,
      photos: event.target.photos.value,
      rating: value
    };
    // eslint-disable-next-line no-console
    console.log(valueForm);
  };

  return (
    <>
      <Button id="reviewBtn" onClick={handler}>Добавить свой отзыв о месте Modal</Button>
      <Modal visible={state} onClose={closeHandler}>
        <Text h5>Добавить свой отзыв о месте</Text>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Краткий отзыв:</Form.Label>
              <Form.Control type="text" name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Развернутый отзыв:</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Дата вашей поездки:</Form.Label>
              <Form.Control type="date" name="date" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Прикрепить фото:</Form.Label>
              <Form.Control type="file" name="photos" multiple />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ваша оценка:</Form.Label>
              <Grid xs={24} sm={12} md={8} justify="center"><Rating type="warning" value={value} onValueChange={setValue} /></Grid>
            </Form.Group>
            <div id="modalBtns">
              <Button type="error" ghost onClick={() => setState(false)}>Отмена</Button>
              <Button htmlType="submit">Отправить</Button>
            </div>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ReviewForm;
