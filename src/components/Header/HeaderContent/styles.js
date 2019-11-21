import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px ${({ theme }) => theme.spacings.xl};
`;

export const CheckItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;