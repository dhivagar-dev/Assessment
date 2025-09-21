import React from "react";
import { Box, Grid } from "@mui/material";

import TopRow from "./MainContent/TopRow";
import MiddleRow from "./MainContent/MiddleRow";
import BottomRow from "./MainContent/BottomRow";

const Content = () => {
  return (
    <Grid container direction="column" spacing={3} sx={{ p: 3 }}>
      <Grid item>
        <TopRow />
      </Grid>
      <Grid item>
        <MiddleRow />
      </Grid>
      <Grid item>
        <BottomRow />
      </Grid>
    </Grid>
  );
};

export default Content;
