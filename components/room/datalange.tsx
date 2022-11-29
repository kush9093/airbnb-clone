import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, koKR } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Grid, Box, Typography, Divider, Button } from "@mui/material"
import { ko } from 'date-fns/locale';
import { roomContext } from '../../pages/rooms/[roomId]';
import { accomodationtype } from '../../interface/accommodation';
import { dateFormat } from '../../lib/dateformat';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import { format } from 'date-fns';

export default function Datalange({ data, mode }: { data: accomodationtype, mode: string }) {
    const ctx = React.useContext(roomContext);

    console.log(data.check!);

    const [value, setValue] = React.useState<DateRange<Date>>([ctx?.value.startwith!, ctx?.value.endwidth!]);
    return (
        <Box onClick={(e) => { e.stopPropagation() }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "50%" }}>
                    {mode === "default" &&
                        <Typography sx={{ fontWeight: "bold" }} variant='h6'>{ctx?.value.startwith === null ? "체크인 날짜를 선택해주세요." : ctx?.value.deff! > 0 ? `${data.address?.district}에서 ${ctx?.value.deff}박` : "체크아웃 날짜를 선택하세요."}</Typography>
                    }
                    {mode === "extends" &&
                        <Typography sx={{ fontWeight: "bold" }} variant='h6'>{ctx?.value.deff! > 0 ? `${data.address?.district}에서 ${ctx?.value.deff}박` : "날짜 선택"}</Typography>
                    }
                    <Box sx={{ display: "flex", color: "#aaa" }}>
                        {value[0]&& value[1] && value[0]!.getTime() !== value[1]!.getTime() ?
                            <>
                                <Typography variant='subtitle2'>{dateFormat(ctx?.value.startwith!)}</Typography>
                                <Typography variant='subtitle2'>-</Typography>
                                <Typography variant='subtitle2'>{dateFormat(ctx?.value.endwidth!)}</Typography>
                            </> :
                            <Typography variant='subtitle2'>여행 날짜를 입력하여 정확한 요금을 확인하세요.</Typography>
                        }
                    </Box>
                </Box>
                <Box sx={{ width: "50%" }}>
                    {mode === "extends" &&
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "start", p: 0, borderRadius: "10px", border: "1px solid black" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", width: "50%", py: 1, px: 2 }}>
                                    <Typography variant="caption">체크인</Typography>
                                    <Typography variant="body2">{ctx?.value.startwith !== null ? format(ctx?.value.startwith!, "yyyy-MM-dd") : "날짜 추가"}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", py: 1, px: 2, width: "50%" }}>
                                    <Typography variant="caption">체크아웃</Typography>
                                    <Typography variant="body2">{ctx?.value.endwidth !== null && ctx?.value.startwith!.getTime()! - ctx?.value.endwidth!.getTime()! !== 0 ? format(ctx?.value.endwidth!, "yyyy-MM-dd") : "날짜 추가"}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    }
                </Box>
            </Box>
            <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko} localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText} >
                    <StaticDateRangePicker
                        disablePast={true}
                        shouldDisableDate={(day) => {
                            const dd = data.check?.find((e) => {
                                return new Date(e.checkIn).getTime() - 86400000 <= day.getTime() && new Date(e.checkOut).getTime() - 86400000 > day.getTime()
                            })
                            if (dd) {
                                return true
                            } else {
                                return false
                            }
                        }
                        }
                        disableHighlightToday
                        displayStaticWrapperAs="desktop"
                        value={[ctx?.value.startwith!, ctx?.value.endwidth!]}
                        onChange={(newValue) => {
                            const dd = data.check?.find((e) => {
                                return new Date(e.checkIn).getTime() - 86400000 >= new Date(newValue[0]!).getTime() && new Date(e.checkOut).getTime() - 86400000 < new Date(newValue[1]!).getTime()})
                                console.log("dd",dd);
                            if(!dd){
                            setValue((prev) => {
                                const day = new Date(newValue[1]!).getTime() - new Date(newValue[0]!).getTime()
                                const deff = day / (1000 * 60 * 60 * 24)
                                ctx?.chdvalue({ startwith: newValue[0], endwidth: newValue[1], deff: deff })
                                return newValue
                            })
                        }

                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <KeyboardOutlinedIcon />
                    <Box>
                        <Button variant="text" color="secondary" sx={{ fontWeight: "bold", textDecorationLine: "underline" }} onClick={() => {
                            setValue((prev) => {
                                ctx?.chdvalue({ startwith: null, endwidth: null, deff: 0 })
                                return [null, null]
                            });
                        }} >날짜 지우기</Button>
                        {mode === "extends" &&
                            <Button onClick={() => { ctx?.chdDdopen(false) }} variant="contained" color="secondary" sx={{ borderRadius: "10px" }} >
                                <Typography sx={{ fontWeight: "bold" }}>
                                    닫기
                                </Typography>
                            </Button>}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}