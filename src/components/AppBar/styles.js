import styled from "styled-components";

export const Container = styled.div`
  height: 51.5px;
  background-color: ${({ theme }) => theme.colors.white.default};
  @media (min-width: 768px) {
    padding-left: 390px;
  }
`;
