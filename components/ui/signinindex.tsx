import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import { chdEmailAPI } from '../../lib/account-api';
import CloseIcon from '@mui/icons-material/Close';
import { signIn } from 'next-auth/react';
import { email_check } from './formtest';
import ErrorIcon from '@mui/icons-material/Error';
export default function Signinindex(props: { onPress: Function,onClose:Function }) {
    const buttonstyle = {
        mt: 2, p: 1.5, color: "black", borderColor: "black"
    }
    const [chd,setChd] = React.useState<boolean|null>(null)
    const [err,setErr] = React.useState<string|null>(null)

    const emailref = React.useRef<HTMLInputElement | null>(null);


    const chdemail = ()=>{
        if(email_check(emailref.current!.value)===true){
            setChd(true)
        }else {
            setChd(false)
        }
        setErr(null);
    }

    const emailhandle = async () => {
       if(email_check(emailref.current!.value)===true){
        let data = await chdEmailAPI(emailref.current!.value);
        if (data.result === true) {
            props.onPress("PASSWORD", data.data)
        } else {
            props.onPress("SIGNUP", emailref.current!.value)
        }
       } else {
        setErr("이메일을 입력하세요.")
       }
        
    }

    const googleSigninHandle = () => {
        const topX = screenX + screen.width / 2 - 400 / 2
        const topY = screenY + screen.height / 2 - 550 / 2
        window.open(`${process.env.NEXT_PUBLIC_SERVER_IP}/popup/gauth`, "popup", `width=400,height=550,top=${topY},left=${topX}`);
    }


    return (
        <>
            <Typography sx={{ pb: 2, pt: 2,flexDirection:"row", display: "flex",justifyContent:"space-between" }} id="modal-modal-title">
                <CloseIcon sx={{ml:1}} onClick={()=>{props.onClose()}} />
                <Typography sx={{}}>
                <b>로그인 또는 회원 가입</b>
                </Typography>
                <Typography></Typography>
            </Typography>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Typography sx={{ mb: 2 }} variant="h5" gutterBottom>
                        에어비앤비에 오신 것을 환영합니다.
                    </Typography>
                    <TextField inputRef={emailref} helperText={err} error={chd === false?true:false} onChange={chdemail} variant="outlined" placeholder='이메일' fullWidth label="이메일" type="email" />
            
                    <Button onClick={emailhandle} variant="contained" fullWidth color='error' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>계속</b>
                    </Button>
                    <Divider><small>또는</small></Divider>
                    <Button variant="outlined" fullWidth sx={buttonstyle}>
                        <b>페이스북으로 로그인하기</b>
                    </Button>
                    <Button onClick={googleSigninHandle} variant="outlined" fullWidth sx={buttonstyle}>
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