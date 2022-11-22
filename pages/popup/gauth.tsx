import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function GooglePopup() {
    const { data, status } = useSession();
    useEffect(() => {
        if (status === "unauthenticated") {
            signIn("google")
        }
        if (status === "authenticated") {
            window.close();
        }

    }, [status])
    return (
        <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center",height:"100vh" }}>
      <CircularProgress />
    </Box>

    )
}

GooglePopup.isInLayout = true;