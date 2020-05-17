import { Palette } from "../../themes/types";

export interface HeaderProps {
  currentPalette: Palette;

  shuffleTheme: (theme?: Palette) => void;
}
