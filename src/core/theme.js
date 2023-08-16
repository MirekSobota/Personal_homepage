const breakpoint = {
  mobileMax: "767px",
  iPad: "1023px",
  desktopHD: "1366px",
};

const colorList = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  iron: "#d2d6db4d",
  mineShaft: "#252525",
  grey: "#363636",
  shadowLight: "#090a3308",
  shadowDark: "#090a3305",
  tropicalBlue: "#CDE0F7",
  azure: "#35669E",
  tundora: "#414141",
};

export const lightTheme = {
  primary: {
    text: colorList.slateGray,
    background: colorList.whiteLilac,
  },
  primaryBlue: {
    text: colorList.scienceBlue,
    background: colorList.scienceBlue,
  },
  header: {
    text: colorList.mineShaft,
  },
  white: {
    text: colorList.white,
  },
  section: {
    background: colorList.white,
  },
  divider: {
    background: colorList.iron,
  },
  svg: {
    fill: colorList.mineShaft,
    hover: colorList.scienceBlue,
  },
  svgTheme: {
    fillBackGround: colorList.mercury,
    fillToggle: colorList.slateGray,
    fillSun: colorList.white,
  },
  shadow: {
    colorOne: colorList.shadowLight,
    colorTwo: colorList.shadowDark,
  },
  border: {
    border: colorList.iron,
    borderHover: colorList.tropicalBlue,
  },
  breakpoint
};

export const darkTheme = {
  primary: {
    text: colorList.white,
    background: colorList.mineShaft,
  },
  primaryBlue: {
    text: colorList.dodgerBlue,
    background: colorList.dodgerBlue,
  },
  header: {
    text: colorList.white,
  },
  white: {
    text: colorList.white,
  },
  section: {
    background: colorList.grey,
  },
  divider: {
    background: colorList.mercury,
  },
  svg: {
    fill: colorList.white,
    hover: colorList.dodgerBlue,
  },
  svgTheme: {
    fillBackGround: colorList.slateGray,
    fillToggle: colorList.white,
    fillSun: colorList.mineShaft,
  },
  shadow: {
    colorOne: colorList.shadowLight,
    colorTwo: colorList.shadowDark,
  },
  border: {
    border: colorList.tundora,
    borderHover: colorList.azure,
  },
  breakpoint
};
