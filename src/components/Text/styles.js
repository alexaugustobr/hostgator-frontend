import styled from "styled-components";

export const StyledText = styled.span`
  font-size: ${({ theme, size }) => theme.typography.text[size]};
  font-weight: ${({ theme, fontWeight }) => theme.fontWeight[fontWeight]};
  color: ${({ theme, color, colorVariation }) =>
    theme.colors[color][colorVariation]};
  ${({ letterSpacing }) =>
    letterSpacing ? `letter-spacing: ${letterSpacing}px` : ""}
  ${({ theme, margin }) =>
    margin ? `margin-bottom: ${theme.spacings[margin]}` : ""}
  ${({ theme, lineHeight }) =>
    lineHeight ? `line-height: ${theme.lineHeight[lineHeight]}` : ""}
  ${({ theme, link }) =>
    link
      ? `border-bottom: 1px dashed ${theme.colors.blue[100]};
         cursor: pointer;`
      : ""}
`;
