import { Box, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ImagePreview({ image, deleteFunc, idx }:{image:any,deleteFunc:any,idx:any}) {
    console.log(idx)
    return (
        <Box className="ImagePreview" sx={{ position: "relative", display: "flex", alignItems: "center", m: 1 }} draggable>
            <Box className="icon_container" sx={{ position: "absolute", display: "flex", width: "100%", height: "100%", justifyContent: "flex-end" }} onClick={deleteFunc}>
                <DeleteOutlineIcon sx={{ m: 2, backgroundColor: "white", borderRadius: "5px" }} />
            </Box>
            {idx !== 0 ?
                <img src={image} alt="preview" style={{ width: "20vw", height: "20vh", margin: "10", border: "1px solid black" }} /> :
                <img src={image} alt="preview" style={{ width: "40vw", height: "40vh", margin: "10", border: "1px solid black" }} />
            }
        </Box>
    );
}