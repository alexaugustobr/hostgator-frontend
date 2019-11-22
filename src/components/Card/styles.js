import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: ${({ theme }) => `${theme.spacings.xl}`} 0;
  background-color: ${({ theme }) => theme.colors.white.default};
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacings.xs};
  ${({ theme, featured }) =>
    featured
      ? `border-top: 8px solid ${theme.colors.orange.default};
     border-bottom: 4px solid ${theme.colors.orange.default};`
      : ""}
`;
