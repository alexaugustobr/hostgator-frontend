import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import PlanCard from "../../components/PlanCard";
import priceService from "../../services/priceService";
import { Container, PlansContainer, ExtraInfo } from "./styles";
import cycleTypes from "../../utils/constants/cycleTypes";
import CycleSelection from "../../components/CycleSelection/CycleSelection";
import Text from "../../components/Text";

const sortById = (a, b) => b - a;

const { MONTHLY, ANNUALLY, TRIENNIALLY } = cycleTypes;

const cycleOptions = [
  { key: TRIENNIALLY, label: "3 anos" },
  { key: ANNUALLY, label: "1 ano" },
  { key: MONTHLY, label: "1 mês" }
];

const settings = {
  dots: true,
  className: "slider variable-width center",
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  initialSlide: 1,
  speed: 500,
  variableWidth: true,
  arrows: false
};

const Plans = () => {
  const [prices, setPrices] = useState([]);
  const [cycle, setCycle] = useState(cycleOptions[0].key);

  const showCarousel = useMediaQuery({ query: "(max-width:  1024px)" });

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
      {showCarousel ? (
        <Slider {...settings}>{prices.map(renderPlanCard)}</Slider>
      ) : (
        <PlansContainer>{prices.map(renderPlanCard)}</PlansContainer>
      )}
      <ExtraInfo>
        <Text color="blue" size="sm" fontWeight="light">
          *Confira as condições da promoção
        </Text>
      </ExtraInfo>
    </Container>
  );
};

export default Plans;
