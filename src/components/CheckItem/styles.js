import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/check.svg";

export const CheckIcon = styled(Check)`
  margin-right: ${({ theme }) => theme.spacings.xxs};
`;

export const Container = styled.div`
  margin-right: ${({ theme }) => theme.spacings.xs};
  text-align: center;
`;
