
import { Box, Button, Divider, Chip, Avatar, Paper } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { findacc, updatekind } from "../../../lib/accommodation-api";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function PropertyTypePage(prop: any) {
    const { itemId } = prop;
    const [floor, setFloor] = React.useState({
        guest:4,
        bed:1,
        bathroom:1,
    });
    const router = useRouter();

    const sstyle = {
        border: "1px solid #333",opacity:0.5,width:30,height:30,p:1, borderRadius: "50%", cursor: "pointer" 
    }
    const dstyle = {
        border: "1px solid #333", opacity: 0.1,width:30,height:30,p:1, borderRadius: "50%", cursor: "not-allowed"
    }
    const nextStepHandle = async () => {
        //업데이트 부분
        await updatekind(itemId,"floor",floor)
        router.push("/become-a-host/" + itemId + "/photos");
    };

    const previousHandle = () => {
        router.push({
            pathname: '/become-a-host/[itemId]/location',
            query: { itemId },
        })
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to top, #3B07BB, 50%, #E61E4D)" }} item xs={8}>
                        <Box>
                            <Typography sx={{ color: "white", width: "100%", textAlign: "center" }} variant="h3" gutterBottom>
                                <b>숙소에서 맞이할 최대 인원수를 알려주세요.</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "white", height: "100vh" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}>
                            <Box sx={{ mt: 3, mx: 4, display: "flex", justifyContent: "flex-end" }}>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Link href="/become-a-host/property-type-group">
                                        <Chip variant="outlined" avatar={<Avatar>M</Avatar>} label="슈퍼호스트에게 물어보기" />
                                    </Link>
                                    <Chip label="도움말" />
                                    <Chip label="저장 및 나가기" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
                                    <Box>
                                        <Typography variant="h5" gutterBottom>
                                            <b>게스트</b>
                                            
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
                                        <RemoveIcon onClick={()=>{
                                            setFloor((prev)=>{return {...prev,guest:prev.guest-1<1?1:prev.guest-1}})
                                        }} sx={floor.guest > 1?sstyle:dstyle} />
                                        <Typography>{floor.guest}</Typography>
                                        <AddIcon onClick={()=>{
                                            setFloor((prev)=>{return {...prev,guest:prev.guest>=16?16:prev.guest+1}})
                                        }} sx={floor.guest < 16?sstyle:dstyle} />
                                        
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
                                    <Box>
                                        <Typography variant="h5" gutterBottom>
                                            <b>침대</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
                                        <RemoveIcon onClick={()=>{
                                            setFloor((prev)=>{return {...prev,bed:prev.bed-1<1?1:prev.bed-1}})
                                        }}  sx={floor.bed > 1?sstyle:dstyle} />
                                        <Typography>{floor.bed}</Typography>
                                        <AddIcon onClick={()=>{
                                            setFloor((prev)=>{return {...prev,bed:prev.bed+1}})
                                        }} sx={{ border: "1px solid #333",opacity:0.5,width:30,height:30,p:1, borderRadius: "50%", cursor: "pointer" }} />
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
                                    <Box>
                                        <Typography variant="h5" gutterBottom>
                                            <b>욕실</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
                                        <RemoveIcon onClick={()=>{
                                            setFloor((prev)=>{return {...prev,bathroom:prev.bathroom-0.5<0.5?0.5:prev.bathroom-0.5}})
                                        }}  sx={floor.bathroom > 0.5?sstyle:dstyle} />
                                        <Typography>{floor.bathroom}</Typography>
                                        <AddIcon onClick={()=>{
                                            setFloor((prev)=>{return {...prev,bathroom:prev.bathroom+0.5}})
                                        }} sx={{ border: "1px solid #333",opacity:0.5,width:30,height:30,p:1, borderRadius: "50%", cursor: "pointer" }} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Button onClick={previousHandle} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                    <b>뒤로</b>
                                </Button>
                                <Button onClick={nextStepHandle} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                    <b>다음</b>
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: { itemId: context.params?.itemId! },
    };


};


PropertyTypePage.isInLayout = true;