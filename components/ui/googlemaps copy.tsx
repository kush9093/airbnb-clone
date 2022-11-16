import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

function MapComponent() {
    const ref = useRef<HTMLElement>();
    let map:google.maps.Map;
    useEffect(() => {
        map = new window.google.maps.Map(ref.current!, {
            center: { lat: 35.1595454, lng: 126.8526012 },
            zoom: 15,
            zoomControl:false,
            mapTypeControl:false,
            fullscreenControl:false,
            streetViewControl:false,
            
        })
        map.getCenter();
    }, [])
    return (<Box ref={ref} sx={{ height: "95vh" }}></Box>)
}



export default function LocationLastStep() {


    return (
        < Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string} >
            <MapComponent />
        </Wrapper >
    )
}
