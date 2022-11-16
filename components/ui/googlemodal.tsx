
import Typography from '@mui/material/Typography';
import { Button, Divider, FormControlLabel, Switch, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Googlemodal({ onChangebox,onChangeCom,selelm }) {
    console.log(selelm);

    return (
        <>
            <Box sx={{ bgcolor: "white", mt: "10%", p: 1, width: "65%", borderRadius: "10px", maxHeight: "80%" }}>
                <Box sx={{ pb: 2, pt: 2, flexDirection: "row", display: "flex" }} id="modal-modal-title">
                    <ArrowBackIosNewIcon onClick={() => { onChangeCom("detail") }} sx={{ ml: 1 }} />
                    <Typography sx={{ width: "90%", textAlign: "center" }}>
                        <b>주소 확인</b>
                    </Typography>
                </Box>
                <Box sx={{ p: 2, overflowY: "scroll", maxHeight: "80%", }}>
                    <TextField fullWidth id={selelm?"outlined-read-only-input":"outlined-search"} defaultValue={selelm?selelm?.address_components[3]?.long_name:""} variant="outlined" label="주/도" />
                    <TextField fullWidth id={selelm?"outlined-read-only-input":"outlined-search"} defaultValue={selelm?selelm?.address_components[2]?.long_name:""} variant="outlined" label="도시" />
                    <TextField fullWidth variant="outlined" label="도로명" defaultValue={selelm?selelm?.address_components[1]?.long_name+" "+selelm?.address_components[0]?.long_name:""} />
                    <TextField fullWidth variant="outlined" label="아파트 이름, 동호수 등 (선택 사항)" />
                    <TextField fullWidth variant="outlined" label="우편번호" defaultValue={selelm?selelm?.address_components[5]?.long_name:""} />
                    <TextField fullWidth id={selelm?"outlined-read-only-input":"outlined-search"}defaultValue={selelm?selelm?.address_components[4]?.long_name+"-"+selelm?.address_components[4]?.short_name:""} variant="outlined" label="국가/지역" />
                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box>
                            <Typography variant="button" display="block" gutterBottom>구체적인 위치 표시하기</Typography>
                            <Typography variant="caption" display="block" gutterBottom>게스트에게 숙소 위치를 더욱 구체적으로 알려주실 수 있습니다. 숙소 주소는 예약이 확정된 후에만 공개됩니다.</Typography>
                        </Box>
                        <Box>
                            <FormControlLabel
                                control={
                                    <Switch
                                        name="loading"
                                        color="primary"
                                    />
                                }
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ pb: 2, pt: 2, flexDirection: "row", display: "flex" }} id="modal-modal-title">
                    <Typography>
                    <Button onClick={()=>{onChangebox("next")}} variant="contained" sx={{ml:2}}>확인</Button>
                    </Typography>
                </Box>
            </Box>
        </>
    )

}