import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import Header from './Header';

const About = () => {
  return (
    <>
    <Card  style={{ backgroundColor: "#395144",height:"100vm",borderRadius:"0px" }}>
      <Header/>
    <Container className="my-5">
     
      <Row>
        <Col md={6} className="mx-auto">
          <Card>
            
              <Card.Header className="text-center"style={{fontWeight:"bolder",fontSize:"20px",backgroundcolor:"#f0f0f0"}}>About Me</Card.Header>
              <Card.Body style={{fontFamily:"cursive",backgroundColor:"#e8f2fd"}}>
              <p>
                I am a passionate front-end web developer with a strong
                background in HTML, CSS, BootStrap, and ReactJs. I love creating
                beautiful and interactive user interfaces that enhance the
                overall user experience. I have experience working with various
                front-end frameworks and libraries such as React and Bootstrap.
              </p>
              <p>
                In addition to my technical skills, I am a creative thinker and
                a problem solver. I enjoy collaborating with others and
                working in a team to bring innovative ideas to life. I am
                constantly learning and improving my skills to stay up-to-date
                with the latest web development trends and technologies. I have
                completed a 3-months internship as a ReactJS developer Position!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <Card>
            
              <Card.Header className="text-center" style={{fontWeight:"bolder",fontSize:"20px",background:"#f5f0e1"}}>Educational Details</Card.Header>
              <Card.Body style={{background:"#e1f5ea"}}>
              <div className="education">
                <div>
                  <h4> <img src="kiit.jpeg" alt="" height={30}/> Master of Computer Applications,(BHUBANESWAR ) (MCA)</h4>
                  <p>Kalinga Institute of Industrial Technology University, (2021 - 2023)</p>
                </div>
                <div>
                  <h4><img src="asmit.jpeg" alt="" height={30}/>Bachelor of Computer Applications,(BHUBANESWAR ) (BCA)</h4>
                  <p>Arya School of Management & Information Technology, (2017 - 2020)</p>
                
                </div>
              </div>
            </Card.Body >
          </Card>
        </Col>
        <Col md={6}>
          <Card className='mt-3'>
            <Card.Body style={{background:"#f3f0fb"}}>
              <div className="education">
                <div>
                  <h4><img src="dd.jpeg" alt="" height={30}/>12th Grade</h4>
                  <p>Dharanidhar University (Keonjhar), (2015 - 2017)</p>
                </div>
                <div>
                  <h4><img src="ssvm.jpeg" alt="" height={30}/>10th Grade</h4>
                  <p>Saraswati Sishu Vidya Mandir(Bolani), (2003 - 2015)</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Col md={6}>
      <Card className='mt-3'>
        <Card.Body>
        <div className="education">
        <Card.Header className="text-center" style={{fontWeight:"bolder",fontSize:"20px",background:"#f5f0e1"}}>Intenship Details</Card.Header>
                <div>
                  <h4><img src="skill.jpeg" alt="" height={30}/>Frontend Developer</h4>
                  <p>Skill Bhoomi,(Dhanbad),(May 2023 - present)</p>
                </div>
                </div>
                <div>
                  <h4>Skills</h4>
                  <p>Html,Css,Bootstrap,ReactJs</p>
                </div>
        </Card.Body>
      </Card>
      </Col>
      <Card className='mt-3'>
      <Card.Footer>
            <h5 className="text-center" style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                  Thank you for visiting my Aboutpage!
           </h5>
            </Card.Footer>
            </Card>
    </Container>
    </Card>
    </>
  );
};

export default About;
