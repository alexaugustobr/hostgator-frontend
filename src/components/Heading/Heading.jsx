import React from "react";
import PropTypes from "prop-types";
import { themeConstants } from "../../theme";
import { StyledHeading } from "./styles";

const { sizes, colors, fontWeights, alignTypes } = themeConstants;

const Heading = ({
  size,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  margin,
  children
}) => {
  return (
    <StyledHeading
      size={size}
      fontWeight={fontWeight}
      color={color}
      textAlign={textAlign}
      lineHeight={lineHeight}
      margin={margin}
    >
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf(Object.values(sizes)),
  fontWeight: PropTypes.oneOf(Object.values(fontWeights)),
  color: PropTypes.oneOf(Object.values(colors)),
  textAlign: PropTypes.oneOf(Object.values(alignTypes)),
  lineHeight: PropTypes.oneOf(Object.values(sizes)),
  margin: PropTypes.oneOf(Object.values(sizes))
};

Heading.defaultProps = {
  size: sizes.MD,
  fontWeight: fontWeights.REGULAR,
  color: colors.BLACK,
  textAlign: alignTypes.JUSTIFY,
  lineHeight: null,
  margin: null
};

export default Heading;
