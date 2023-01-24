import styled, { css } from "styled-components";

export const Default = styled.button`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: transparent;
    outline: 2px solid ${theme.colors.green};
    border: 0;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-transform: uppercase;
    font-weight: ${theme.font.weight.medium};
    transition: all 0.15s ease-in;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};

    &:hover {
      color: ${theme.colors.background};
      background-color: ${theme.colors.green};
      outline-offset: ${theme.border.outlineOffiset};
    }
  `}
`;
