import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Form, Button, Table, Badge } from "react-bootstrap";
import WebpageModel from "../components/WebpageModel";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { ALL_WEBPAGE_URL, DELETE_WEBPAGE_URL } from "../resources/server_apis";
import toast from "react-hot-toast";
import axios from "axios";

const Webpages = () => {
  const [webpages, setWebpages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [editWebpage, seEditWebpage] = useState(null);

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

  const handleDeleteWebpage = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are your sure you want to delete this?")) return;

    try {
      const response = await axios.delete(`${DELETE_WEBPAGE_URL}/${id}`);
      if (response.data.status == false) {
        toast.error(response.data.message);
        return;
      }
      setWebpages((prev) => prev.filter((webpage) => webpage._id !== id));
      toast.success(response.data.message);
    } catch (error) {
      console.log("Failed to delete webpage: ", error);
    }
  };

  const handleEditWebpage = (e, data) => {
    e.preventDefault();
    seEditWebpage(data)
  }

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
          <WebpageModel webpage={editWebpage} show={modalShow} onHide={() => setModalShow(false)} />
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
                  <td>{index + 1}</td>
                  <td>{webpage.title}</td>
                  <td>
                    {webpage.status == true ? (
                      <Badge bg="success">Live</Badge>
                    ) : (
                      <Badge bg="danger">Offline</Badge>
                    )}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div onClick={(e) => {setModalShow(true); handleEditWebpage(e, webpage)}}>
                        <FaEdit />
                      </div>{" "}
                      |
                      <div>
                        <button
                          onClick={(e) => handleDeleteWebpage(e, webpage._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Webpages;
