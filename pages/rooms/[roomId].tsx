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
    chdvalue:Function,
    Ddopen:boolean,
    chdDdopen:Function,
    popopen:boolean,
    chdPopopen:Function
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

    const [Ddopen,setDdopen] = useState<boolean>(false)

    function chdDdopen(val:boolean){
        setDdopen(()=>{
            return val
        })
    }
    const [popopen,setPopopen] = useState<boolean>(false)

    function chdPopopen(val:boolean){
        setPopopen(()=>{
            return val
        })
    }

    return (
        <roomContext.Provider value={{value:value,chdvalue:chdvalue,Ddopen:Ddopen,chdDdopen:chdDdopen,popopen:popopen,chdPopopen:chdPopopen}}>
            <Grid onClick={()=>{chdDdopen(false)}} container spacing={2} columns={16} sx={{ display: "flex", justifyContent: "center" }}>
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
                    <Divider />
                    <Box>
                        <Typography>후기 (아직) 없음</Typography>
                        <Box>
                            <Typography>이 호스트의 다른 숙소에 대한 후기가 2개 있습니다. 다른 숙소 후기 보기</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography>호스팅 지역</Typography>
                    </Box>

                </Grid>

            </Grid>
        </roomContext.Provider>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await findacc(context.params?.roomId! as string)
    console.log(data)
    return {
        props: { itemId: context.params?.roomId!, response: data.data },
    };
};