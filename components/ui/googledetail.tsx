import { Box, InputAdornment, List, ListItemButton, ListItemText, TextField } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Googledetail({changeElm,onChangeCom,inputValue,onInputValue,predictions,setPredictions,setLatlng}) {


    return (
        <Box sx={{ width: "70%" }}>
            <TextField
                onChange={(evt) => {
                    onInputValue(evt.currentTarget.value);
                }}
                value={inputValue}
                id="input-with-icon-textfield"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationOnIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                sx={{ bgcolor: "white", width: "100%", p: 2, borderRadius: "30px", mt: "10%" }}
            />
            {
                predictions &&
                <List component="nav" aria-label="secondary mailbox folder" sx={{ bgcolor: "white" }}>
                    {predictions.map((elm) => {
                        return (
                            <ListItemButton onClick={async () => {
                                setPredictions(null);
                                onInputValue(elm.structured_formatting.main_text);
                                const endpoint = `/google/details?place_id=${elm.place_id}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&language=ko&`
                                const response = await fetch(endpoint);
                                const json = await response.json();
                                
                                if (json.status === "OK") {
                                    changeElm(json.result);
                                    setLatlng(json.result.geometry.location.lat
                                        + "," + json.result.geometry.location.lng)
                                    onChangeCom("modal");

                                }

                            }}>
                                <ListItemText key={elm.structured_formatting.main_text} primary={elm.structured_formatting.main_text} secondary={
                                    <React.Fragment>
                                        {elm.description}
                                    </React.Fragment>
                                } />
                            </ListItemButton>
                        )
                    })
                    }
                </List>
            }
        </Box>
    )


}