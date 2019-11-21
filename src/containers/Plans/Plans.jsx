import React, { useState, useEffect } from "react";
import priceService from "../../services/priceService";
import PlanCard from "../../components/PlanCard";
import { Container } from "./styles";
import cycleTypes from "../../utils/constants/cycleTypes";

const sortById = (a, b) => b - a;

const Plans = () => {
  const [prices, setPrices] = useState([]);

  const loadPrices = async () => {
    const {
      data: {
        shared: { products }
      }
    } = await priceService.prices();
    setPrices(Object.values(products).sort(sortById));
  };

  const renderPlanCard = plan => (
    <PlanCard key={plan.id} plan={plan} cycle={cycleTypes.TRIENNIALLY} />
  );

  useEffect(() => {
    loadPrices();
  }, []);

  return <Container>{prices.map(renderPlanCard)}</Container>;
};

export default Plans;
