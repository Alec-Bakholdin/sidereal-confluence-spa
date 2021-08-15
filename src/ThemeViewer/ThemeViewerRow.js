import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ColorBox from "./ColorBox";

const ThemeViewerRow = ({ color, shadeOptions, spacing }) => {
    return (
        <Grid item container spacing={spacing} xs={12}>
            {shadeOptions.map((shade) => (
                <Grid item xs={4}>
                    <ColorBox color={color} shade={shade} />
                </Grid>
            ))}
        </Grid>
    );
};

ThemeViewerRow.defaultProps = {
    spacing: 2,
};

ThemeViewerRow.propTypes = {
    color: PropTypes.string,
    shadeOptions: PropTypes.arrayOf(PropTypes.string),
};

export default ThemeViewerRow;
