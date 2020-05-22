import { Palette } from "./themes/types";

export interface RoutesProps {
  theme: Palette;

  changeTheme: (palette?: Palette) => void;
}
