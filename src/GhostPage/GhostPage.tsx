import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.tsx';
import { Box, Grid, Typography, styled } from '@mui/material';

export const Item = styled(Typography)(() => ({
  textIndent: '2vw',
  fontSize: '24px',
  fontStyle: 'italic',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#000',
  padding: '10px',
}));
interface IGhostPage {
  ghosts: IGhosts[];
}
const GhostPage: React.FC<IGhostPage> = ({ ghosts }) => {
  const { id } = useParams();
  return (
    <div>
      {ghosts.map(
        (ghost: IGhosts) =>
          ghost.id == id && (
            <Box height="100vh" width="100vw" paddingBottom="20vh">
              <Grid item container rowSpacing={3} key={ghost.id}>
                <Grid item xs={12}>
                  <Header text={<div>{ghost.name}</div>} />
                  <Typography
                    variant="h5"
                    sx={{
                      margin: '0 5vw',
                      lineHeight: '2',
                      fontStyle: 'italic',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      textAlign: 'center',
                    }}
                  >
                    {ghost.history}
                  </Typography>
                </Grid>
                {ghost.strengths || ghost.weak ? (
                  ghost.weak !== '' && (
                    <Grid item xs={6} width="50vw" border="2px solid #000">
                      <Item>{ghost.strengths}</Item>
                      <Item>{ghost.weak}</Item>
                    </Grid>
                  )
                ) : (
                  <Grid item xs={6} width="50vw" textAlign="center">
                    <div>1</div>
                  </Grid>
                )}
                <Grid item xs={6} width="50vw" textAlign="center">
                  <div>2</div>
                </Grid>
              </Grid>
            </Box>
          ),
      )}
    </div>
  );
};
export default GhostPage;
