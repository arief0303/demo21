import "./App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function useInput({ type /*...*/ }) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
}

function App() {
  const [show, setShow] = useState(true);
  // const [imageLink, setImageLink] = useInput({ type: "text" });
  const [imageLink, setImageLink] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png");
  const handleChange = (event) => {
    setImageLink({ ...imageLink, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(imageLink);
    setImageLink(imageLink);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <p class="text-end" style={{margin: 20}}>Name</p>
      <Container className="d-flex justify-content-center align-items-center">
        <Card>
          <Card.Img variant="top" src={imageLink} />
          <Card.Body />
        </Card>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Input image link here"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Input your name here" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
