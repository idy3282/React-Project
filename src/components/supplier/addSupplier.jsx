
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addSuppThunk } from "../../Redux/Slices/Suplliers/suplliersThunk";
// import {
//   Avatar,
//   TextField,
//   Grid,
//   InputAdornment,
//   Button,
//   Box,
//   Typography,
//   Divider,
//   CircularProgress,
//   IconButton,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import BusinessIcon from "@mui/icons-material/Business";
// import NumbersIcon from "@mui/icons-material/Numbers";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import PersonIcon from "@mui/icons-material/Person";
// import SaveIcon from "@mui/icons-material/Save";
// import CloseIcon from "@mui/icons-material/Close";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";

// // Styled components
// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   "& .MuiOutlinedInput-root": {
//     borderRadius: 8,
//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#00796b",
//     },
//   },
//   "& .MuiInputLabel-root.Mui-focused": {
//     color: "#00796b",
//   },
//   "& .MuiInputLabel-root": {
//     fontFamily: 'Rubik, sans-serif',
//   },
//   "& .MuiInputBase-input": {
//     fontFamily: 'Rubik, sans-serif',
//   },
// }));

// const FormButton = styled(Button)(({ theme }) => ({
//   borderRadius: 30,
//   padding: "10px 24px",
//   fontWeight: 700,
//   textTransform: "none",
//   fontSize: "0.9rem",
//   fontFamily: 'Rubik, sans-serif',
//   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
//   },
// }));

// export const AddSupplier = (props) => {
//   const setAddSupp = props.setAddSupp;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   // Colors based on your theme
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
//   };
  
//   const [newSupp, setNewSupp] = useState({
//     supplierName: '', 
//     licensedNum: 0, 
//     bankCode: 0, 
//     numOfBankBranch: 0, 
//     numOfBankAccount: 0, 
//     nameOfOwnerAccount: ''
//   });
  
//   const [loading, setLoading] = useState(false);
  
//   const addSupplier = async() => {
//     debugger
//     if (!newSupp.supplierName) {
//       return;
//     }
    
//     try {
//       setLoading(true);
//       await dispatch(addSuppThunk(newSupp));
      
//       if (setAddSupp) {
//         setAddSupp(false);
//       }
//     } catch (error) {
//       console.error("Error adding supplier:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const ActionButton = styled(Button)(({ theme }) => ({
//     borderRadius: 30,
//     padding: "10px 24px",
//     fontWeight: 700,
//     textTransform: "none",
//     fontSize: "1rem",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "translateY(-2px)",
//       boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
//     },
//   }));
//   return (
//   <Box>

 
//       <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Avatar
//               sx={{
//                 bgcolor: `${colors.primary}15`,
//                 color: colors.primary,
//                 width: 60,
//                 height: 60,
//                 mr: 2,
//               }}
//             >
//               <AddCircleOutlineIcon sx={{ fontSize: 35 }} />
//             </Avatar>
//             <Box>
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: 800,
//                   color: colors.text,
//                   fontFamily: 'Rubik, sans-serif',
//                 }}
//               >
//                 הוספת ספק חדש 
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: colors.textLight,
//                   fontFamily: 'Rubik, sans-serif',
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
//               borderColor: colors.primary,
//               color: colors.primary,
//               "&:hover": {
//                 borderColor: colors.primaryDark,
//                 bgcolor: `${colors.primary}10`,
//               },
//               fontFamily: 'Rubik, sans-serif',
//             }}
//             onClick={() => {setAddSupp(false);}}
//           >
//             חזרה
//           </ActionButton>
//         </Box>

      
//       <Divider sx={{ mb: 3 }} />
      
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <StyledTextField
//             fullWidth
//             label="שם ספק"
//             variant="outlined"
//             value={newSupp.supplierName}
//             onChange={(i) => setNewSupp({ ...newSupp, supplierName: i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <BusinessIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <StyledTextField
//             fullWidth
//             type="number"
//             label="מספר עסק מורשה"
//             variant="outlined"
//             value={newSupp.licensedNum === 0 ? '' : newSupp.licensedNum}
//             onChange={(i) => setNewSupp({ ...newSupp, licensedNum: +i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <NumbersIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <StyledTextField
//             fullWidth
//             type="number"
//             label="קוד בנק"
//             variant="outlined"
//             value={newSupp.bankCode === 0 ? '' : newSupp.bankCode}
//             onChange={(i) => setNewSupp({ ...newSupp, bankCode: +i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountBalanceIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <StyledTextField
//             fullWidth
//             type="number"
//             label="מספר סניף"
//             variant="outlined"
//             value={newSupp.numOfBankBranch === 0 ? '' : newSupp.numOfBankBranch}
//             onChange={(i) => setNewSupp({ ...newSupp, numOfBankBranch: +i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountBalanceIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <StyledTextField
//             fullWidth
//             type="number"
//             label="מספר חשבון"
//             variant="outlined"
//             value={newSupp.numOfBankAccount === 0 ? '' : newSupp.numOfBankAccount}
//             onChange={(i) => setNewSupp({ ...newSupp, numOfBankAccount: +i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <CreditCardIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <StyledTextField
//             fullWidth
//             label="שם בעל החשבון"
//             variant="outlined"
//             value={newSupp.nameOfOwnerAccount}
//             onChange={(i) => setNewSupp({ ...newSupp, nameOfOwnerAccount: i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PersonIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
//           <FormButton
//             variant="contained"
//             onClick={addSupplier}
//             disabled={loading}
//             startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
//             sx={{
//               bgcolor: colors.primary,
//               color: "white",
//               "&:hover": {
//                 bgcolor: colors.primaryDark,
//               },
//             }}
//           >
//             {loading ? "שומר..." : "לאישור"}
//           </FormButton>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addSuppThunk } from "../../Redux/Slices/Suplliers/suplliersThunk";
// import {
//   Avatar,
//   TextField,
//   Grid,
//   InputAdornment,
//   Button,
//   Box,
//   Typography,
//   Divider,
//   CircularProgress,
//   FormHelperText,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// import BusinessIcon from "@mui/icons-material/Business";
// import NumbersIcon from "@mui/icons-material/Numbers";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import PersonIcon from "@mui/icons-material/Person";
// import SaveIcon from "@mui/icons-material/Save";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";
// import "./addSupplier.css";

