import styled, { css } from "styled-components";

export const Wrap = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 1em;

    h1 {
      font-size: 4rem;
    }

    p {
      color: ${theme.colors.label};
    }
  `}
`;
