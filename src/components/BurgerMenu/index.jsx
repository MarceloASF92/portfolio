import { Container } from "./styles";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  );
};

export default BurgerMenu;
