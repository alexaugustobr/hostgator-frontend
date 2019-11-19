import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white.default};
  @media (min-width: 768px) {
    padding-left: 390px;
  }
`;
