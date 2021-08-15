import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ThemeViewerRow from "./ThemeViewerRow";

const ThemePreview = () => {
    const colorOptions = [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
    ];
    const shadeOptions = ["light", "main", "dark"];

    return (
        <Grid item container spacing={1}>
            {colorOptions.map((colorName) => (
                <ThemeViewerRow color={colorName} shadeOptions={shadeOptions} />
            ))}
        </Grid>
    );
};

export default ThemePreview;
