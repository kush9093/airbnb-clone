import { Box, Typography } from '@mui/material';
import { CSSProperties, useCallback, useEffect, useRef } from 'react';
import RoomIcon from '@mui/icons-material/Room';

export default function Googlemaps({selelm,textelm}:{selelm:any,textelm:any}) {
    let lat = selelm.geometry.location.lat??37.5656
    let lng = selelm.geometry.location.lng??126.9769
    let markerstyle = {
        position: "absolute", zIndex: 2, top: "45vh", left: "50%" 
    }
    const mapElement = useRef(null);
    const loadScript = useCallback((url: string) => {
        const firstScript = window.document.getElementsByTagName('script')[0];
        const newScript = window.document.createElement('script');
        newScript.src = url;
        newScript.async = true;
        newScript.defer = true;
        firstScript?.parentNode?.insertBefore(newScript, firstScript);
    }, []);

    const initMap = () => {
        const { google } = window;
        if (!mapElement.current || !google) return;


        const location = { lat: lat, lng: lng };
        const map = new google.maps.Map(mapElement.current, {
            zoom: 17,
            center: location,
            zoomControl:false,
            mapTypeControl:false,
            fullscreenControl:false,
            streetViewControl:false,
        });
        map.addListener("dragend",()=>{
            textelm(map.getCenter()?.lat(),map.getCenter()?.lng())
        })
    };


    useEffect(() => {
        textelm(lat,lng)
        const script = window.document.getElementsByTagName('script')[0];
        const includeCheck = script.src.startsWith(
            'https://maps.googleapis.com/maps/api'
        );

        if (includeCheck) return initMap();


        window.initMap = initMap;
        const endpoint = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap&language=ko`
        loadScript(
            endpoint
        );
    }, [initMap, loadScript]);


    return (
        <Box sx={{ position: 'relative',cursor:"move" }}>
            <Box sx={{ position: "absolute",px:2, zIndex: 1, top: "20vh", left: "25%", backgroundColor: "white",width:"50%",height:"8vh",borderRadius:"30px",display:"flex",alignItems:"center" }}>
            <RoomIcon />
                <Typography sx={{pl:2}}>{selelm.formatted_address.split(" ").slice(0,4).join(" ")}</Typography>
            </Box>
            <RoomIcon id='icon' fontSize="large" sx={markerstyle} />
            <Box ref={mapElement} style={{ minHeight: '90vh' }} />
        </Box>
    );
}

