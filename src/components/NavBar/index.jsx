import Button from "../Button";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { SiCodewars } from "react-icons/si";
import { useState } from "react";
const NavBar = ({ setOpen, open }) => {
  const history = useHistory();

  const openInNewTab = (url) => {
    window.open(url, "_blank")?.focus();
  };

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
  return (
    <Container open={open}>
      <Button
        onClick={() => {
          history.push("/");
          setOpen(!open);
        }}
      >
        Sobre
      </Button>
      <Button
        onClick={() => {
          history.push("/projects");
          setOpen(!open);
        }}
      >
        Projetos
      </Button>
      <Button
        onClick={() => {
          history.push("/contact");
          setOpen(!open);
        }}
      >
        Contato
      </Button>

      <div className="contact-links">
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
    </Container>
  );
};

export default NavBar;
