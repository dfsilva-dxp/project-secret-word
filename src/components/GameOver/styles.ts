import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    img {
      max-width: 14rem;
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    h1 {
      font-size: 4rem;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.xsmall};

      strong {
        font-size: 2rem;
        color: ${theme.colors.red};
      }
    }
  `}
`;
