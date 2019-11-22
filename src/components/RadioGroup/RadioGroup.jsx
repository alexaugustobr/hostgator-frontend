import React from "react";

import PropTypes from "prop-types";
import { Container, Option, Checked, Unchecked } from "./styles";

import Text from "../Text";

const RadioGroup = ({ options, checked, onChange }) => {
  const mapRadioOptions = option => {
    const isOptionChecked = option.key === checked;

    return (
      <Option checked={isOptionChecked} onClick={() => onChange(option.key)}>
        {isOptionChecked ? <Checked /> : <Unchecked />}
        <Text
          size="lg"
          fontWeight={isOptionChecked ? "bold" : "light"}
          color={isOptionChecked ? "white" : "blue"}
        >
          {option.label}
        </Text>
      </Option>
    );
  };

  return <Container>{options.map(mapRadioOptions)}</Container>;
};

RadioGroup.propTypes = {
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, label: PropTypes.string })
  ).isRequired
};

RadioGroup.defaultProps = {};

export default RadioGroup;
