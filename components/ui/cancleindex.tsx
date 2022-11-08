
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { delaccAPI } from '../../lib/account-api';
export default function Cancleindex(prop:{onPress:Function,onClose:Function,data:string}) {

    const presshandle = () =>{
        prop.onPress("PLEDGE");
    }

    const deletehandle = async () =>{
        let result = await delaccAPI(prop.data);
        prop.onClose()
    }


    return (
        <>
            <Box sx={{ p: 2 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ArrowBackIosNewIcon sx={{mb:1}} onClick={presshandle} />
                    <Typography variant='h5' sx={{mb:2}} fontWeight="bold" >정말 취소하시겠어요?</Typography>
                    <Typography sx={{mb:2}}>
                        에어비앤비의 커뮤니티 차별반대 서약과 서비스 약관에 동의하지 않으면,
                        계정을 만드실 수 없습니다. 사이트를 둘러볼 수는 있지만 예약은 하실 수
                        없습니다.
                    </Typography>
                    <Typography fontWeight={"bold"} sx={{mb:1}}>
                        동의 절차가 필요한 이유
                    </Typography>
                    <Typography sx={{mb:2}}>
                        에어비앤비 커뮤니티 차별반대 서약과 서비스 약관은 에어비앤비
                        커뮤니티와 에어비앤비가 서로에게 기대하는 바에 대한 커뮤니티의
                        이해를 돕기 위해 마련되었습니다. 에어비앤비 <b style={{textDecorationLine:"underline"}}>커뮤니티를 위한
                        반차별 약속</b>과 <b style={{textDecorationLine:"underline"}}>서비스 약관</b>에 관해 자세히 알아보세요.
                    </Typography>
                    <Typography fontWeight={"bold"} sx={{mb:1}}>
                        다시 회원 가입을 희망하는 경우
                    </Typography>
                    <Typography>
                        마음이 바뀌면 언제든지 에어비앤비 서비스 약관과 커뮤니티 차별반대
                        서약에 동의하고 회원 가입을 완료하실 수 있습니다.
                    </Typography>
                    <Button onClick={presshandle}  variant="text" fullWidth sx={{ mt: 2, p: 1.5,backgroundColor:"black",color:"white" }}>
                        <b>돌아가기</b>
                    </Button>
                    <Button onClick={deletehandle} variant="outlined" fullWidth color='inherit' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>가입 취소하기</b>
                    </Button>
                </Typography>
            </Box>
        </>
    )

}