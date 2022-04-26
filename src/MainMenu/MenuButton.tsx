import {Box, Button, Typography, Zoom} from "@mui/material";
import PropTypes, { InferProps } from "prop-types";
import { useState } from "react";

export function MenuButton({
  name,
  onClick,
}: InferProps<typeof MenuButton.propTypes>) {
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
    >
      <Button
        onClick={handleClick}
        variant={"text"}
        disableRipple={true}
        style={{ backgroundColor: "transparent" }}
      >
        <Typography variant={"h4"}>{name}</Typography>
      </Button>
      <Zoom in={transition} timeout={transition ? 100 : 0}>
        <Box
          className={"menu-button-horizontal-bar"}
          bgcolor={"divider"}
          sx={{ height: "1px" }}
        />
      </Zoom>
    </Box>
  );
}

MenuButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuButton;
