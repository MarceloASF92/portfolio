import { Container, Content } from "./styles";
import { FaReact } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import bico from "../../assets/img/bico.png";
import nukenzie from "../../assets/img/nukenzie.png";
import hamburgueria from "../../assets/img/hamburgueria.png";
import hanoi from "../../assets/img/hanoi.png";
import listaProdutos from "../../assets/img/listaProdutos.png";
import fotosDaqui from "../../assets/img/fotosDaqui.png";
import kenzieFood from "../../assets/img/kenzieFood.png";
import portfolio from "../../assets/img/portfolio.png";
import landingPage from "../../assets/img/landingPage.png";
import ecommerce from "../../assets/img/ecommerce.png";
import azar from "../../assets/img/azar.png";
import kenzieflix from "../../assets/img/kenzieflix.png";
import menuRestaurante from "../../assets/img/menuRestaurante.png";
import curriculo from "../../assets/img/curriculo.png";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Projects = () => {
  const [reactProjects] = useState([
    {
      id: uuid(),
      url: "https://portfolio-marcelo-alves.vercel.app/",
      name: "Portfolio",
      img: portfolio,
    },
    {
      id: uuid(),
      url: "https://bico.vercel.app/",
      name: "Bico.com",
      img: bico,
    },
    {
      id: uuid(),
      url: "https://nu-kenzie-marcelo.vercel.app/",
      name: "Nukenzie",
      img: nukenzie,
    },
    {
      id: uuid(),
      url: "https://hamburgueria-martielo.vercel.app/",
      name: "Hamburgueria",
      img: hamburgueria,
    },
  ]);

  const [jsProjects] = useState([
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-s4-ecommerce-parte-dois-marceloasf92/",
      name: "Ecommerce",
      img: ecommerce,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/api-kenziefood-m2-marceloasf92/",
      name: "Kenzie Food",
      img: kenzieFood,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-s4-entrega-construa-um-jogo-de-azar-rachbraga/",
      name: "Jogos de Azar",
      img: azar,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/m2-entrega-torre-de-hanoi-sprint-1a-marceloasf92/",
      name: "Torre de Hanoi",
      img: hanoi,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/m2-entrega-fotos-daqui-sprint-3a-marceloasf92/",
      name: "Fotos Daqui",
      img: fotosDaqui,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/entrega-lista-produtos-continuaccao-m2-sprint-1b-marceloasf92/",
      name: "Lista de Produtos",
      img: listaProdutos,
    },
  ]);

  const [cssHtmlProjects] = useState([
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-s3-estilizando-pagina-landing-page-kenzie-academy-marceloasf92/",
      name: "Landing Page",
      img: landingPage,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/estilizar-layout-plataforma-streaming-sprint-1-marceloasf92/",
      name: "KenzieFlix",
      img: kenzieflix,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-s1-estilizando-menu-restaurante-marceloasf92/#",
      name: "Menu Restaurante",
      img: menuRestaurante,
    },
    {
      id: uuid(),
      url: "https://kenzie-academy-brasil-developers.github.io/estilizar-curriculo-sprint-2-marceloasf92/",
      name: "Currículo",
      img: curriculo,
    },
  ]);

  const openInNewTab = (url) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <Container>
      <Content>
        <div className="react-content">
          <div className="title-content">
            <h2>
              React <FaReact size={25} />
            </h2>
          </div>
          <ul>
            {reactProjects.map((project) => {
              return (
                <li key={project.id}>
                  <figure>
                    <img src={project.img} alt={project.name} />
                    <span>
                      {project.name}{" "}
                      <BiLinkExternal
                        onClick={() => openInNewTab(project.url)}
                        size={18}
                      />
                    </span>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="js-content">
          <div className="title-content">
            <h2>
              JavaScript
              <DiJavascript size={25} />
            </h2>
          </div>
          <ul>
            {jsProjects.map((project) => {
              return (
                <li key={project.id}>
                  <figure>
                    <img src={project.img} alt={project.name} />
                    <span>
                      {project.name}{" "}
                      <BiLinkExternal
                        onClick={() => openInNewTab(project.url)}
                        size={18}
                      />
                    </span>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="css-html-content">
          <div className="title-content">
            <h2>
              CSS <DiCss3 size={25} /> + HTML <AiOutlineHtml5 size={25} />
            </h2>
          </div>
          <ul>
            {cssHtmlProjects.map((project) => {
              return (
                <li key={project.id}>
                  <figure>
                    <img src={project.img} alt={project.name} />
                    <span>
                      {project.name}{" "}
                      <BiLinkExternal
                        onClick={() => openInNewTab(project.url)}
                        size={18}
                      />
                    </span>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </Content>
    </Container>
  );
};
export default Projects;
