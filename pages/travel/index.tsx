import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TravelItem from "../../components/travel/travelItem";
import { ReservationData } from "../../interface";
import { findrsv } from "../../lib/reservation-api";

export default function Travel() {

    const { data: session, status } = useSession()
    const [titem,setTitem] = useState<ReservationData[]>([]);

    useEffect(()=>{
        !async function(){
          const response = await findrsv({guestId:session?.user?.email!,type:"guest"});
          setTitem(response.data)
        }()

    },[session?.user])

    return (
        <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold",my: 1,mx:2}}>여행</Typography>
            <Divider sx={{my:2,mx:2}} />
            { titem.length === 0 &&
            <Box sx={{my:2}}>
                <Box sx={{my:2}}>
                    <Typography variant="h6" sx={{fontWeight:"bold"}}>아직 예약된 여행이 없습니다!</Typography>
                    <Typography>여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.</Typography>
                </Box>
                <Button sx={{my:2,fontWeight:"bold"}} color="secondary" variant="outlined">숙소 검색하기</Button>
            </Box>
            }
            { titem.length !== 0 &&
                titem.map((e,idx)=>{
                    return <TravelItem key={idx} data={e} />
                })
            }
            <Divider sx={{my:2}} />
        </Box>
    )
}
