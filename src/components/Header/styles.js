import styled from "styled-components";
import { ReactComponent as CoffeeTable } from "../../assets/coffee-table.svg";
import { ReactComponent as WorkDesk } from "../../assets/work-desk.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue[700]};
  padding: 30px 70px;
  min-height: 300px;
  ${({ theme }) => theme.breakpoints.md} {
    border-radius: 0 0 90% 90% / 10%;
  }
`;

export const CoffeTableImage = styled(CoffeeTable)`
  right: 0;
  bottom: 0;
  margin-top: 30px;
  margin-right: 30px;
  position: absolute;
  display: none;
  ${({ theme }) => theme.breakpoints.xl} {
    display: block;
  }
`;

export const WorkDeskImage = styled(WorkDesk)`
  left: 0;
  bottom: 0;
  margin-top: 30px;
  margin-left: 30px;
  position: absolute;
  display: none;
  ${({ theme }) => theme.breakpoints.xl} {
    display: block;
  }
`;
