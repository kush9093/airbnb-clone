
import {  Box, Typography, Divider } from "@mui/material"
import { staytype } from "../../interface/stay";
import { accomodationtype } from "../../interface/accommodation";



export default function StayContent({ data, roomdata }: { data: staytype, roomdata: accomodationtype }) {

    


    return (
        <Box>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
                    예약 정보
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ my: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>날짜</Typography>
                    <Typography>{new Date(data.checkin!).getMonth() + 1}월 {new Date(data.checkin!)?.getDate()}일 ~
                        {new Date(data.checkin!).getMonth() !== new Date(data.checkout!).getMonth() ? new Date(data.checkout!).getMonth() + 1 + "월" : ""} {new Date(data.checkout!)?.getDate()}일 </Typography>
                </Box>
                <Box>
                    <Typography>수정</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ my: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>게스트</Typography>
                    <Typography>게스트 {data.numberOfGuests?.toString()}명</Typography>
                </Box>
                <Box>
                    <Typography>수정</Typography>
                </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            
            
        </Box>
    )
}