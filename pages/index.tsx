
import ItemUnit from "../components/main/itemUnit";
import { Box } from "@mui/material"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GetServerSideProps } from "next";
import { findAllAcc } from "../lib/accommodation-api";
import { accomodationtype } from "../interface/accommodation";

export default function Home({ response }: { response: accomodationtype[] }) {
  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 6, lg: 12 }}>
        {response.map((elm, idx) => {
          return (
            <Grid item xs={2} sm={2} md={2} lg={2} key={idx}>
              <Box sx={{ width: "100%", height: "28vh", display: "inline-block" }}>
                <ItemUnit response={elm} />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const data = await findAllAcc()
  return {
    props: { response: data.data },
  };
};

