import {
  AppBar,
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import SignupFrom from "../ui/signup-from";
import { signOut, useSession } from "next-auth/react";

export default function CloneHeader() {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [signup, setSignup] = useState<boolean>(false);

  const { data, status } = useSession();

  const openMenuHandle: MouseEventHandler = (evt) => {
    setAnchorEl(evt.currentTarget);
  };
  const closeMenuHandle = () => {
    setAnchorEl(null);
  };

  const signupmodal: Function = (val: boolean): void => {
    setSignup(val);
  }






  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h5" color="inherit" noWrap>
          <Image src={"/logo.png"} alt="이미지" width={120} height={60} />
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            gap: "0.8rem",
            color: "gray",
            border: "1px solid gray",
            borderRadius: "50px",
          }}
          onClick={openMenuHandle}
        >
          <MenuIcon /> <AccountCircleIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={closeMenuHandle}
          sx={{
            mt: "0.5rem",
          }}
        >
          {
            status === "unauthenticated" &&
            <>
              <MenuItem onClick={() => { signupmodal(true) }}>회원 가입</MenuItem>
              <MenuItem onClick={() => { signupmodal(true) }}>로그인</MenuItem>
              <Divider />
              <MenuItem onClick={closeMenuHandle}>숙소 호스트 되기</MenuItem>
              <MenuItem onClick={closeMenuHandle}>도움말</MenuItem>
            </>
          }
          {
            status === "authenticated" && 
            <>
            <MenuItem onClick={()=>{ signOut({ redirect: false })}}>로그아웃</MenuItem>
            </>
          }

        </Menu>
      </Toolbar>
      {
        signup && <SignupFrom signupmodal={signupmodal} signup={signup} />
      }
    </>
  );
}
