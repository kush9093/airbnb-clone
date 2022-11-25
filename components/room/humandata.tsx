
import { Box, Typography, Paper, Button} from "@mui/material"

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { roomContext } from "../../pages/rooms/[roomId]";
import {useContext} from "react"


export default function Humandata() {

    const ctx = useContext(roomContext)
    

    return (
        <>
            <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "bold" }}>성인</Typography>
                    <Typography variant="subtitle2">만 13세 이상</Typography>
                </Box>
                <Box sx={{ my: "auto", display: "flex" }}>
                    <RemoveIcon sx={{ border: "1px solid #aaa", borderRadius: "50%", color: "#555" }} />
                    <Typography>1</Typography>
                    <AddIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                </Box>
            </Box>
            <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "bold" }}>어린이</Typography>
                    <Typography variant="subtitle2">만 2~12세 이상</Typography>
                </Box>
                <Box sx={{ my: "auto", display: "flex" }}>
                    <RemoveIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                    <Typography sx={{ fontWeight: "bold" }}>0</Typography>
                    <AddIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                </Box>
            </Box>
            <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "bold" }}>유아</Typography>
                    <Typography variant="subtitle2">만 2 미만</Typography>
                </Box>
                <Box sx={{ my: "auto", display: "flex" }}>
                    <RemoveIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                    <Typography>0</Typography>
                    <AddIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                </Box>
            </Box>
            <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "bold" }}>반려동물</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", textDecorationLine: "underline" }}>보조동물을 동반하시나요?</Typography>
                </Box>
                <Box sx={{ my: "auto", display: "flex" }}>
                    <RemoveIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                    <Typography>0</Typography>
                    <AddIcon sx={{ border: "1px solid #ddd", borderRadius: "50%" }} />
                </Box>
            </Box>
            <Box sx={{ m: 2 }}>
                <Typography variant="caption" lineHeight={0}>이 숙소의 최대 숙박 인원은 1명(유아 포함)입니다. 반려동물 동반은 허용되지 않습니다.</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <Button onClick={()=>{ctx?.chdPopopen(false)}} variant="text" color="secondary">
                <Typography sx={{ fontWeight: "bold", textDecorationLine: "underline" }}>닫기</Typography>
            </Button>
            </Box>
        </>
    )
}