// export const AddSupplier = (props) => {
//   const setAddSupp = props.setAddSupp;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   // Colors based on your theme
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
//     error: "#f44336",
//   };
  
//   const [newSupp, setNewSupp] = useState({
//     supplierName: '', 
//     licensedNum: 0, 
//     bankCode: 0, 
//     numOfBankBranch: 0, 
//     numOfBankAccount: 0, 
//     nameOfOwnerAccount: ''
//   });
  
//   const [errors, setErrors] = useState({
//     supplierName: false,
//     licensedNum: false,
//     bankCode: false,
//     numOfBankBranch: false,
//     numOfBankAccount: false,
//     nameOfOwnerAccount: false
//   });
  
//   const [loading, setLoading] = useState(false);
  
//   // Handle input change and clear error for that field
//   const handleInputChange = (field, value) => {
//     // Clear error for this field as soon as user starts typing
//     if (errors[field]) {
//       setErrors({
//         ...errors,
//         [field]: false
//       });
//     }
    
//     // Update the field value
//     setNewSupp({
//       ...newSupp,
//       [field]: field === 'supplierName' || field === 'nameOfOwnerAccount' ? value : +value
//     });
//   };
  
//   // Validate all fields
//   const validateForm = () => {
//     const newErrors = {
//       supplierName: !newSupp.supplierName.trim(),
//       licensedNum: newSupp.licensedNum === 0 || isNaN(newSupp.licensedNum),
//       bankCode: newSupp.bankCode === 0 || isNaN(newSupp.bankCode),
//       numOfBankBranch: newSupp.numOfBankBranch === 0 || isNaN(newSupp.numOfBankBranch),
//       numOfBankAccount: newSupp.numOfBankAccount === 0 || isNaN(newSupp.numOfBankAccount),
//       nameOfOwnerAccount: !newSupp.nameOfOwnerAccount.trim()
//     };
    
//     setErrors(newErrors);
    
//     // Return true if no errors (all fields are valid)
//     return !Object.values(newErrors).some(error => error);
//   };
  
//   const addSupplier = async() => {
//     // Validate form before submission
//     if (!validateForm()) {
//       return;
//     }
    
//     try {
//       setLoading(true);
//       await dispatch(addSuppThunk(newSupp));
      
//       if (setAddSupp) {
//         setAddSupp(false);
//       }
//     } catch (error) {
//       console.error("Error adding supplier:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const ActionButton = styled(Button)(({ theme }) => ({
//     borderRadius: 30,
//     padding: "10px 24px",
//     fontWeight: 700,
//     textTransform: "none",
//     fontSize: "1rem",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "translateY(-2px)",
//       boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
//     },
//   }));
  
