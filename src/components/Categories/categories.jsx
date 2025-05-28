


// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { allCategoriesThunk, getDebtCategoryThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
// import { 
//   Dialog, 
//   Paper, 
//   Typography, 
//   Button, 
//   Box, 
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   InputAdornment,
//   IconButton,
//   Tooltip,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Chip,
//   CircularProgress
// } from '@mui/material';
// import { AddCategory } from './addCategory';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import SearchIcon from '@mui/icons-material/Search';
// import EditIcon from '@mui/icons-material/Edit';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import CloseIcon from '@mui/icons-material/Close';
// import './categories.css';

// export const Category = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [addCtgr, setAddCtgr] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [filteredCategories, setFilteredCategories] = useState([]);
//     const [sortOrder, setSortOrder] = useState('asc');
//     const [sortField, setSortField] = useState('id');
//     const [loadingDebtMap, setLoadingDebtMap] = useState({});
//     const [categoryDebts, setCategoryDebts] = useState({});
//     const [currentCategoryForDebt, setCurrentCategoryForDebt] = useState(null);
    
//     const categories = useSelector(c => c.category.allCategories);
//     // כאן אנחנו מקבלים את נתוני החוב מהסטור
//     const debtOfCategory = useSelector(c => c.category.debtOfCategory);
    
//     const dispatch = useDispatch();

//     // פורמט סכום כספי
//     const formatCurrency = (amount) => {
//         if (amount === undefined || amount === null) return '0 ₪';
//         return new Intl.NumberFormat('he-IL', { 
//             style: 'currency', 
//             currency: 'ILS',
//             minimumFractionDigits: 0,
//             maximumFractionDigits: 0
//         }).format(amount);
//     };

//     // חיפוש חוב לפי קטגוריה
//     const searchDebtByCategory = async (categoryName) => {
//         if (categoryName.trim()) {
//             try {
//                 // עדכון מצב טעינה לקטגוריה ספציפית
//                 setLoadingDebtMap(prev => ({ ...prev, [categoryName]: true }));
                
//                 // שמירת הקטגוריה הנוכחית שעבורה אנחנו מבקשים חוב
//                 setCurrentCategoryForDebt(categoryName);
                
//                 // קריאה לשרת
//                 await dispatch(getDebtCategoryThunk(categoryName));
                
//                 console.log("Dispatched getDebtCategoryThunk for:", categoryName);
//             } catch (error) {
//                 console.error("Error fetching debt:", error);
//                 // במקרה של שגיאה, נציג 0
//                 setCategoryDebts(prev => ({
//                     ...prev,
//                     [categoryName]: 0
//                 }));
//                 setLoadingDebtMap(prev => ({ ...prev, [categoryName]: false }));
//             }
//         }
//     };

//     // איפוס הצגת החוב וחזרה לכפתור
//     const resetDebtDisplay = (categoryName) => {
//         setCategoryDebts(prev => {
//             const newState = { ...prev };
//             delete newState[categoryName];
//             return newState;
//         });
//     };

//     // עדכון נתוני החוב כאשר מתקבלים מהשרת
//     useEffect(() => {
//         console.log("debtOfCategory updated:", debtOfCategory);
        
//         // אם יש קטגוריה נוכחית וקיבלנו נתוני חוב
//         if (currentCategoryForDebt && debtOfCategory) {
//             // אם debtOfCategory הוא מערך
//             if (Array.isArray(debtOfCategory)) {
//                 // חישוב סך החוב לקטגוריה
//                 const totalDebt = debtOfCategory.reduce((sum, item) => {
//                     // ודא שהחוב הוא מספר
//                     const debtAmount = typeof item.debt === 'number' ? item.debt : 
//                                       parseFloat(item.debt) || 0;
//                     return sum + debtAmount;
//                 }, 0);
                
//                 console.log(`Setting debt for ${currentCategoryForDebt}: ${totalDebt}`);
                
//                 // עדכון החוב בסטייט
//                 setCategoryDebts(prev => ({
//                     ...prev,
//                     [currentCategoryForDebt]: totalDebt
//                 }));
//             } 
//             // אם debtOfCategory הוא אובייקט בודד
//             else if (typeof debtOfCategory === 'object' && debtOfCategory !== null) {
//                 const debtAmount = typeof debtOfCategory.debt === 'number' ? debtOfCategory.debt : 
//                                   parseFloat(debtOfCategory.debt) || 0;
                
//                 console.log(`Setting debt for ${currentCategoryForDebt}: ${debtAmount}`);
                
//                 setCategoryDebts(prev => ({
//                     ...prev,
//                     [currentCategoryForDebt]: debtAmount
//                 }));
//             }
//             // אם debtOfCategory הוא מספר ישירות
//             else if (typeof debtOfCategory === 'number') {
//                 console.log(`Setting debt for ${currentCategoryForDebt}: ${debtOfCategory}`);
                
