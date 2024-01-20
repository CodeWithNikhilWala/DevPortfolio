import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import  Box  from '@mui/material/Box';
import Header from './Header';
const Resume = () => {
  const downloadResume = () => {
   
    const resumePath = '/Dev SkillBhoomi-compressed.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.target = '_blank';
    link.download = '/Acharya Dev resume.pdf';
    link.click();
  };

  return (
    <>
     <Card  style={{ backgroundColor: "#395144",height:"100vh",borderRadius:"0px" }}>
    <Header/>
    <Box sx={{display:"flex",justifyContent:"center",mt:5}}>
    <Button variant="primary" style={{background:"#F1C93B",color:"black",width:"200px",}} onClick={downloadResume}>
      Download Resume
    </Button>
    </Box>
    </Card>
    </>
  );
};

export default Resume;

