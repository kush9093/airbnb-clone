import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { ReservationData } from "../../../../interface";
import { accomodationtype } from "../../../../interface/accommodation";
import { staytype } from "../../../../interface/stay";
import { findhost } from "../../../../lib/reservation-api";

export default function confirmPage({ data }: { data: ReservationData & accomodationtype }) {


    return (
        <Grid container spacing={2} columns={16} sx={{display:"flex",justifyContent:"center"}}>
            <Grid item xs={8} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Typography variant="h3" sx={{fontWeight:"bold",textAlign:"start",m:1}}>예약 완료</Typography>
                <Typography sx={{m:1}}>{data.checkIn} ~ {data.checkOut} {data.address?.district}</Typography>
                <Paper elevation={1} sx={{ m:1,backgroundImage: (`url(${data.photos![0]})`),backgroundSize:"cover",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",width: "100%", height: "30vh", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                <Box sx={{my:2}}>
                    <Box>
                        <Typography variant="h5">{data.type}</Typography>
                        <Typography>{data.targetUser}가 호스트 하는 {data.group}</Typography>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{my:2}}>요금</Typography>
                <Typography variant="h6">{data.payd==="full"?"전액":"절반"} 결제</Typography>
                <Typography>{((new Date(data.checkOut!).getTime()-new Date(data.checkIn!).getTime())/86400000*data.price!*1.16).toFixed(0)}원</Typography>
                <Divider sx={{my:2}} />
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography sx={{fontWeight:"bold"}}>결제 금액</Typography>
                    <Typography sx={{fontWeight:"bold"}}>{((new Date(data.checkOut!).getTime()-new Date(data.checkIn!).getTime())/86400000*data.price!*(data.payd==="full"?1.16:1.16/2)).toFixed(0)}원</Typography>
                </Box>
                <Divider sx={{my:2}} />
                <Typography>승인 코드</Typography>
                <Typography>{data.orderId}</Typography>
            </Grid>
        </Grid>
    )
}



export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await findhost(context.query.orderId as string)
    return {
        props: { data: { ...data.order, ...data.room } },
    };
};

confirmPage.isInLayout = true;