//   return (
//   <Box>
//       <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Avatar
//               sx={{
//                 bgcolor: `${colors.primary}15`,
//                 color: colors.primary,
//                 width: 60,
//                 height: 60,
//                 mr: 2,
//               }}
//               className="supplier-avatar"
//             >
//               <AddCircleOutlineIcon sx={{ fontSize: 35 }} />
//             </Avatar>
//             <Box>
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: 800,
//                   color: colors.text,
//                   fontFamily: 'Rubik, sans-serif',
//                 }}
//                 className="supplier-title"
//               >
//                 הוספת ספק חדש 
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: colors.textLight,
//                   // fontFamily: 'Rubik, sans-serif',
//                 }}
//                 className="supplier-subtitle"
//               >
//                 הזן את פרטי הספק החדש
//               </Typography>
//             </Box>
//           </Box>
//           <ActionButton
//             variant="outlined"
//             startIcon={<ArrowBackIcon />}
//             sx={{
//               borderColor: colors.primary,
//               color: colors.primary,
//               "&:hover": {
//                 borderColor: colors.primaryDark,
//                 bgcolor: `${colors.primary}10`,
//               },
//               fontFamily: 'Rubik, sans-serif',
//             }}
//             className="back-button"
//             onClick={() => {setAddSupp(false);}}
//           >
//             חזרה
//           </ActionButton>
//         </Box>

      
//       <Divider sx={{ mb: 3 }} className="supplier-divider" />
      
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="שם ספק *"
//             variant="outlined"
//             value={newSupp.supplierName}
//             onChange={(i) => handleInputChange('supplierName', i.target.value)}
//             error={errors.supplierName}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <BusinessIcon sx={{ color: errors.supplierName ? colors.error : colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//             className="supplier-text-field"
//           />
//           {errors.supplierName && (
//             <FormHelperText error className="error-text">שדה חובה - יש להזין שם ספק</FormHelperText>
//           )}
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             type="number"
//             label="מספר עסק מורשה *"
//             variant="outlined"
//             value={newSupp.licensedNum === 0 ? '' : newSupp.licensedNum}
//             onChange={(i) => handleInputChange('licensedNum', i.target.value)}
//             error={errors.licensedNum}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <NumbersIcon sx={{ color: errors.licensedNum ? colors.error : colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//             className="supplier-text-field"
//           />
//           {errors.licensedNum && (
//             <FormHelperText error className="error-text">שדה חובה - יש להזין מספר עסק תקין</FormHelperText>
//           )}
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             type="number"
//             label="קוד בנק *"
//             variant="outlined"
//             value={newSupp.bankCode === 0 ? '' : newSupp.bankCode}
//             onChange={(i) => handleInputChange('bankCode', i.target.value)}
//             error={errors.bankCode}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountBalanceIcon sx={{ color: errors.bankCode ? colors.error : colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//             className="supplier-text-field"
//           />
//           {errors.bankCode && (
//             <FormHelperText error className="error-text">שדה חובה - יש להזין קוד בנק תקין</FormHelperText>
//           )}
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             type="number"
//             label="מספר סניף *"
//             variant="outlined"
//             value={newSupp.numOfBankBranch === 0 ? '' : newSupp.numOfBankBranch}
//             onChange={(i) => handleInputChange('numOfBankBranch', i.target.value)}
//             error={errors.numOfBankBranch}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountBalanceIcon sx={{ color: errors.numOfBankBranch ? colors.error : colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//             className="supplier-text-field"
//           />
//           {errors.numOfBankBranch && (
//             <FormHelperText error className="error-text">שדה חובה - יש להזין מספר סניף תקין</FormHelperText>
//           )}
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             type="number"
//             label="מספר חשבון *"
//             variant="outlined"
//             value={newSupp.numOfBankAccount === 0 ? '' : newSupp.numOfBankAccount}
//             onChange={(i) => handleInputChange('numOfBankAccount', i.target.value)}
//             error={errors.numOfBankAccount}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <CreditCardIcon sx={{ color: errors.numOfBankAccount ? colors.error : colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//             className="supplier-text-field"
//           />
//           {errors.numOfBankAccount && (
//             <FormHelperText error className="error-text">שדה חובה - יש להזין מספר חשבון תקין</FormHelperText>
//           )}
//         </Grid>
        
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="שם בעל החשבון *"
//             variant="outlined"
//             value={newSupp.nameOfOwnerAccount}
//             onChange={(i) => handleInputChange('nameOfOwnerAccount', i.target.value)}
//             error={errors.nameOfOwnerAccount}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PersonIcon sx={{ color: errors.nameOfOwnerAccount ? colors.error : colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//             className="supplier-text-field"
//           />
//           {errors.nameOfOwnerAccount && (
//             <FormHelperText error className="error-text">שדה חובה - יש להזין שם בעל חשבון</FormHelperText>
//           )}
//         </Grid>
        
