import { ReactElement, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Box, Stack } from "@mui/material";
import planet from "../../assets/images/menacing-planet.png";
import SiderealButton from "../../components/SiderealButton/SiderealButton";
import { signIn, signUp } from "../../redux/reducers/auth";
import SiderealTextField from "../../components/SiderealTextField/SiderealTextField";

export function SignInPage(): ReactElement {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    dispatch(signIn({ username, password }));
  };
  const handleSignUp = () => {
    dispatch(signUp({ username, password }));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${planet})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
      }}
      className={"center-box"}
    >
      <Box width={500} padding={5}>
        <Stack spacing={2}>
          <SiderealTextField
            label={"username"}
            value={username}
            onEnterPressed={handleSignIn}
            onChange={(e) => setUsername(e.target.value)}
          />
          <SiderealTextField
            label={"password"}
            type={"password"}
            value={password}
            onEnterPressed={handleSignIn}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack direction={"row"} spacing={3} justifyContent={"space-evenly"}>
            <SiderealButton onClick={handleSignIn} name={"Sign In"} />
            <SiderealButton onClick={handleSignUp} name={"Register"} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignInPage;
