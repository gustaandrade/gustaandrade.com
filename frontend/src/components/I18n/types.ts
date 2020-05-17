import { Palette } from "../../themes/types";

export interface I18nProps {
  currentPalette: Palette;

  shuffleTheme: (theme?: Palette) => void;
}
