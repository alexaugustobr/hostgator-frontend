import React from "react";
import PropTypes from "prop-types";
import RadioGroup from "../RadioGroup/RadioGroup";
import Text from "../Text";
import { Container, Label } from "./styles";
import cycleTypes from "../../utils/constants/cycleTypes";

const { MONTHLY, ANNUALLY, TRIENNIALLY } = cycleTypes;

const CycleSelection = ({ checked, onChange, options }) => {
  return (
    <Container>
      <Label>
        <Text color="blue" fontWeight="light">
          Quero pagar a cada:
        </Text>
      </Label>
      <RadioGroup checked={checked} options={options} onChange={onChange} />
    </Container>
  );
};

CycleSelection.propTypes = {
  checked: PropTypes.oneOf([MONTHLY, ANNUALLY, TRIENNIALLY]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, label: PropTypes.string })
  ).isRequired
};

export default CycleSelection;
