import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header.tsx";
import { Grid, Typography, styled } from "@mui/material";

export const Item = styled(Typography)(() => ({
  textIndent: "2vw",
  fontSize: "24px",
  fontStyle: "italic",
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
  padding: "10px",
}));

const GhostPage: React.FC = ({ ghosts }) => {
  const { id } = useParams();
  return (
    <div>
      {ghosts.map(
        (ghost) =>
          ghost.id == id && (
            <Grid container rowSpacing={3}>
              <Grid xs={12}>
                <Header text={<h4>{ghost.name}</h4>} />
                <Typography
                  variant="h5"
                  sx={{
                    margin: "0 5vw",
                    lineHeight: "2",
                    fontStyle: "italic",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
                  {ghost.history}
                </Typography>
              </Grid>
              <Grid xs={6} width="50vw" border="2px solid #000">
                <Item>{ghost.strengths}</Item>
                <Item>{ghost.weak}</Item>
              </Grid>
              <Grid xs={6} width="50vw">
                <div>2</div>
              </Grid>
            </Grid>
          )
      )}
    </div>
  );
};
export default GhostPage;
