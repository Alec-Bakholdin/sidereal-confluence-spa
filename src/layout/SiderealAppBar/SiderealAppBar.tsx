import React, { ReactElement, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/reducers/user";
import { signOut } from "../../redux/reducers/auth";
import { destroyGame, selectGame } from "../../redux/reducers/game";

export function SiderealAppBar(): ReactElement {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const game = useAppSelector(selectGame);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    dispatch(signOut({}));
  };
  const handleDestroyGame = () => {
    if (game) {
      dispatch(destroyGame({ id: game.id }));
    }
  };

  return (
    <AppBar>
      <Toolbar variant={"dense"}>
        {game && (
          <>
            <Button onClick={handleDestroyGame}>
              <Typography variant={"h6"}>Destroy Game</Typography>
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant={"h6"}>Game Id: {game.id}</Typography>
          </>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant={"h6"}>{user?.username}</Typography>
        <IconButton onClick={handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleMenuClose}
          keepMounted
        >
          <MenuItem key={"sign out"} onClick={handleSignOut}>
            Sign Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default SiderealAppBar;
