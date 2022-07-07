const size = {
  phone: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
  desktopLg: 1400,
}
  
const device = {
  phone: `screen and (max-width: ${size.phone - 1}px)`,
  phoneLg: `screen and (min-width: ${size.phone}px)`,
  tablet: `screen and (min-width: ${size.tablet}px)`,
  laptop: `screen and (min-width: ${size.laptop}px)`,
  desktop: `screen and (min-width: ${size.desktop}px)`,
  desktopLg: `screen and (min-width: ${size.desktopLg}px)`,
  onlySm: `screen and (max-width: ${size.laptop - 1}px)`
}

export default device
