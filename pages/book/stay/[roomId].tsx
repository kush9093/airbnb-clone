import { GetServerSideProps } from "next";
import { findacc } from "../../../lib/accommodation-api";
import { Grid, Box, Typography, Divider, InputLabel, MenuItem, FormControl, SelectChangeEvent, Select, Button } from "@mui/material"
import { staytype } from "../../../interface/stay";
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from "react"

export default function StayRoom({ data }: { data: staytype }) {
    console.log(data)

    const [personName, setPersonName] = useState<string>();

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value }
        } = event;
        setPersonName(value)
    }


    return (
        <Grid container spacing={2} columns={16} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Grid item xs={10} sx={{ display: "flex" }}>
                <Grid item xs={6}>
                    <Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                예약 정보
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }}>날짜</Typography>
                                <Typography>{new Date(data.checkin!).getMonth() + 1}월 {new Date(data.checkin!)?.getDate()}일 ~
                                    {new Date(data.checkin!).getMonth() !== new Date(data.checkout!).getMonth() ? new Date(data.checkout!).getMonth() + 1 + "월" : ""} {new Date(data.checkout!)?.getDate()}일 </Typography>
                            </Box>
                            <Box>
                                <Typography>수정</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }}>게스트</Typography>
                                <Typography>게스트 {data.numberOfGuests}명</Typography>
                            </Box>
                            <Box>
                                <Typography>수정</Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                결제 수단
                            </Typography>
                            <Box>
                                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                                    <Select
                                        displayEmpty
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput />}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem key={1} value={1}>안녕</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Divider />

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                필수 정보 입력
                            </Typography>
                            <Box>
                                <Box>
                                    <Typography>호스트에게 메시지 보내기</Typography>
                                    <Typography>호스트에게 여행 목적과 도착 예정 시간을 알려주세요.</Typography>
                                </Box>
                                <Box>
                                    <Button>
                                        추가
                                    </Button>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <Typography>전화번호</Typography>
                                    <Typography>여행 업데이트를 받으려면 전화번호를 입력하고 인증해주세요.</Typography>
                                </Box>
                                <Box>
                                    <Button>
                                        추가
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Divider />

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                환불 정책
                            </Typography>
                            <Typography>12월 4일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다. 그 이후에는 취소 시점에 따라 환불액이 결정됩니다. 자세히 알아보기</Typography>
                        </Box>

                        <Divider />

                        <Box>
                            <Box>
                                아이콘
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }}>호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직 확정된 것이 아닙니다.</Typography>
                                <Typography>예약 확정 전까지는 요금이 청구되지 않습니다.</Typography>
                            </Box>
                        </Box>

                        <Divider />

                        <Box>
                            <Typography variant="caption">아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 에어비앤비 재예약 및 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을 경우 에어비앤비가 결제 수단으로 청구의 조치를 취할 수 있다는 사실에 동의하는 것입니다. 호스트가 예약 요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.</Typography>
                        </Box>
                        <Box>
                            <Button>예약 요청</Button>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={4}>
                    안녕
                </Grid>
            </Grid>

        </Grid>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    try {
        // data = await findacc(context.query?.roomId! as string)
    } catch (e) {
        console.log(e);
    }
    return {
        props: { data: context.query },
    };
};

StayRoom.isInLayout = true;