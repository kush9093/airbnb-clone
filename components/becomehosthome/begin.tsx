import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";


export default function Begin(){

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid sx={{ height: "100vh", backgroundImage: "url(/hostindex.png)", backgroundSize: "cover" }} item xs={8}>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: "black", height: "100vh", color: "white" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "self-end", height: "100vh" }}>
                            <Box sx={{ m: 4 }}>
                                <Link href="/">
                                    <Typography variant="overline" gutterBottom sx={{ m: 1, px: 2, py: 1, color: "white", backgroundColor: "#222", borderRadius: 50 }}>
                                        <b>나가기</b>
                                    </Typography>
                                </Link>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography sx={{ width: "50%" }} variant="h4" gutterBottom>
                                    <b>간단한 10단계로 호스팅 시작하기</b>
                                </Typography>
                                <Typography sx={{ width: "50%" }} variant="subtitle1" gutterBottom>
                                    에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든 과정을 도와드립니다.
                                </Typography>
                            </Box>
                            <Box>
                                <Link href="/become-a-host/property-type-group">
                                    <Button sx={{ m: 5, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                        <b>시작하기</b>
                                    </Button>
                                </Link>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}