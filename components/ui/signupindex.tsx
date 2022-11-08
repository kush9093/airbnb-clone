
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import { State } from '../../interface';
import { signupAPI } from '../../lib/account-api';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Signupindex(prop:{data:string,onPress:Function,provider:string}) {

    const [values, setValues] = React.useState<State>({
        firstname:'',
        lastname:'',
        password: '',
        birthday:null,
        marketing:false,
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            if(prop !== 'marketing'){
                setValues({ ...values, [prop]: event.target.value });
            } else {
                setValues({ ...values, [prop]: event.target.checked});
            }
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const accounthandle = async () =>{
        try {
            let data = await signupAPI({...values,email:prop.data,state:null,provider:prop.provider});
            if(data.result){
                prop.onPress("PLEDGE")
            }   
        } catch(e){
            console.log(e);
        }
    }

    return (
        <>
            <Typography sx={{ pb: 2, pt: 2,flexDirection:"row", display: "flex" }} id="modal-modal-title">
                <ArrowBackIosNewIcon sx={{ml:1}} onClick={()=>{prop.onPress("SIGNIN")}} />
                <Typography sx={{width:"90%",textAlign:"center"}}>
                <b>회원가입 완료하기</b>
                </Typography>
            </Typography>
            <Divider />
            <Box sx={{ p: 2, overflow: "auto", height: 600 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField onChange={handleChange('lastname')} variant="outlined" placeholder='이름(예:길동)' fullWidth label="이름(예:길동)" type="text" id="fullWidth" />
                    <TextField onChange={handleChange('firstname')} variant="outlined" placeholder='성(예:홍)' fullWidth label="성(예:홍)" type="text" id="fullWidth" />
                    <Typography variant="caption" display="block" gutterBottom>
                        정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
                    </Typography>
                    <TextField onChange={handleChange('birthday')} variant="outlined" fullWidth type="Date" id="fullWidth" />
                    <Typography variant="caption" display="block" gutterBottom>
                        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.
                    </Typography>
                    <TextField variant="outlined" defaultValue={prop.data} placeholder='이메일' fullWidth label="이메일" type="email" id="fullWidth" />
                    <Typography variant="caption" display="block" gutterBottom>
                        예약 확인과 영수증을 이메일로 보내드립니다.
                    </Typography>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Divider />
                    <Box>
                        <label htmlFor='cd' style={{ cursor: "pointer" }}>
                            <Typography variant="overline" display="block" gutterBottom>
                                개인정보 수집 및 이용에 동의합니다.
                                <Checkbox id='cd' color="default" />
                            </Typography>
                        </label>
                        <label htmlFor='cd' style={{ cursor: "pointer" }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                1. 에어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을 이용하는 데 필요한 정보 당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를 수집합니다. 그렇지 않은 경우, 에어비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수 있습니다. 이러한 정보에는 다음이 포함됩니다.
                            </Typography>
                        </label>
                    </Box>
                    <Box>
                        <label htmlFor='dd' style={{ cursor: "pointer" }}>
                            <Typography variant="overline" display="block" gutterBottom>
                                마케팅 이메일 수신을 원합니다(선택).

                                <Checkbox onChange={handleChange('marketing')} id='dd' color="default" />
                            </Typography>
                        </label>
                        <label htmlFor='dd' style={{ cursor: "pointer" }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시 알림을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 수신을 거부할 수 있습니다.
                            </Typography>
                        </label>
                    </Box>
                    <Divider />
                    <Typography component="p" sx={{ fontSize: 13,m:1 }}>
                        동의 및 계속하기를 선택하여 에어비앤비 서비스 약관, 결제 서비스 약관, 위치기반서비스 이용약관, 차별 금지 정책, 개인정보 처리방침에 동의합니다.
                    </Typography>
                    <Button onClick={accounthandle} variant="contained" fullWidth color='error' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>회원가입</b>
                    </Button>
                </Typography>
            </Box>
        </>
    )

}