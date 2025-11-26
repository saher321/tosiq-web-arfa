import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Form, Button, Table, Badge } from "react-bootstrap";
import WebpageModel from "../components/WebpageModel";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const Webpages = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="page-title">Webpages</div>
        <div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Webpage
          </Button>
          <WebpageModel show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>

      <div className="mt-2">
        {/* table */}
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Page title</th>
              <th>Status</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Terms & conditions</td>
              <td>
                <Badge bg="success">Live</Badge>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <div  onClick={() => setModalShow(true)}><FaEdit /></div> |
                  <div><FaTrash /> </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Webpages;
