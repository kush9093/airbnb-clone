
import { Grid, Box } from "@mui/material"
import { accomodationtype } from "../../interface/accommodation";


export default function Roomphoto(prop: accomodationtype) {


    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                {prop.photos!.map((elm, idx) => {
                    if (idx === 0) {
                        return (
                            <Grid item xs={8}>
                                <Box sx={{ backgroundImage: (`url(${elm})`), width: "100%", height: "50vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

                                </Box>
                            </Grid>
                        )
                    }
                })}
                <Grid item xs={8}>
                    <Grid container spacing={2} columns={16}>
                        {prop.photos!.map((elm, idx) => {
                            if (idx !== 0) {
                                return (
                                    <Grid item xs={8}>
                                        <Box sx={{ backgroundImage: (`url(${elm})`), width: "100%", height: "25vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

                                        </Box>
                                    </Grid>
                                )
                            }
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}