import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { getTodos, createTodo } from '../services/todoApi';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const todos = await getTodos();
      setPosts(todos);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date) return;
    try {
      await createTodo({
        title: title,
        date: date,
      });
      setTitle('');
      setDate('');
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Container>
      <Row>

        <Col>
          <h1>Create Post</h1>
          <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
        <Col>
          <h1>Posts</h1>
          <ListGroup>
            {posts.map((post) => (
              <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
