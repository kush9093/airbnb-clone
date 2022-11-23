import { Box, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { accomodationtype } from "../../interface/accommodation";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { ko } from "date-fns/locale";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ItemUnit({ response }: { response: accomodationtype }) {

  const price = response.price!.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Link target={"_blank"} href={`${process.env.NEXT_PUBLIC_SERVER_IP}/rooms/${response._id}`} style={{ cursor: "pointer", width: "100%", height: "100%" }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ width: "100%", height: "100%", borderRadius: "10px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${response.photos![0]})` }}>

        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>{response.address!.cities},{response.address!.country}</Typography>
          <Typography>★5.0</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ color: "#888" }}>
            {formatDistance(new Date(response.receipt!), new Date(), { addSuffix: true, locale: ko })} 등록됨
          </Typography>
        </Box>
        <Box>
          <Typography><b>₩{price}</b> /박</Typography>
        </Box>
      </Box>
    </Link>
  );
}

