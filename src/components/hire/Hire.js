import { Button, Col, Container, Row } from "react-bootstrap";

const Hire = () => {
  return (
    <section className="section-sm bg-primary">
      <Container className="text-sm-left">
        <Row className="align-items-center">
          <Col sm md={{ offset: 1 }} className="mb-4 mb-md-0">
            <h6 className="title text-light">Want to work with me?</h6>
            <p className="m-0 text-light">
              Always feel Free to Contact & Hire me
            </p>
          </Col>
          <Col sm={{ offset: 2 }} md={{ offset: 3 }} className="mb-4 mb-md-0">
            <Button size="md" variant="light rounded" className="fw-semibold">
              Hire Me
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hire;
