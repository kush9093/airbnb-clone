import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import { chdEmailAPI } from '../../lib/account-api';
export default function Signinindex(props: { onPress: Function }) {
    const buttonstyle = {
        mt: 2, p: 1.5, color: "black", borderColor: "black"
    }

    const emailref= React.useRef<HTMLInputElement|null>(null);
    
    const emailhandle = async () =>{
       let data = await chdEmailAPI(emailref.current!.value);
       if(data.result){
        props.onPress("PASSWORD",data.data)
       } else {
        props.onPress("SIGNUP",emailref.current!.value)
       }
    }

    return (
        <>
            <Typography sx={{ textAlign: "center", pb: 2, pt: 2 }} id="modal-modal-title">
                <b>로그인 또는 회원 가입</b>
            </Typography>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Typography sx={{mb:2}} variant="h5" gutterBottom>
                        에어비앤비에 오신 것을 환영합니다.
                    </Typography>
                    <TextField inputRef={emailref} variant="outlined" placeholder='이메일' fullWidth label="이메일" type="email" id="fullWidth" />
                    <Button onClick={emailhandle} variant="contained" fullWidth color='error' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>계속</b>
                    </Button>
                    <Divider><small>또는</small></Divider>
                    <Button variant="outlined" fullWidth sx={buttonstyle}>
                        <b>페이스북으로 로그인하기</b>
                    </Button>
                    <Button variant="outlined" fullWidth sx={buttonstyle}>
                        <b>구글로 로그인하기</b>
                    </Button>
                    <Button variant="outlined" fullWidth sx={buttonstyle}>
                        <b>Apple 계정으로 로그인하기</b>
                    </Button>
                    <Button variant="outlined" fullWidth sx={buttonstyle}>
                        <b>전화번호로 로그인하기</b>
                    </Button>
                </Typography>
            </Box>
        </>
    )

}