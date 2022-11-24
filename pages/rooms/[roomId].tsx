import { GetServerSideProps } from "next";
import { accomodationtype } from "../../interface/accommodation";
import { findacc } from "../../lib/accommodation-api";
import { Grid, Box, Typography, Divider, Button } from "@mui/material"
import Roomheader from "../../components/room/roomheader";
import Roomphoto from "../../components/room/roomphoto";
import Roomcontent from "../../components/room/roomcontent";
import Roommodal from "../../components/room/roommodal";
import { createContext,useState } from "react"


export type Rmtype = {
    startwith?: Date|null,
    endwidth?:Date|null,
    deff?:number
}

export const roomContext = createContext<{
    value:Rmtype,
    chdvalue:Function
}|null>(null)

export default function RoomIndex({ itemId, response }: { itemId: string, response: accomodationtype }) {

    const [value,setValue] = useState<Rmtype>({
        startwith: null,
        endwidth: null,
        deff: 0,})

    function chdvalue(val:any){
        setValue((prev)=> {
            return {...prev,...val}
        })
    }

    return (
        <roomContext.Provider value={{value:value,chdvalue:chdvalue}}>
            <Grid container spacing={2} columns={16} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={10}>
                    <Box>
                        <Roomheader data={response} />
                        <Roomphoto data={response} />
                    </Box>

                    <Box>
                        <Grid container spacing={2} columns={12}>
                            <Grid item xs={12} md={8} sx={{ px: 2 }}>
                                <Roomcontent data={response} />
                            </Grid>
                            <Grid item xs={0} md={4} sx={{maxHeight:"80%",mx:"auto"}}>
                                <Roommodal data={response} />
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>

            </Grid>
        </roomContext.Provider>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await findacc(context.params?.roomId! as string)
    return {
        props: { itemId: context.params?.roomId!, response: data.data },
    };
};