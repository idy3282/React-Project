// import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addCategoryThunk } from "../../Redux/Slices/Categories/categoryThunk";


// export const AddCategory = (props) => {
//     const setAddCtgr = props.setAddCtgr
    
   
//     const dispatch = useDispatch()

//     const [newCategory ,setNewCategory] =useState({categoryName: ''})
        
           
        
    

//     const addCategory = async() => {
//         debugger
//         await dispatch(addCategoryThunk(newCategory));
       
            
        
           
        
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
//                 <Button onClick={()=>setAddCtgr(false)}>❌</Button>

//                 <Input value={newCategory.categoryName} onChange={(i) => setNewCategory({ ...newCategory, categoryName: i.target.value })} placeholder='שם קטגוריה' />
                

                
//                 {/* ======================================= */}
//                 {/* <button className='button' onClick={() => {addUser();setShowInput(false)}}>לאישור</button> */}
//             </div>
//         }
//         <button onClick={()=>addCategory()}>לאישור</button>


//     </>
// }




import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Avatar,
  InputAdornment,
  Alert,
  Snackbar,
  CircularProgress,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { addCategoryThunk } from "../../Redux/Slices/Categories/categoryThunk";



// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "#f8f9fa",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));

const FormCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  border: "1px solid #e0e0e0",
}));

const FormSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

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

export const AddCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Institution color palette - Teal and Orange accents
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
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3",
  };

  // Get current user from Redux
  const currUser = useSelector(u => u.user.currUser || {});
  
  // Initialize category details with name from navigation state if available
  const initialCategoryName = location.state?.categoryName || '';
  
  // Local state
  const [categoryDetails, setCategoryDetails] = useState({
    categoryName: initialCategoryName,
    description: '',
    priority: 'רגילה'
  });
  
  const [errors, setErrors] = useState({
    categoryName: false,
    description: false
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Validate form fields
  const validateForm = () => {
    const newErrors = {
      categoryName: !categoryDetails.categoryName.trim(),
      description: !categoryDetails.description.trim()
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };
  
  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    try {
      setLoading(true);
      
      const newCategory = {
        ...categoryDetails,
        schoolSymbol: currUser.schoolSymbol
      };
      
      await dispatch(addCategoryThunk(newCategory));
      
      setSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        navigate(-1); // Go back to previous page after success
      }, 2000);
      
    } catch (error) {
      console.error("Error adding category:", error);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle success message close
  const handleSuccessClose = () => {
    setSuccess(false);
  };

  return (
    <PageContainer>
      <ContentContainer maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
              <CategoryIcon sx={{ fontSize: 35 }} />
            </Avatar>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: colors.text,
                }}
              >
                הוספת קטגוריה חדשה
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.textLight,
                }}
              >
                הזן את פרטי הקטגוריה החדשה
              </Typography>
            </Box>
          </Box>
          <ActionButton
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{
              borderColor: colors.primary,
              color: colors.primary,
              "&:hover": {
                borderColor: colors.primaryDark,
                bgcolor: `${colors.primary}10`,
              },
            }}
            onClick={() => navigate(-1)}
          >
            חזרה
          </ActionButton>
        </Box>

        {/* Form Card */}
        <FormCard>
          <FormSection>
            <Grid container spacing={3}>
              {/* Category Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="שם הקטגוריה"
                  variant="outlined"
                  value={categoryDetails.categoryName}
                  onChange={(e) => setCategoryDetails({ ...categoryDetails, categoryName: e.target.value })}
                  error={errors.categoryName}
                  helperText={errors.categoryName ? "יש להזין שם קטגוריה" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CategoryIcon sx={{ color: colors.primary }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.primary,
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: colors.primary,
                    },
                  }}
                />
              </Grid>

              {/* Priority */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="priority-label">עדיפות</InputLabel>
                  <Select
                    labelId="priority-label"
                    value={categoryDetails.priority}
                    onChange={(e) => setCategoryDetails({ ...categoryDetails, priority: e.target.value })}
                    label="עדיפות"
                    startAdornment={
                      <InputAdornment position="start">
                        <PriorityHighIcon sx={{ color: colors.primary }} />
                      </InputAdornment>
                    }
                    sx={{
                      borderRadius: 2,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.border,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.primary,
                      },
                    }}
                  >
                    <MenuItem value="נמוכה">נמוכה</MenuItem>
                    <MenuItem value="רגילה">רגילה</MenuItem>
                    <MenuItem value="גבוהה">גבוהה</MenuItem>
                    <MenuItem value="דחופה">דחופה</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="תיאור"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={categoryDetails.description}
                  onChange={(e) => setCategoryDetails({ ...categoryDetails, description: e.target.value })}
                  error={errors.description}
                  helperText={errors.description ? "יש להזין תיאור לקטגוריה" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                        <DescriptionIcon sx={{ color: colors.primary }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.primary,
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: colors.primary,
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <ActionButton
                variant="contained"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AddCircleOutlineIcon />}
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  minWidth: 200,
                  "&:hover": {
                    bgcolor: colors.primaryDark,
                  },
                }}
                onClick={handleSubmit}
              >
                {loading ? "מוסיף קטגוריה..." : "הוסף קטגוריה"}
              </ActionButton>
            </Box>
          </FormSection>
        </FormCard>

        {/* Information Card */}
        <Box sx={{ mt: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: `1px dashed ${colors.primary}`,
              bgcolor: `${colors.primary}08`,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
              <InfoIcon sx={{ verticalAlign: "middle", mr: 1, color: colors.primary }} />
              מידע חשוב
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textLight }}>
              • שם הקטגוריה צריך להיות ייחודי וברור
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textLight }}>
              • התיאור צריך להסביר את סוג ההוצאות שנכללות בקטגוריה זו
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textLight }}>
              • עדיפות הקטגוריה תשפיע על סדר התצוגה ברשימות
            </Typography>
          </Paper>
        </Box>

        {/* Success Snackbar */}
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleSuccessClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleSuccessClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%', borderRadius: 2 }}
          >
            הקטגוריה נוספה בהצלחה!
          </Alert>
        </Snackbar>
      </ContentContainer>
    </PageContainer>
  );
};