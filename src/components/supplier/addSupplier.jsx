// import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addSuppThunk } from "../../Redux/Slices/Suplliers/suplliersThunk";


// export const AddSupplier = (props) => {

//  const  setAddSupp = props.setAddSupp
    
    
   
//     const dispatch = useDispatch()

//     const [newSupp ,setNewSupp] =
//         useState({supplierName: '', licensedNum: 0, bankCode: 0, numOfBankBranch: 0, numOfBankAccount: 0, nameOfOwnerAccount: ''})
           
        
    

//     const addSupplier = async() => {
//         debugger
//         await dispatch(addSuppThunk(newSupp));
       
            
        
           
        
//     }
        
//     // "supplierName": "גרפציק",
//     // "licensedNum": 99999,
//     // "bankCode": 1234,
//     // "numOfBankBranch": 12,
//     // "numOfBankAccount": 999,
//     // "nameOfOwnerAccount": "ישראל כץ  ",
   
//     return <>
//         {
//             <div>
//                 <Button onClick={()=>setAddSupp(false)}>❌</Button>
//                 <Input value={newSupp.supplierName} onChange={(i) => setNewSupp({ ...newSupp, supplierName: i.target.value })} placeholder='שם ספק' />
//                 <Input value={newSupp.licensedNum== 0?'':newSupp.licensedNum} onChange={(i) => setNewSupp({ ...newSupp, licensedNum: i.target.value })} placeholder='מספר עסק מורשה ' />
//                 <Input value={newSupp.bankCode== 0?'':newSupp.bankCode} onChange={(i) => setNewSupp({ ...newSupp, bankCode: i.target.value })} placeholder='קוד בנק' />
//                 <Input value={newSupp.numOfBankBranch== 0?'':newSupp.numOfBankBranch} onChange={(i) => setNewSupp({...newSupp, numOfBankBranch : i.target.value})} placeholder='מספר סניף' />
//                 <Input value={newSupp.numOfBankAccount== 0?'':newSupp.numOfBankAccount8} onChange={(i) => setNewSupp({...newSupp,numOfBankAccount : i.target.value})} placeholder='מספר חשבון' />
//                 <Input value={newSupp.nameOfOwnerAccount} onChange={(i) => setNewSupp({...newSupp, nameOfOwnerAccount :i.target.value})} placeholder='שם בעל החשבון' />

                
//                 {/* ======================================= */}
//                 {/* <button className='button' onClick={() => {addUser();setShowInput(false)}}>לאישור</button> */}
//             </div>
//         }
//         <button onClick={()=>addSupplier()}>לאישור</button>
        


//     </>
// }




// ==??????
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSuppThunk } from "../../Redux/Slices/Suplliers/suplliersThunk";
import {
  TextField,
  Grid,
  InputAdornment,
  Button,
  Box,
  Typography,
  Divider,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import NumbersIcon from "@mui/icons-material/Numbers";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

// Styled components
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00796b",
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
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: "10px 24px",
  fontWeight: 700,
  textTransform: "none",
  fontSize: "0.9rem",
  fontFamily: 'Rubik, sans-serif',
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
}));

