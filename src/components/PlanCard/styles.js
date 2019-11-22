import styled from "styled-components";
import { ReactComponent as Info } from "../../assets/info.svg";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue[50]};
  margin: ${({ theme }) => theme.spacings.lg} 0;
`;

export const ValueBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px ${({ theme }) => theme.spacings.lg};
`;

export const ItemsBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px ${({ theme }) => theme.spacings.lg};
`;

export const PlanItem = styled.span`
  margin-bottom: ${({ theme, isLastItem }) =>
    isLastItem ? "0px" : theme.spacings.xs};
`;

export const Values = styled.div`
  display: flex;
  align-items: baseline;
`;

export const OriginalValue = styled.div`
  margin-right: ${({ theme }) => theme.spacings.xxs};
  text-decoration: line-through;
`;

export const MonthlyValue = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxs};
  margin-bottom: ${({ theme }) => theme.spacings.lg};
`;

export const InfoText = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacings.xl};
`;

export const InfoIcon = styled(Info)`
  margin-left: ${({ theme }) => theme.spacings.xs};
  align-items: center;
`;
