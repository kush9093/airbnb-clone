
import { Box, Button, Divider, Chip, Avatar, Paper, TextField } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ErrorIcon from '@mui/icons-material/Error';




export default function TitlePage(prop: any) {
    const { itemId } = prop;
    const [btn, setBtn] = React.useState(true);
    const [text,setText] = React.useState("");
    const router = useRouter();
    const nextStepHandle = async () => {
        //업데이트 부분

        router.push("/become-a-host/" + itemId + "/title");
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
                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                <Typography variant="h4" gutterBottom><b>이제 아파트에 이름을 지어주세요</b></Typography>
                                <Typography sx={{width:"25vw",color:"#777"}}>숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수 있으니, 너무 걱정하지 마세요.</Typography>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    onChange={(evt)=>{
                                        setText((prev)=>{
                                            if(evt.target.value.length > 0 && evt.target.value.length<33){
                                                setBtn(false);
                                            } else {
                                                setBtn(true);
                                            }
                                           return evt.target.value})
                                        
                                    }}
                                    value={text}
                                    sx={{width:"25vw",mt:1}}
                                    error={text.length>32?true:false}
                                />
                                <Box sx={{display:"flex",width:"25vw",mt:1}}>
                                    <Box>
                                <Typography variant="body2" sx={{color:"#777"}}><b>{text.length}/32</b></Typography>
                                { text.length > 32 &&
                                    <Typography variant="caption" sx={{color:"red"}}><ErrorIcon sx={{verticalAlign:"-7px"}} /> 32자까지 입력하실 수 있습니다.</Typography>
                                }
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


TitlePage.isInLayout = true;