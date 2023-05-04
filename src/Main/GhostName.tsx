import { Grid, Link, styled } from '@mui/material';
import React from 'react';
import { GridMain } from './Evidence.tsx';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks.ts';

export const Item = styled(Link)(({ ghost }) => ({
  fontSize: '24px',
  fontStyle: 'italic',
  textDecoration: 'none',
  color: '#fff',
  cursor: 'pointer',
  opacity: ghost ? '1' : '0',
  display: !ghost && 'none',
  transition: '0.3s all',
  padding: '10px',
  ':hover': {
    borderRadius: '40px',
    border: '2px solid #fff',
  },
}));

const GhostName: React.FC = () => {
  const ghosts = useAppSelector((state) => state.fazma.ghosts);
  const navigate = useNavigate();
  return (
    <Grid
      container
      rowSpacing={3}
      sx={{
        marginTop: '10vh',
        color: '#fff',
        borderBottom: '2px solid #000',
        padding: '0 0 5vh 10vw',
      }}
    >
      {ghosts.map((ghost) => (
        <GridMain key={ghost.id} item xs={4}>
          <Item onClick={() => navigate(`${ghost.id}`)} ghost={ghost.marked}>
            {ghost.name}
          </Item>
        </GridMain>
      ))}
    </Grid>
  );
};
export default GhostName;
