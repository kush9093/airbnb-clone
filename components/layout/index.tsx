import { AppBar } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import CloneHeader from "./clone-header";
import CloneNav from "./clone-nav";
import {Box} from "@mui/material"

type Props = { children: ReactNode };
export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <AppBar
        position="absolute"
        color="inherit"
        elevation={0}
        sx={{
          position: "relative",
        }}
      >
        <CloneHeader />
        <CloneNav />
      </AppBar>
      <Box sx={{ height: "120vh",mx:2,mt:1 }}>{children}</Box>
    </>
  );
}
