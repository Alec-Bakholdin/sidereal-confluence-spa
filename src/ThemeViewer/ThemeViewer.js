import React from "react";
import { Grid } from "@material-ui/core";
import ThemeColorChanger from "./ThemeColorChanger";
import ThemePreview from "./ThemePreview";

const ThemeViewer = () => {
    return (
        <>
            <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
            >
                <ThemePreview />
                <ThemeColorChanger />
            </Grid>
        </>
    );
};

export default ThemeViewer;
