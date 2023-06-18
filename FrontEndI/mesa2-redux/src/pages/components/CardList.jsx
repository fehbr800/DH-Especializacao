import React from "react";
import { ListGroup, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask, removeTask } from "../../redux/reducers/actions";
import formatDate from "../../utils/date";

const CardList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleEdit = (taskId, updatedTask) => {
    dispatch(editTask(taskId, updatedTask));
  };

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <Card>
      <Card.Body>
        <h1>Tarefas</h1>
        {tasks.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          <ListGroup>
            {tasks.map(({ id, title, date }) => (
              <ListGroup.Item key={id}>
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
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardList;
