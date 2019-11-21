import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const Card = ({ featured, children }) => {
  return <Container featured={featured}>{children}</Container>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  featured: PropTypes.bool
};

Card.defaultProps = {
  featured: false
};

export default Card;
