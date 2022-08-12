import colors from './colors'

const commonTheme = {
  fontSize: '14px',
  borderRadiusSm: '1rem',
  borderRadiusMd: '2rem',
  borderRadiusLg: '3rem',
  transition: 'all 0.5s ease',
  font: '"Nunito", sans-serif',
  fontTitle: '"Barlow Condensed", sans-serif',
}

const light = {
  ...commonTheme,
  background: colors.white,
  borderColor: colors.grayLight,
  text: colors.black,
  textSecondary: colors.blue ,
  primary: colors.teal,
  primaryDark: colors.tealDark,
  danger: colors.red,
  white: colors.white,
  link: colors.teal,
  menu: colors.white,
  footer: colors.black,
  slideOverlay: colors.black,
  filter: colors.grayLight,
  disabled: colors.grayLight,
  filterHover: colors.gray,
  buttonDisabled: colors.gray,
  button: colors.teal,
}

export const theme = {
  light
}
