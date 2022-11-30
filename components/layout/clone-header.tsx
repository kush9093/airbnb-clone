import {
  AppBar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import SignupFrom from "../ui/signup-from";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function CloneHeader() {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [signup, setSignup] = useState<boolean>(false);

  const { data, status } = useSession();
  
  const router = useRouter();


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
          <MenuIcon /> {status === "unauthenticated" ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon/>}
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
            <Box>
              <MenuItem onClick={() => { signupmodal(true) }}>회원 가입</MenuItem>
              <MenuItem onClick={() => { signupmodal(true);closeMenuHandle(); }}>로그인</MenuItem>
              <Divider />
              <MenuItem onClick={()=>{router.push("/become-a-host")}}>숙소 호스트 되기</MenuItem>
              <MenuItem onClick={closeMenuHandle}>도움말</MenuItem>
            </Box>
          }
          {
            status === "authenticated" && 
            <Box>
            <MenuItem sx={{fontWeight:"bold"}}>메시지</MenuItem>
            <MenuItem sx={{fontWeight:"bold"}}>알림</MenuItem>
            <MenuItem sx={{fontWeight:"bold"}} onClick={()=>{router.push("/travel")}}>여행</MenuItem>
            <MenuItem sx={{fontWeight:"bold"}}>위시리스트</MenuItem>
            <Divider />
            <MenuItem onClick={()=>{router.push("/become-a-host")}}>숙소 호스트 되기</MenuItem>
            <MenuItem>체험 호스팅하기</MenuItem>
            <MenuItem>호스트 추천하기</MenuItem>
            <MenuItem>계정</MenuItem>
            <Divider />
            <MenuItem>도움말</MenuItem>
            <MenuItem onClick={()=>{ signOut({ redirect: false }); closeMenuHandle()}}>로그아웃</MenuItem>
            </Box>
          }

        </Menu>
      </Toolbar>
      {
        signup && <SignupFrom signupmodal={signupmodal} signup={signup} />
      }
    </>
  );
}
