import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Form, Button, Table, Badge } from "react-bootstrap";
import WebpageModel from "../components/WebpageModel";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { ALL_WEBPAGE_URL } from "../resources/server_apis";
import toast from "react-hot-toast";
import axios from "axios";

const Webpages = () => {
  const [webpages, setWebpages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const getWebpages = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(ALL_WEBPAGE_URL);
        console.log(result.data);
        if (result.data.status == false) {
          setWebpages([]);
        } else {
          setWebpages(result.data.webpages);
        }
      } catch (error) {
        console.log("Failed to fetch webpages: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    getWebpages();
  }, []);
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
            {webpages.map((webpage, index) => {
              return (
            <tr key={webpage._id}>
              <td>{index+1}</td>
              <td>{webpage.title}</td>
              <td>
                { webpage.status == true ?
                <Badge bg="success">Live</Badge>:
                <Badge bg="danger">Offline</Badge>
                }
              </td>
              <td>
                <div className="d-flex gap-2">
                  <div  onClick={() => setModalShow(true)}><FaEdit /></div> |
                  <div><FaTrash /> </div>
                </div>
              </td>
            </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Webpages;
