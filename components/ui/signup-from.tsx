import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Signupindex from './signupindex';
import Signinindex from './signinindex';
import Passwordform from './passwordindex';
import Pledgeindex from './pledgeindex';
import Cancleindex from './cancleindex';
import { useSession } from 'next-auth/react';



export default function SignupFrom(prop: { signupmodal: Function, signup: boolean }) {
    type mode = "SIGNIN" | "SIGNUP"|"PASSWORD"|"PLEDGE"|"CANCLE";
    const [open, setOpen] = React.useState(prop.signup);
    const [modes,setModes] = React.useState<mode>("SIGNIN")
    const [email,setEmail] = React.useState<string>("")
    const [provider,setProvider] = React.useState<string>("")
    const {data,status} = useSession();
    React.useEffect(()=>{   
        if(status === "authenticated"){
            handleClose();
        }
    },[status])
    const handleClose = () => {
        prop.signupmodal(false);
        setOpen(false);
    }
    const signhandle = (val:mode,data?:string,provider?:string) => {
        if(data){
            setEmail(data);
        }
        if(provider){
            setProvider(provider)
        }
        setModes(val);
    }
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "30%",
        bgcolor: 'background.paper',
        border: '2px solid #ffe',
        boxShadow: 24,
        borderRadius: "2%"
    };


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
               {modes === "SIGNIN" && <Signinindex onPress={signhandle} onClose={handleClose}  />} 
               {modes === "SIGNUP" && <Signupindex data={email} onPress={signhandle} provider={provider} />}
               {modes === "PASSWORD" && <Passwordform data={email} onClose={handleClose} />}
               {modes === "PLEDGE" && <Pledgeindex data={email} onPress={signhandle} onClose={handleClose} />}
               {modes === "CANCLE" && <Cancleindex data={email} onPress={signhandle} onClose={handleClose} />}
               </Box>
            </Modal>
        </>
    );
}