// import { Button, Dialog, Input, styled, useAutocomplete } from "@mui/material"
// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Routes, useNavigate } from "react-router-dom"
// import { allUsersThunk, getUserById } from "../../Redux/Slices/Users/getUsersThunk"
// import './logIn.css'
// import { useRef } from "react"
// import { useEffect } from "react"
// import { isRejected } from "@reduxjs/toolkit"



    
  
// export const LogIn = () => {
    
//     const [id, setId] = useState(-1)
//     const [msg, setMsg] = useState(false)
//     const [mng, setMng] = useState(false)
//     // const ref=useRef(true);
//     const navigate = useNavigate()

//     const dispatch = useDispatch()
//     // const isValid = useSelector(s => s.user.checkUser)
//     const users = useSelector(s => s.user.allUsers)
//     const currUser = useSelector(s => s.user.currUser)  
//     const ref = useRef(null);
//     const getUsers = async () => {
//         await dispatch(allUsersThunk())
//     }
//     useEffect(() => {
        
//       //  ref.current.focus()
//         getUsers()
       
//     }, [])
   
//     const checkUser = async () => {
//         debugger
//         const u =  await dispatch(getUserById(parseInt(id)));
    
//         if(u.payload!=undefined && u.payload.id> 0)
//         {
//             if(u.payload.schoolSymbol == 0)
//             {
//                 setMng(true);
//                 navigate('home');
//             }
//             else if(u.payload.schoolSymbol != 0) {
//                  navigate('/work');
//             }  
//         }
//         else{
//             u.payload=undefined
//             setMsg(true)
//         }
//         setId(-1);
//     }
    


    
    
//     return <>
//         <dialog >
           
//             <div> 
//             <p>הכנס  קוד משתמש!</p>
//             <Input id="a"  autoFocus type="password" value={id == -1 ? '' : id} onChange={(e) => { setId(e.target.value) }}/>
// <br/>
//             <Button onClick={checkUser}>לאישור</Button>
//                      </div>
            
//         </dialog>
//         {msg && <div>אין הרשאת כניסה!</div>}

    
//     </>



// }

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUsersThunk, getUserById } from "../../Redux/Slices/Users/getUsersThunk";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  Paper,
  Container,
  Avatar,
  Snackbar,
  Alert
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { styled } from '@mui/material/styles';

// Styled components for enhanced appearance
const LoginCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  margin: '0 auto',
  padding: theme.spacing(3),
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  borderRadius: 12,
  backgroundColor: '#ffffff',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.2),
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const LogoAvatar = styled(Avatar)(({ theme }) => ({
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
  width: 60,
  height: 60,
  marginBottom: theme.spacing(2),
}));

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(to bottom right, #f5f7fa, #e4e8f0)',
  padding: theme.spacing(3),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

export const LogIn = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(s => s.user.allUsers);
  const currUser = useSelector(s => s.user.currUser);

  const getUsers = async () => {
    await dispatch(allUsersThunk());
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleIdChange = (e) => {
    setId(e.target.value);
    if (error) setError(false);
  };

  const checkUser = async () => {
    if (!id || id.trim() === '') {
      setError(true);
      setErrorMessage('יש להזין קוד מזהה');
      return;
    }

    try {
      const u = await dispatch(getUserById(parseInt(id)));

      if (u.payload !== undefined && u.payload.id > 0) {
        if (u.payload.schoolSymbol === 0) {
          navigate('home');
        } else if (u.payload.schoolSymbol !== 0) {
          navigate('/work');
        }
      } else {
        setError(true);
        setErrorMessage('קוד מזהה שגוי, אין הרשאת כניסה!');
      }
    } catch (err) {
      setError(true);
      setErrorMessage('אירעה שגיאה, נסה שנית');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkUser();
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

  return (
    <LoginContainer maxWidth="sm">
      <LoginCard>
        <CardContent>
          <HeaderBox>
            <LogoAvatar>
              <AccountBalanceWalletIcon sx={{ fontSize: 32 }} />
            </LogoAvatar>
            <Typography variant="h4" component="h1" fontWeight="600" color="primary">
              ניהול תקציבים
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
              מערכת לניהול תקציבי מוסדות חינוך
            </Typography>
          </HeaderBox>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
              יש להזין קוד מזהה אישי לכניסה למערכת
            </Typography>
            
            <TextField
              fullWidth
              variant="outlined"
              label="קוד מזהה"
              type="password"
              value={id}
              onChange={handleIdChange}
              onKeyPress={handleKeyPress}
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                direction: 'rtl',
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                }
              }}
            />

            <LoginButton 
              fullWidth 
              variant="contained" 
              onClick={checkUser}
              endIcon={<LockOutlinedIcon />}
            >
              כניסה למערכת
            </LoginButton>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} מערכת ניהול תקציבים | כל הזכויות שמורות
            </Typography>
          </Box>
        </CardContent>
      </LoginCard>

      <Snackbar 
        open={error} 
        autoHideDuration={6000} 
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseError} 
          severity="error" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </LoginContainer>
  );
};