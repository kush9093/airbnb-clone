
import { Box, Button, Divider, Chip, Avatar, Paper, TextField, Checkbox } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ErrorIcon from '@mui/icons-material/Error';
import { updatekind } from "../../../lib/accommodation-api";





export default function PricePage(prop: any) {
    const { itemId } = prop;
    const [btn, setBtn] = React.useState(true);
    const [price, setPrice] = React.useState<number>(0);
    const [chd,setChd] = React.useState(false)
    const router = useRouter();
    const nextStepHandle = async () => {
        //업데이트 부분
        await updatekind(itemId,"price",price)
        router.push("/become-a-host/" + itemId + "/receipt");
    };

    const previousHandle = () => {
        router.push({
            pathname: '/become-a-host/[itemId]/location',
            query: { itemId },
        })
    }
    React.useEffect(()=>{
        if(price>=13401 && price<10000000){
            setBtn(false)
        } else {
            setBtn(true);
        }
    },[price])



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to top, #3B07BB, 50%, #E61E4D)" }} item xs={8}>
                        <Box>
                            <Typography sx={{ color: "white", width: "100%", textAlign: "center" }} variant="h3" gutterBottom>
                                <b>게스트가 머무르게 될 숙소의 종류가 무엇인가요?</b>
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
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ mb: 3, display: "flex", flexDirection: "column", alignItems: "flex-start", width: "30vw" }}>
                                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>이제 요금을 설정하세요</Typography>
                                    <Typography sx={{ color: "#888" }}>언제든지 변경하실 수 있습니다.</Typography>
                                </Box>
                                <Box sx={{ backgroundColor: "#eee", opacity: "0.9", borderRadius: "10px", border: "1px solid #aaa", width: "30vw" }}>
                                    <Box sx={{ display: "flex", mt: 5, mx: 1 }}>
                                        <Box>
                                            <button onClick={() => { setPrice((prev) => { return prev - 1000 }) }} disabled={price <= 13401 ? true : false} style={{ backgroundColor: "white", borderRadius: "50%", width: "2.5vw", height: "5vh", margin: 20, border: "1px solid #aaa" }}>-</button>
                                        </Box>
                                        <Box>
                                            <input type="number" onChange={(evt) => { setPrice(Number(evt.target.value)) }} value={price} style={{ width: "20vw", height: "10vh", borderRadius: "10px", fontSize: "50px", textAlign: "center", fontWeight: "bold" }} placeholder="₩00" />
                                        </Box>
                                        <Box>
                                            <button onClick={() => { setPrice((prev) => { return prev < 13401 ? 13401 : prev + 1000 }) }} style={{ backgroundColor: "white", borderRadius: "50%", width: "2.5vw", height: "5vh", margin: 20, border: "1px solid #aaa" }}>+</button>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: "center", m: 1 }}>
                                        /박
                                    </Box>
                                    <Box sx={{ display: "inline-block", m: 1, width: "100%" }}>
                                        {price > 13400392 && <Box sx={{ display: "flex", justifyContent: "center" }}><ErrorIcon color="error" /><Typography sx={{ color: "red" }}>기본 요금으로 ₩13,401~₩13,400,392 사이의 값을 입력해 주세요.</Typography></Box>}
                                    </Box>
                                    <Box sx={{ textAlign: "center", m: 1 }}>
                                        이 지역에서 비슷한 숙소의 요금은 보통 ₩28,815~₩48,026 사이입니다.
                                    </Box>
                                </Box>
                                <Box sx={{ backgroundColor: "#eee", opacity: "0.9", borderRadius: "10px", border: "1px solid #aaa", mt: 2, width: "30vw", p: 3,display:"flex",cursor:"pointer" }}>
                                    <Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>단기간에 예약률을 높이는 법</Typography>
                                    <Typography sx={{ color: "#888" }}>첫 게스트 3명에게 20% 할인 혜택을 제공하여 더 빨리 예약을 받아보세요. 자세히 알아보기</Typography>
                                    </Box>
                                    <Box>
                                    <Checkbox value={chd} onChange={(evt)=>{setChd(evt.target.checked)}} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Button onClick={previousHandle} sx={{ mr: 5, mb: 2, px: 3.5, py: 1, backgroundColor: "#E61E4D" }} variant="contained" color="error">
                                    <b>뒤로</b>
                                </Button>
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


export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: { itemId: context.params?.itemId! },
    };


};


PricePage.isInLayout = true;