//                 setCategoryDebts(prev => ({
//                     ...prev,
//                     [currentCategoryForDebt]: debtOfCategory
//                 }));
//             }
            
//             // סיום הטעינה
//             setLoadingDebtMap(prev => ({ ...prev, [currentCategoryForDebt]: false }));
//         }
//     }, [debtOfCategory, currentCategoryForDebt]);

//     // סינון וחיפוש קטגוריות
//     useEffect(() => {
//         if (categories) {
//             let result = [...categories];
            
//             // חיפוש
//             if (searchTerm.trim() !== '') {
//                 result = result.filter(category => 
//                     category.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     (category.id && category.id.toString().includes(searchTerm))
//                 );
//             }
            
//             // מיון
//             result.sort((a, b) => {
//                 let comparison = 0;
                
//                 if (sortField === 'id') {
//                     const idA = a.id || 0;
//                     const idB = b.id || 0;
//                     comparison = idA - idB;
//                 } else if (sortField === 'name') {
//                     comparison = a.categoryName.localeCompare(b.categoryName);
//                 }
                
//                 return sortOrder === 'asc' ? comparison : -comparison;
//             });
            
//             setFilteredCategories(result);
//         }
//     }, [categories, searchTerm, sortOrder, sortField]);

//     // עריכת קטגוריה
//     const handleEditCategory = (category) => {
//         setSelectedCategory(category);
//         setAddCtgr(true);
//     };

//     // שינוי שדה המיון
//     const handleSortFieldChange = (event) => {
//         setSortField(event.target.value);
//     };

//     // שינוי סדר המיון
//     const handleSortOrderChange = (event) => {
//         setSortOrder(event.target.value);
//     };

//     useEffect(() => {
//         dispatch(allCategoriesThunk());
//     }, [dispatch]);

//     return (
//         <Paper className="categories-container" elevation={3}>
//             {/* כותרת וכפתור הוספה */}
//             <Box className="categories-header">
//                 <Typography className="categories-title">
//                     ניהול קטגוריות
//                 </Typography>
//                 <Button 
//                     variant="contained" 
//                     className="add-button"
//                     startIcon={<AddCircleIcon />}
//                     onClick={() => {
//                         setSelectedCategory(null);
//                         setAddCtgr(true);
//                     }}
//                     disableElevation
//                 >
//                     הוסף קטגוריה
//                 </Button>
//             </Box>

//             {/* חיפוש וסינון */}
//             <Box className="filters-container">
//                 <Box className="search-box">
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         size="small"
//                         placeholder="חיפוש לפי קוד או שם קטגוריה..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <SearchIcon color="action" />
//                                 </InputAdornment>
//                             )
//                         }}
//                     />
//                 </Box>
                
//                 <Box className="sort-box">
//                     <FormControl size="small" className="sort-field">
//                         <InputLabel>מיון לפי</InputLabel>
//                         <Select
//                             value={sortField}
//                             label="מיון לפי"
//                             onChange={handleSortFieldChange}
//                         >
//                             <MenuItem value="id">קוד קטגוריה</MenuItem>
//                             <MenuItem value="name">שם קטגוריה</MenuItem>
//                         </Select>
//                     </FormControl>
                    
//                     <FormControl size="small" className="sort-order">
//                         <InputLabel>סדר</InputLabel>
//                         <Select
//                             value={sortOrder}
//                             label="סדר"
//                             onChange={handleSortOrderChange}
//                         >
//                             <MenuItem value="asc">עולה</MenuItem>
//                             <MenuItem value="desc">יורד</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Box>
//             </Box>

