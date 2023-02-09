import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Link } from 'react-router-dom';

const pages = [{
    name: "Home",
    link: "/home",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Sign Up",
    link: "/register",
  },
];

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="https://i.pinimg.com/originals/50/19/df/5019df7e223178032988c43d1dbc2c53.jpg" 
            alt="Red Velvet Logo"
            width="24px"
            style={{ marginRight: 16 }}/>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Red Velvet
          </Typography>
        {
          pages.map((page) => {
            return (
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>{page.name}</Link>
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