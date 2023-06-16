import { ListGroup, Button, Card } from "react-bootstrap";
import formatDate from "../../utils/date";
import { useDispatch } from "react-redux";
import { editTask, removeTask, clearTodo } from "../../redux/reducers/actions";

const CardList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleEdit = (taskId, updatedTask) => {
    dispatch(editTask(taskId, updatedTask));
  };

  const handleDelete = (taskId) => {
    if (taskId === "all") {
      dispatch(clearTodo());
    } else {
      dispatch(removeTask(taskId));
    }
  };

  return (
    <Card>
      <Card.Body>
        <h1>Tarefas</h1>
        <ListGroup>
          {tasks.map((task) => {
            const { id, title, date } = task;

            return (
              <ListGroup.Item key={task.id}>
                <div className="toDoItem">
                  <h2>{title}</h2>
                  <h3>{formatDate(date)}</h3>
                  <Button
                    className="mx-2"
                    onClick={() => handleEdit(id, { title, date })}
                  >
                    Editar
                  </Button>
                  <Button className="mx-2" onClick={() => handleDelete(id)}>
                    Apagar
                  </Button>
                  <Button onClick={() => handleDelete("all")}>
                    Limpar Tarefas
                  </Button>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardList;
