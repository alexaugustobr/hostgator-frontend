import React from "react";
import PropTypes from "prop-types";
import { themeConstants } from "../../theme";
import { StyledText } from "./styles";

const { sizes, colors, fontWeights, colorVariations } = themeConstants;

const Text = ({
  size,
  fontWeight,
  color,
  colorVariation,
  letterSpacing,
  margin,
  lineHeight,
  link,
  children
}) => {
  return (
    <StyledText
      size={size}
      fontWeight={fontWeight}
      color={color}
      colorVariation={colorVariation}
      letterSpacing={letterSpacing ? 1.6 : 0}
      margin={margin}
      lineHeight={lineHeight}
      link={link}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.oneOf(Object.values(fontWeights)),
  color: PropTypes.oneOf(Object.values(colors)),
  colorVariation: PropTypes.oneOf(Object.values(colorVariations)),
  margin: PropTypes.oneOf(Object.values(sizes)),
  lineHeight: PropTypes.oneOf(Object.values(sizes)),
  letterSpacing: PropTypes.bool,
  link: PropTypes.bool
};

Text.defaultProps = {
  size: sizes.MD,
  fontWeight: fontWeights.REGULAR,
  color: colors.BLACK,
  colorVariation: colorVariations.default,
  margin: null,
  lineHeight: null,
  letterSpacing: false,
  link: false
};

export default Text;
