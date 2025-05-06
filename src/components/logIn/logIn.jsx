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
//     const [name, setName] = useState(" ")
    
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
    
//         if( (u.userName!=name) || u.payload!=undefined && u.payload.id> 0)
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
//             <p>הכנס  שם משתמש!</p>
//             <Input name="a"  autoFocus type="text" value={name == '' ? '' : name} onChange={(e) => { setName(e.target.value) }}/>
//             <p>הכנס  קוד משתמש!</p>
//             <Input id="a"  autoFocus type="password" value={id == -1 ? '' : id} onChange={(e) => { setId(e.target.value) }}/>
// <br/>

//             <Button onClick={checkUser}>לאישור</Button>
//                      </div>
            
//         </dialog>
//         {msg && <div>אין הרשאת כניסה!</div>}

    
//     </>



//  }

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { allUsersThunk, getUserById } from "../../Redux/Slices/Users/getUsersThunk";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   Typography,
//   InputAdornment,
//   Paper,
//   Container,
//   Avatar,
//   Snackbar,
//   Alert
// } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import PersonIcon from '@mui/icons-material/Person';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import { styled } from '@mui/material/styles';

// // Styled components for enhanced appearance
// const LoginCard = styled(Card)(({ theme }) => ({
//   maxWidth: 450,
//   margin: '0 auto',
//   padding: theme.spacing(3),
//   boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
//   borderRadius: 12,
//   backgroundColor: '#ffffff',
// }));

// const LoginButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   padding: theme.spacing(1.2),
//   fontWeight: 600,
//   backgroundColor: theme.palette.primary.main,
//   '&:hover': {
//     backgroundColor: theme.palette.primary.dark,
//   },
// }));

// const LogoAvatar = styled(Avatar)(({ theme }) => ({
//   margin: '0 auto',
//   backgroundColor: theme.palette.primary.main,
//   width: 60,
//   height: 60,
//   marginBottom: theme.spacing(2),
// }));

// const LoginContainer = styled(Container)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   minHeight: '100vh',
//   backgroundImage: 'linear-gradient(to bottom right, #f5f7fa, #e4e8f0)',
//   padding: theme.spacing(3),
// }));

// const HeaderBox = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: theme.spacing(4),
// }));

// export const LogIn = () => {
//   const [id, setId] = useState('');
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const users = useSelector(s => s.user.allUsers);
//   const currUser = useSelector(s => s.user.currUser);

//   const getUsers = async () => {
//     await dispatch(allUsersThunk());
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const handleIdChange = (e) => {
//     setId(e.target.value);
//     if (error) setError(false);
//   };

//   const checkUser = async () => {
//     if (!id || id.trim() === '') {
//       setError(true);
//       setErrorMessage('יש להזין קוד מזהה');
//       return;
//     }

//     try {
//       const u = await dispatch(getUserById(parseInt(id)));

//       if (u.payload !== undefined && u.payload.id > 0) {
//         if (u.payload.schoolSymbol === 0) {
//           navigate('home');
//         } else if (u.payload.schoolSymbol !== 0) {
//           navigate('/work');
//         }
//       } else {
//         setError(true);
//         setErrorMessage('קוד מזהה שגוי, אין הרשאת כניסה!');
//       }
//     } catch (err) {
//       setError(true);
//       setErrorMessage('אירעה שגיאה, נסה שנית');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       checkUser();
//     }
//   };

//   const handleCloseError = () => {
//     setError(false);
//   };

//   return (
//     <LoginContainer maxWidth="sm">
//       <LoginCard>
//         <CardContent>
//           <HeaderBox>
//             <LogoAvatar>
//               <AccountBalanceWalletIcon sx={{ fontSize: 32 }} />
//             </LogoAvatar>
//             <Typography variant="h4" component="h1" fontWeight="600" color="primary">
//               ניהול תקציבים
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
//               מערכת לניהול תקציבי מוסדות חינוך
//             </Typography>
//           </HeaderBox>

//           <Box sx={{ mt: 2 }}>
//             <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
//               יש להזין קוד מזהה אישי לכניסה למערכת
//             </Typography>
            
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="קוד מזהה"
//               type="password"
//               value={id}
//               onChange={handleIdChange}
//               onKeyPress={handleKeyPress}
//               autoFocus
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ 
//                 direction: 'rtl',
//                 '& .MuiOutlinedInput-root': {
//                   '&:hover fieldset': {
//                     borderColor: 'primary.main',
//                   },
//                 }
//               }}
//             />

//             <LoginButton 
//               fullWidth 
//               variant="contained" 
//               onClick={checkUser}
//               endIcon={<LockOutlinedIcon />}
//             >
//               כניסה למערכת
//             </LoginButton>
//           </Box>

//           <Box sx={{ mt: 3, textAlign: 'center' }}>
//             <Typography variant="caption" color="text.secondary">
//               © {new Date().getFullYear()} מערכת ניהול תקציבים | כל הזכויות שמורות
//             </Typography>
//           </Box>
//         </CardContent>
//       </LoginCard>

//       <Snackbar 
//         open={error} 
//         autoHideDuration={6000} 
//         onClose={handleCloseError}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleCloseError} 
//           severity="error" 
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {errorMessage}
//         </Alert>
//       </Snackbar>
//     </LoginContainer>
//   );
// };
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUsersThunk, getUserById } from "../../Redux/Slices/Users/getUsersThunk";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Avatar,
  Fade,
  Alert,
  CircularProgress,
  Divider,
  Grow,
  Zoom,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import './logIn.css';

