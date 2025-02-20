import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './Imagespage.css'

function Images() {
  // Sample image data array, you can replace these with your actual images
  const images = [
    { id: 1, src: '../../public/images/1.jpg', alt: 'Image 1' },
    { id: 2, src: '../../public/images/2.jpg', alt: 'Image 2' },
    { id: 3, src: '../../public/images/3.jpg', alt: 'Image 3' },
    { id: 4, src: '../../public/images/4.jpg', alt: 'Image 4' },
    { id: 5, src: '../../public/images/5.jpg', alt: 'Image 5' },
    { id: 6, src: '../../public/images/6.jpg', alt: 'Image 6' },
    { id: 7, src: '../../public/images/7.jpg', alt: 'Image 7' },
    { id: 8, src: '../../public/images/8.jpg', alt: 'Image 8' },
    { id: 9, src: '../../public/images/9.jpg', alt: 'Image 9' },
    { id: 10, src: '../../public/images/10.jpg', alt: 'Image 1o' },
    { id: 11, src: '../../public/images/11.jpg', alt: 'Image 11' },
  ];

  return (
    <Container className='ab'>
      <Row className='img-fluid'>
        {images.map(image => (
          <Col key={image.id} md={3} sm={6} className="mb-4 mt-3">
            <Card>
              <Card.Img variant="top" src={image.src} alt={image.alt} className="image-fixed-size" />
              <Card.Body>
                <Card.Title className='text-center'>{image.alt}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Images;
