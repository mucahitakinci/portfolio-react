import { Col, Container, Row } from "react-bootstrap";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import portfolio1 from "../../assets/imgs/folio-1.jpg";
import portfolio2 from "../../assets/imgs/folio-2.jpg";
import portfolio3 from "../../assets/imgs/folio-3.jpg";
import { useEffect } from "react";
const Portfolio = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox]')
  })
  return (
    <section className="section" id="portfolio">
      <Container className="text-center">
        <p className="section-subtitle">Neler Yaptım?</p>
        <h6 className="section-title mb-6">Portfolyo</h6>
        <Row>
          <Col md={4}>
            <a href={portfolio1} data-fancybox data-caption="Test" className="portfolio-card">
              <img
                src={portfolio1}
                className="portfolio-card-img img-responsive rounded"
                alt=""
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </a>
          </Col>
          <Col md={4}>
            <a href={portfolio2} data-fancybox data-caption="Test2" className="portfolio-card">
              <img
                className="portfolio-card-img img-responsive rounded"
                src={portfolio2}
                alt=""
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </a>
          </Col>
          <Col md={4}>
            <a href={portfolio3} data-fancybox data-caption="Test3" className="portfolio-card">
              <img
                className="portfolio-card-img img-responsive rounded"
                src={portfolio3}
                alt=""
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
