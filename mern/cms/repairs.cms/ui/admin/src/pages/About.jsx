import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Badge, Button, Col, Form, Row, Table } from "react-bootstrap";
import Editor, {
  BtnBold,
  BtnItalic,
  createButton,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import FAQModel from "../components/FAQModel";

const BtnAlignLeft = createButton("Align left", "<≡", "justifyLeft");
const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
const BtnAlignRight = createButton("Align right", "≡>", "justifyRight");

const About = () => {
  const [value, setValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <AdminLayout>
      <div className="page-title">About us</div>

      <div className="mt-3">
        <h6>Section 1</h6>
        <div className="setting-form">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Section 1 Heading
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="E.g: Our motive" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Image Left
              </Form.Label>
              <Col sm="10">
                <Form.Control type="file" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Right content
              </Form.Label>
              <Col sm="10">
                <Editor value={value} onChange={onChange}>
                  <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnAlignLeft />
                    <BtnAlignCenter />
                    <BtnAlignRight />
                  </Toolbar>
                </Editor>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFile">
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button type="submit" variant="primary">
                  Save changes
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Section 2</h6>
          <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add Webpage
            </Button>
            <FAQModel show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <div className="mt-2">
          {/* table */}
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Status</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Question 1</td>
                <td>Answer 1</td>
                <td>
                  <Badge bg="success">Live</Badge>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <div onClick={() => setModalShow(true)}>
                      <FaEdit />
                    </div>{" "}
                    |
                    <div>
                      <FaTrash />{" "}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default About;
