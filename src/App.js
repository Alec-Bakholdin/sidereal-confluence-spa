import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@material-ui/core";
import ThemeViewer from "./ThemeViewer";
import { useSelector, useDispatch } from "react-redux";
import { readTheme } from "./redux/actions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(readTheme()), [dispatch]);
    const theme = useSelector((state) => state.currentTheme);
    return (
        <ThemeProvider theme={createTheme(theme)}>
            <Router>
                <Switch>
                    <Route path={"/palette"}>
                        <ThemeViewer />
                    </Route>
                    <Route path={"/"}> MAIN MENU </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
