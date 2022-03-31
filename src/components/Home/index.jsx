import { Container, Content } from "./styles";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { SiCodewars } from "react-icons/si";
import { useState } from "react";
import Button from "../Button";
import Typical from "react-typical";
import avatar from "../../assets/img/avatar.png";
import { useHistory } from "react-router-dom";
const Home = () => {
  const [links] = useState([
    {
      link: "https://github.com/marceloasf92",
      icon: <AiFillGithub size={30} />,
    },
    {
      link: "https://www.linkedin.com/in/marcelo-asf/",
      icon: <AiFillLinkedin size={30} />,
    },
    {
      link: `https://mail.google.com/mail/u/0/?fs=1&to=marcelo.asf92@gmail.com&tf=cm`,
      icon: <AiFillGoogleCircle size={30} />,
    },
    {
      link: `https://www.codewars.com/users/marceloasf`,
      icon: <SiCodewars size={30} />,
    },
  ]);
  const history = useHistory();

  const openInNewTab = (url) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <Container>
      <Content>
        <div className="profile-details-links">
          {links.map((link, index) => {
            return (
              <Button
                onClick={() => openInNewTab(link.link)}
                className="btn-icons"
                key={index}
              >
                {link.icon}
              </Button>
            );
          })}
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            Olá, eu me chamo <span className="highlighted-text">Marcelo</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Front End Developer 🚀",
                  3000,
                  "Back End Student 🚀",
                  3000,
                ]}
              />
            </h1>
            <p className="profile-role-tagline">
              "Qualquer coisa que você faça ou tudo aquilo que você sonhe, tenha
              a certeza: pode se tornar realidade. Proponha-se somente a
              começar."
            </p>
          </span>
        </div>
        <div className="profile-options">
          <Button
            className="btn-active"
            onClick={() => history.push("/contact")}
          >
            Contrate-me
          </Button>
          <a href="Profile.pdf" download="Profile.pdf">
            <Button className="btn-active">Currículo</Button>
          </a>
        </div>
      </Content>
      <div className="container-Img">
        <figure>
          <img src={avatar} alt="avatar" />
        </figure>
      </div>
    </Container>
  );
};
export default Home;
