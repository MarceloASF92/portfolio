import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { TextField } from "@mui/material";
import { Container, Content } from "./styles";
import { AiFillLinkedin } from "react-icons/ai";

export const ContactUs = () => {
  const form = useRef();

  const openInNewTab = (url) => {
    window.open(url, "_blank")?.focus();
  };

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    subject: yup.string().required("Assunto obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    message: yup.string().required("Mensagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const checkFields = ({ name, subject, email, message }) => {
    const result = { name, subject, email, message };
    if (!!result) {
      sendEmail();
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "gmail_marcelo",
        "template_3mlw3i4",
        form.current,
        "egiPGqNj6dOuORFqz"
      )
      .then(
        (_) => {
          toast.success("Formulário enviado com sucesso", {
            className: "success-toast",
            draggable: true,
            position: "top-right",
          });
        },
        (_) => {
          toast.error(
            "Ops, houve algum erro! Favor entrar em contato direto!",
            {
              className: "error-toast",
              draggable: true,
              position: "top-right",
            }
          );
        }
      );
  };

  return (
    <Container>
      <Content>
        <p className="more-information">
          Caso você queira contratar os meus serviços, favor entrar em contato
          pelo Linkedin
          <Button
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/marcelo-asf/")
            }
          >
            <AiFillLinkedin size={20} />
          </Button>
          ou preencher o formulário abaixo.
        </p>
        <form ref={form} onSubmit={handleSubmit(checkFields)}>
          <h2>FORMULÁRIO</h2>
          <TextField
            id="outlined-basic"
            label="Nome"
            helperText={!!errors && errors.name?.message}
            error={errors.name?.message}
            variant="outlined"
            {...register("name")}
            name={"name"}
          />
          <TextField
            id="outlined-basic"
            label="Assunto"
            variant="outlined"
            helperText={!!errors && errors.subject?.message}
            error={errors.subject?.message}
            {...register("subject")}
            name={"subject"}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            helperText={!!errors && errors.email?.message}
            error={errors.email?.message}
            {...register("email")}
            name={"email"}
          />
          <TextField
            id="outlined-basic"
            label="Mensagem"
            variant="outlined"
            helperText={!!errors && errors.message?.message}
            error={errors.message?.message}
            {...register("message")}
            name={"message"}
            multiline
            rows={4}
          />

          <Button type="submit">Enviar</Button>
        </form>
      </Content>
    </Container>
  );
};