export const AddSupplier = (props) => {
  const setAddSupp = props.setAddSupp;
  const dispatch = useDispatch();
  
  // Colors based on your theme
  const colors = {
    primary: "#00796b", // Teal
    primaryLight: "#48a999",
    primaryDark: "#004c40",
    secondary: "#ff5722", // Deep Orange
    secondaryLight: "#ff8a50",
    secondaryDark: "#c41c00",
    text: "#263238",
    textLight: "#546e7a",
    background: "#f5f5f5",
    card: "#ffffff",
    border: "#e0e0e0",
  };
  
  const [newSupp, setNewSupp] = useState({
    supplierName: '', 
    licensedNum: 0, 
    bankCode: 0, 
    numOfBankBranch: 0, 
    numOfBankAccount: 0, 
    nameOfOwnerAccount: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const addSupplier = async() => {
    if (!newSupp.supplierName) {
      return;
    }
    
    try {
      setLoading(true);
      await dispatch(addSuppThunk(newSupp));
      
      if (setAddSupp) {
        setAddSupp(false);
      }
    } catch (error) {
      console.error("Error adding supplier:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            color: colors.text,
            fontFamily: 'Rubik, sans-serif',
          }}
        >
          פרטי ספק
        </Typography>
        
        {setAddSupp && (
          <IconButton 
            onClick={() => setAddSupp(false)}
            sx={{ color: colors.textLight }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="שם ספק"
            variant="outlined"
            value={newSupp.supplierName}
            onChange={(i) => setNewSupp({ ...newSupp, supplierName: i.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="מספר עסק מורשה"
            variant="outlined"
            value={newSupp.licensedNum === 0 ? '' : newSupp.licensedNum}
            onChange={(i) => setNewSupp({ ...newSupp, licensedNum: i.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NumbersIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="קוד בנק"
            variant="outlined"
            value={newSupp.bankCode === 0 ? '' : newSupp.bankCode}
            onChange={(i) => setNewSupp({ ...newSupp, bankCode: i.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalanceIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="מספר סניף"
            variant="outlined"
            value={newSupp.numOfBankBranch === 0 ? '' : newSupp.numOfBankBranch}
            onChange={(i) => setNewSupp({ ...newSupp, numOfBankBranch: i.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalanceIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="מספר חשבון"
            variant="outlined"
            value={newSupp.numOfBankAccount === 0 ? '' : newSupp.numOfBankAccount}
            onChange={(i) => setNewSupp({ ...newSupp, numOfBankAccount: i.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCardIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="שם בעל החשבון"
            variant="outlined"
            value={newSupp.nameOfOwnerAccount}
            onChange={(i) => setNewSupp({ ...newSupp, nameOfOwnerAccount: i.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <FormButton
            variant="contained"
            onClick={addSupplier}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
            sx={{
              bgcolor: colors.primary,
              color: "white",
              "&:hover": {
                bgcolor: colors.primaryDark,
              },
            }}
          >
            {loading ? "שומר..." : "לאישור"}
          </FormButton>
        </Grid>
      </Grid>
    </Box>
  );
};



// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Grid,
//   Button,
//   TextField,
//   Avatar,
//   InputAdornment,
//   Alert,
//   Snackbar,
//   CircularProgress,
//   Card,
//   FormHelperText,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import BusinessIcon from "@mui/icons-material/Business";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import PersonIcon from "@mui/icons-material/Person";
// import NumbersIcon from "@mui/icons-material/Numbers";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import InfoIcon from "@mui/icons-material/Info";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { addSuppThunk } from "../../Redux/Slices/Suplliers/suplliersThunk";



// // Styled components
// const PageContainer = styled(Box)(({ theme }) => ({
//   minHeight: "100vh",
//   background: "#f8f9fa",
//   paddingTop: theme.spacing(4),
//   paddingBottom: theme.spacing(4),
// }));

// const ContentContainer = styled(Container)(({ theme }) => ({
//   paddingTop: theme.spacing(2),
//   paddingBottom: theme.spacing(4),
// }));

// const FormCard = styled(Card)(({ theme }) => ({
//   borderRadius: 16,
//   overflow: "hidden",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//   border: "1px solid #e0e0e0",
// }));

// const FormSection = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(4),
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   borderRadius: 30,
//   padding: "10px 24px",
//   fontWeight: 700,
//   textTransform: "none",
//   fontSize: "1rem",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
//   },
// }));

// export const AddSupplier = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();
  
//   // Institution color palette - Teal and Orange accents
//   const colors = {
//     primary: "#00796b", // Teal
//     primaryLight: "#48a999",
//     primaryDark: "#004c40",
//     secondary: "#ff5722", // Deep Orange
//     secondaryLight: "#ff8a50",
//     secondaryDark: "#c41c00",
//     text: "#263238",
//     textLight: "#546e7a",
//     background: "#f5f5f5",
//     card: "#ffffff",
//     border: "#e0e0e0",
//     success: "#4caf50",
//     warning: "#ff9800",
//     error: "#f44336",
//     info: "#2196f3",
//   };

//   // Get current user from Redux
//   const currUser = useSelector(u => u.user.currUser || {});
  
//   // Initialize supplier details with name from navigation state if available
//   const initialSupplierName = location.state?.supplierName || '';
  
//   // Local state
//   const [supplierDetails, setSupplierDetails] = useState({
//     supplierName: initialSupplierName,
//     contactName: '',
//     phone: '',
//     email: '',
//     licensedNum: ''
//   });
  
//   const [errors, setErrors] = useState({
//     supplierName: false,
//     contactName: false,
//     phone: false,
//     email: false,
//     licensedNum: false
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
  
//   // Validate form fields
//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^0\d{8,9}$/; // Israeli phone number format
    
//     const newErrors = {
//       supplierName: !supplierDetails.supplierName.trim(),
//       contactName: !supplierDetails.contactName.trim(),
//       phone: !supplierDetails.phone.trim() || !phoneRegex.test(supplierDetails.phone),
//       email: !supplierDetails.email.trim() || !emailRegex.test(supplierDetails.email),
//       licensedNum: !supplierDetails.licensedNum.trim() || isNaN(supplierDetails.licensedNum)
//     };
    
//     setErrors(newErrors);
    
//     return !Object.values(newErrors).some(error => error);
//   };
  
//   // Handle form submission
//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       return;
//     }
    
//     try {
//       setLoading(true);
      
//       const newSupplier = {
//         ...supplierDetails,
//         schoolSymbol: currUser.schoolSymbol,
//         licensedNum: parseInt(supplierDetails.licensedNum)
//       };
      
//       await dispatch(addSuppThunk(newSupplier));
      
//       setSuccess(true);
      
//       // Reset form after successful submission
//       setTimeout(() => {
//         navigate(-1); // Go back to previous page after success
//       }, 2000);
      
//     } catch (error) {
//       console.error("Error adding supplier:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   // Handle success message close
//   const handleSuccessClose = () => {
//     setSuccess(false);
//   };

//   return (
//     <PageContainer>
//       <ContentContainer maxWidth="md">
//         {/* Header */}
//         <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Avatar
//               sx={{
//                 bgcolor: `${colors.secondary}15`,
//                 color: colors.secondary,
//                 width: 60,
//                 height: 60,
//                 mr: 2,
//               }}
//             >
//               <BusinessIcon sx={{ fontSize: 35 }} />
//             </Avatar>
//             <Box>
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: 800,
//                   color: colors.text,
//                 }}
//               >
//                 הוספת ספק חדש
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: colors.textLight,
//                 }}
//               >
//                 הזן את פרטי הספק החדש
//               </Typography>
//             </Box>
//           </Box>
//           <ActionButton
//             variant="outlined"
//             startIcon={<ArrowBackIcon />}
//             sx={{
//               borderColor: colors.secondary,
//               color: colors.secondary,
//               "&:hover": {
//                 borderColor: colors.secondaryDark,
//                 bgcolor: `${colors.secondary}10`,
//               },
//             }}
//             onClick={() => navigate(-1)}
//           >
//             חזרה
//           </ActionButton>
//         </Box>

//         {/* Form Card */}
//         <FormCard>
//           <FormSection>
//             <Grid container spacing={3}>
//               {/* Supplier Name */}
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="שם הספק"
//                   variant="outlined"
//                   value={supplierDetails.supplierName}
//                   onChange={(e) => setSupplierDetails({ ...supplierDetails, supplierName: e.target.value })}
//                   error={errors.supplierName}
//                   helperText={errors.supplierName ? "יש להזין שם ספק" : ""}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <BusinessIcon sx={{ color: colors.secondary }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 2,
//                       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                         borderColor: colors.secondary,
//                       },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": {
//                       color: colors.secondary,
//                     },
//                   }}
//                 />
//               </Grid>

//               {/* License Number */}
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="מספר רישיון / ח.פ."
//                   variant="outlined"
//                   value={supplierDetails.licensedNum}
//                   onChange={(e) => setSupplierDetails({ ...supplierDetails, licensedNum: e.target.value })}
//                   error={errors.licensedNum}
//                   helperText={errors.licensedNum ? "יש להזין מספר רישיון תקין" : ""}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <NumbersIcon sx={{ color: colors.secondary }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 2,
//                       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                         borderColor: colors.secondary,
//                       },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": {
//                       color: colors.secondary,
//                     },
//                   }}
//                 />
//               </Grid>

//               {/* Contact Person */}
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="איש קשר"
//                   variant="outlined"
//                   value={supplierDetails.contactName}
//                   onChange={(e) => setSupplierDetails({ ...supplierDetails, contactName: e.target.value })}
//                   error={errors.contactName}
//                   helperText={errors.contactName ? "יש להזין שם איש קשר" : ""}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <PersonIcon sx={{ color: colors.secondary }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 2,
//                       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                         borderColor: colors.secondary,
//                       },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": {
//                       color: colors.secondary,
//                     },
//                   }}
//                 />
//               </Grid>

//               {/* Phone */}
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="טלפון"
//                   variant="outlined"
//                   value={supplierDetails.phone}
//                   onChange={(e) => setSupplierDetails({ ...supplierDetails, phone: e.target.value })}
//                   error={errors.phone}
//                   helperText={errors.phone ? "יש להזין מספר טלפון תקין" : ""}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <PhoneIcon sx={{ color: colors.secondary }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 2,
//                       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                         borderColor: colors.secondary,
//                       },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": {
//                       color: colors.secondary,
//                     },
//                   }}
//                 />
//               </Grid>

//               {/* Email */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="דוא״ל"
//                   variant="outlined"
//                   value={supplierDetails.email}
//                   onChange={(e) => setSupplierDetails({ ...supplierDetails, email: e.target.value })}
//                   error={errors.email}
//                   helperText={errors.email ? "יש להזין כתובת דוא״ל תקינה" : ""}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <EmailIcon sx={{ color: colors.secondary }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 2,
//                       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                         borderColor: colors.secondary,
//                       },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": {
//                       color: colors.secondary,
//                     },
//                   }}
//                 />
//               </Grid>
//             </Grid>

//             {/* Submit Button */}
//             <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
//               <ActionButton
//                 variant="contained"
//                 disabled={loading}
//                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AddCircleOutlineIcon />}
//                 sx={{
//                   bgcolor: colors.secondary,
//                   color: "white",
//                   minWidth: 200,
//                   "&:hover": {
//                     bgcolor: colors.secondaryDark,
//                   },
//                 }}
//                 onClick={handleSubmit}
//               >
//                 {loading ? "מוסיף ספק..." : "הוסף ספק"}
//               </ActionButton>
//             </Box>
//           </FormSection>
//         </FormCard>

//         {/* Information Card */}
//         <Box sx={{ mt: 4 }}>
//           <Paper
//             elevation={0}
//             sx={{
//               p: 3,
//               borderRadius: 4,
//               border: `1px dashed ${colors.secondary}`,
//               bgcolor: `${colors.secondary}08`,
//             }}
//           >
//             <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
//               <InfoIcon sx={{ verticalAlign: "middle", mr: 1, color: colors.secondary }} />
//               מידע חשוב
//             </Typography>
//             <Typography variant="body2" sx={{ color: colors.textLight }}>
//               • יש למלא את כל השדות בטופס
//             </Typography>
//             <Typography variant="body2" sx={{ color: colors.textLight }}>
//               • מספר הרישיון/ח.פ. חייב להיות מספר תקין
//             </Typography>
//             <Typography variant="body2" sx={{ color: colors.textLight }}>
//               • מספר הטלפון צריך להיות במבנה ישראלי תקין (לדוגמה: 0501234567)
//             </Typography>
//           </Paper>
//         </Box>

//         {/* Success Snackbar */}
//         <Snackbar
//           open={success}
//           autoHideDuration={6000}
//           onClose={handleSuccessClose}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         >
//           <Alert
//             onClose={handleSuccessClose}
//             severity="success"
//             variant="filled"
//             sx={{ width: '100%', borderRadius: 2 }}
//           >
//             הספק נוסף בהצלחה!
//           </Alert>
//         </Snackbar>
//       </ContentContainer>
//     </PageContainer>
//   );
// };

