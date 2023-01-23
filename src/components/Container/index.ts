import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
    position: relative;

    @media (min-width: 576px) {
      max-width: ${theme.grid.container.sm};
    }
    @media (min-width: 768px) {
      max-width: ${theme.grid.container.md};
    }
    @media (min-width: 992px) {
      max-width: ${theme.grid.container.lg};
    }
    @media (min-width: 1200px) {
      max-width: ${theme.grid.container.xlg};
    }
    @media (min-width: 1400px) {
      max-width: ${theme.grid.container.xxlg};
    }
  `}
`;

export default Container;
