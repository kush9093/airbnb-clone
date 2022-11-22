import { Box, Button, Divider, Chip, Avatar, Paper } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps, GetStaticProps } from "next";
import { findpropertie } from "../../lib/propertie-api";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { acccreate } from "../../lib/accommodation-api";
import dbConnect from "../../lib/dbConnect";


export default function BecomeHostHome(prop: { propertie: any }) {
    const [view, setView] = React.useState('');
    const [btn, setBtn] = React.useState(true);
    const router = useRouter();
    const session = useSession();
    const nextStepHandle = async () => {
        // 데이터 생성 fetch... ===> 생성된 데이터의 ID를 얻어와야 함
        let data = await acccreate(session.data?.user?.email!,view);
        const itemId = data.data._id
        router.push("/become-a-host/" + itemId + "/property-type");
    };
    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
        setBtn(false);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to top, #3B07BB, 50%, #E61E4D)" }} item xs={8}>
                        <Box>
                            <Typography sx={{ color: "white" }} variant="h3" gutterBottom>
                                <b>호스팅할 숙소 유형을 알려주세요.</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "white", height: "100vh" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}>
                            <Box sx={{ m: 4, display: "flex", justifyContent: "flex-end" }}>
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
                                    value={view}
                                    exclusive
                                    onChange={handleChange}
                                    sx={{ display: "flex", gap: 3, width: "50%" }}
                                >
                                    {prop.propertie.data.map((elm: any) => {
                                        return (<ToggleButton style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", display: "flex", justifyContent: "space-between" }} value={elm.group} aria-label={elm.group}>
                                            <Typography sx={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                                                {elm.group}
                                            </Typography>
                                            <Typography>
                                                <Image alt="" src={elm.image} width={"50"} height={"50"} style={{ borderRadius: "10px" }} />
                                            </Typography>
                                        </ToggleButton>)
                                    })}

                                </ToggleButtonGroup>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Link href="/become-a-host">
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
    const datas = await findpropertie();
    return {
        props: {
            propertie : datas,
        }, // will be passed to the page component as props
    };
};



BecomeHostHome.isInLayout = true;