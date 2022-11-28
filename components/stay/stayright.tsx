
import {  Box, Typography, Divider } from "@mui/material"
import { accomodationtype } from "../../interface/accommodation"
import { staytype } from "../../interface/stay"


export default function StayRight({ data, roomdata,price }: { data: staytype, roomdata: accomodationtype,price:string }) {

    const getDateDiff = (d1:Date|string, d2:Date|string) => {
        const date1 = new Date(d1!);
        const date2 = new Date(d2!);
        
        const diffDate = date1.getTime() - date2.getTime();
        
        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
      }

      const value = price==="full"?1:0.5

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", position: "sticky", top: "10%" }}>
            <Box sx={{ border: "1px solid #ddd", borderRadius: "10px", width: "80%", p: 2, m: 2 }}>
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ backgroundImage: (`url(${roomdata?.photos![4]})`), m: 2, borderRadius: "10px", width: "30%", height: "13vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                    <Box>
                        <Typography sx={{ color: "#888" }} variant="caption">{roomdata.group} 숙소</Typography>
                    </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ my: 2 }}>
                    <Typography> <b style={{ color: "#f44" }}>에어</b><b>커버</b>를 통한 예약 보호</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>요금 세부정보</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                        <Typography sx={{ textDecorationLine: "underline" }}>₩{roomdata.price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} X {getDateDiff(data.checkin!, data.checkout!)}박</Typography>
                        <Typography>₩{((roomdata.price as number) * (getDateDiff(data.checkin!, data.checkout!))*value).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                        <Typography sx={{ textDecorationLine: "underline" }}>서비스 수수료</Typography>
                        <Typography>₩{((roomdata.price as number) * getDateDiff(data.checkin!, data.checkout!) * 0.16*value).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>총 합계(<b style={{ textDecorationLine: "underline" }}>KRW</b>)</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>₩{((roomdata.price as number) * getDateDiff(data.checkin!, data.checkout!) * 1.16*value).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ my: 2 }}>
                    <Typography variant="body2">해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할 수 있습니다.</Typography>
                </Box>
            </Box>
        </Box>
    )
}