import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { pwd } from '../../interface';
import { signIn } from 'next-auth/react';
export default function Passwordform(prop: { data: string,onClose:Function }) {
    const [values, setValues] = React.useState<pwd>({
        password: '',
        showPassword: false,
    });

    const pwdref = React.useRef<HTMLInputElement|null>(null);
    const handleChange =
        (prop: keyof pwd) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
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

    const passHandle = async () => {
        const result = await signIn("credentials", {
            redirect: false,
            email:prop.data, password:values.password
        });
        if(result!.ok){
            prop.onClose()
        } else {
            pwdref.current?.select();
            pwdref.current?.focus();
        }
    }

    return (
        <>
            <Typography sx={{ textAlign: "center", pb: 2, pt: 2 }} id="modal-modal-title">
                <b>로그인 또는 회원 가입</b>
            </Typography>
            <Divider />
            <Box sx={{ p: 2 }}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        inputRef={pwdref}
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
                <Typography  sx={{ mt: 2, ml: 1 ,cursor:"pointer",fontWeight:"bold",textDecoration:"underline "}} variant="button" display="block" gutterBottom>
                    비밀번호를 잊으셨나요?
                </Typography>
                <Button onClick={passHandle} variant="contained" fullWidth color='error' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                    <b>로그인</b>
                </Button>
            </Box>
        </>

    )
}