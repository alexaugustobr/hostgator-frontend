import styled from "styled-components";

export const StyledHeading = styled.span`
  font-size: ${({ theme, size }) => theme.typography.headings[size]};
  font-weight: ${({ theme, fontWeight }) => theme.fontWeight[fontWeight]};
  color: ${({ theme, color }) => theme.colors[color].default};
  text-align: ${({ textAlign }) => textAlign};
  ${({ theme, lineHeight }) =>
    lineHeight ? `line-height: ${theme.lineHeight[lineHeight]}` : ""}
  ${({ theme, margin }) =>
    margin ? `margin-bottom: ${theme.spacings[margin]}` : ""}
`;
