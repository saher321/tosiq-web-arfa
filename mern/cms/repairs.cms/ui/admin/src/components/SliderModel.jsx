
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import TextEdit from "./TextEdit";

const SliderModel = (props) => {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Slider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Slide Image</Form.Label>
            <Form.Control type="file" accept="image/*" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter question" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            {/* <Form.Control as="textarea" rows={3} /> */}
            <TextEdit value={value} onChange={onChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>
            Close
          </Button>

          <Button type="submit" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SliderModel;
