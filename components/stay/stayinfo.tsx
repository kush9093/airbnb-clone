

import { Box, Typography, Divider, Button } from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { staytype } from "../../interface/stay";
import { accomodationtype } from "../../interface/accommodation";
import { creatersv, findrsv } from "../../lib/reservation-api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function StayInfo({ data, roomdata, price }: { data: staytype, roomdata: accomodationtype, price: string }) {

    const datad = data
    const {data:session} = useSession();
    const router = useRouter();
    // console.log(session)
    // console.log("data",data);
    // console.log("roomdata",roomdata);
    // console.log("price",price);


    const getDateDiff = (d1: Date | string, d2: Date | string) => {
        const date1 = new Date(d1!);
        const date2 = new Date(d2!);

        const diffDate = date1.getTime() - date2.getTime();

        return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    }



    return (
        <>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
                    필수 정보 입력
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }}>호스트에게 메시지 보내기</Typography>
                        <Typography variant="body2">호스트에게 여행 목적과 도착 예정 시간을 알려주세요.</Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" color="secondary" sx={{ fontWeight: "bold" }}>
                            추가
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }}>전화번호</Typography>
                        <Typography variant="body2">여행 업데이트를 받으려면 전화번호를 입력하고 인증해주세요.</Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" color="secondary" sx={{ fontWeight: "bold" }}>
                            추가
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
                    환불 정책
                </Typography>
                <Typography>12월 4일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다. 그 이후에는 취소 시점에 따라 환불액이 결정됩니다. <b style={{ textDecorationLine: "underline" }}>자세히 알아보기</b></Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <EventRepeatIcon fontSize="large" sx={{ mr: 3 }} />
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }}>호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직 확정된 것이 아닙니다.</Typography>
                    <Typography>예약 확정 전까지는 요금이 청구되지 않습니다.</Typography>
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ my: 2, lineHeight: "0" }}>
                <Typography variant="caption">아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 에어비앤비 재예약 및 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을 경우 에어비앤비가 결제 수단으로 청구의 조치를 취할 수 있다는 사실에 동의하는 것입니다. 호스트가 예약 요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.</Typography>
            </Box>
            <Box>
                <PayPalScriptProvider 
                options={{ "client-id": "AVl47CN_HVs3ing7KVyWoIDlpoIC-JfiEg0tlbvIhb-fRGSuioRTTY6EH9HXKJWgjxchSPuooIFKsJht",
                    intent:"authorize" }}>
                    <PayPalButtons disabled={session==undefined?true:false} forceReRender={[price,]} style={{ layout: "horizontal" }}
                        createOrder={(data, actions) => {
                            const val = price === "full" ? 1 : 0.5
                            const pay = ((roomdata.price as number) * (getDateDiff(datad.checkin!, datad.checkout!)) * 1.16 * val / 1339).toFixed(2)
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: "숙소 예약금",
                                        amount: {
                                            value: pay,
                                        },
                                        
                                    },
                                ],
                            })

                        }}
                        onApprove={async (data, actions) => {
                            console.log("결제 완료 후");  
                            const obj = {
                                orderId:data.orderID,
                                hostId:roomdata._id,
                                guestId:session?.user?.email!,
                                checkIn:datad.checkin?.toString(),
                                checkOut:datad.checkout?.toString(),
                                numberOfGuests:datad.numberOfGuests,
                                payd:price}
                           const response = await creatersv(obj);
                           if(response.result){
                            actions.order?.authorize();
                            router.push({
                                pathname:"/book/stay/confirm/[orderId]",
                                query:{orderId:data.orderID}
                            })
                           }
                        }}
                    />
                </PayPalScriptProvider>
            </Box>
        </>
    )
}