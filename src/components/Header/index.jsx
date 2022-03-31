import { Container } from "./styles";
import BurguerMenu from "../BurgerMenu";
import { useState } from "react";
import NavBar from "../NavBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <BurguerMenu open={open} setOpen={setOpen} />
      <NavBar open={open} setOpen={setOpen} />
    </Container>
  );
};
export default Header;
