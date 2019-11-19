import styled from "styled-components";
import { ReactComponent as CoffeeTable } from "../../assets/coffee-table.svg";
import { ReactComponent as WorkDesk } from "../../assets/work-desk.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue[700]};
  padding: 55px 70px;
`;

export const CoffeTableImage = styled(CoffeeTable)`
  display: none;
  ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

export const WorkDeskImage = styled(WorkDesk)`
  display: none;
  ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;
