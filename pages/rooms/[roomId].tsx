import { GetServerSideProps } from "next";
import { accomodationtype } from "../../interface/accommodation";
import { findacc } from "../../lib/accommodation-api";
import { Grid, Box, Typography, Divider, Button } from "@mui/material"
import { useEffect, useState } from "react"
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
import Roomheader from "../../components/room/roomheader";
import Roomphoto from "../../components/room/roomphoto";
import Roomcontent from "../../components/room/roomcontent";
import Roommodal from "../../components/room/roommodal";


export default function RoomIndex({ itemId, response }: { itemId: string, response: accomodationtype }) {

   


    return (
        <Grid container spacing={2} columns={16} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={10}>
                <Box>
                    <Roomheader title={response.title} address={response.address} />
                    <Roomphoto photos={response.photos} />
                </Box>

                <Box>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} md={8} sx={{ px: 2 }}>
                            <Roomcontent targetUser={response.targetUser} floor={response.floor} />
                        </Grid>
                        <Grid item xs={0} md={4}>
                            <Roommodal />
                        </Grid>
                    </Grid>
                </Box>

            </Grid>

        </Grid>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await findacc(context.params?.roomId! as string)
    return {
        props: { itemId: context.params?.roomId!, response: data.data },
    };
};