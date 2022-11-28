import { GetServerSideProps } from "next";
import { findacc } from "../../../lib/accommodation-api";
import { Grid, Box, Typography } from "@mui/material"
import { staytype } from "../../../interface/stay";
import { accomodationtype } from "../../../interface/accommodation";
import StayRight from "../../../components/stay/stayright";
import StayContent from "../../../components/stay/staycontent";
import StayInfo from "../../../components/stay/stayinfo";
import StayPayment from "../../../components/stay/staypayment";
import {useState} from "react"
export default function StayRoom({ data, roomdata }: { data: staytype, roomdata: accomodationtype }) {

    const [price,setPrice] = useState<string>("full")
    
    const pricehandle = (val:string) =>{
        setPrice(val);
    }


    return (
        <Box>
            <Grid container columns={16}>
                <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: "bold", my: 2 }} variant="h4">예약 요청</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1} columns={16} sx={{ display: "flex", justifyContent: "center", width: "100%", p: 1 }}>
                <Grid item xs={10} sx={{ display: "flex" }}>
                    <Grid item xs={8}>
                        <StayContent data={data} roomdata={roomdata} />
                        <StayPayment price={price} data={data} roomdata={roomdata} pricehandle={pricehandle} />
                        <StayInfo data={data} roomdata={roomdata} price={price} />
                    </Grid>
                    <Grid item xs={8}>
                        <StayRight data={data} roomdata={roomdata} price={price}  />
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    let roomdata;
    try {
        roomdata = await findacc(context.query?.roomId! as string)
    } catch (e) {
        console.log(e);
    }
    return {
        props: { data: context.query, roomdata: roomdata.data },
    };
};

StayRoom.isInLayout = true;