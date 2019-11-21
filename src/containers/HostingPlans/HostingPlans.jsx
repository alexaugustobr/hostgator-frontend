import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import Plans from "../Plans";

const HostingPlans = () => {
  return (
    <Container>
      <Header />
      <Plans />
    </Container>
  );
};

export default HostingPlans;
