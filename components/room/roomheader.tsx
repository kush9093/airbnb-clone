
import { Box, Typography } from "@mui/material"
import GTranslateIcon from '@mui/icons-material/GTranslate';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { accomodationtype } from "../../interface/accommodation";




export default function Roomheader({data}:{data:accomodationtype})  {


    return (
        <>
            <Typography variant="h5" sx={{ fontWeight: "bold", m: 1 }}><GTranslateIcon /> {data.title}</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>★5.0 · 후기 4개 · {data.address!.district},{data.address!.cities},{data.address!.country}</Typography>
                <Box sx={{ display: "flex" }}>
                    <IosShareIcon sx={{ verticalAlign: "middle" }} fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", textDecorationLine: "underline", mr: 3 }}>공유하기</Typography>
                    <FavoriteBorderIcon sx={{ verticalAlign: "middle" }} fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", textDecorationLine: "underline" }}>저장</Typography>
                </Box>
            </Box>
        </>
    )
}