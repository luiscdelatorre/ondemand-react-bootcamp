import colors from './colors'

const commonTheme = {
  fontSize: '14px',
  borderRadiusSm: '1rem',
  borderRadius: '3rem',
  borderRadiusLg: '5rem',
  transition: 'all 0.5s ease',
  fontTitle: '"Bebas Neue", sans-serif'
}

const light = {
  ...commonTheme,
  background: colors.gray100,
  borderColor: colors.gray200,
  text: colors.gray900,
  textSecondary: colors.gray100,
  primary: colors.teal400,
  primaryDark: colors.teal600,
  danger: colors.red,
  link: colors.teal400,
  menu: colors.gray100,
  footer: colors.gray900,
  slideOverlay: colors.gray900,
  filter: colors.gray200,
  disabled: colors.gray200,
  filterHover: colors.gray300,
  buttonDisabled: colors.gray300,
}

export const theme = {
  light
}
