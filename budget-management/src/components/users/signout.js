import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/index";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const SignOutButton = () => {
  const authenticatedUser = useSelector((state) =>
    state.auth.users.find((user) => user.isAuthenticated)
  );
  const fullName = authenticatedUser ? authenticatedUser.fullName : "";

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Grid item xs={2} md={2} l={12}>
      <Typography variant="body1" align="right" color="textPrimary">
        {fullName}
        <IconButton onClick={handleSignOut} color="inherit">
          <LogoutIcon />
        </IconButton>
      </Typography>
    </Grid>
  );
};

export default SignOutButton;
