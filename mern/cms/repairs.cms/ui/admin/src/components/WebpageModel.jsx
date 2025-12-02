import Editor, { 
  BtnBold, 
  BtnItalic, 
  createButton,
  EditorProvider, 
  Toolbar
} from 'react-simple-wysiwyg';

const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import TextEdit from './TextEdit';

const WebpageModel = (props) => {
  const [value, setValue] = useState('');

  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Webpage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Page title</Form.Label>
            <Form.Control type="text" placeholder="Enter page title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Page content</Form.Label>
            <TextEdit value={value} setValue={setValue}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>Close</Button>
          
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default WebpageModel;
