/**
 * The Global Payments wordmark for terminals.
 *
 * Traced from the official digital wordmark (global-logo-color-digital.svg, 2025
 * identity) into Unicode quadrant blocks, so the heavy "global", the light
 * "payments", the double-storey g, the Arc and the Ping all come from the real
 * outline rather than a lookalike font. Two sizes cover 100+ and 80+ column
 * terminals; anything narrower gets the one-line lockup.
 */

/** 93 columns x 7 rows. */
export const WORDMARK_LARGE: readonly string[] = [
  "   ▖    ▄▙                                                                                   ",
  " ▟▛▘  ▄    █▌        ▐█             ▐█                                              ▐▌       ",
  "▟█ ▗█▛▀▜█▖ █▌ ▄█▀▀█▙ ▐█▛▀▜█▖ ▟▛▀▀█▖ ▐█  █▞▀▀▀▙ ▐▀▀▀▜▖▜▖  ▟▘▐█▀▀▜▄▀▀▀▙ ▗▛▀▀▜▄ █▛▀▀▜▖▝▜▛▘ █▀▀▀▌",
  "█▌ ▐█▌ ▗█▌ █▌▐█▌  ▐█▌▐█   ██ ▄█▀▀█▌ ▐█  █    █ ▄▞▀▀▜▌ █ ▐▌ ▐▌   █   █ █▀▀▀▀▀ █   ▐▌ ▐▌  ▀▀▘▄▄",
  "▐█▖ █▛▀▀▀  █▌ ▀█▄▄█▀ ▐█▚▄▟█▘▝█▙▄▟██ ▐█  █▚▄▄▄▀ ▜▄▄▄▜▙ ▝▙▛  ▐▌   █   █ ▝▙▄▄▟▀ █   ▐▌ ▐▙▖▝▜▄▄▄▛",
  " ▀▘▗█▀▀▀▜▙                              █             ▗▛                                     ",
  "   ▀▜▙▄▄█▀                              ▀            ▀▀                                      ",
];

/** 74 columns x 6 rows. */
export const WORDMARK_MEDIUM: readonly string[] = [
  "  ▄   ▗▙ ▄       ▄          ▗▄                                            ",
  "▗█▘▗▄▄▄ ▐█  ▄▄▖  █▖▄▄   ▄▄▖ ▐█  ▖▗▄▖  ▗▄▄ ▗   ▖▗ ▄▖ ▄▄   ▄▄▖ ▗▗▄▄ ▗█▄ ▗▄▄ ",
  "█▌ █▘ ▜▌▐█ █▀ ▜▙ █▛ ▜█ ▀▙▄█▖▐█  █▘ ▝▙ ▘  ▙▝▌ ▟▘▐▌ ▝▛  █ █▄▄▟▌▐▘ ▝▙ █  ▙▖ ▀",
  "▜▌ ▜▙▄█▘▐█ █▄ ▟▛ █▙ ▟▛▗█▘▗█▌▐█  █▖ ▗▛▐▌ ▗█ ▐▄▌ ▐   ▌  █ ▙  ▗▖▐   █ █  ▄  █",
  "▝▀ █▙▄▄▄ ▀  ▝▀▘  ▀ ▀▀  ▝▀▘▝▘▝▀  █▝▀▘  ▝▀▘▝▘ ▛  ▝   ▘  ▝  ▀▀▘ ▝   ▘ ▝▀  ▀▀ ",
  "  ▝▜▄▄▟▀                        ▀          ▀                              ",
];

