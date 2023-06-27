import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeState } from "../../context/ThemeContext";

const Header = () => {
  const stickyNav = useRef();
  const [nav, setNav] = useState({
    ul: "",
    icon: "",
  });
  const { theme, setThemeState } = useThemeState();
  const toggleMenu = () => {
    setNav({
      ul: nav.ul === "" ? "show" : "",
      icon: nav.icon === "" ? "is-active" : "",
    });
  };
  useEffect(() => {
    const aBtn = document.querySelectorAll(".custom-navbar .link");
    aBtn.forEach((el, key) => {
      const clickHandle = (e) => {
        e.preventDefault();
        var hash = el.hash;
        var elem = document.querySelector(hash);
        window.scrollTo({
          top: elem.offsetTop,
          behavior: "smooth",
        });
        window.location.hash = hash;
      };
      el.addEventListener("click", clickHandle);
      return () => {
        el.removeEventListener("click", clickHandle);
      };
    });
  }, []);

  useLayoutEffect(() => {
    const mainNav = document.querySelector(".custom-navbar");
    let fixedTop = stickyNav.current.offsetTop;
    const fixedNav = () => {
      if (window.pageYOffset > fixedTop) {
        mainNav.classList.remove("affix-top");
        mainNav.classList.add("affix");
      } else {
        mainNav.classList.remove("affix");
        mainNav.classList.add("affix-top");
      }
    };
    window.addEventListener("scroll", fixedNav);
  }, []);
  return (
    <>
      <nav className="custom-navbar px-4 px-md-0 px-lg-0" ref={stickyNav}>
        <Container>
          <a className="logo" href="/#home">
            Mücahit Akıncı
          </a>
          <ul className={`nav ${nav.ul}`}>
            <li className="item">
              <a className="link" href="#home">
                Anasayfa
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about">
                Hakkımda
              </a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">
                Portfolyo
              </a>
            </li>
            <li className="item">
              <a className="link" href="#contact">
                İletişim
              </a>
            </li>
          </ul>
          <span
            onClick={toggleMenu}
            id="nav-toggle"
            className={`hamburger hamburger--elastic ${nav.icon}`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </span>
          <span
            className="cpointer ms-3 rounded-circle bg-primary p-1 border"
            onClick={setThemeState}
          >
            {theme === "light" ? (
              <MdDarkMode color="#484e54" size={26} />
            ) : (
              <MdLightMode color="white" size={26} />
            )}
          </span>
        </Container>
      </nav>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">Merhaba!</span>
            <span className="down">Ben Mücahit Akıncı</span>
          </h1>
          <p className="header-subtitle">FULL STACK DEVELOPER</p>
          <a
            href="#portfolio"
            className="btn btn-primary rounded fw-semibold text-white"
          >
            Yaptığım İşler
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
