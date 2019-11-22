/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Tooltip } from "react-tippy";
import Text from "../Text";
import planTypes from "../../utils/constants/planTypes";

const { P_PLAN, TURBO_PLAN } = planTypes;

export const getPlanItems = planName => {
  const isPPlan = planName === P_PLAN;
  const isTurboPlan = planName === TURBO_PLAN;
  const emailMessage = isPPlan
    ? "Com subdomínios ilimitados"
    : "Tenha diversos sites no mesmo plano";

  return [
    <Tooltip title={emailMessage} position="bottom" arrow>
      <Text link>{isPPlan ? "Para 1 site" : "Sites ilimitados"}</Text>
    </Tooltip>,
    <Text>
      <Text fontWeight="bold">{`${isTurboPlan ? "150" : "100"} GB`}</Text>
      <span> de Armazenamento</span>
    </Text>,
    <Tooltip
      title="E-mails profissionais (@suaempresa.copm.br) incluídos"
      position="bottom"
      arrow
    >
      <Text link>
        <span>Contas de E-mail </span>
        <Text fontWeight="bold">ilimitadas</Text>
      </Text>
    </Tooltip>,
    <Text>
      <span>Criador de Sites </span>
      <Text fontWeight="bold">Grátis</Text>
    </Text>,
    <Text>
      <span>Certificado SSL </span>
      <Text fontWeight="bold">Grátis</Text>
      <span> (https)</span>
    </Text>
  ];
};
