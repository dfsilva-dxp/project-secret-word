import "styled-components";

import { MyTheme } from "../styles";

type ThemeType = typeof MyTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