// Animations
const float = keyframes`
  0% {
    transform: translateY(0px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  50% {
    transform: translateY(-15px);
    box-shadow: 0 25px 30px rgba(0,0,0,0.15);
  }
  100% {
    transform: translateY(0px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(0,121,107,0.3);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(0,121,107,0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(0,121,107,0.3);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

// Styled components
const LoginContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  background: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`,
  padding: theme.spacing(3),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300796b' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    zIndex: -1,
  },
}));

const LoginCard = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: 450,
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.95)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  backgroundColor: "white",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  animation: `${float} 6s ease-in-out infinite`,
  margin: "0 auto",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(3),
  "& .MuiSvgIcon-root": {
    fontSize: 60,
    color: "#00796b",
  },
}));

const LoginForm = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&.Mui-focused": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00796b",
        borderWidth: "2px",
      },
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#00796b",
  },
  "& .MuiInputLabel-root": {
    fontFamily: 'Rubik, sans-serif',
  },
  "& .MuiInputBase-input": {
    fontFamily: 'Rubik, sans-serif',
    padding: "16px 14px",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: "14px 0",
  fontWeight: 700,
  textTransform: "none",
  fontSize: "1.1rem",
  fontFamily: 'Rubik, sans-serif',
  background: `linear-gradient(135deg, #00796b 0%, #009688 50%, #004d40 100%)`,
  boxShadow: "0 4px 15px rgba(0,121,107,0.3)",
  transition: "all 0.3s ease",
  marginTop: theme.spacing(2),
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    boxShadow: "0 8px 25px rgba(0,121,107,0.5)",
    transform: "translateY(-3px)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)`,
    backgroundSize: "1000px 100%",
    animation: `${shimmer} 5s infinite linear`,
    zIndex: 1,
  },
  "&:not(:disabled)": {
    animation: `${pulse} 2s infinite ease-in-out`,
  },
}));

export const LogIn = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(s => s.user.allUsers);
  const currUser = useSelector(s => s.user.currUser);
  
  const getUsers = async () => {
    await dispatch(allUsersThunk());
  };
  
  useEffect(() => {
    getUsers();
    // Set mounted to true after a small delay for entrance animation
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const checkUser = async () => {
    // Validate inputs
    if (!name.trim() || !id.trim()) {
      setMsg(true);
      return;
    }
    
    try {
      setLoading(true);
      setMsg(false);
      
      const u = await dispatch(getUserById(parseInt(id)));
      
      if ((u.userName != name) || u.payload != undefined && u.payload.id > 0) {
        if (u.payload.schoolSymbol == 0) {
          navigate('home');
        } else if (u.payload.schoolSymbol != 0) {
          navigate('/work');
        }
      } else {
        u.payload = undefined;
        setMsg(true);
      }
      
      setId("");
    } catch (error) {
      console.error("Login error:", error);
      setMsg(true);
    } finally {
      setLoading(false);
    }
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkUser();
    }
  };
  
  return (
    <LoginContainer maxWidth="xl">
      <Zoom in={mounted} timeout={800}>
        <LoginCard elevation={0}>
          <LoginForm>
            <StyledAvatar>
              <SchoolIcon />
            </StyledAvatar>
            
            <Grow in={mounted} timeout={1000} style={{ transformOrigin: '0 0 0' }}>
              <Typography 
                variant="h4" 
                component="h1" 
                align="center" 
                sx={{ 
                  fontWeight: 800, 
                  color: "#00796b",
                  mb: 3,
                  fontFamily: 'Rubik, sans-serif',
                  textShadow: "0 2px 10px rgba(0,0,0,0.1)"
                }}
              >
                ברוכים הבאים
              </Typography>
            </Grow>
            
            <Grow in={mounted} timeout={1200} style={{ transformOrigin: '0 0 0' }}>
              <StyledTextField
                label="שם משתמש"
                variant="outlined"
                fullWidth
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#00796b" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grow>
            
            <Grow in={mounted} timeout={1400} style={{ transformOrigin: '0 0 0' }}>
              <StyledTextField
                label="קוד משתמש"
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={id}
                onChange={(e) => setId(e.target.value)}                  
                  onKeyPress={handleKeyPress}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#00796b" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grow>
              
              {msg && (
                <Fade in={msg}>
                  <Alert 
                    severity="error" 
                    sx={{ 
                      borderRadius: 12,
                      fontFamily: 'Rubik, sans-serif',
                      animation: `${pulse} 2s infinite ease-in-out`,
                      boxShadow: "0 4px 15px rgba(244,67,54,0.2)",
                    }}
                  >
                    שם משתמש או קוד שגויים. נסה שנית.
                  </Alert>
                </Fade>
              )}
              
              <Grow in={mounted} timeout={1600} style={{ transformOrigin: '0 0 0' }}>
                <LoginButton
                  variant="contained"
                  fullWidth
                  onClick={checkUser}
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
                >
                  {loading ? "מתחבר..." : "התחבר"}
                </LoginButton>
              </Grow>
              
              <Grow in={mounted} timeout={1800} style={{ transformOrigin: '0 0 0' }}>
                <Box sx={{ mt: 3 }}>
                  <Divider>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#78909c",
                        fontFamily: 'Rubik, sans-serif',
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AccountBalanceIcon fontSize="small" />
                      מערכת ניהול תקציב בית ספרי
                    </Typography>
                  </Divider>
                </Box>
              </Grow>
            </LoginForm>
          </LoginCard>
        </Zoom>
        
        <Fade in={mounted} timeout={2000}>
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              mt: 4, 
              color: "#546e7a",
              fontFamily: 'Rubik, sans-serif',
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            © {new Date().getFullYear()} מערכת ניהול תקציב | כל הזכויות שמורות
          </Typography>
        </Fade>
      </LoginContainer>
    );
  };
  
