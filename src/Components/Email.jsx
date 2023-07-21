import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import { Typography, Button } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import Header from './Header';

const Email = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = 'devjeetacharya003@gmail.com';

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <>
    <Card  style={{ backgroundColor: "#395144",height:"100vh",borderRadius:"0px" }}>
    <Header/>
      <Container className="my-5">
     
        <Card style={{ background: "#E5F9DB" }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <EmailIcon style={{ fontSize: 45, color: '#1A5D1A' }} />
            {showEmail ? (
              <Typography variant="body1" className="mb-3">
                My Email Is <a href={`mailto:${email}`}>{email}</a>
              </Typography>
            ) : (
              <Button variant="outlined" onClick={handleShowEmail}>
                Show Email
              </Button>
            )}
            {showEmail && (
              <Typography variant="body1">
                Thank You For Contacting Me Via Email
              </Typography>
            )}
          </Card.Body>
        </Card>
      </Container>
      </Card>
    </>
  );
};

export default Email;
