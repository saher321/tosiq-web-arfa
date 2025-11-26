import Editor, {
  BtnBold,
  BtnItalic,
  createButton,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";

const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const FAQModel = (props) => {
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
          <Modal.Title id="contained-modal-title-vcenter">FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Question</Form.Label>
            <Form.Control type="text" placeholder="Enter question" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Answer</Form.Label>
            {/* <Form.Control as="textarea" rows={3} /> */}
            <Editor value={value} onChange={onChange}>
              <Toolbar>
                <BtnBold />
                <BtnItalic />
                <BtnAlignCenter />
              </Toolbar>
            </Editor>
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

export default FAQModel;
