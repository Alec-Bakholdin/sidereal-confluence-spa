import { Box, Button, Typography, Zoom } from "@mui/material";
import PropTypes, { InferProps } from "prop-types";
import { useState } from "react";

export function SiderealButton({
  name,
  onClick,
}: InferProps<typeof SiderealButton.propTypes>) {
  const [transition, setTransition] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Box
      onMouseEnter={() => setTransition(true)}
      onMouseLeave={() => setTransition(false)}
      onFocus={() => setTransition(true)}
      onBlur={() => setTransition(false)}
      paddingTop={"15px"}
      paddingBottom={"15px"}
    >
      <Button
        onClick={handleClick}
        variant={"text"}
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          padding: 0,
          paddingBottom: 10,
        }}
      >
        <Typography variant={"h4"} lineHeight={"0.85"}>
          {name}
        </Typography>
      </Button>
      <Zoom in={transition} timeout={transition ? 100 : 0}>
        <Box
          className={"menu-button-horizontal-bar"}
          bgcolor={"divider"}
          sx={{ height: "2px" }}
        />
      </Zoom>
    </Box>
  );
}

SiderealButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default SiderealButton;
