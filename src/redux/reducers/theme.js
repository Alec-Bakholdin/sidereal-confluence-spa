import themeJson from "../../assets/palette.json";

const currentTheme = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return action.payload;
        case "READ_THEME":
            return themeJson;
        default:
            return state;
    }
};

const focusColor = (state = {}, action) => {
    switch (action.type) {
        case "FOCUS_COLOR":
            return action.payload;
        default:
            return state;
    }
};

export const theme = {
    currentTheme,
    focusColor,
};
