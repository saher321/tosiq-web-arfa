import React, { useState } from 'react'
import AdminLayout from '../layout/AdminLayout'
import { Badge, Button, Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'
import SliderModel from '../components/SliderModel'
import ServiceModel from '../components/ServiceModel'
import ReviewsModel from '../components/ReviewsModel'
import StaffModel from '../components/StaffModel'

const Home = () => {
  const [sliderModal, setSliderModal] = useState(false);
  const [serviceModal, setServiceModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [staffModal, setStaffModal] = useState(false);
  return (
    <AdminLayout>
      <div className='page-title'>Home</div>
      <div>
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6>Sliders</h6>
            <div>
              <Button variant="primary" onClick={() => setSliderModal(true)}>
                Add Slider
              </Button>
              <SliderModel show={sliderModal} onHide={() => setSliderModal(false)} />
            </div>
          </div>
          <div className="mt-2">
            {/* table */}
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Image</td>
                  <td>Slide one</td>
                  <td>
                    <Badge bg="success">Live</Badge>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div onClick={() => setSliderModal(true)}>
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
        
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6>Services</h6>
            <div>
              <Button variant="primary" onClick={() => setServiceModal(true)}>
                Add Service
              </Button>
              <ServiceModel show={serviceModal} onHide={() => setServiceModal(false)} />
            </div>
          </div>
          <div className="mt-2">
            {/* table */}
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Image</td>
                  <td>Slide one</td>
                  <td>
                    <Badge bg="success">Live</Badge>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div onClick={() => setServiceModal(true)}>
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
        
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6>Reviews</h6>
            <div>
              <Button variant="primary" onClick={() => setReviewModal(true)}>
                Add Review
              </Button>
              <ReviewsModel show={reviewModal} onHide={() => setReviewModal(false)} />
            </div>
          </div>
          <div className="mt-2">
            {/* table */}
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Image</td>
                  <td>Slide one</td>
                  <td>
                    <Badge bg="success">Live</Badge>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div onClick={() => setReviewModal(true)}>
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

        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6>Staff</h6>
            <div>
              <Button variant="primary" onClick={() => setStaffModal(true)}>
                Add Staff
              </Button>
              <StaffModel show={staffModal} onHide={() => setStaffModal(false)} />
            </div>
          </div>
          <div className="mt-2">
            {/* table */}
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Image</td>
                  <td>Slide one</td>
                  <td>
                    <Badge bg="success">Live</Badge>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div onClick={() => setStaffModal(true)}>
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
      </div>
    </AdminLayout>
  )
}

export default Home