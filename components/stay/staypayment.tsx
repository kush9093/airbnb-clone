
import { Grid, Box, Typography, Divider, InputLabel, MenuItem, FormControl, SelectChangeEvent, Select, Button, ButtonGroup ,Radio} from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { staytype } from "../../interface/stay";
import { accomodationtype } from "../../interface/accommodation";
import { useState } from "react"


export default function StayPayment({ data, roomdata,price,pricehandle }: { data: staytype, roomdata: accomodationtype,price:string,pricehandle:Function }) {
 
    const [personName, setPersonName] = useState<string>();
    

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value }
        } = event;
        setPersonName(value)
    }

    const getDateDiff = (d1:Date|string, d2:Date|string) => {
        const date1 = new Date(d1!);
        const date2 = new Date(d2!);
        
        const diffDate = date1.getTime() - date2.getTime();
        
        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
      }

      const val = ((roomdata.price as number) * (getDateDiff(data.checkin!, data.checkout!))*1.16/2).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      const [selectedValue, setSelectedValue] = useState(price);

      const ChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        pricehandle(event.target.value)
      };

      const ChangeButton = (val:string) => {
        setSelectedValue(val);
        pricehandle(val)
      }
    
      const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: ChangeRadio,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });



    return (
        <>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
                    ?????? ?????? ????????????
                </Typography>
                <Box>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                        fullWidth
                    >   
                        <Button onClick={()=>{ChangeButton("full")}} key="one" color="secondary" sx={{display:"flex",justifyContent:"space-between"}}>
                            <Box sx={{display:"flex",alignItems:"start",flexDirection:"column"}}>
                                <Typography sx={{fontWeight:"bold"}}>?????? ??????</Typography>
                                <Typography sx={{color:"#888"}}>????????? ??????????????? ?????? ????????? ???????????????.</Typography>
                            </Box>
                            <Box sx={{display:"flex",verticalAlign:"-10px"}}>
                                <Typography>???{((roomdata.price as number) * (getDateDiff(data.checkin!, data.checkout!))*1.16).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                                <Radio color="secondary" {...controlProps('full')} /></Typography>
                                
                            </Box>
                        </Button>
                        <Button onClick={()=>{ChangeButton("half")}} key="one" color="secondary" sx={{display:"flex",justifyContent:"space-between"}}>
                            <Box sx={{display:"flex",alignItems:"start",flexDirection:"column",width:"80%"}}>
                                <Typography sx={{fontWeight:"bold"}}>?????? ????????? ?????? ??????, ???????????? ????????? ??????</Typography>
                                <Typography sx={{color:"#888",textAlign:"left"}}>?????? ???{val}???(???) ???????????????, ????????? ??????(???{val})??? ????????? ?????????????????? 2023??? 1??? 11??? ?????? ???????????????. ?????? ???????????? ????????????.</Typography>
                            </Box>
                            <Box sx={{display:"flex",verticalAlign:"-10px"}}>
                                <Typography>???{val}<Radio color="secondary" {...controlProps('half')} /></Typography>
                            </Box>
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
                    ?????? ??????
                </Typography>
                <Box>
                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                        <Select
                            fullWidth
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem key={1} value={1}>??????</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
        </>
    )
}