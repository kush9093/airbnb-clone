
import ItemUnit from "../components/main/itemUnit";
import {Box} from "@mui/material"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ItemUnit />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