//         <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
//           <Button
//             variant="contained"
//             onClick={addSupplier}
//             disabled={loading}
//             startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
//             sx={{
//               bgcolor: colors.primary,
//               color: "white",
//               "&:hover": {
//                 bgcolor: colors.primaryDark,
//               },
//               borderRadius: 30,
//               padding: "10px 24px",
//               fontWeight: 700,
//               textTransform: "none",
//               fontSize: "0.9rem",
//               fontFamily: 'Rubik, sans-serif',
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               transition: "all 0.3s ease",
//             }}
//             className="submit-button"
//           >
//             {loading ? "שומר..." : "לאישור"}
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSuppThunk } from "../../Redux/Slices/Suplliers/suplliersThunk";
import {
  Avatar,
  TextField,
  Grid,
  InputAdornment,
  Button,
  Box,
  Typography,
  Divider,
  CircularProgress,
  IconButton,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import NumbersIcon from "@mui/icons-material/Numbers";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { allSupplierThunk } from "../../Redux/Slices/Suplliers/getSupplierThunk";
import { set } from "date-fns";
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
  const navigate = useNavigate();
  const suppliers = useSelector((state) => state.supplier.allSuppliers);
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
  const [validSupp, setValidSupp] = useState(false);
  
  const addSupplier = async() => {
    debugger
    if(suppliers.find(supplier => supplier.licensedNum === newSupp.licensedNum)) {
      setValidSupp(true);
     
      return;
    }

    if (!newSupp.supplierName) {
      return;
    }
    
    try {
      setLoading(true);
      var s = await dispatch(addSuppThunk(newSupp));

      if (s.payload) {
        await dispatch(allSupplierThunk());
      }
      
      if (setAddSupp) {
        setAddSupp(false);
      }
    } catch (error) {
      console.error("Error adding supplier:", error);
    } finally {
      setLoading(false);
    }
  };
  const ActionButton = styled(Button)(({ theme }) => ({
    borderRadius: 30,
    padding: "10px 24px",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    },
  }));
  return (
  <Box sx={{ padding: "20px",direction:'rtl' }}>  {/* Added padding here */}

 
      <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{
                bgcolor: `${colors.primary}15`,
                color: colors.primary,
                width: 60,
                height: 60,
                mr: 2,
              }}
            >
              <AddCircleOutlineIcon sx={{ fontSize: 35 }} />
            </Avatar>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: colors.text,
                  fontFamily: 'Rubik, sans-serif',
                }}
              >
                הוספת ספק חדש 
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.textLight,
                  fontFamily: 'Rubik, sans-serif',
                }}
              >
                הזן את פרטי הספק החדש
              </Typography>
            </Box>
          </Box>
          <ActionButton
            variant="outlined"
            
            sx={{
              borderColor: colors.primary,
              color: colors.primary,
              "&:hover": {
                borderColor: colors.primaryDark,
                bgcolor: `${colors.primary}10`,
              },
              fontFamily: 'Rubik, sans-serif',
            }}
            onClick={() => {setAddSupp(false);}}
          
          >חזרה
           <ArrowBackIcon sx={{ fontSize: 19, marginRight: "7px" }}/> 
          </ActionButton>
        </Box>

      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>  {/* Changed spacing from 2 to 3 for more space */}
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
            type="number"
            label="מספר עסק מורשה"
            variant="outlined"
            value={newSupp.licensedNum === 0 ? '' : newSupp.licensedNum}
            onChange={(i) =>{ setNewSupp({ ...newSupp, licensedNum: +i.target.value });setValidSupp(false);}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NumbersIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
          />
 {validSupp && <Alert 
                        severity="info" 
                        sx={{ 
                          borderRadius: 2, 
                          flex: 1,
                          mr: 1,
                          fontFamily: 'Rubik, sans-serif',
                          direction: 'rtl',
                          marginLeft: "20px",
                          bgcolor: `${colors.primary}15`,                        }}
                      >
                        מספר רישוי זה כבר קיים במערכת ע"ש ספק אחר
                      </Alert>}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            type="number"
            label="קוד בנק"
            variant="outlined"
            value={newSupp.bankCode === 0 ? '' : newSupp.bankCode}
            onChange={(i) => setNewSupp({ ...newSupp, bankCode: +i.target.value })}
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
            type="number"
            label="מספר סניף"
            variant="outlined"
            value={newSupp.numOfBankBranch === 0 ? '' : newSupp.numOfBankBranch}
            onChange={(i) => setNewSupp({ ...newSupp, numOfBankBranch: +i.target.value })}
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
            type="number"
            label="מספר חשבון"
            variant="outlined"
            value={newSupp.numOfBankAccount === 0 ? '' : newSupp.numOfBankAccount}
            onChange={(i) => setNewSupp({ ...newSupp, numOfBankAccount: +i.target.value })}
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

