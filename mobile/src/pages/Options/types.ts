import { Palette } from "../../themes/types";

export interface OptionsProps {
  theme: Palette;

  changeCustomTheme?: (palette?: Palette) => void;
}
