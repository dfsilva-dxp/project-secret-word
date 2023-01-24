import styled, { css } from "styled-components";

export const Wrap = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 1em;

    p {
      color: ${theme.colors.label};
    }
  `}
`;
