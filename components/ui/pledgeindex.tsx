
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';

export default function Pledgeindex(prop:{onPress:Function,onClose:Function,data:string}) {


    const presshandle = () =>{
        // 서버수정
        prop.onPress("CANCLE");
    }
    const closehandle = async () =>{

        prop.onClose();
    }


    return (
        <>
            <Typography sx={{ textAlign: "left",ml:2, pb: 2, pt: 2 }} id="modal-modal-title">
                    로고
            </Typography>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Typography variant='caption' fontWeight="bold" >에어비앤지 커뮤니티 차별반대 서약</Typography>
                    <Typography sx={{mb:2}} fontWeight="bold" variant="h5" gutterBottom>
                        에어비앤비는 누구나 어디에서나 우리 집처럼 편안함을 느낄 수 있는
                        커뮤니티를 지향합니다.
                    </Typography>
                    <Typography sx={{mb:2}}>이를 위해 다음에 동의해 주실 것을 부탁드립니다.</Typography>
                    <Typography>인종,종교,출신 국가,민족,피부색,장애,성별,성 정체성,성적 지향,
                        언령등과 관계없이 에어비앤비 커뮤니티의 모든 사람을 존중하며 편견이나
                        선입견 없이 대하는 것에 동의 합니다.
                    </Typography>
                    <Typography>
                        더 알아보기
                    </Typography>
                    <Button  onClick={closehandle} variant="contained" fullWidth color='error' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>동의 및 계속하기</b>
                    </Button>
                    <Button onClick={presshandle} variant="outlined" fullWidth color='inherit' sx={{ mt: 2, p: 1.5, mb: 2 }}>
                        <b>거절하기</b>
                    </Button>
                </Typography>
            </Box>
        </>
    )

}