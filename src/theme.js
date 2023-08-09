const colorList = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    scienceBlue: "#0366D6",
    DodgerBlue:"#2188FF",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    iron: "#D1D5DA",
    mineShaft: "#252525",
    grey:"#363636"
};


export const lightTheme = {
    primary: {
        text: colorList.slateGray,
        background: colorList.whiteLilac,
    },
    header: {
        text: colorList.mineShaft,
    },
    white: {
        text: colorList.white,
    },
    section:{
        background: colorList.white,
    },
    divider:{
        background: colorList.iron,
    },
    primaryBlue: {
        text: colorList.scienceBlue,
        background: colorList.scienceBlue,
    },
    svg: {
        fill: colorList.mineShaft,
        hover: colorList.scienceBlue,

    },

};  

export const darkTheme = {
    primary: {
        text: colorList.white,
        background: colorList.mineShaft,
    },
    header: {
        text: colorList.white,
    },
    white: {
        text: colorList.white,
    },
    section:{
        background: colorList.grey,
    },
    divider:{
        background: colorList.mercury,
    },
    primaryBlue: {
        text: colorList.scienceBlue,
        background: colorList.scienceBlue,
    },
    svg: {
        fill: colorList.white,
        hover: colorList.DodgerBlue,
    },
};