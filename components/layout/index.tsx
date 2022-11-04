import { AppBar } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import CloneHeader from "./clone-header";
import CloneNav from "./clone-nav";

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
      <Container sx={{ height: "120vh" }}>{children}</Container>
    </>
  );
}
