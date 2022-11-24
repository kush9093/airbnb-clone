import { Box, Typography, ButtonGroup, Button, TextField, Accordion, AccordionSummary, AccordionDetails,Paper } from "@mui/material"
import { accomodationtype } from "../../interface/accommodation"
import { useContext, useState } from "react"
import { roomContext } from "../../pages/rooms/[roomId]";
import { format } from "date-fns";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Roommodal({ data }: { data: accomodationtype }) {

    const ctx = useContext(roomContext)

    const buttons = [
        <Button color="secondary" key="one" sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Typography variant="caption">체크인</Typography>
            <Typography variant="body2">{ctx?.value.startwith !== null ? format(ctx?.value.startwith!, "yyyy-MM-dd") : "날짜 추가"}</Typography>
        </Button>,
        <Button color="secondary" key="two" sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Typography variant="caption">체크아웃</Typography>
            <Typography variant="body2">{ctx?.value.endwidth !== null && ctx?.value.startwith!.getTime()! - ctx?.value.endwidth!.getTime()! == 0 ? format(ctx?.value.endwidth!, "yyyy-MM-dd") : "날짜 추가"}</Typography>
        </Button>,
    ];

    return (
        <Box sx={{ position: "sticky", top: 0 }}>
            <Box sx={{ width: "80%", mx: "auto" }}>
                <Typography>₩{data.price?.toString()}/박</Typography>
                <Typography>★5.0 · 후기4개</Typography>
            </Box>
            <Box sx={{ width: "80%", mx: "auto", border: "1px solid black", borderRadius: "10px" }}>
                <ButtonGroup size="large" fullWidth aria-label="large button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" fullWidth aria-label="large button group">
                    <Button color="secondary" key="two" sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                        <Typography variant="caption">인원</Typography>
                        <Typography variant="body2">게스트</Typography>
                    </Button>
                    <Paper elevation={1} sx={{ position: "absolute", top: "100%", border: "1px solid #ddd", borderRadius: "2px", width: "80%", left: "10%" }}>
                        <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                            <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                                <Typography>성인</Typography>
                                <Typography>만 13세 이상</Typography>
                            </Box>
                            <Box sx={{ my: "auto", display: "flex" }}>
                                <RemoveIcon sx={{ border: "1px solid #aaa", borderRadius: "50%",color:"#555" } } />
                                <Typography>숫자</Typography>
                                <AddIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                            <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                                <Typography>어린이</Typography>
                                <Typography>만 2~12세 이상</Typography>
                            </Box>
                            <Box sx={{ my: "auto", display: "flex" }}>
                                <RemoveIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                                <Typography>숫자</Typography>
                                <AddIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                            <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                                <Typography>유아</Typography>
                                <Typography>만 2 미만</Typography>
                            </Box>
                            <Box sx={{ my: "auto", display: "flex" }}>
                                <RemoveIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                                <Typography>숫자</Typography>
                                <AddIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", m: 2, justifyContent: "space-between" }}>
                            <Box sx={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                                <Typography>반려동물</Typography>
                                <Typography>보조동물을 동반하시나요?</Typography>
                            </Box>
                            <Box sx={{ my: "auto", display: "flex" }}>
                                <RemoveIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                                <Typography>숫자</Typography>
                                <AddIcon sx={{ border: "1px solid black", borderRadius: "50%" }} />
                            </Box>
                        </Box>
                        <Box >
                            <Typography>이 숙소의 최대 숙박 인원은 1명(유아 포함)입니다.</Typography>
                            <Typography>반려동물 동반은 허용되지 않습니다.</Typography>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                            닫기
                        </Box>
                    </Paper>
                </ButtonGroup>
            </Box>
        </Box>
    )
}