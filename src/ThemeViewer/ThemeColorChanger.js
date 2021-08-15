import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";
import { Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import { changeTheme, readTheme } from "../redux/actions";
import { writeFileSync } from "fs";

const getHexColor = (colorString) => {
    const rgbRegex = /rgb\((\d+), (\d+), (\d+)\)/gm;
    if (colorString.match(rgbRegex)) {
        const groups = rgbRegex.exec(colorString);
        const toHex = (numStr) => parseInt(numStr).toString(16).padStart(2, 0);
        return `#${toHex(groups[1])}${toHex(groups[2])}${toHex(groups[3])}`;
    } else {
        return colorString;
    }
};

const ThemeColorChanger = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const focusColor = useSelector((state) => state.focusColor);

    let [pickerColor, updatePickerColor] = useState("#ffffff");
    useEffect(() => {
        if (focusColor.color && focusColor.shade) {
            updatePickerColor(
                getHexColor(theme.palette[focusColor.color][focusColor.shade])
            );
        }
    }, [focusColor, theme]);

    const handleColorChange = (color) => {
        updatePickerColor(color);
    };

    const handleColorChangeComplete = (color) => {
        const newTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                [focusColor.color]: {
                    ...theme.palette[focusColor.color],
                    [focusColor.shade]: color.hex,
                },
            },
        };
        dispatch(changeTheme(newTheme));
    };

    const handleSubmit = () => {
        const themeStr = JSON.stringify(theme, null, 4);
        const element = document.createElement("a");
        const file = new Blob([themeStr], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "theme.json";
        document.body.appendChild(element);
        element.click();
    };

    const handleReset = () => {
        dispatch(readTheme());
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={2}>
                <SketchPicker
                    color={{ hex: pickerColor }}
                    onChange={handleColorChange}
                    onChangeComplete={handleColorChangeComplete}
                />
            </Grid>
            <Grid
                item
                xs={1}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
            >
                <Grid item>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleReset}>
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ThemeColorChanger;
