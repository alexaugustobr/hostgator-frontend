import React from "react";

import { Container, CoffeTableImage, WorkDeskImage } from "./styles";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <Container>
      <WorkDeskImage />
      <HeaderContent />
      <CoffeTableImage />
    </Container>
  );
};

export default Header;
