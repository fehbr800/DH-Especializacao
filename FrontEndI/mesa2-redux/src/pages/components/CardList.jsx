import { ListGroup, Button, Card } from 'react-bootstrap';
import formatDate from '../../utils/date';
import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '../../redux/reducers/actions';

const CardList = ({ todos }) => {
 
  
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    dispatch(editTask(todo._id, { title: todo.title, date: todo.date }));
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

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
                <Button className='mx-2' onClick={() => handleEdit(todo)}>
                  Editar
                </Button>
                <Button onClick={() => handleDelete(todo._id)}>Apagar</Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardList;
