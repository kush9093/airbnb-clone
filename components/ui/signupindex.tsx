
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
                <b>???????????? ????????????</b>
                </Typography>
            </Typography>
            <Divider />
            <Box sx={{ p: 2, overflow: "auto", height: 600 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField onChange={handleChange('lastname')} variant="outlined" placeholder='??????(???:??????)' fullWidth label="??????(???:??????)" type="text" id="fullWidth" />
                    <TextField onChange={handleChange('firstname')} variant="outlined" placeholder='???(???:???)' fullWidth label="???(???:???)" type="text" id="fullWidth" />
                    <Typography variant="caption" display="block" gutterBottom>
                        ?????? ?????? ???????????? ????????? ????????? ??????????????? ???????????????.
                    </Typography>
                    <TextField onChange={handleChange('birthday')} variant="outlined" fullWidth type="Date" id="fullWidth" />
                    <Typography variant="caption" display="block" gutterBottom>
                        ??? 18??? ????????? ????????? ???????????? ????????? ??? ????????????. ????????? ?????????????????? ?????? ???????????? ???????????? ????????????.
                    </Typography>
                    <TextField variant="outlined" defaultValue={prop.data} placeholder='?????????' fullWidth label="?????????" type="email" id="fullWidth" />
                    <Typography variant="caption" display="block" gutterBottom>
                        ?????? ????????? ???????????? ???????????? ??????????????????.
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
                                ???????????? ?????? ??? ????????? ???????????????.
                                <Checkbox id='cd' color="default" />
                            </Typography>
                        </label>
                        <label htmlFor='cd' style={{ cursor: "pointer" }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                1. ?????????????????? ???????????? ?????? ?????? ??????????????? ???????????? ???????????? ??? ????????? ?????? ????????? ???????????? ??????????????? ???????????? ????????? ??? ???????????? ?????? ????????? ???????????????. ????????? ?????? ??????, ?????????????????? ???????????? ???????????? ???????????? ???????????? ?????? ??? ????????????. ????????? ???????????? ????????? ???????????????.
                            </Typography>
                        </label>
                    </Box>
                    <Box>
                        <label htmlFor='dd' style={{ cursor: "pointer" }}>
                            <Typography variant="overline" display="block" gutterBottom>
                                ????????? ????????? ????????? ????????????(??????).

                                <Checkbox onChange={handleChange('marketing')} id='dd' color="default" />
                            </Typography>
                        </label>
                        <label htmlFor='dd' style={{ cursor: "pointer" }}>
                            <Typography variant="caption" display="block" gutterBottom>
                                ??????????????? ?????? ?????? ??????, ?????? ?????? ??????, ????????? ?????????, ?????? ????????? ??????????????????. ?????? ?????? ?????? ????????? ???????????? ???????????? ????????? ????????? ??? ????????????.
                            </Typography>
                        </label>
                    </Box>
                    <Divider />
                    <Typography component="p" sx={{ fontSize: 13,m:1 }}>
                        ?????? ??? ??????????????? ???????????? ??????????????? ????????? ??????, ?????? ????????? ??????, ????????????????????? ????????????, ?????? ?????? ??????, ???????????? ??????????????? ???????????????.
                    </Typography>
                    <Button onClick={accounthandle} variant="contained" fullWidth color='error' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>????????????</b>
                    </Button>
                </Typography>
            </Box>
        </>
    )

}