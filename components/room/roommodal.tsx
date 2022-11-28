import { Box, Typography, ButtonGroup, Button, TextField, Accordion, AccordionSummary, AccordionDetails, Paper, Divider, Popper, Fade } from "@mui/material"
import { accomodationtype } from "../../interface/accommodation"
import { useContext, useState, useEffect } from "react"
import { roomContext } from "../../pages/rooms/[roomId]";
import { format } from "date-fns";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Datalange from "./datalange";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Humandata from "./humandata";
import { useRouter } from "next/router";
import { staytype } from "../../interface/stay";

export default function Roommodal({ data }: { data: accomodationtype }) {

    const router = useRouter();

   
    const ctx = useContext(roomContext)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        ctx?.chdPopopen(!ctx.popopen);
    };

    const canBeOpen = ctx?.popopen && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const reservation = () =>{
        router.push({
            pathname:"/book/stay/[productId]",
            query :{roomId: (data._id)?.toString(),
                numberOfAdults:1,
                numberOfChildren:0,
                numberOfInfants:0,
                checkin:format(ctx?.value.startwith!, "yyyy-MM-dd"),
                checkout:format(ctx?.value.endwidth!, "yyyy-MM-dd"),
                guestCurrency:"KRW",
            isWorkTrip:false,
            numberOfGuests:1,
            numberOfPets:0,
            productId: (data._id)?.toString(),
            code:"HMJZD2XTTN"}
        } )
    }



    return (
        <Paper elevation={1} sx={{ position: "sticky", top: "5%", border: "1px solid #ddd", px: 1, py: 3, borderRadius: "10px" }}>
            <Box sx={{ width: "90%", mx: "auto" }}>
                {ctx?.value.endwidth !== null && ctx?.value.startwith!.getTime()! - ctx?.value.endwidth!.getTime()! !== 0 ?
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <Box sx={{ display: "flex", alignItems: "baseline" }}>
                            <Typography variant="h6" sx={{ fontWeight: "500" }}>₩{data.price?.toString()}</Typography>
                            <Typography>/박</Typography>
                        </Box>
                        <Typography>★5.0 · 후기4개</Typography>
                    </Box> :
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "500" }}>요금을 확인하려면 날짜를 입력하세요.</Typography>
                        <Typography>★5.0 · 후기4개</Typography>
                    </Box>
                }
                <ButtonGroup orientation="vertical" sx={{ my: 1, display: "flex", flexDirection: "column" }}>
                    <Button color="secondary" sx={{ display: "flex", justifyContent: "start", p: 0, borderRadius: "10px 10px 0 0" }}
                        onClick={(e) => {
                            e.stopPropagation();
                            ctx?.chdDdopen(true);
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", width: "50%", py: 1, px: 2 }}>
                            <Typography variant="caption">체크인</Typography>
                            <Typography variant="body2">{ctx?.value.startwith !== null ? format(ctx?.value.startwith!, "yyyy-MM-dd") : "날짜 추가"}</Typography>
                        </Box>
                        <Divider orientation="vertical" color="black" flexItem></Divider>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", py: 1, px: 2, width: "50%" }}>
                            <Typography variant="caption">체크아웃</Typography>
                            <Typography variant="body2">{ctx?.value.endwidth !== null && ctx?.value.startwith!.getTime()! - ctx?.value.endwidth!.getTime()! !== 0 ? format(ctx?.value.endwidth!, "yyyy-MM-dd") : "날짜 추가"}</Typography>
                        </Box>
                    </Button>
                    <Button onClick={handleClick} color="secondary" key="two" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: "0 0 10px 10px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                            <Typography variant="caption">인원</Typography>
                            <Typography variant="body2">게스트</Typography>
                        </Box>
                        <Box>
                            <KeyboardArrowDownIcon sx={{ verticalAlign: "-3px" }} />
                        </Box>
                    </Button>

                    <Popper id={id} open={ctx?.popopen!} anchorEl={anchorEl} placement={"bottom-start"} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper sx={{ bgcolor: 'background.paper', p: 3, width: "58%" }}>
                                    <Humandata />
                                </Paper>
                            </Fade>
                        )}
                    </Popper>


                    {ctx?.Ddopen &&
                        <Paper elevation={1} sx={{ position: "absolute", zIndex: 1, top: "15%", right: "0%", backgroundColor: "none", py: 2, px: 3, borderRadius: "20px" }}>
                            <Datalange data={data} mode={"extends"} />
                        </Paper>
                    }

                </ButtonGroup>
                <Box>
                    <Box sx={{ my: 1 }}>
                            {ctx?.value.endwidth !== null && ctx?.value.startwith!.getTime()! - ctx?.value.endwidth!.getTime()! !== 0 ?
                                <Button onClick={reservation} variant="contained" color="error" sx={{ width: "100%", mt: 1, py: 1 }}>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>예약하기</Typography>
                                </Button> : 
                                <Button onClick={(e)=>{e.stopPropagation();ctx?.chdDdopen(true)}} variant="contained" color="error" sx={{ width: "100%", mt: 1, py: 1 }}>
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>예약 가능 여부</Typography>
                                </Button>
                            }
                        <Typography variant="subtitle2" sx={{ py: 1, textAlign: "center" }}>예약 확정 전에는 요금이 청구되지 않습니다.</Typography>
                    </Box>
                </Box>
                {ctx?.value.endwidth !== null && ctx?.value.startwith!.getTime()! - ctx?.value.endwidth!.getTime()! !== 0 &&
                    <>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
                                <Typography sx={{ textDecorationLine: "underline" }}>₩{data.price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} X {ctx?.value.deff}박</Typography>
                                <Typography>₩{(Number(data.price) * ctx?.value.deff!).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
                                <Typography sx={{ textDecorationLine: "underline" }}>서비스 수수료</Typography>
                                <Typography>₩{(Number(data.price) * ctx?.value.deff! * 0.16).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
                                <Typography sx={{ fontWeight: "bold" }}>총 합계</Typography>
                                <Typography sx={{ fontWeight: "bold" }}>₩{(Number(data.price) * ctx?.value.deff! * 1.16).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                            </Box>
                        </Box>
                    </>
                }
            </Box>
        </Paper>
    )
}