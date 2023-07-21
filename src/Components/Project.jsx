// ProjectPortfolio.js
import React from 'react';
import { Container, Row, Col, Card,} from 'react-bootstrap';
import Header from './Header';

const Project = () => {

  const projects = [
    {
      title: 'WeatherApp',
      description: 'The Simple Weather App is a straightforward and user-friendly application designed to provide you with quick access to essential weather and wind information,, the app offers only the most crucial data, making it easy for users to get the information they need without any unnecessary clutter.',
      imageUrl: '/weather.jpeg',
      technologies: ['ReactJs,MaterialUi,Html,Css,Antd','Axious'],
    },
    {
      title: 'ComplianceApp',
      description: 'The Compliance App is a powerful and user-friendly software tool tailored to meet the unique compliance needs of businesses and organizations across various industries. Its primary purpose is to streamline and automate the complex process of managing regulatory requirements, internal policies, and industry standards.',
      imageUrl: '/comp.jpeg',
      technologies: ['ReactJs','Html','Css','MaterialUi','Antd','Axious',],
    },
    {
      title: 'LandingPage',
      description: 'A landing page is a standalone web page designed with a specific purpose in mind, typically associated with marketing or advertising campaigns. Unlike regular webpages, which are part of a websites hierarchy, a landing page is created to capture a visitors attention and encourage them to take a particular action. The primary goal of a landing page is to convert visitors into leads or customers by guiding them towards a specific call-to-action (CTA)',
      imageUrl: '/landding.jpeg',
      technologies: ['Bootstrap','Html','Css'],
    },
  ];

  return (
    <>
  
      <Card style={{ backgroundColor: "#395144", borderRadius: "0px" }}>
        <Header />
        <Container>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} xs={12} md={4}>
                <Card style={{ marginTop:5 }}>
                  <Card.Img variant="top" src={project.imageUrl} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Text>
                      <strong>Technologies used:</strong>
                      <ul>
                        {project.technologies.map((technology, techIndex) => (
                          <li key={techIndex}>{technology}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Card>
     
    </>
  );
};

export default Project;
