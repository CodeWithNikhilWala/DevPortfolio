import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Typography, Button } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import Header from './Header';
const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  const phoneNumber = '8338845496';

  return (
    <>
  <Card  style={{ backgroundColor: "#395144",height:"100vh",borderRadius:"0px" }}>
  <Header/>
    <Container className="my-5">
      
      <Card style={{ background: '#E5F9DB' }}>
        <Card.Body className="d-flex flex-column align-items-center">
          <PhoneAndroidIcon style={{ fontSize: 45, color: '#1A5D1A' }} />
          {showContact ? (
            <>
              <Typography  className="m-3">
                My Number Is <br />
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </Typography>
              <Typography variant="body1">
                Thank You For Contacting Me Via PhoneNumber
              </Typography>
            </>
          ) : (
            <Button variant="outlined" className='m-2' onClick={handleShowContact}>
              Show Phone Number
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
    </Card>
    </>
  );
};

export default Contact;
