import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white.default};

  ${({ theme }) => theme.breakpoints.md} {
    padding-left: 390px;
  }
`;
