import React, { useEffect, useState } from "react";
import PlanCard from "../../components/PlanCard";
import priceService from "../../services/priceService";
import { Container, PlansContainer } from "./styles";
import cycleTypes from "../../utils/constants/cycleTypes";
import CycleSelection from "../../components/CycleSelection/CycleSelection";

const sortById = (a, b) => b - a;

const { MONTHLY, ANNUALLY, TRIENNIALLY } = cycleTypes;

const cycleOptions = [
  { key: TRIENNIALLY, label: "3 anos" },
  { key: ANNUALLY, label: "1 ano" },
  { key: MONTHLY, label: "1 mês" }
];

const Plans = () => {
  const [prices, setPrices] = useState([]);
  const [cycle, setCycle] = useState(cycleOptions[0].key);

  const loadPrices = async () => {
    const {
      data: {
        shared: { products }
      }
    } = await priceService.prices();
    setPrices(Object.values(products).sort(sortById));
  };

  const renderPlanCard = plan => (
    <PlanCard key={plan.id} plan={plan} cycle={cycle} />
  );

  useEffect(() => {
    loadPrices();
  }, []);

  return (
    <Container>
      <CycleSelection
        checked={cycle}
        onChange={setCycle}
        options={cycleOptions}
      />
      <PlansContainer>{prices.map(renderPlanCard)}</PlansContainer>
    </Container>
  );
};

export default Plans;
