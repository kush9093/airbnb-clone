
import { Grid, Box } from "@mui/material"
import { accomodationtype } from "../../interface/accommodation";


export default function Roomphoto({data}:{data:accomodationtype}) {


    return (
        <Box sx={{my:6}}>
            <Grid container spacing={1} columns={16}>
                {data.photos!.map((elm, idx) => {
                    if (idx === 0) {
                        return (
                            <Grid key={idx} item xs={8}>
                                <Box sx={{ backgroundImage: (`url(${elm})`), borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",width: "100%", height: "50vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />

                            </Grid>
                        )
                    }
                })}
                <Grid item xs={8}>
                    <Grid container spacing={1} columns={16}>
                        {data.photos!.map((elm, idx) => {
                            if (idx !== 0 && idx < 5) {
                                if(idx === 2){
                                    return (
                                        <Grid key={idx}  item xs={8}>
                                            <Box sx={{ backgroundImage: (`url(${elm})`), width: "100%",borderTopRightRadius:"10px", height: "25vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                                        </Grid>
                                    )
                                } else if(idx===4){
                                    return (
                                        <Grid key={idx}  item xs={8}>
                                            <Box sx={{ backgroundImage: (`url(${elm})`), width: "100%",borderBottomRightRadius:"10px", height: "25vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                                        </Grid>
                                    )
                                } else {
                                    return (
                                        <Grid key={idx}  item xs={8}>
                                            <Box sx={{ backgroundImage: (`url(${elm})`), width: "100%", height: "25vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                                        </Grid>
                                    )
                                }
                            }
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}