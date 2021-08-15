import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { focusColor as focusColorAction } from "../redux/actions";

const ColorBox = ({ color, shade }) => {
    const dispatch = useDispatch();
    const focusColor = useSelector((state) => state.focusColor);
    const selected = focusColor.color === color && focusColor.shade === shade;
    if (color === "success" && shade === "main") {
        console.log("focusColor", focusColor, selected);
    }
    const handleClick = () => {
        dispatch(focusColorAction({ color, shade }));
    };

    return (
        <Box
            bgcolor={`${color}.${shade}`}
            color={`${color}.contrastText`}
            p={2}
            boxShadow={selected ? 10 : 0}
            margin={0.5}
            onClick={handleClick}
        >
            {`${color}.${shade}`}
        </Box>
    );
};

ColorBox.propTypes = {
    color: PropTypes.string,
    shade: PropTypes.string,
};

export default ColorBox;
