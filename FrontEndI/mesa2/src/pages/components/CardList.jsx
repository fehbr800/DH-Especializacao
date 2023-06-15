// CardList.jsx
import { ListGroup, Button, Card } from 'react-bootstrap';
import formatDate from '../../utils/date';

const CardList = ({ todos, onEdit, onDelete }) => {
  return (
    <Card>
      <Card.Body>
      <h1>Tarefas</h1>
        <ListGroup>
          {todos.map((todo, idx) => (
            <ListGroup.Item key={idx}>
              <div className='toDoItem'>
              <h2>{todo.title}</h2>
              <h3>{formatDate(todo.date)}</h3>
              <Button className='mx-2' onClick={() => onEdit(todo)}>Editar</Button>
              <Button onClick={() => onDelete(todo._id)}>Apagar</Button>
              </div>
             
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardList;
