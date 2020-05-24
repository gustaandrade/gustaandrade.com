import { PillIcon } from "../../resources/enums";
import { Palette } from "../../themes/types";

export interface ProjectProps {
  theme: Palette;
  icon: PillIcon;
  title: string;
  description: string;
  url: string;
}
