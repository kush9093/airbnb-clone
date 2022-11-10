
import { Box, Button, Divider, Chip, Avatar, Paper } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useRouter } from "next/router";
import { findprotype } from "../../../lib/propertie-api";
import { findacc, updatekind } from "../../../lib/accommodation-api";


export default function PropertyTypePage(prop:any) {
    const {itemId} = prop;
    const [space, setSpaces] = React.useState('');
    const [btn, setBtn] = React.useState(true);
    const spaces = ["공간 전체","개인실","다인실"]
    const router = useRouter();
    const nextStepHandle = async () => {
        //업데이트 부분
        const data = await updatekind(itemId,"space",space);
        router.push("/become-a-host/" + itemId + "/location");
    };
    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setSpaces(nextView);
        setBtn(false);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to top, #3B07BB, 50%, #E61E4D)" }} item xs={8}>
                        <Box>
                            <Typography sx={{ color: "white",width:"100%",textAlign:"center" }} variant="h3" gutterBottom>
                                <b>게스트가 머무르게 될 숙소의 종류가 무엇인가요?</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "white", height: "100vh" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}>
                            <Box sx={{ mt:3,mx: 4, display: "flex", justifyContent: "flex-end" }}>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Link href="/become-a-host/property-type-group">
                                        <Chip variant="outlined" avatar={<Avatar>M</Avatar>} label="슈퍼호스트에게 물어보기" />
                                    </Link>
                                    <Chip label="도움말" />
                                    <Chip label="저장 및 나가기" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
                                <ToggleButtonGroup
                                    orientation="vertical"
                                    value={space}
                                    exclusive
                                    onChange={handleChange}
                                    sx={{ display: "flex", gap: 1, width: "50%" }}
                                >
                                    {spaces.map((elm: any) => {
                                        return (<ToggleButton style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", display: "flex", alignItems:"flex-start",flexDirection:"column" }} value={elm} aria-label={elm}>
                                            <Typography sx={{ p:1,fontSize: "17px", fontWeight: "bold", color: "black" }}>
                                                {elm}
                                            </Typography>
                                        </ToggleButton>)
                                    })}

                                </ToggleButtonGroup>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Link href="/become-a-host/property-type-group">
                                    <Button sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                        <b>뒤로</b>
                                    </Button>
                                </Link>
                                <Button onClick={nextStepHandle} disabled={btn} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
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


export const getServerSideProps:GetServerSideProps = async (context) => {

    return {
        props:{itemId:context.params?.itemId!},
    };


};


PropertyTypePage.isInLayout = true;