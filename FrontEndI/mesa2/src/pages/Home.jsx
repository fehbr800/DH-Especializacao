// Home.jsx
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useTodo from "../hooks/useTodo";
import CardList from "./components/CardList";
import "../styles/Loading.scss";
import "../styles/Home.scss";

const Home = () => {
  const { addTodo, editTodo, deleteTodo, error, isFetching, todos } = useTodo();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editTodo({ payload: { title, date }, id });
      setId(null);
    } else {
      addTodo({ title, date });
    }
    clearState();
  };

  const handleEdit = (todo) => {
    setId(todo._id);
    setTitle(todo.title);
    const dateFormatted = todo.date.split("T")[0];
    setDate(dateFormatted);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const clearState = () => {
    setDate("");
    setTitle("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // Defina o tempo de atraso desejado em milissegundos

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="loader">
        <div className="loader-text">Loading...</div>
        <div className="loader-bar" />
      </div>
    );
  }

  if (error) {
    return <h3>Erro ao buscar dados</h3>;
  }

  return (
    <Container fluid className="homepage">
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <div className="create-task d-flex flex-column align-items-center">
            <h1>Criar Tarefa</h1>
            <Form className="w-75" onSubmit={handleFormSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>

              <button type="submit" className="btn mt-2 w-50 botaoSubmit">
                Create
              </button>
            </Form>
          </div>
        </Col>
        <Col>
          
          <CardList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
