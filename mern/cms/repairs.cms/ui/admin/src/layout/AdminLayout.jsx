import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Button, Col, Row } from 'react-bootstrap';
import { CgMenuGridO } from "react-icons/cg";


const AdminLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className='m-2'>
        <Button onClick={() => setShowSidebar(!showSidebar)} variant='dark'><CgMenuGridO size={20} style={{marginTop: "-4px"}} /></Button>
        
        <Row className='gap-2 g-0 mt-2'>
          {
            showSidebar && 
            <Col xs="3" sm="3" md="3" lg="3">
              <Sidebar />
            </Col>
          }
          <Col>
            <div className='admin-layout-content'>{children}</div>
          </Col>
        </Row>
        
    </div>
  )
}

export default AdminLayout