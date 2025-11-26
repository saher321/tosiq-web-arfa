import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { FaTrash } from 'react-icons/fa6'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'

const Contact = () => {
  return (
    <AdminLayout>
      <div className='page-title'>Contact us</div>
      
      <div className="mt-3">
        <h6>Company details</h6>
        <div className="setting-form">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter phone no#" />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter address" />
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
        <h6>All appointments</h6>
        {/* table */}
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Problem</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Harrison</td>
              <td>+051 345 446</td>
              <td>harri@email.com</td>
              <td>Wine wood wolf street, NY</td>
              <td>Oven</td>
              <td>
                <div className="d-flex gap-2">
                  <div><FaTrash /> </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  )
}

export default Contact