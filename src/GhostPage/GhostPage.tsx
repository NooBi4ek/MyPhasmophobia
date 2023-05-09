import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header.tsx";
import { Typography } from "@mui/material";

const GhostPage: React.FC = ({ ghosts }) => {
  const { id } = useParams();
  return (
    <div>
      {ghosts.map(
        (ghost) =>
          ghost.id == id && (
            <>
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
            </>
          )
      )}
    </div>
  );
};
export default GhostPage;
