import styled from "styled-components";
import { transparentize } from "polished";

export const StyledButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  border-radius: 26px;
  color: ${({ theme }) => theme.colors.white.default};
  font-size: ${({ theme }) => theme.typography.subHeadings.lg}
  padding: ${({ theme }) => theme.spacings.sm}
  background-color: ${({ theme, color }) => theme.colors[color].default};
  width: 100%;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.regular}
  transition: 0.3s ease;
  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color][700]};
    box-shadow: 0 6px 12px 1px ${({ theme }) =>
      transparentize(0.85, theme.colors.black.default)}
  }
`;
