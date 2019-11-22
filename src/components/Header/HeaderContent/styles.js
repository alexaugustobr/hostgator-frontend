import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px ${({ theme }) => theme.spacings.xl};
  ${({ theme }) => theme.breakpoints.xl} {
    width: 25%;
  }
`;

export const CheckItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
