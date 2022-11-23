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



export default function Roomcontent(prop:accomodationtype) {

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


    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>{prop.targetUser}님이 호스팅하는 {prop.group} 전체</Typography>
                    <Typography>{`최대 인원 ${prop.floor!.guest}명 · 침대 ${prop.floor!.bed}개 · 욕실 ${prop.floor!.bathroom}개 `}</Typography>
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
                    <Typography sx={{ fontWeight: "bold" }}>{prop.targetUser}님은 슈퍼호스트입니다.</Typography>
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
            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography sx={{ my: 2 }}>
                    일부 정보는 자동 번역되었습니다. 원문 보기
                </Typography>
                <Typography sx={{ my: 2 }}>
                    후트베이 해변이 내려다보이는 이 평화로운 5베드룸 저택에서 온 가족과 함께 휴식을 취해보세요.
                </Typography>
                <Typography sx={{ my: 2 }}>
                    * * 12월부터 LOADSHEDDING 백업 *
                </Typography>
                <Typography sx={{ my: 2 }}>
                    침실 5개 – 욕실 3개 ...
                </Typography>
                <Typography sx={{ my: 2, fontWeight: "bold", textDecorationLine: "underline" }}>
                    더 보기
                </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>숙소 편의시설</Typography>
            </Box>
            <Box>
                <Grid container spacing={2} columns={12} >
                    {convenience.map((elm) => {
                        return (
                            <Grid item xs={12} md={6} sx={{ display: "flex" }} >
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
                    <Typography>바뀌는부분</Typography>
                    <Typography>날짜바뀌는부분</Typography>
                </Box>
                <Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
        </>

    )
}