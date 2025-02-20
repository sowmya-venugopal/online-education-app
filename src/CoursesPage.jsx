import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CoursePage.css';
import { Link } from 'react-router-dom';

function Courses() {
  const courses = [
    {
      id:1,
      src: '../../public/images/Html.jpg',
      title: 'HTML for Beginners',
      description: 'Learn the basics of HTML, the foundational language for web development.',
      link: '/html-course'
    },
    {
      id:2,
      src: '../../public/images/Css.jpg',
      title: 'CSS for Beginners',
      description: 'Master CSS to style your webpages and create beautiful, responsive layouts.',
      link: '/css-course'
    },
    {
      id:3,
      src: '../../public/images/JS.jpg',
      title: 'JavaScript for Beginners',
      description: 'Understand the core concepts of JavaScript and how to add interactivity to your webpages.',
      link: '/js-course'
    },
    {
        id:4,
        src: '../../public/images/React.jpg',
        title: 'React for Beginners',
        description: 'Learn the basics of React js, the foundational language for web development.',
        link: '/react-course'
      },
      {
        id:5,
        src: '../../public/images/python.jpg',
        title: 'python for Beginners',
        description: 'Learn the basics of python, the foundational language for web development.',
        link: '/python-course'
      },
      {
        id:6,
        src: '../../public/images/Dataeng.jpg',
        title: 'Data Engineering for Beginners',
        description: 'Learn the basics of Data Engineering, the foundational language for web development.',
        link: '/dataeng-course'
      },
      {
        id:7,
        src: '../../public/images/mern.jpg',
        title: 'MERN for Beginners',
        description: 'Learn the basics of MERN, the foundational language for web development.',
        link: '/mern-course'
      },
      {
        id:8,
        src: '../../public/images/Dig.jpg',
        title: 'Digital Marketing for Beginners',
        description: 'Learn the basics of Digital Marketing, the foundational language for web development.',
        link: '/digitalmarketing-course'
      },
      {
        id:9,
        src: '../../public/images/Dotnet.jpg',
        title: 'Dotnet for Beginners',
        description: 'Learn the basics of Dotnet, the foundational language for web development.',
        link: '/dotnet-course'
      },
      {
        id:10,
        src: '../../public/images/Devops.jpg',
        title: 'Devops for Beginners',
        description: 'Learn the basics of Devops, the foundational language for web development.',
        link: '/devops-course'
      },
      {
        id:11,
        src: '../../public/images/Dataanalyst.jpg',
        title: 'Data Analyst for Beginners',
        description: 'Learn the basics of Data Analyst, the foundational language for web development.',
        link: '/dataanalyst-course'
      },
      {
        id:12,
        src: '../../public/images/Java.jpg',
        title: 'Java for Beginners',
        description: 'Learn the basics of Java, the foundational language for web development.',
        link: '/java-course'
      }
  ];

  return (
    <Container>
      <h2 className="text-center mb-4 pt-5">Courses Offered</h2>
      <Row>
        {courses.map((course, index) => (
          <Col key={index} md={4} sm={12} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Img variant="top" src={course.src} className="image-fixed-size" />
                <Card.Title className='mt-3 text-center'>{course.title}</Card.Title>
                <Card.Text>
                  {course.description}
                </Card.Text>
                <Button style={{backgroundColor:"rgb(30,129,0)"}} href={course.link} className='txt-center'>
                  <Link to="/html-course" className='button-color'>
                  Apply For Course
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;
