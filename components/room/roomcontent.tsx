import { Grid, Box, Typography, Divider, Button } from "@mui/material"
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { accomodationtype } from "../../interface/accommodation";

import TsunamiIcon from '@mui/icons-material/Tsunami';
import WavesIcon from '@mui/icons-material/Waves';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Datalange from "./datalange";
import { roomContext } from "../../pages/rooms/[roomId]";

import {useContext,useEffect,useState} from "react"



export default function Roomcontent({data}:{data:accomodationtype}) {

    const ctx = useContext(roomContext);

 

    const convenience = [
        { name: "만 전망", icons: <TsunamiIcon /> },
        { name: "해변 전망", icons: <WavesIcon /> },
        { name: "주방", icons: <DiningOutlinedIcon /> },
        { name: "무선 인터넷", icons: <WifiOutlinedIcon /> },
        { name: "건물 내 무료 주차", icons: <GarageOutlinedIcon /> },
        { name: "수영장", icons: <PoolOutlinedIcon /> },
        { name: "HDTV", icons: <DesktopWindowsOutlinedIcon /> },
        { name: "세탁기", icons: <LocalLaundryServiceOutlinedIcon /> },
        { name: "일산화탄소 경보기", icons: <NotificationsActiveOutlinedIcon /> },
        { name: "화재경보기", icons: <CampaignOutlinedIcon /> },
    ]

    const dd = `후트베이 해변이 내려다보이는 이 평화로운 5베드룸 저택에서 온 가족과 함께 휴식을 취해보세요.

    * * 12월부터 LOADSHEDDING 백업 *
    
    침실 5개 – 욕실 3개
    
    침실 5개를 자랑하는 넓고 현대적인 가족 숙소입니다. 메인 침실 (욕실이 딸린 욕실) 에는 킹사이즈 침대가 있고, 나머지 4개의 침실에는 퀸사이즈 침대가 있습니다.
    
    산이 내려다보이는 벽난로가 있는 개방형 주방과 라운지 공간.
    
    주방에는 시설이 완비되어 있습니다.
    숙소
    야외 피자 오븐, 바비큐 그릴, 대형 정원과 수영장이 있습니다.
    
    메인 침실 - 킹사이즈 침대 (전용 욕실)
    나머지 침실 4개에는 퀸사이즈 침대가 있으며 욕실 2개를 공유합니다.
    
    월요일부터 금요일까지 하우스키핑 포함`

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>{data.targetUser?.split("@")[0]}님이 호스팅하는 {data.group} {data.space}</Typography>
                    <Typography>{`최대 인원 ${data.floor!.guest}명 · 침대 ${data.floor!.bed}개 · 욕실 ${data.floor!.bathroom}개 `}</Typography>
                </Box>
                <Box>
                    <img src="/userpic.png" style={{ borderRadius: "50%" }} />
                </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", mr: 2, my: 2 }}>
                <Box sx={{ mr: 2 }}>
                    <MilitaryTechOutlinedIcon fontSize="large" />
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>{data.targetUser}님은 슈퍼호스트입니다.</Typography>
                    <Typography>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", mr: 2, my: 2 }}>
                <Box sx={{ mr: 2 }}>
                    <VpnKeyOutlinedIcon fontSize="large" />
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>순조로운 체크인 과정</Typography>
                    <Typography>최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", mr: 2, my: 2 }}>
                <Box sx={{ mr: 2 }}>
                    <CalendarTodayOutlinedIcon fontSize="large" />
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>2월 26일 전까지 무료로 취소하실 수 있습니다.</Typography>
                </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
                <Box sx={{ display: "flex", my: 2 }}>
                    <Typography variant="h5" sx={{ color: "#f55", fontWeight: "bold" }}>에어</Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>커버</Typography>
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</Typography>
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography sx={{ fontWeight: "bold", textDecorationLine: "underline" }}>더 알아보기</Typography>
                </Box>
            </Box>
            <Divider sx={{ my: 2,mr:2 }} />
            <Box>
                <Typography sx={{whiteSpace:"pre-wrap",my:2,textOverflow:"ellipsis",height:"200px",overflow:"hidden"}}>
                {dd.length>200? dd.substring(0,200)+"...":dd}
                </Typography>
                <Typography sx={{fontWeight:"bold",textDecorationLine:"underline"}}>더 보기<ChevronRightIcon sx={{verticalAlign:"-3px"}} fontSize="small"/></Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>숙소 편의시설</Typography>
            </Box>
            <Box>
                <Grid container spacing={2} columns={12} >
                    {convenience.map((elm,idx) => {
                        return (
                            <Grid key={idx} item xs={12} md={6} sx={{ display: "flex" }} >
                                {elm.icons}
                                <Typography sx={{ ml: 2 }}>{elm.name}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                <Button variant="outlined" sx={{ my: 2, borderColor: "black", color: "black", fontWeight: "bold" }} size="large">편의시설 20개 모두 보기</Button>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
                
                <Box>
                    <Box>
                        <Datalange data={data} mode={"default"}/>
                    </Box>
                </Box>
            </Box>
        </>

    )
}