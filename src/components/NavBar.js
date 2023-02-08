import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const pages = ['Home', 'About Us', 'Contact'];

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <AirplanemodeActiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GEKO EISYA
          </Typography>
        {
          pages.map((page) => {
            return (
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            )
          })
        }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;