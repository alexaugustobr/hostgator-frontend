import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.xxl};
`;

export const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExtraInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.md};
  ${({ theme }) => theme.breakpoints.lg} {
    margin-top: ${({ theme }) => theme.spacings.sm};
  }
`;
