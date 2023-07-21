import React, { useState } from "react";
import { Icon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Box from "@mui/material/Box";
import { Button } from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../App.css';
import Header from "./Header";
function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
  
    borderRadius: isHovered ? "30%" : "30px",
    boxShadow: isHovered
      ? "#F7FFE5 0px 7px 7px, #F7FFE5 0px -12px 7px, #F7FFE5 0px 4px 6px, #F7FFE5 0px 12px 13px, #F7FFE5 0px -3px 5px"
      : "none",
    transition: "border-radius 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
  };

  return (
    <>
   
      <Card  style={{ backgroundColor: "#395144",height:"120vh",borderRadius:"0px" }}>
        <Header/>
        <Card.Body style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Container >
            <Box sx={{ float: "left", color: "#ffffff", fontFamily: "cursive" }}>
              
                <h2 style={{ color: "#F1C93B" }}>Hello, my name is</h2>
              
              
                <h2 style={{ color: "#F1C93B" }}>Devajeet Acharya</h2>
              
              <div>
                <h4>I started Working As A Front-End Developer <br /> Since Last 3 Months And
                  <br /> Now I Am Loving this Profession  And  <br /> I Want to Be a successful Developer In Future. </h4>
              </div>
              <Container style={{ display: "flex" }}>
                <Link to="/Project"><Button style={{ marginTop: "10px", marginBottom: "14px", backgroundColor: "yellow", color: "#395144" }}>Projects</Button></Link>
                <Link to="/Email"><Button style={{ marginTop: "10px", marginBottom: "14px", marginLeft: "8px", backgroundColor: "yellow", color: "#395144" }}>Email</Button></Link>
              </Container>
            </Box>

            <Box sx={{ float: "right" }}>
           <Link to="/">   <img src="dev.jpeg" alt="" width={250} className="image-animated" style={imageStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /></Link>
            </Box>
          </Container>
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "space-around" }}>
          <Box sx={{ color: "blue" }}>
            <Typography sx={{ color: "#ffffff" }}>Connect Me On</Typography> <a href="https://www.linkedin.com/in/devajeet-acharya-3b930222b"><LinkedInIcon style={{ fontSize: "30px", marginLeft: "25px" }} /></a>
          </Box>
          <Box sx={{ color: "green" }}>
            <Typography sx={{ color: "#ffffff" }}>Connect Me On</Typography> 
            <a href="https://wa.me/+918338845496">
            <WhatsAppIcon style={{ fontSize: "30px",color:"#16FF00", marginLeft: "25px" }} />
               </a>
            
          </Box>
        </Card.Footer>
      </Card>
      
      
    </>
  );
}

export default Home;
