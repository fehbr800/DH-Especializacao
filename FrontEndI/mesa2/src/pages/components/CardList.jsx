// CardList.jsx
import React from 'react';
import { ListGroup, Button, Card } from 'react-bootstrap';
import formatDate from '../../utils/date';

const CardList = ({ todos, onEdit, onDelete }) => {
  return (
    <Card>
      <Card.Body>
        <ListGroup>
          {todos.map((todo, idx) => (
            <ListGroup.Item key={idx}>
              <h2>{todo.title}</h2>
              <h3>{formatDate(todo.date)}</h3>
              <Button onClick={() => onEdit(todo)}>Editar</Button>
              <Button onClick={() => onDelete(todo._id)}>Apagar</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardList;
