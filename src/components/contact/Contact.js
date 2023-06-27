import {
  Container,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <Container className="text-center">
        <p className="section-subtitle">Nasıl iletişim kurabilirsiniz?</p>
        <h6 className="section-title mb-5">Bana ulaşın</h6>
        <Form className="contact-form m-auto col-md-10 col-lg-7" action="">
          <Row>
            <Form.Group as={Col} sm={6} className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ad Soyad"
                required
                size="50"
              />
            </Form.Group>
            <Form.Group as={Col} sm={6} className="mb-2">
              <Form.Control type="email" placeholder="E-Posta" required />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Mesaj"
                rows={6}
                name="message"
                id="message"
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} className="mt-3">
              <Button
                type="submit"
                variant="primary rounded"
                className="text-white fw-semibold"
              >
                Gönder
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
