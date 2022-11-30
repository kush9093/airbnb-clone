import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { ReservationData } from "../../interface";

export default function TravelItem({ data }: { data?: ReservationData }) {

    return (
        <Grid container spacing={2} columns={16} sx={{display:"flex",justifyContent:"center"}}>
            <Grid item xs={16} md={12} >
                <Paper sx={{ m: 5 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ m: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{data?.hostdata?.title}</Typography>
                                <Typography variant="body2">{data?.hostdata?.targetUser?.toString()}님이 호스팅 하는 {data?.hostdata?.space?.toString()}</Typography>
                            </Box>
                            <Divider sx={{ m: 2 }} />
                            <Box sx={{ display: "flex", m: 2 }}>
                                <Box sx={{ width: "50%" }}>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>{new Date(data?.checkIn!).getMonth() + 1}월</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>{new Date(data?.checkIn!).getDate()}일~{new Date(data?.checkOut!).getDate()}일</Typography>
                                    <Typography variant="body2">{new Date(data?.checkIn!).getFullYear()}년</Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>{data?.hostdata?.address?.RoadNumber} {data?.hostdata?.address?.RoadName}</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}> {data?.hostdata?.address?.district}  {data?.hostdata?.address?.cities}</Typography>
                                    <Typography variant="body2"> {data?.hostdata?.address?.country}</Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={4} md={8} sx={{ backgroundImage: (`url(${data!.hostdata!.photos![0]})`), backgroundSize: "cover", objectFit: "cover", width: "100%", height: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center", m: 0 }}>
                            <Box />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}