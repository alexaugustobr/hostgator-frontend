import styled from "styled-components";
import { ReactComponent as RadioOff } from "../../assets/radio-off.svg";
import { ReactComponent as RadioOn } from "../../assets/radio-on.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.blue[500]};
  box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.blue[100]};
  width: 325px;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 26px;
  padding: ${({ theme }) => `${theme.spacings.xs} ${theme.spacings.md}`};
  cursor: pointer;
  ${({ theme, checked }) =>
    checked
      ? `border: 1px solid ${theme.colors.blue[500]}; background-color: ${theme.colors.blue.default};`
      : ""};
`;

export const Checked = styled(RadioOn)`
  margin-right: ${({ theme }) => theme.spacings.xs};
`;

export const Unchecked = styled(RadioOff)`
  margin-right: ${({ theme }) => theme.spacings.xs};
`;
