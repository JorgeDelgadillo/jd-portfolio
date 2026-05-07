import { ThemeRegistry } from './types'
import { catppuccinDark, catppuccinLight } from './catppuccin'
import { tokyoNight } from './tokyo-night'
import { gruvboxDark, gruvboxLight } from './gruvbox'
import { nord } from './nord'

export const themes: ThemeRegistry = {
  'catppuccin-dark': catppuccinDark,
  'catppuccin-light': catppuccinLight,
  'tokyo-night': tokyoNight,
  'gruvbox-dark': gruvboxDark,
  'gruvbox-light': gruvboxLight,
  'nord': nord
}
