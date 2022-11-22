
import { Box, Button, Divider, Chip, Avatar, Paper, TextField, Checkbox } from "@mui/material";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { findacc, updatekind } from "../../../lib/accommodation-api";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CancelIcon from '@mui/icons-material/Cancel';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Receiptpage(prop: any) {
    const { itemId, response } = prop;
    const [btn, setBtn] = React.useState(false);
    const router = useRouter();
    const nextStepHandle = async () => {
        //업데이트 부분
        await updatekind(itemId,"publish");
        // router.push("/become-a-host/" + itemId + "/receipt");
    };

    const previousHandle = () => {
        router.push({
            pathname: '/become-a-host/[itemId]/price',
            query: { itemId },
        })
    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



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
                                <Box sx={{ width: "100%" }}>
                                    <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>숙소 검토하기</Typography>
                                    <Typography sx={{ color: "#888", fontSize: 20 }}>게스트에게 표시되는 정보는 다음과 같습니다. 모든 정보가 정확한지 확인하세요.</Typography>
                                </Box>
                                <Box sx={{ display: "flex", width: "100%" }}>
                                    <Box sx={{ width: "50%" }}>
                                        <Box sx={{ boxShadow: "0px 0px 5px 5px #eee", p: 1, borderRadius: "10px", mt: 6 }} onClick={handleClickOpen}>
                                            <Box sx={{ backgroundImage: `url(${response.data.photos[0]})`, backgroundPosition: "center", width: "100%", height: "40vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                                            </Box>
                                            <Box>
                                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography sx={{ fontWeight: "bold" }}>{response.data.title}</Typography>
                                                    <Typography>신규★</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography><b>₩{response.data.price}</b> 박</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Dialog
                                            open={open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-describedby="alert-dialog-slide-description"
                                            maxWidth="lg"
                                            fullWidth
                                        >
                                            <DialogTitle sx={{textAlign:"center",borderBottom:"1px solid #eee",display:"flex",width:"100%",justifyContent:"space-between"}}>
                                                <CancelIcon onClick={handleClose} />
                                                <Typography sx={{fontWeight:"bold"}}>미리보기 전체</Typography>
                                                <Box></Box>
                                            </DialogTitle>
                                            <DialogContent>
                                                <Box sx={{ display: "flex" }}>
                                                    <Box sx={{ backgroundImage: `url(${response.data.photos[0]})`, backgroundPosition: "center", width: "100%", height: "40vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                                                    </Box>
                                                    <Box sx={{width:"100%",ml:2}}>
                                                            <Typography variant="h4" sx={{mb:2,fontWeight:"bold",mt:3}}>{response.data.title}</Typography>
                                                        <Box sx={{display:"flex",ml:1}}>
                                                            <Box>
                                                            <Typography variant="h6" sx={{fontWeight:"bold"}}>{response.data.targetUser} 님이 호스팅하는 {response.data.group}의 {response.data.space}</Typography>
                                                            <Typography>최대 인원 {response.data.floor.guest}명 침실 {response.data.floor.bathroom}개 침대 {response.data.floor.bed}개</Typography>
                                                            </Box>
                                                            <Box>
                                                                <img src="/userpic.png" style={{borderRadius:"50%"}} />
                                                            </Box>
                                                        </Box>
                                                        <Divider sx={{my:3}} />
                                                        <Box>
                                                        편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다.
                                                        </Box>
                                                        <Divider sx={{my:3}} />
                                                        <Box>
                                                            <Typography sx={{mb:3}}><b>위치</b></Typography>
                                                            <Typography>{response.data.address.country} {response.data.address.cities} {response.data.address.district} {response.data.address.RoadName}</Typography>
                                                            <Typography sx={{fontSize:"12px"}}>숙소 주소는 에어비앤비 <u>개인정보 처리방침</u>에 따라 예약을 완료한 게스트에게만 공개됩니다.</Typography>
                                                        </Box>
                                                    </Box>

                                                </Box>

                                            </DialogContent>
                                        </Dialog>
                                    </Box>
                                    <Box sx={{ m: 1, p: 5 }}>
                                        <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>다음단계</Typography>
                                        <Box sx={{ display: "flex", m: 2 }}>
                                            <Box sx={{ mr: 1 }}>
                                                <EventAvailableIcon fontSize="large" />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }} >세부 정보를 확인하고 숙소를 등록하세요</Typography>
                                                <Typography sx={{ color: "#888" }}>본인 인증이 필요하거나 현지 정부에 등록해야 하는 경우 안내해드리겠습니다.</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", m: 2 }}>
                                            <Box sx={{ mr: 1 }}>
                                                <CalendarTodayIcon fontSize="large" />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>달력 설정하기</Typography>
                                                <Typography sx={{ color: "#888" }}>숙소 예약 가능일을 선택해주세요. 숙소는 등록 완료 후 24시간이 지나면 일반에 공개됩니다.</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", m: 2 }}>
                                            <Box sx={{ mr: 1 }}>
                                                <CreateOutlinedIcon fontSize="large" />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>설정 변경하기</Typography>
                                                <Typography sx={{ color: "#888" }}>숙소 이용규칙 설정, 환불 정책 선택, 게스트의 예약 방식 선택 등 필요한 작업을 하세요.</Typography>
                                            </Box>
                                        </Box>
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

    const data = await findacc(context.params?.itemId!)
    return {
        props: { itemId: context.params?.itemId!, response: data },
    };


};


Receiptpage.isInLayout = true;