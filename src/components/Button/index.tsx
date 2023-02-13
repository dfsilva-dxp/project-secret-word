import * as S from "./styles";

import { ButtonProps } from "./button";

const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};

export default Button;
