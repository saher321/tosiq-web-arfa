import Editor, { 
  BtnBold, 
  BtnItalic, 
  createButton,
  EditorProvider, 
  Toolbar
} from 'react-simple-wysiwyg';

const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');
import { Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from 'react';
import TextEdit from './TextEdit';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { ADD_WEBPAGE_URL } from '../resources/server_apis';
import { useNavigate } from 'react-router';

const WebpageModel = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const setWebpageValues = () => {
      reset(props.webpage);
      setValue(props.webpage?.content)
    }
    console.log(value)
    setWebpageValues();
  }, [props.webpage?._id])

  const handleSaveWebpage = async (data) => {
    if (!data.title) {
      toast.error("Title field is required");
      return;
    } else if (!value) {
      toast.error("Content field is required");
      return;
    } 
    setIsLoading(true)
    try {
      const newData = {
        title: data.title,
        content: value
      }
      const result = await axios.post(ADD_WEBPAGE_URL, newData);
      if (result) {
        toast.success(result.data.message, { duration: 4000 });
        navigate('/dashboard/webpages')
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      toast.error("Somthing went wrong! ", error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit(handleSaveWebpage)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Webpage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Page title</Form.Label>
            <Form.Control {...register("title")} type="text" placeholder="Enter page title" />
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
