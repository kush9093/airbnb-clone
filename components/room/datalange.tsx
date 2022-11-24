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

export default function StaticDateRangePickerDemo({ data }: { data: accomodationtype }) {
    const ctx = React.useContext(roomContext);

    const [value, setValue] = React.useState<DateRange<Date>>([ctx?.value.startwith!, ctx?.value.endwidth!]);
    return (
        <Box>
            <Box>
                <Typography sx={{ fontWeight: "bold" }} variant='h6'>{ctx?.value.deff! > 0 ? `${data.address?.district}에서 ${ctx?.value.deff}박` : "체크아웃 날짜를 선택하세요."}</Typography>
                <Box sx={{ display: "flex", color: "#aaa" }}>
                    {value[1] && value[0]!.getTime() !== value[1]!.getTime() ?
                        <>
                            <Typography variant='subtitle2'>{dateFormat(ctx?.value.startwith!)}</Typography>
                            <Typography variant='subtitle2'>-</Typography>
                            <Typography variant='subtitle2'>{dateFormat(ctx?.value.endwidth!)}</Typography>
                        </> :
                        <Typography variant='subtitle2'>여행 날짜를 입력하여 정확한 요금을 확인하세요.</Typography>
                    }
                </Box>
            </Box>
            <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko} localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText} >
                    <StaticDateRangePicker
                        shouldDisableDate={(day) => {
                            return day.getTime() - Date.now() < 0 ? true : false;
                        }
                        }
                        disableHighlightToday
                        displayStaticWrapperAs="desktop"
                        value={value}
                        onChange={(newValue) => {
                            setValue((prev) => {
                                console.log("end",newValue[1])
                                    const day = new Date(newValue[1]!).getTime() - new Date(newValue[0]!).getTime()
                                    const deff = day / (1000 * 60 * 60 * 24)
                                    ctx?.chdvalue({ startwith: newValue[0], endwidth: newValue[1], deff: deff })
                                    return newValue
                            })

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
            </Box>
        </Box>
    );
}