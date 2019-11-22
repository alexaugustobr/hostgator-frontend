import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.xxl};
`;

export const Label = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;
