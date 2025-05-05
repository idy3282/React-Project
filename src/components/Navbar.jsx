import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box, 
  Avatar, 
  Divider,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate, useLocation } from 'react-router-dom'; // הוספת useLocation

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)', // צל יותר בולט
    height: 70, // גובה גדול יותר לתפריט
  }));
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    height: 70, // גובה מותאם לתפריט
    padding: theme.spacing(0, 3), // ריווח צדדי גדול יותר
  }));
  const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& .MuiAvatar-root': {
      width: 42, // אווטאר גדול יותר
      height: 42, // אווטאר גדול יותר
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)', // אפקט הגדלה בעת מעבר עכבר
      }
    },
    '& .MuiTypography-root': {
      fontSize: '1.3rem', // גודל טקסט גדול יותר
      fontWeight: 700,
      marginLeft: theme.spacing(1.5), // מרווח גדול יותר מהאייקון
    }
  }));

  const NavButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0, 1), // מרווח גדול יותר בין הכפתורים
    padding: theme.spacing(1, 2), // ריווח פנימי גדול יותר
    fontWeight: 600,
    fontSize: '0.95rem', // גודל טקסט גדול יותר
    color: '#555',
    borderRadius: 8, // פינות מעוגלות יותר
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      transform: 'translateY(-2px)', // אפקט הרמה בעת מעבר עכבר
    },
  }));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
  borderBottom: '1px solid #eaeaea',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderRight: '1px solid #eaeaea',
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation(); // שימוש ב-useLocation

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const currUser = useSelector(s => s.user.currUser);
  
  // Primary color palette - Teal and Orange accents
  const colors = {
    primary: '#00796b', // Teal
    primaryLight: '#48a999',
    primaryDark: '#004c40',
    secondary: '#ff8f00', // Amber/Orange
    secondaryLight: '#ffc046',
    secondaryDark: '#c56000',
    text: '#263238',
    textLight: '#546e7a',
  };
  
  const navigationOptions = [
    {
      title: 'דף הבית',
      icon: <DashboardIcon />,
      path: '/work',
      color: colors.primary,
    },
    {
      title: 'הוספת הוצאה',
      icon: <AddCircleOutlineIcon />,
      path: '/addExpenditure',
      color: colors.primaryLight,
    },
    {
      title: 'רשימת הוצאות',
      icon: <ListAltIcon />,
      path: '/expenitures',
      color: colors.primaryDark,
    },
    {
      title: 'ספקים',
      icon: <BusinessIcon />,
      path: '/suppliers',
      color: colors.secondary,
    },
    {
      title: 'קטגוריות',
      icon: <CategoryIcon />,
      path: '/categories',
      color: colors.secondaryLight,
    },
    {
      title: 'משתמשים',
      icon: <PeopleIcon />,
      path: '/users',
      color: colors.secondaryDark,
    },
  ];
  
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleNavigate = (path) => {
    navigate(path);
    if (isMobile) {
      setDrawerOpen(false);
    }
    handleMenuClose();
  };
  
  const drawer = (
    <>
      <DrawerHeader  style={{direction:"rtl"}} >
        <Avatar
          sx={{
            bgcolor: colors.primary,
            width: 40,
            height: 40,
            mr: 1,
          }}
        >
          <SchoolIcon sx={{ fontSize: 24 }} />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text }}>
          ניהול הוצאות
        </Typography>
      </DrawerHeader>
      <Divider />
      <List>
        {navigationOptions.map((option, index) => (
          <ListItem 
            button 
            key={index} 
            onClick={() => handleNavigate(option.path)}
            sx={{
              borderRight: location.pathname === option.path ? `4px solid ${option.color}` : 'none',
              backgroundColor: location.pathname === option.path ? `${option.color}10` : 'transparent',
            }}
          >
            <ListItemIcon sx={{ color: option.color }}>
              {option.icon}
            </ListItemIcon>
            <ListItemText 
              primary={option.title} 
              primaryTypographyProps={{ fontWeight: location.pathname === option.path ? 700 : 500 }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
  
  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <LogoContainer onClick={() => navigate('/work')} sx={{ flexGrow: 1 }}>
                <Avatar
                  sx={{
                    bgcolor: colors.primary,
                    width: 35,
                    height: 35,
                    mr: 1,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 20 }} />
                </Avatar>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                  ניהול הוצאות
                </Typography>
              </LogoContainer>
            </>
          ) : (
            <>
              <LogoContainer onClick={() => navigate('/work')} sx={{ mr: 3 }}>
                <Avatar
                  sx={{
                    bgcolor: colors.primary,
                    width: 35,
                    height: 35,
                    mr: 1,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 20 }} />
                </Avatar>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                  ניהול הוצאות
                </Typography>
              </LogoContainer>
              
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {navigationOptions.slice(0, 4).map((option, index) => (
                  <NavButton 
                    key={index}
                    onClick={() => handleNavigate(option.path)}
                    sx={{
                      borderBottom: location.pathname === option.path ? `3px solid ${option.color}` : 'none',
                      color: location.pathname === option.path ? option.color : '#555',
                    }}
                  >
                    {option.title}
                  </NavButton>
                ))}
                
                <NavButton
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleMenuOpen}
                >
                  עוד
                </NavButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {navigationOptions.slice(4).map((option, index) => (
                    <MenuItem 
                      key={index} 
                      onClick={() => handleNavigate(option.path)}
                      sx={{
                        color: option.color,
                        fontWeight: 500,
                      }}
                    >
                      <ListItemIcon sx={{ color: option.color }}>
                        {option.icon}
                      </ListItemIcon>
                      <ListItemText primary={option.title} />
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <Typography variant="body2" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
              {currUser?.name ? `שלום, ${currUser.name}` : 'שלום, אורח'}
            </Typography> */}
            <Avatar sx={{ bgcolor: colors.secondary, width: 35, height: 35 }}>
              <AccountCircleIcon onClick={()=>alert('פונקציה זו בבנייה')} />
            </Avatar>
          </Box>
        </Toolbar>
      </StyledAppBar>
      
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawer}
      </StyledDrawer>
      
      {/* Add toolbar spacing to prevent content from hiding under the AppBar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
