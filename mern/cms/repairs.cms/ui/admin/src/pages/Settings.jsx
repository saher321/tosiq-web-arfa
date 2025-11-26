import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { Button, Col, Form, Row } from "react-bootstrap";

const Settings = () => {
  return (
    <AdminLayout>
      <div className="page-title">Settings</div>

      <div className="mt-3">
        <h6>Application</h6>
        <div className="setting-form">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Application name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Application name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formFile">
              <Form.Label column sm="2">
                Logo
              </Form.Label>
              <Col sm="10">
                <Form.Control type="file" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFile">
              <Form.Label column sm="2">
              
              </Form.Label>
              <Col sm="10">
                <Button type="submit" variant="primary">Save changes</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>

      
      <div className="mt-3">
        <h6>Action button</h6>
        <div className="setting-form">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Button name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter button name" />
              </Col>
            </Form.Group>

            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Button url
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter button url" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFile">
              <Form.Label column sm="2">
              
              </Form.Label>
              <Col sm="10">
                <Button type="submit" variant="primary">Save changes</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="mt-3">
        <h6>Footer</h6>
        <div className="setting-form">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Copyright text
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Copyright text" />
              </Col>
            </Form.Group>

            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Facebook
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Your facebook url" />
              </Col>
            </Form.Group>

            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Instagram
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Your instagram url" />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Linkedin
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Your linkedin url" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFile">
              <Form.Label column sm="2">
              
              </Form.Label>
              <Col sm="10">
                <Button type="submit" variant="primary">Save changes</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
