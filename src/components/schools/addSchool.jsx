// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
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
// import CategoryIcon from "@mui/icons-material/Category";
// import SaveIcon from "@mui/icons-material/Save";
// import CloseIcon from "@mui/icons-material/Close";
// import { addSchoolThunk } from "../../Redux/Slices/Schools/schoolThunk";

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

// export const AddSchool = (props) => {
//   const setAddScl = props.setAddScl;
//   const dispatch = useDispatch();
  
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
  
//   const [newScl, setNewScl] = useState({
//     schoolSymbol: 0,schoolName: '',budget: '0',
//   });
  
//   const [loading, setLoading] = useState(false);
  
//   const addCategory = async() => {
//     if (!newScl.scholName) {
//       return;
//     }
    
//     try {
//       setLoading(true);
//       await dispatch(addSchoolThunk(newScl));
      
//       if (setNewScl) {
//         setNewScl(false);
//       }
//     } catch (error) {
//       console.error("Error adding category:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <Box>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//         <Typography 
//           variant="h6" 
//           sx={{ 
//             fontWeight: 700, 
//             color: colors.text,
//             fontFamily: 'Rubik, sans-serif',
//           }}
//         >
//           פרטי קטגוריה
//         </Typography>
        
//         {setAddScl && (
//           <IconButton 
//             onClick={() => setAddScl(false)}
//             sx={{ color: colors.textLight }}
//           >
//             <CloseIcon />
//           </IconButton>
//         )}
//       </Box>
      
//       <Divider sx={{ mb: 3 }} />
      
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <StyledTextField
//             fullWidth
//             label="שם מוסד"
//             variant="outlined"
//             value={newScl.scholName}
//             onChange={(i) => setAddScl({ ...newScl, schoolName: i.target.value })}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <CategoryIcon sx={{ color: colors.primary }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>
        
//         <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
//           <FormButton
//             variant="contained"
//             onClick={addCategory}
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









import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import SchoolIcon from "@mui/icons-material/School";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import NumbersIcon from "@mui/icons-material/Numbers";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { addSchoolThunk } from "../../Redux/Slices/Schools/schoolThunk";

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

export const AddSchool = ({ onClose }) => {
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
  
  const [newSchool, setNewSchool] = useState({
    schoolSymbol: '',
    schoolName: '',
    budget: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleInputChange = (field, value) => {
    setNewSchool({
      ...newSchool,
      [field]: value
    });
    setError('');
  };
  
  const validateForm = () => {
    if (!newSchool.schoolName.trim()) {
      setError('שם המוסד הוא שדה חובה');
      return false;
    }
    
    if (!newSchool.schoolSymbol) {
      setError('סמל מוסד הוא שדה חובה');
      return false;
    }
    
    if (isNaN(Number(newSchool.schoolSymbol))) {
      setError('סמל מוסד חייב להיות מספר');
      return false;
    }
    
    if (newSchool.budget && isNaN(Number(newSchool.budget))) {
      setError('תקציב חייב להיות מספר');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    try {
      setLoading(true);
      
      const schoolData = {
        ...newSchool,
        schoolSymbol: Number(newSchool.schoolSymbol),
        budget: newSchool.budget ? Number(newSchool.budget) : 0,
      };
      
      await dispatch(addSchoolThunk(schoolData));
      
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("שגיאה בהוספת מוסד:", error);
      setError('אירעה שגיאה בהוספת המוסד. אנא נסה שנית.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            color: colors.text,
            fontFamily: 'Rubik, sans-serif',
            textAlign: 'right'
          }}
        >
          הוספת מוסד חדש
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: colors.textLight,
            fontFamily: 'Rubik, sans-serif',
            textAlign: 'right'
          }}
        >
          אנא מלא את הפרטים הבאים להוספת מוסד חדש למערכת
        </Typography>
      </Box>
      
      <Divider sx={{ mb: 3 }} />
      
      {error && (
        <Box 
          sx={{ 
            bgcolor: '#ffebee', 
            color: '#c62828', 
            p: 2, 
            borderRadius: 1, 
            mb: 2,
            fontFamily: 'Rubik, sans-serif',
            textAlign: 'right'
          }}
        >
          {error}
        </Box>
      )}
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledTextField
            fullWidth
            required
            label="שם מוסד"
            variant="outlined"
            value={newSchool.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
            sx={{ textAlign: 'right' }}
            inputProps={{ dir: 'rtl' }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <StyledTextField
            fullWidth
            required
            label="סמל מוסד"
            variant="outlined"
            type="number"
            value={newSchool.schoolSymbol}
            onChange={(e) => handleInputChange('schoolSymbol', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NumbersIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
            }}
            sx={{ textAlign: 'right' }}
            inputProps={{ dir: 'rtl' }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <StyledTextField
            fullWidth
            label="תקציב כללי"
            variant="outlined"
            type="number"
            value={newSchool.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalanceWalletIcon sx={{ color: colors.primary }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography sx={{ fontFamily: 'Rubik, sans-serif' }}>₪</Typography>
                </InputAdornment>
              ),
            }}
            sx={{ textAlign: 'right' }}
            inputProps={{ dir: 'rtl' }}
          />
        </Grid>
        
        <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <FormButton
            variant="outlined"
            onClick={onClose}
            disabled={loading}
            sx={{
              borderColor: colors.textLight,
              color: colors.textLight,
              "&:hover": {
                borderColor: colors.text,
                color: colors.text,
              },
            }}
          >
            ביטול
          </FormButton>
          
          <FormButton
            variant="contained"
            onClick={handleSubmit}
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
            {loading ? "שומר..." : "הוסף מוסד"}
          </FormButton>
        </Grid>
      </Grid>
    </Box>
  );
};
