import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { CheckIcon, Container } from "./styles";

const CheckItem = ({ label }) => {
  return (
    <Container>
      <CheckIcon />
      <Text
        size="lg"
        color="blue"
        colorVariation={100}
        margin="md"
        fontWeight="light"
        lineHeight="md"
      >
        {label}
      </Text>
    </Container>
  );
};

CheckItem.propTypes = {
  label: PropTypes.string.isRequired
};

export default CheckItem;
