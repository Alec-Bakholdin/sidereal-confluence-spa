import { Box, Button, Typography, Zoom } from "@mui/material";
import { useState } from "react";
import hoverSound from "assets/audio/hover_button.mp3";

type typographyVariant =
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2";

const barHeight = (variant: typographyVariant) => {
  if (["body1", "body2", "button", "caption"].includes(variant)) {
    return "1px";
  } else {
    return "2px";
  }
};

export function SiderealButton({
  name,
  onClick,
  textVariant = "body1",
}: {
  name: string;
  onClick: () => void;
  textVariant?: typographyVariant;
}) {
  const [transition, setTransition] = useState(false);
  const [audio] = useState(new Audio(hoverSound));

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleFocus = async () => {
    setTransition(true);
    audio.volume = 0.2;
    await audio.play();
  };

  const handleLoseFocus = () => {
    setTransition(false);
    audio.pause();
  };

  return (
    <Box
      onMouseEnter={handleFocus}
      onMouseLeave={handleLoseFocus}
      onFocus={handleFocus}
      onBlur={handleLoseFocus}
    >
      <Button
        onClick={handleClick}
        variant={"text"}
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Typography variant={textVariant} lineHeight={"0.85"}>
          {name}
        </Typography>
      </Button>
      <Zoom in={transition} timeout={transition ? 50 : 0}>
        <Box
          className={"menu-button-horizontal-bar"}
          bgcolor={"divider"}
          sx={{ height: barHeight(textVariant) }}
        />
      </Zoom>
    </Box>
  );
}

export default SiderealButton;
