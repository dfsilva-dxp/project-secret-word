import styled, { css } from "styled-components";

export const Display = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    text-align: center;

    h1 {
      margin-bottom: ${theme.spacings.xsmall};
      font-size: 2.5em;
    }

    h3 {
      margin-bottom: ${theme.spacings.xsmall};
      strong {
        color: ${theme.colors.green};
      }
    }

    p + p {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;

export const WordContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border: 1rem solid ${theme.colors.green};
    border-radius: ${theme.border.radius};

    display: flex;
    gap: ${theme.spacings.xsmall};
    align-items: center;
    justify-content: center;
  `}
`;

export const LetterWrap = styled.span`
  ${({ theme }) => css`
    width: 8rem;
    height: 8rem;
    background-color: ${theme.colors.elements};
    border-radius: ${theme.border.radius};
    font-size: 8rem;
    line-height: 1;
    text-transform: uppercase;

    display: grid;
    place-items: center;
  `}
`;

export const FormGroup = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const InputGroup = styled.div`
  ${({ theme }) => css`
    height: 3rem;
    background: ${theme.colors.elements};
    border: 2px solid transparent;
    border-radius: ${theme.border.radius};

    display: flex;

    &:focus-within {
      outline-offset: ${theme.border.outlineOffiset};
      border: 2px solid ${theme.colors.green};
    }

    &:focus-within button {
      color: ${theme.colors.green};
    }

    input[type="text"],
    button {
      background: transparent;
      border: 0;
      outline: 0;
    }

    input {
      flex: 1;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    }

    button {
      width: 3rem;
      display: grid;
      place-items: center;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};

    span {
      text-transform: uppercase;
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.red};
    }
  `}
`;
