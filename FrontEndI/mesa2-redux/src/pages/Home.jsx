import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'; // Importe connect do react-redux
import { addTask, editTask, removeTask } from '../redux/reducers/actions'; // Importe as ações correspondentes
import CardList from './components/CardList';
import '../styles/Loading.scss';
import '../styles/Home.scss';

const Home = ({ tasks, addTask, editTask, deleteTask }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editTask({ title, date, id });
      setId(null);
    } else {
      addTask({ title, date });
    }
    clearState();
  };

  const handleEdit = (task) => {
    setId(task.id);
    setTitle(task.title);
    setDate(task.date);
  };

  const handleDelete = (id) => {
    removeTask(id);
  };

  const clearState = () => {
    setDate('');
    setTitle('');
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

  return (
    <Container fluid className="homepage">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-content-center mt-auto">
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
          <CardList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  editTask: (task) => dispatch(editTask(task)),
  removeTask: (id) => dispatch(removeTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
