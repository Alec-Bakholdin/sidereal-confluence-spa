export const changeTheme = (newTheme) => ({
    type: "CHANGE_THEME",
    payload: newTheme,
});

export const readTheme = () => ({
    type: "READ_THEME",
});

export const focusColor = ({ color, shade }) => ({
    type: "FOCUS_COLOR",
    payload: {
        color,
        shade,
    },
});
