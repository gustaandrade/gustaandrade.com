import { Palette } from "../../themes/types";

export interface HomeProps {
  theme: Palette;

  changeCustomTheme?: (palette?: Palette) => void;
}
