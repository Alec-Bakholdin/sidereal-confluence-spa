import React, { ReactElement, useState } from "react";
import {
  AppBar,
  Box,
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

export function SiderealAppBar(): ReactElement {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
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

  return (
    <AppBar>
      <Toolbar variant={"dense"}>
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
