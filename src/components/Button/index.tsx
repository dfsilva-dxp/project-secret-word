import * as S from "./styles";

import { ButtonProps } from "./button";

const Button = ({ children }: ButtonProps) => {
  return <S.Default>{children}</S.Default>;
};

export default Button;
