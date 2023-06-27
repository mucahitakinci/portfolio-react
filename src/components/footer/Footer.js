import { Container } from "react-bootstrap";
import {TiSocialLinkedin, TiSocialGithub, TiMail} from "react-icons/ti"
let date = new Date().getFullYear();
const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <p className="mb-0">Copyright {date} &copy; Mücahit Akıncı</p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <a href="https://linkedin.com/in/mucahitakinci" className="link">
            <TiSocialLinkedin />
          </a>
          <a href="https://github.com/mucahitakinci" className="link">
            <TiSocialGithub />
          </a>
          <a href="mailto:info@mucahitakinci.com.tr" className="link">
            <TiMail />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
