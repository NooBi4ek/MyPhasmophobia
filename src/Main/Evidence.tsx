import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import { Evidenc } from "../store/fazmofobia_slice.ts";
export const Item = styled(Typography)(() => ({
  fontSize: "24px",
  fontStyle: "italic",
  userSelect: "none",
}));
export const GridMain = styled(Grid)(() => ({ marginBottom: "2vh" }));
const Evidence = () => {
  const evidence = useAppSelector((state) => state.fazma.evidence);
  const dispatch = useAppDispatch();
  return (
    <Grid
      container
      rowSpacing={1}
      sx={{
        marginTop: "10vh",
        color: "#fff",
        borderBottom: "2px solid #000",
        padding: "0 0 5vh 10vw",
      }}
    >
      {evidence.map((evid) => (
        <GridMain key={evid.id} item xs={6}>
          <FormControlLabel
            control={<Checkbox onClick={() => dispatch(Evidenc(evid))} />}
            label={<Item>{evid.name}</Item>}
          />
        </GridMain>
      ))}
    </Grid>
  );
};
export default Evidence;
