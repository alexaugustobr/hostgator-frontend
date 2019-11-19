import React from "react";
import { ReactComponent as CoffeeTable } from "../../assets/coffee-table.svg";
import { ReactComponent as WorkDesk } from "../../assets/work-desk.svg";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <WorkDesk />
      <CoffeeTable />
    </Container>
  );
};

export default Header;