//             {/* טבלת קטגוריות */}
//             <TableContainer className="table-container">
//                 <Table>
//                     <TableHead>
//                         <TableRow className="table-header">
//                             <TableCell>קוד קטגוריה</TableCell>
//                             <TableCell>שם קטגוריה</TableCell>
//                             <TableCell align="center">חוב כולל</TableCell>
//                             <TableCell align="center">עריכה</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredCategories && filteredCategories.length > 0 ? (
//                             filteredCategories.map((category) => (
//                                 <TableRow key={category.id || category.categoryName} className="table-row">
//                                     <TableCell component="th" scope="row">
//                                         {category.categoryId || 'ללא קוד'}
//                                     </TableCell>
//                                     <TableCell>
//                                         {category.categoryName}
//                                     </TableCell>
//                                     <TableCell align="center" >{()=>searchDebtByCategory(category.categoryName)}
//                                         {/* {loadingDebtMap[category.categoryName] ? (
//                                             <CircularProgress size={24} />
//                                         ) : categoryDebts[category.categoryName] !== undefined ? (
//                                             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                                 <Chip 
//                                                     label={formatCurrency(categoryDebts[category.categoryName])}
//                                                     color="error"
//                                                     variant="outlined"
//                                                     sx={{ fontWeight: 'bold', mr: 1 }}
//                                                 /> */}
//                                                 {/* <Tooltip title="רענן">
//                                                     <IconButton 
//                                                         size="small" 
//                                                         onClick={() => searchDebtByCategory(category.categoryName)}
//                                                         sx={{ color: '#00796b' }}
//                                                     >
//                                                         <RefreshIcon fontSize="small" />
//                                                     </IconButton>
//                                                 </Tooltip> */}
//                                                 {/* <Tooltip title="סגור">
//                                                     <IconButton 
//                                                         size="small" 
//                                                         onClick={() => resetDebtDisplay(category.categoryName)}
//                                                         sx={{ color: '#f44336' }}
//                                                     >
//                                                         <CloseIcon fontSize="small" />
//                                                     </IconButton>
//                                                 </Tooltip> */}
//                                             {/* </Box>
//                                         ) : (
//                                             <Button
//                                                 size="small"
//                                                 variant="outlined"
//                                                 className="debt-button"
//                                                 startIcon={<AccountBalanceWalletIcon />}
//                                                 onClick={() => {
//                                                     console.log("Fetching debt for:", category.categoryName);
//                                                     searchDebtByCategory(category.categoryName);
//                                                 }}
//                                             >
//                                                 הצג חוב
//                                             </Button>
//                                         )} */}
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Tooltip title="ערוך קטגוריה">
//                                             <IconButton 
//                                                 className="edit-button"
//                                                 onClick={() => handleEditCategory(category)}
//                                             >
//                                                 <EditIcon fontSize="small" />
//                                             </IconButton>
//                                         </Tooltip>
//                                     </TableCell>
//                                 </TableRow>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell colSpan={4} className="empty-message">
//                                     {searchTerm ? 'לא נמצאו קטגוריות התואמות לחיפוש' : 'אין קטגוריות להצגה'}
//                                 </TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             {/* דיאלוג הוספת/עריכת קטגוריה */}
//             <Dialog 
//                 open={addCtgr} 
//                 onClose={() => setAddCtgr(false
//                     )}
//                     PaperProps={{
//                         sx: { borderRadius: 2, p: 1 }
//                     }}
//                 >
//                     <AddCategory 
//                         setAddCtgr={setAddCtgr} 
//                         selectedCategory={selectedCategory}
//                     />
//                 </Dialog>
//             </Paper>
//         );
//     };
    // גרסה אחרונה
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { allSupplierThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
// import { addSuppThunk } from '../../Redux/Slices/Suplliers/suplliersThunk';
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   InputAdornment,
//   Chip,
//   Divider,
//   Grid,
//   Card,
//   CardContent,
//   TablePagination,
//   Avatar,
//   Tooltip,
//   Alert,
//   Snackbar,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Collapse
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import SearchIcon from '@mui/icons-material/Search';
// import BusinessIcon from '@mui/icons-material/Business';
// import SortIcon from '@mui/icons-material/Sort';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { AddSupplier } from './addSupplier';
// import './supplier.css';

// export const Supplier = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   // מידע מהסטור
//   const suppliers = useSelector(state => state.supplier?.allSuppliers || []);
//   const currUser = useSelector(state => state.user?.currUser || {});
  
//   // סטייטים לניהול הדף
//   const [openAddDialog, setOpenAddDialog] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortField, setSortField] = useState('supplierName');
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [expandedRow, setExpandedRow] = useState(null);
  
//   // טעינת נתונים בעת טעינת הדף
//   useEffect(() => {
//     dispatch(allSupplierThunk());
//   }, [dispatch]);
  
//   // פונקציות לניהול מיון
//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortField(field);
//       setSortDirection('asc');
//     }
//   };
  
//   // פונקציות לניהול עמודים
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
  
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
  
//   // פונקציות לניהול הוספת ספק
//   const handleOpenAddDialog = () => {
//     setOpenAddDialog(true);
//   };
  
//   const handleCloseAddDialog = () => {
//     setOpenAddDialog(false);
//   };
  
//   // פונקציה לניהול פתיחת/סגירת פרטי חשבון
//   const handleToggleRow = (id) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };
  
//   // סינון וסידור הספקים
//   const filteredSuppliers = suppliers
//     .filter(supplier => 
//       // סינון לפי מוסד הנוכחי
//       supplier.institutionId === currUser?.institutionId &&
//       // סינון לפי חיפוש
//       (supplier.supplierName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        supplier.licensedNum?.toString().includes(searchTerm) ||
//        supplier.bankCode?.toString().includes(searchTerm) ||
//        supplier.numOfBankBranch?.toString().includes(searchTerm) ||
//        supplier.nameOfOwnerAccount?.toLowerCase().includes(searchTerm.toLowerCase()))
//     )
//     .sort((a, b) => {
//       // מיון לפי השדה הנבחר
//       const aValue = a[sortField] || '';
//       const bValue = b[sortField] || '';
      
//       // טיפול במיון מספרים
//       if (!isNaN(aValue) && !isNaN(bValue)) {
//         return sortDirection === 'asc' 
//           ? Number(aValue) - Number(bValue)
//           : Number(bValue) - Number(aValue);
//       }
      
//       // טיפול במיון מחרוזות
//       if (sortDirection === 'asc') {
//         return String(aValue).localeCompare(String(bValue), 'he');
//       } else {
//         return String(bValue).localeCompare(String(aValue), 'he');
//       }
//     });
  
//   // חישוב הספקים לתצוגה בעמוד הנוכחי
//   const displayedSuppliers = filteredSuppliers
//     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
//   return (
//     <Paper className="supplier-page">
//       <Container maxWidth="lg" className="supplier-container">
//         {/* כותרת ופעולות */}
//         <Paper className="supplier-header-paper">
//           <Box className="supplier-header">
//             <Typography variant="h5" className="supplier-title">
//               ניהול ספקים
//             </Typography>
//             <Button 
//               variant="contained" 
//               className="add-supplier-button"
//               startIcon={<AddCircleOutlineIcon />}
//               onClick={handleOpenAddDialog}
//             >
//               הוספת ספק חדש
//             </Button>
//           </Box>
//         </Paper>
        
//         {/* אזור חיפוש וסינון */}
//         <Paper className="supplier-filters-paper">
//           <Box className="supplier-filters">
//             <TextField
//               placeholder="חיפוש ספק..."
//               variant="outlined"
//               size="medium"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="supplier-search"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon color="action" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
            
//             <FormControl className="supplier-sort">
//               <InputLabel id="sort-field-label">מיון לפי</InputLabel>
//               <Select
//                 labelId="sort-field-label"
//                 value={sortField}
//                 label="מיון לפי"
//                 onChange={(e) => handleSort(e.target.value)}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
//                   </InputAdornment>
//                 }
//               >
//                 <MenuItem value="supplierName">שם ספק</MenuItem>
//                 <MenuItem value="licensedNum">מספר עסק מורשה</MenuItem>
//                 <MenuItem value="bankCode">קוד בנק</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//         </Paper>
        
//         {/* סיכום נתונים */}
//         <Paper className="supplier-summary-paper">
//           <Box className="supplier-summary">
//             <Box className="supplier-summary-info">
//               <BusinessIcon className="supplier-summary-icon" />
//               <Box>
//                 <Typography variant="h6" className="supplier-summary-title">
//                   סך הספקים במערכת
//                 </Typography>
//                 <Typography variant="body2" className="supplier-summary-subtitle">
//                   מציג {filteredSuppliers.length} ספקים מתוך {suppliers.filter(s => s.institutionId === currUser?.institutionId).length} ספקים
//                 </Typography>
//               </Box>
//             </Box>
//             <Chip
//               label={`${filteredSuppliers.length} ספקים`}
//               className="supplier-summary-chip"
//             />
//           </Box>
//         </Paper>
        
//         {/* טבלת ספקים */}
//         {displayedSuppliers.length > 0 ? (
//           <Paper className="supplier-table-paper">
//             <TableContainer>
//               <Table aria-label="טבלת ספקים">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell align="right" className="supplier-table-header">
//                       <Box 
//                         className="supplier-sort-header"
//                         onClick={() => handleSort('licensedNum')}
//                       >
//                         מספר עסק מורשה
//                         {sortField === 'licensedNum' && (
//                           <Box component="span" className="supplier-sort-icon">
//                             {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
//                           </Box>
//                         )}
//                       </Box>
//                     </TableCell>
//                     <TableCell align="right" className="supplier-table-header">
//                       <Box 
//                         className="supplier-sort-header"
//                         onClick={() => handleSort('supplierName')}
//                       >
//                         שם ספק
//                         {sortField === 'supplierName' && (
//                           <Box component="span" className="supplier-sort-icon">
//                             {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
//                           </Box>
//                         )}
//                       </Box>
//                     </TableCell>
//                     <TableCell align="right" className="supplier-table-header">
//                       פרטי חשבון
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {displayedSuppliers.map((supplier) => (
//                     <React.Fragment key={supplier.licensedNum || supplier.id}>
//                       <TableRow className="supplier-table-row">
//                         <TableCell align="right">
//                           {supplier.licensedNum || 'לא צוין'}
//                         </TableCell>
//                         <TableCell align="right">
//                           <Box className="supplier-name-cell">
//                             <Avatar className="supplier-avatar">
//                               {supplier.supplierName?.charAt(0) || 'S'}
//                             </Avatar>
//                             <Typography className="supplier-name">
//                               {supplier.supplierName}
//                             </Typography>
//                           </Box>
//                         </TableCell>
//                         <TableCell align="right">
//                           <Box className="supplier-account-cell">
//                             <Button
//                               variant="text"
//                               color="primary"
//                               startIcon={expandedRow === supplier.licensedNum ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                               onClick={() => handleToggleRow(supplier.licensedNum)}
//                               className="supplier-expand-button"
//                             >
//                               הצג פרטי חשבון
//                             </Button>
//                           </Box>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                           <Collapse in={expandedRow === supplier.licensedNum} timeout="auto" unmountOnExit>
//                             <Box className="supplier-details">
//                               <Typography variant="h6" className="supplier-details-title">
//                                 פרטי חשבון בנק
//                               </Typography>
//                               <Grid container spacing={2}>
//                                 <Grid item xs={12} md={4}>
//                                   <Box className="supplier-detail-item">
//                                     <AccountBalanceIcon className="supplier-detail-icon" />
//                                     <Typography variant="subtitle2" className="supplier-detail-label">
//                                       קוד בנק:
//                                     </Typography>
//                                   </Box>
//                                   <Typography variant="body1" className="supplier-detail-value">
//                                     {supplier.bankCode || 'לא צוין'}
//                                   </Typography>
//                                 </Grid>
//                                 <Grid item xs={12} md={4}>
//                                   <Box className="supplier-detail-item">
//                                     <AccountBalanceIcon className="supplier-detail-icon" />
//                                     <Typography variant="subtitle2" className="supplier-detail-label">
//                                       מספר סניף:
//                                     </Typography>
//                                   </Box>
//                                   <Typography variant="body1" className="supplier-detail-value">
//                                     {supplier.numOfBankBranch || 'לא צוין'}
//                                   </Typography>
//                                 </Grid>
//                                 <Grid item xs={12} md={4}>
//                                   <Box className="supplier-detail-item">
//                                     <AccountBalanceIcon className="supplier-detail-icon" />
//                                     <Typography variant="subtitle2" className="supplier-detail-label">
//                                       שם בעל החשבון:
//                                     </Typography>
//                                   </Box>
//                                   <Typography variant="body1" className="supplier-detail-value">
//                                     {supplier.nameOfOwnerAccount || 'לא צוין'}
//                                   </Typography>
//                                 </Grid>
//                               </Grid>
//                             </Box>
//                           </Collapse>
//                         </TableCell>
//                       </TableRow>
//                     </React.Fragment>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
            
//             <TablePagination
//               component="div"
//               count={filteredSuppliers.length}
//               page={page}
//               onPageChange={handleChangePage}
//               rowsPerPage={rowsPerPage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               labelRowsPerPage="שורות בעמוד:"
//               labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
//                 rowsPerPageOptions={[5, 10, 25, 50]}
//                 className="supplier-pagination"
//               />
//             </Paper>
//           ) : (
//             <Paper className="supplier-empty-paper">
//               <BusinessIcon className="supplier-empty-icon" />
//               <Typography variant="h6" className="supplier-empty-title">
//                 לא נמצאו ספקים
//               </Typography>
//               <Typography variant="body2" className="supplier-empty-subtitle">
//                 {searchTerm ? 'לא נמצאו ספקים התואמים את החיפוש שלך' : 'עדיין לא הוספת ספקים למערכת'}
//               </Typography>
//               <Button
//                 variant="contained"
//                 startIcon={<AddCircleOutlineIcon />}
//                 className="supplier-empty-button"
//                 onClick={handleOpenAddDialog}
//               >
//                 הוספת ספק חדש
//               </Button>
//             </Paper>
//           )}
          
//           {/* דיאלוג הוספת ספק */}
//           <Dialog 
//             open={openAddDialog} 
//             onClose={handleCloseAddDialog}
//             maxWidth="md"
            
            
//             fullWidth
//             className="supplier-add-dialog"
//           >
            
//             <AddSupplier  setAddSupp={setOpenAddDialog}  />
//           </Dialog>
          
//           {/* הודעת סנאקבר */}
//           <Snackbar 
//             open={snackbar.open} 
//             autoHideDuration={6000} 
//             onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
//             anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//           >
//             <Alert 
//               onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
//               severity={snackbar.severity}
//               className="supplier-snackbar"
//             >
//               {snackbar.message}
//             </Alert>
//           </Snackbar>
//         </Container>
//       </Paper>
//     );
//   };
  






// // import { useEffect } from 'react';
// // import {useSelector,useDispatch} from 'react-redux'

// // import * as React from 'react';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { allSupplierThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
// // import { Dialog } from '@mui/material';
// // import { AddSupplier } from './addSupplier';
// // export const Supplier = () =>{
// // const schools = useSelector(s => s.supplier.allSuppliers)
// // console.log("school  --",schools);
// // const dispatch=useDispatch()
// // const [addSupp,setAddSupp]=React.useState(false)
// // const [flag,setFlag]=React.useState(false)

// // const getData=async()=>{
// //        await dispatch(allSupplierThunk())
// //     }
    
// // useEffect(()=>{
// //     getData()
// // },[])

// //     return <>


// //    {
    
// //     // schools?.map((e)=>{
// //     //     return <div key ={e} style={{color:"blue",width:"3080px",height:"850px"}}>
// //     //         {e.schoolName}
// //             <TableContainer component={Paper} sx={{width:"50%",height:"auto"}}>
// //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //         <TableHead>
// //           <TableRow>
// //             <TableCell>מספר עסק מורשה</TableCell>
// //             <TableCell align="right">שם ספק</TableCell>
// //             <TableCell align="right">פרטי בנק</TableCell>
// //             {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
// //             {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {schools.map((sc) => (
// //             <TableRow
// //               key={sc.licensedNum}
// //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //             >
// //               <TableCell component="th" scope="row">
// //                 {sc.licensedNum}
// //               </TableCell>
// //                <TableCell align="right">{sc.supplierName}</TableCell>
// //               <TableCell align="right">{sc.bankCode}</TableCell>
// //               {/* <TableCell align="right">{row.carbs}</TableCell>
// //               <TableCell align="right">{row.protein}</TableCell> */}
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>}
 
// //        {  <button className='button' onClick={() => { setAddSupp(true); debugger; }}>להוספת ספק לרשימה</button>}
          
// //        {addSupp && <Dialog open><AddSupplier setAddSupp={setAddSupp}/></Dialog>}
 
// //     </>
// // }



// חידוד קטגוריות בספק
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allSupplierThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
import { addSuppThunk } from '../../Redux/Slices/Suplliers/suplliersThunk';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
  TablePagination,
  Avatar,
  Tooltip,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Collapse
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from "@mui/icons-material/Category";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import { allCategoriesThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
import { AddCategory } from './addCategory';

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

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00796b',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#00796b',
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Rubik, sans-serif',
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Rubik, sans-serif',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  overflow: "hidden",
  border: "1px solid #e0e0e0",
  '& .MuiTableCell-head': {
    backgroundColor: '#f5f5f5',
    fontWeight: 700,
    color: '#263238',
    fontFamily: 'Rubik, sans-serif',
  },
  '& .MuiTableCell-body': {
    fontFamily: 'Rubik, sans-serif',
  },
  '& .MuiTableRow-root': {
    '&:hover': {
      backgroundColor: 'rgba(0, 121, 107, 0.04)',
    },
  },
}));

export const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Institution color palette - Teal and Orange accents (matching addExpenditure)
  const colors = {
    primary: "#00796b", // Teal
    primaryLight: "#48a999",
    primaryDark: "#004c40",
    secondary: "#115293", // Deep Orange
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
  
  // Redux state
  const categories = useSelector(state => state.category?.allCategories || []);
  const currUser = useSelector(state => state.user?.currUser || {});
  
  // Local state
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('supplierName');
  const [sortDirection, setSortDirection] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [expandedRow, setExpandedRow] = useState(null);
  
  // Fetch data on component mount
  useEffect(() => {
    dispatch(allCategoriesThunk);
  }, [dispatch]);
  
  // Sort functions
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Pagination functions
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  // Dialog functions
  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };
  
  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };
  
  // Toggle row expansion
  const handleToggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  
  // Filter and sort categories
  const filteredCategories = categories
    .filter(category => 
      // Filter by current institution
      category.institutionId === currUser?.institutionId &&
      // Filter by search term
      (
      category.categoryId?.toString().includes(searchTerm) ||
      category.categoryName?.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      // Sort by selected field
      const aValue = a[sortField] || '';
      const bValue = b[sortField] || '';
      
      // Handle numeric sorting
      if (!isNaN(aValue) && !isNaN(bValue)) {
        return sortDirection === 'asc' 
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }
      
      // Handle string sorting
      if (sortDirection === 'asc') {
        return String(aValue).localeCompare(String(bValue), 'he');
      } else {
        return String(bValue).localeCompare(String(aValue), 'he');
      }
    });
  
  // Calculate categories to display on current page
  const displayedCategories = filteredCategories
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  return (
    <PageContainer sx={{direction: "rtl"}}>
      <ContentContainer maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{
                bgcolor: `${colors.primary}15`,
                color: colors.primary,
                width: 55,
                height: 55,
                mr: 2,
                ml: 3
              }}
            >
             <CategoryIcon sx={{ fontSize: 29 }} />
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
                ניהול קטגוריות
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.textLight,
                  fontFamily: 'Rubik, sans-serif',
                }}
              >
                צפייה, הוספה ועריכה של קטגוריות במערכת
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
            onClick={() => navigate(-1)}
          >
            חזרה
            <ArrowBackIcon sx={{ fontSize: 19, marginRight: "7px" }}/>
          </ActionButton>
        </Box>

        {/* Search and Actions */}
        <FormCard sx={{ mb: 4 }}>
          <FormSection>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <SearchField
                  fullWidth
                  placeholder="חיפוש קטגוריה..."
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: colors.primary }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel id="sort-field-label" sx={{ fontFamily: 'Rubik, sans-serif' }}>מיון לפי</InputLabel>
                  <Select
                    labelId="sort-field-label"
                    value={sortField}
                    label="מיון לפי"
                    onChange={(e) => handleSort(e.target.value)}
                    sx={{
                      borderRadius: 2,
                      fontFamily: 'Rubik, sans-serif',
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.border,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.primary,
                      },
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        {sortDirection === 'asc' ? 
                          <ArrowUpwardIcon fontSize="small" sx={{ color: colors.primary }} /> : 
                          <ArrowDownwardIcon fontSize="small" sx={{ color: colors.primary }} />
                        }
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="categoryName" sx={{ fontFamily: 'Rubik, sans-serif' }}>שם קטגוריה</MenuItem>
                    <MenuItem value="categoryId" sx={{ fontFamily: 'Rubik, sans-serif' }}>קוד קטגוריה</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <ActionButton
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon sx={{marginLeft: '6px'}} />}
                  sx={{
                    bgcolor: colors.primary,
                    color: "white",
                    "&:hover": {
                      bgcolor: colors.primaryDark,
                    },
                    fontFamily: 'Rubik, sans-serif',
                  }}
                  onClick={handleOpenAddDialog}
                >
                  הוספת קטגוריה חדשה
                </ActionButton>
              </Grid>
            </Grid>
          </FormSection>
        </FormCard>

        {/* Summary Card */}
        {/* <Box sx={{ mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: `1px solid ${colors.border}`,
              bgcolor: `${colors.primary}08`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: `${colors.primary}15`,
                  width: 60,
                  height: 60,
                  mr: 2,
                  border: `2px solid ${colors.primary}`,
                }}
              >
                <BusinessIcon sx={{ color: colors.primary, fontSize: 30 }} />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text, fontFamily: 'Rubik, sans-serif' }}>
                  סך הספקים במערכת
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textLight, fontFamily: 'Rubik, sans-serif' }}>
                  מציג {filteredSuppliers.length} ספקים מתוך {suppliers.filter(s => s.institutionId === currUser?.institutionId).length} ספקים
                </Typography>
              </Box>
            </Box>
            <Chip
              label={`${filteredSuppliers.length} ספקים`}
              sx={{
                bgcolor: `${colors.primary}15`,
                color: colors.primary,
                fontWeight: 600,
                border: `1px solid ${colors.primary}40`,
                px: 2,
                py: 3,
                fontSize: '1rem',
                fontFamily: 'Rubik, sans-serif',
              }}
            />
          </Paper>
        </Box> */}
        
        {/* Suppliers Table */}
        {displayedCategories.length > 0 ? (
          <FormCard sx={{ mb: 4 }}>
            <StyledTableContainer>
              <Table aria-label="טבלת קטגוריות">
                <TableHead>
                  <TableRow>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'right',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleSort('categoryId')}
                      >
                        קוד קטגוריה
                        {sortField === 'categoryId' && (
                          <Box component="span" sx={{ mr: 1 }}>
                            {sortDirection === 'asc' ? 
                              <ArrowUpwardIcon fontSize="small" sx={{ color: colors.primary }} /> : 
                              <ArrowDownwardIcon fontSize="small" sx={{ color: colors.primary }} />
                            }
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'right',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleSort('categoryName')}
                      >
                        שם קטגוריה
                        {sortField === 'categoryName' && (
                          <Box component="span" sx={{ mr: 1 }}>
                            {sortDirection === 'asc' ? 
                              <ArrowUpwardIcon fontSize="small" sx={{ color: colors.primary }} /> : 
                              <ArrowDownwardIcon fontSize="small" sx={{ color: colors.primary }} />
                            }
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedCategories.map((category) => (
                    <React.Fragment key={category.categoryId || category.id}>
                      <TableRow sx={{ '&:lastcategory-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="right">
                          {category.categoryId || 'לא צוין'}
                        </TableCell>
                        <TableCell align="right">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}> 
                            <Typography sx={{ fontWeight: 600, fontFamily: 'Rubik, sans-serif' }}>
                              {category.categoryName}
                            </Typography>
                          </Box>
                        </TableCell>
                        
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                          <Collapse in={expandedRow === category.categoryId} timeout="auto" unmountOnExit>
                            <Box sx={{ 
                              margin: 2, 
                              p: 3, 
                              bgcolor: `${colors.primary}05`, 
                              borderRadius: 2,
                              border: `1px dashed ${colors.primary}30`
                            }}>
                              {/* <Typography 
                                variant="h6" 
                                gutterBottom 
                                component="div" 
                                sx={{ 
                                  fontWeight: 700, 
                                  color: colors.primary,
                                  fontFamily: 'Rubik, sans-serif',
                                  display: 'flex',
                                  alignItems: 'center',
                                  mb: 2
                                }}
                              >
                                <AccountBalanceIcon sx={{ mr: 1 }} />
                                פרטי חשבון בנק
                              </Typography>
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Typography 
                                      variant="subtitle2" 
                                      sx={{ 
                                        fontWeight: 600,
                                        color: colors.textLight,
                                        fontFamily: 'Rubik, sans-serif'
                                      }}
                                    >
                                      קוד בנק:
                                    </Typography>
                                  </Box>
                                  <Typography 
                                    variant="body1"
                                    sx={{
                                      fontWeight: 500,
                                      fontFamily: 'Rubik, sans-serif'
                                    }}
                                  >
                                    {supplier.bankCode || 'לא צוין'}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Typography 
                                      variant="subtitle2" 
                                      sx={{ 
                                        fontWeight: 600,
                                        color: colors.textLight,
                                        fontFamily: 'Rubik, sans-serif'
                                      }}
                                    >
                                      מספר סניף:
                                    </Typography>
                                  </Box>
                                  <Typography 
                                    variant="body1"
                                    sx={{
                                      fontWeight: 500,
                                      fontFamily: 'Rubik, sans-serif'
                                    }}
                                  >
                                    {supplier.numOfBankBranch || 'לא צוין'}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Typography 
                                      variant="subtitle2" 
                                      sx={{ 
                                        fontWeight: 600,
                                        color: colors.textLight,
                                        fontFamily: 'Rubik, sans-serif'
                                      }}
                                    >
                                      שם בעל החשבון:
                                    </Typography>
                                  </Box>
                                  <Typography 
                                    variant="body1"
                                    sx={{
                                      fontWeight: 500,
                                      fontFamily: 'Rubik, sans-serif'
                                    }}
                                  >
                                    {supplier.nameOfOwnerAccount || 'לא צוין'}
                                  </Typography>
                                </Grid>
                              </Grid>*/}
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment> 
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
            
            <Box sx={{ p: 2 }}>
              <TablePagination
                component="div"
                count={filteredCategories.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="שורות בעמוד:"
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
                rowsPerPageOptions={[5, 10, 25, 50]}
                sx={{
                  '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
                    fontWeight: 500,
                    fontFamily: 'Rubik, sans-serif',
                  },
                  '.MuiTablePagination-select': {
                    fontFamily: 'Rubik, sans-serif',
                  }
                }}
              />
            </Box>
          </FormCard>
        ) : (
          <FormCard sx={{ mb: 4 }}>
            <Box sx={{ 
              p: 6, 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Avatar
                sx={{
                  bgcolor: `${colors.primary}15`,
                  color: colors.primary,
                  width: 80,
                  height: 80,
                  mb: 2
                }}
              >
                <BusinessIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  color: colors.text, 
                  mb: 1,
                  fontFamily: 'Rubik, sans-serif'
                }}
              >
                לא נמצאו קטגוריות
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: colors.textLight, 
                  mb: 3,
                  maxWidth: 500,
                  fontFamily: 'Rubik, sans-serif'
                }}
              >
                {searchTerm ? 
                  'לא נמצאו קטגוריות התואמות את החיפוש שלך' : 
                  'עדיין לא הוספת קטגוריה למערכת. לחץ על הכפתור למטה כדי להוסיף קטגוריה חדשה.'
                }
              </Typography>
              <ActionButton
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  "&:hover": {
                    bgcolor: colors.primaryDark,
                  },
                  fontFamily: 'Rubik, sans-serif',
                }}
                onClick={handleOpenAddDialog}
              >
                הוספת קטגוריה חדשה
              </ActionButton>
            </Box>
          </FormCard>
        )}
        
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
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                color: colors.text, 
                mb: 1, 
                fontFamily: 'Rubik, sans-serif' 
              }}
            >
              <InfoIcon sx={{ verticalAlign: "middle", mr: 1, color: colors.primary }} />
              מידע חשוב
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: colors.textLight, 
                fontFamily: 'Rubik, sans-serif',
                mb: 0.5
              }}
            >
              • ניתן לחפש ספקים לפי שם,וקוד קטגוריה 
            </Typography>
           
            <Typography 
              variant="body2" 
              sx={{ 
                color: colors.textLight, 
                fontFamily: 'Rubik, sans-serif' 
              }}
            >
              • ניתן למיין את הטבלה לפי שם קטגוריה 
            </Typography>
          </Paper>
        </Box>
        
        {/* Add Supplier Dialog */}
        <Dialog
          open={openAddDialog}
          onClose={handleCloseAddDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: `1px solid ${colors.border}`,
            },
          }}
        >
          <Box sx={{ 
            bgcolor: colors.primary, 
            py: 2, 
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                color: 'white', 
                fontFamily: 'Rubik, sans-serif',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <BusinessIcon sx={{ mr: 1 }} />
              הוספת קטגוריה חדשה
            </Typography>
            <IconButton 
              onClick={handleCloseAddDialog}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <DialogContent sx={{ 
            p: 0, 
            '&:first-of-type': { 
              pt: 0 
            } 
          }}>
            
            
            <Box sx={{ p: 3 }}>
              <AddCategory setAddCategory={setOpenAddDialog} />
            </Box>
          </DialogContent>
        </Dialog>
        
        {/* Success Snackbar */}
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
            severity={snackbar.severity}
            variant="filled"
            sx={{ 
              width: '100%', 
              borderRadius: 2, 
              fontFamily: 'Rubik, sans-serif' 
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </ContentContainer>
    </PageContainer>
  );
};












