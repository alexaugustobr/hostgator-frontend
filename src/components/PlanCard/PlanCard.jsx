import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";
import { ReactComponent as MIcon } from "../../assets/m-plan.svg";
import { ReactComponent as PIcon } from "../../assets/p-plan.svg";
import { ReactComponent as TurboIcon } from "../../assets/turbo-plan.svg";
import cycleTypes from "../../utils/constants/cycleTypes";
import planTypes from "../../utils/constants/planTypes";
import Button from "../Button";
import Card from "../Card";
import Heading from "../Heading";
import Text from "../Text";
import { getPlanItems } from "./planItemMapper";
import {
  Divider,
  Header,
  IconContainer,
  InfoIcon,
  InfoText,
  ItemsBody,
  MonthlyValue,
  OriginalValue,
  PlanItem,
  ValueBody,
  Values
} from "./styles";

const { P_PLAN, M_PLAN, TURBO_PLAN } = planTypes;

const PlanCard = ({ plan, cycle }) => {
  const getIconByPlan = useCallback(
    name => {
      switch (name) {
        case P_PLAN:
          return <PIcon />;
        case M_PLAN:
          return <MIcon />;
        case TURBO_PLAN:
          return <TurboIcon />;
        default:
          return <></>;
      }
    },
    [plan.name]
  );

  const isFeatured = useMemo(() => plan.name === "Plano M", [plan.name]);

  const planValue = useMemo(() => {
    const { priceOrder, months } = plan.cycle[cycle];
    const valueWithDiscount = (priceOrder - priceOrder * 0.4).toFixed(2);

    return {
      value: priceOrder,
      valueWithDiscount,
      monthlyValue: (valueWithDiscount / months).toFixed(2)
    };
  }, [cycle, plan]);

  const planItems = getPlanItems(plan.name);

  const renderPlanItem = (item, index) => (
    <PlanItem key={index} isLastItem={index === planItems.length - 1}>
      {item}
    </PlanItem>
  );

  return (
    <Card featured={isFeatured}>
      <Header>
        <IconContainer>{getIconByPlan(plan.name)}</IconContainer>
        <Heading
          size="md"
          color="blue"
          colorVariation={700}
          lineHeight="lg"
          fontWeight="bold"
        >
          {plan.name}
        </Heading>
      </Header>
      <Divider />
      <div>
        <ValueBody>
          <Values>
            <OriginalValue>
              <Text size="sm" color="black" lineHeight="md">
                {`R$ ${planValue.value}`}
              </Text>
            </OriginalValue>
            <Text size="sm" fontWeight="bold" lineHeight="md">
              {`R$ ${planValue.valueWithDiscount}`}
            </Text>
          </Values>
          <Text size="xs" lineHeight="md">
            Equivalente a
          </Text>
          <MonthlyValue>
            <Heading
              size="xs"
              lineHeight="md"
              color="blue"
              colorVariation={700}
            >
              <span>R$ </span>
            </Heading>
            <Heading
              size="xxl"
              lineHeight="md"
              color="blue"
              colorVariation={700}
              fontWeight="bold"
            >
              {planValue.monthlyValue}
            </Heading>
            <Heading
              size="xs"
              lineHeight="md"
              color="blue"
              colorVariation={700}
            >
              /mês*
            </Heading>
          </MonthlyValue>
          <Button color={isFeatured ? "orange" : "blue"}>Contrate Agora</Button>
          <InfoText>
            <Text fontWeight="bold">1 ano de domínio grátis</Text>
            <InfoIcon />
          </InfoText>
        </ValueBody>
        <Divider />
        <ItemsBody>{planItems.map(renderPlanItem)}</ItemsBody>
      </div>
    </Card>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    cycle: PropTypes.array
  }).isRequired,
  cycle: PropTypes.oneOf([Object.values(cycleTypes)]).isRequired
};

export default PlanCard;
