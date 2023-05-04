import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
interface IHeader {
  text: string;
}
const Header: React.FC<IHeader> = ({ text }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        borderBottom: '2px solid #242424',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          padding: '3vh 0',
          color: '#242424',
          fontWeight: '500',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default Header;
