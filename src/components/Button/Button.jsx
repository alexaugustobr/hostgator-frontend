import React from "react";
import PropTypes from "prop-types";
import { themeConstants } from "../../theme";
import { StyledButton } from "./styles";

const { colors } = themeConstants;

const Button = ({ color, children }) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.values(colors))
};

Button.defaultProps = {
  color: colors.BLUE
};

export default Button;
