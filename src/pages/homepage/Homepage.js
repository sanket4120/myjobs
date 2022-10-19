import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Wrapper } from '../../components';
import './homepage.css';

const Homepage = () => {
  const whyUs = [
    {
      title: 'get more visibility',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus officia atque ullam excepturi.',
    },
    {
      title: 'organise your candidates',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus officia atque ullam excepturi.',
    },
    {
      title: 'verify their abilities',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus officia atque ullam excepturi.',
    },
  ];

  const companies = [
    {
      name: 'solaytic',
      src: '/assets/solaytic.png',
    },
    {
      name: 'kanba',
      src: '/assets/kanba.png',
    },
    {
      name: 'lightai',
      src: '/assets/lightai.png',
    },
    {
      name: 'ztos',
      src: '/assets/ztos.png',
    },
    {
      name: 'kanba',
      src: '/assets/kanba.png',
    },
    {
      name: 'goldline',
      src: '/assets/goldline.png',
    },
    {
      name: 'ideaa',
      src: '/assets/ideaa.png',
    },
    {
      name: 'liva',
      src: '/assets/liva.png',
    },
    {
      name: 'velocity9',
      src: '/assets/velocity9.png',
    },
  ];

  return (
    <>
      <section className='d-flex flex-column flex-lg-row justify-content-between align-items-center py-5 gap-1 hero-sec'>
        <div className='hero-text mb-3'>
          <h1 className='display-4 mb-4 text-white'>
            Welcome to
            <span className='d-block fw-semibold '>
              My
              <span className='text-primary'>Jobs</span>
            </span>
          </h1>
          <div>
            <Button variant='primary text-white'>Get Started</Button>
          </div>
        </div>
        <div className='hero-image'>
          <Image
            src='/assets/heroimage.jpg'
            alt='hero_image'
            fluid
            className='rounded-4 shadow-sm'
          />
        </div>
      </section>

      {/* Why US */}
      <section className='mb-5'>
        <h2 className='fs-5 mb-4'>Why Us</h2>
        <Row xs={1} md={3} className='justify-content-center gy-3 gy-md-0'>
          {whyUs.map((spec, index) => (
            <Col className='d-flex flex-column' key={index}>
              <Card className='shadow-sm border-0 flex-grow-1'>
                <Card.Body>
                  <Card.Title className='fw-semibold text-primary text-capitalize my-3'>
                    {spec.title}
                  </Card.Title>
                  <Card.Text>{spec.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Companies */}
      <section>
        <h2 className='fs-5 text-capitalize mb-4'>Companies who trust us</h2>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          {companies.map((company, index) => (
            <Image
              key={index}
              src={company.src}
              alt={company.name}
              fluid
              className='trustedby mb-3 mx-2 mb-md-5'
            />
          ))}
        </div>
      </section>
    </>
  );
};

export { Homepage };
