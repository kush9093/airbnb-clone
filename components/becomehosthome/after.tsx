import { Box, Divider, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "next/router";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";
export default function After({data,arr} : {data:any,arr:any}) {
    const router = useRouter();
    const [more,setMore] = useState(false);

    return (
        <Box sx={{margin:"auto",width:"30%"}}>
            <Box>
                <Typography variant="h4" sx={{fontWeight:"bold",my:3}}>{data.user.name}님, 환영합니다.</Typography>
            </Box>
            <Box>
                <Typography variant="h6" sx={{fontWeight:"bold"}}>숙소등록완료하기</Typography>
                {arr.map((elm:any,idx:any)=>{
                    if(more===false?idx<3:true){
                    return (
                        <Box onClick={()=>{
                            router.push(`/become-a-host/${elm._id}/property-type`)
                        }} sx={{border:"1px solid #ddd",py:3,px:2,display:"flex",alignItems:"center",m:1,borderRadius:"10px",cursor:"pointer"}}>
                            {
                               elm.photos[0]?<img width={35} height={40} src={`${elm.photos[0]}`} />:<HomeIcon sx={{mr:1,backgroundColor:"#ddd"}} fontSize="large" />

                            }
                    <Typography sx={{ml:1}}>{elm.title??elm.group+" 숙소"}</Typography>
                    </Box>
                    )
                }
                })}
                {
                  arr.length > 3 && !more  && <Typography onClick={()=>{setMore(true)}} sx={{fontWeight:"bold",ml:2,mt:1,textDecoration:"underline",cursor:"pointer"}}>모두 보기</Typography>
                }
            </Box>
            <Box sx={{mt:4}}>
                <Typography variant="h6" sx={{fontWeight:"bold"}}>숙소 등록 시작하기</Typography>
                <Box sx={{my:3,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                    <Box sx={{display:"flex",alignItems:"flex-end"}}>
                    <AddHomeOutlinedIcon fontSize="large" sx={{mt:2,mr:2}} />
                    <Typography>새로운 숙소 등록하기</Typography>
                    </Box>
                    
                    <ArrowForwardIosOutlinedIcon sx={{cursor:"pointer"}} onClick={()=>{router.push("/become-a-host/property-type-group")}} fontSize="small" />
                </Box>
                <Divider />
            </Box>
        </Box>
    )
}