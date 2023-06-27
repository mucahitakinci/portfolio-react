import { Button, Container } from "react-bootstrap";
import developer from "../../assets/imgs/sysadmin_03.png";

const About = () => {
  return (
    <section className="section pt-0" id="about">
      <Container className="text-center">
        <div className="about">
          <div className="about-img-holder">
            <img src={developer} className="about-img" alt="" />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Ben Kimim?</p>
            <h2 className="section-title mb-3">Hakkımda</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae aliquid ad provident aut fuga animi soluta quae eos
              non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
              impedit iure nemo a iste
              <br />
              culpa! Quasi quibusdam hic recusandae delectus velit officiis
              explicabo voluptatibus! Nemo esse similique, voluptates labore
              distinctio, placeat explicabo facilis molestias, blanditiis culpa
              iusto voluptatem ratione eligendi a, quia temporibus velit vero
              ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
            </p>
            <Button variant="primary rounded" className="mt-4 fw-semibold text-white">
              Download CV
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
