// import { useState } from "react" 
// import { GiFallingRocks, GiHamburgerMenu } from "react-icons/gi"
// import { Link } from "react-router-dom"
// const Header = () => {
//     const [toggle, setToggle] = useState(false)
//     const handleToggle = () => {
//         setToggle(!toggle)
//     }
//     const renderMenu = () => {
//         if (toggle) {
//             return (
//                 // transition duration-300 active:rotate-90
//                 <div className="rounded-lg w-[25%]">
//                     <div className="ml-[68%] -translate-y-2 mt-2">
//                         <GiHamburgerMenu
//                             onClick={handleToggle}
//                             size={35}
//                         />
//                     </div>

//                     <ul className="mt-4">
//                         <li className="border-b-2 border-t-2 border-opacity-45 mt-2 py-2">
//                             <Link to='/'>HOME</Link>
//                         </li>
//                         <li className="text-red-500 border-b-2 border-opacity-45 py-2">
//                             <Link to='/roadmap'>ROADMAP</Link>
//                         </li>
//                         <Link to='/login'>
//                             <li className="border-b-2 border-opacity-45 py-2">
//                                 LOGIN
//                             </li>
//                         </Link>

                        
//                         <li className="border-b-2 border-opacity-45 py-2">
//                             -SIGN UP-
//                         </li>
//                     </ul>
//                 </div>
//             )
//         }

//         return (
//             <GiHamburgerMenu
//                 onClick={handleToggle}
//                 color='white'
//                 size={35}
//             />
//         )
//     }
    
//     return (

//         <div className="flex justify-between bg-inherit bg-black pt-6">
//             <Link to='/' className="flex">
//                 <GiFallingRocks
//                     color='#00ADB5'
//                     className="mr-2"
//                     size={35}
//                 />
//             </Link>

            
            
//             {renderMenu()}
            
//         </div>
//     )
// }

// export default Header
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/joy';

import { GiFallingRocks } from 'react-icons/gi'

const pages = [
    { 
        text: 'Home', 
        link: '/'
    }, 
    {
        text: 'About', 
        link:'/roadmap'
    }, 
    {
        text: 'Documentation', 
        link:'/documentation' 
    }
];
const settings = [
    {
        text: 'Profile',
        link: '/app/profile'
    },
    {
        text: 'Logout',
        link: '/app/logout'
    }
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='rounded-full'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <GiFallingRocks className='mr-[1vw]' />
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
            BOULDER FLASH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.link}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOULDER FLASH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
                pages.map((page, index) => (
                    <Button
                        key={index}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        component={Link}
                        to={page.link}
                    >
                        { page.text } 
                </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
