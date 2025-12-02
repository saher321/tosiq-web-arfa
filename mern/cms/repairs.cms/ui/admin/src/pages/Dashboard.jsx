import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { Col, Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className='page-title'>Dashboard</div>
      
      <div className="mt-3">
        <Row className='g-2'>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className='dashboard-card'>
              <div className='card-title'>Appointments</div>
              <div className='card-body'>13</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className='dashboard-card'>
              <div className='card-title'>Webpages</div>
              <div className='card-body'>4</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className='dashboard-card'>
              <div className='card-title'>FAQs</div>
              <div className='card-body'>10</div>
            </div>
          </Col>
        </Row>
      </div>

    </AdminLayout>
  )
}

export default Dashboard