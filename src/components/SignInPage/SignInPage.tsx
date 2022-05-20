import { KeyboardEvent, ReactElement, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Box, Stack, TextField } from "@mui/material";
import planet from "../../assets/images/menacing-planet.png";
import SiderealButton from "../SiderealButton/SiderealButton";
import { signIn } from "../../redux/reducers/auth";

export function SignInPage(): ReactElement {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    dispatch(signIn({ username, password }));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
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
          <TextField
            variant={"filled"}
            label={"username"}
            value={username}
            onKeyDown={handleKeyDown}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant={"filled"}
            label={"password"}
            type={"password"}
            value={password}
            onKeyDown={handleKeyDown}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack direction={"row"} spacing={3} justifyContent={"space-evenly"}>
            <SiderealButton onClick={handleSignIn} name={"Sign In"} />
            <SiderealButton onClick={() => {}} name={"Register"} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignInPage;
