import SimpleImageSlider from "react-simple-image-slider";
import {Box} from "@mui/material"
import {useState,useEffect} from "react"
const images = [
  { url: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60" },
  { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250" },
  { url: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60" },

];

export default function ItemUnit(){

  const [mo,setMo] = useState(false);


  return (
    <Box onMouseOver={()=>{
 setMo(true);}} 
 onMouseOut={()=>{
    setMo(false);
 }} sx={{height:"300px"}}>
      <SimpleImageSlider
        width={250}
        height={250}
        images={images}
        showBullets={mo}
        navSize={20}
        navStyle={2}
        navMargin={5}
        showNavs={mo}
      />
    </Box>
  );
}

