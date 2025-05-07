
// import { useEffect } from 'react';
// import {useSelector,useDispatch} from 'react-redux'

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { allSupplierThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
// import { Dialog } from '@mui/material';
// import { AddSupplier } from './addSupplier';
// export const Supplier = () =>{
// const schools = useSelector(s => s.supplier.allSuppliers)
// console.log("school  --",schools);
// const dispatch=useDispatch()
// const [addSupp,setAddSupp]=React.useState(false)
// const [flag,setFlag]=React.useState(false)

// const getData=async()=>{
//        await dispatch(allSupplierThunk())
//     }
    
// useEffect(()=>{
//     getData()
// },[])

//     return <>


//    {
    
//     // schools?.map((e)=>{
//     //     return <div key ={e} style={{color:"blue",width:"3080px",height:"850px"}}>
//     //         {e.schoolName}
//             <TableContainer component={Paper} sx={{width:"50%",height:"auto"}}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>מספר עסק מורשה</TableCell>
//             <TableCell align="right">שם ספק</TableCell>
//             <TableCell align="right">פרטי בנק</TableCell>
//             {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
//             {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {schools.map((sc) => (
//             <TableRow
//               key={sc.licensedNum}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {sc.licensedNum}
//               </TableCell>
//                <TableCell align="right">{sc.supplierName}</TableCell>
//               <TableCell align="right">{sc.bankCode}</TableCell>
//               {/* <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell> */}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>}
 
//        {  <button className='button' onClick={() => { setAddSupp(true); debugger; }}>להוספת ספק לרשימה</button>}
          
//        {addSupp && <Dialog open><AddSupplier setAddSupp={setAddSupp}/></Dialog>}
 
//     </>
// }













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
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// סגנון מותאם לדף
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: '#f8f9fa',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '10px 24px',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '1rem',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  overflow: 'hidden',
  '& .MuiTableCell-head': {
    fontWeight: 700,
    backgroundColor: '#f5f5f5',
  },
  '& .MuiTableRow-root': {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SupplierAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 40,
  height: 40,
  fontSize: '1.2rem',
  fontWeight: 'bold',
}));

export const Supplier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // צבעים מותאמים לפי הדף הראשי
  const colors = {
    primary: "#0288d1", // Blue
    primaryLight: "#5eb8ff",
    primaryDark: "#005b9f",
    secondary: "#009688", // Teal/Turquoise
    secondaryLight: "#52c7b8",
    secondaryDark: "#00675b",
    accent: "#f0a030", // Muted amber/orange
    accentLight: "#ffcf60",
    accentDark: "#c67100",
    text: "#263238",
    textLight: "#546e7a",
    background: "#f5f5f5",
    card: "#ffffff",
    border: "#e0e0e0",
  };
  
  // מידע מהסטור
  const suppliers = useSelector(state => state.supplier?.allSuppliers || []);
  const currUser = useSelector(state => state.user?.currUser || {});
  
  // סטייטים לניהול הדף
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('supplierName');
  const [sortDirection, setSortDirection] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [newSupplier, setNewSupplier] = useState({
    supplierName: '',
    contactName: '',
    phone: '',
    email: '',
    address: '',
    institutionId: currUser?.institutionId || 0
  });
  
  // טעינת נתונים בעת טעינת הדף
  useEffect(() => {
    dispatch(allSupplierThunk());
  }, [dispatch]);
  
  // פונקציות לניהול מיון
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // פונקציות לניהול עמודים
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  // פונקציות לניהול הוספת ספק
  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };
  
  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setNewSupplier({
      supplierName: '',
      contactName: '',
      phone: '',
      email: '',
      address: '',
      institutionId: currUser?.institutionId || 0
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddSupplier = async () => {
    try {
      await dispatch(addSuppThunk(newSupplier)).unwrap();
      handleCloseAddDialog();
      setSnackbar({ open: true, message: 'הספק נוסף בהצלחה!', severity: 'success' });
      dispatch(allSupplierThunk()); // רענון רשימת הספקים
    } catch (error) {
      setSnackbar({ open: true, message: 'שגיאה בהוספת הספק', severity: 'error' });
    }
  };
  
  // סינון וסידור הספקים
  const filteredSuppliers = suppliers
    .filter(supplier => 
      // סינון לפי מוסד הנוכחי
      supplier.institutionId === currUser?.institutionId &&
      // סינון לפי חיפוש
      (supplier.supplierName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       supplier.contactName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       supplier.phone?.includes(searchTerm) ||
       supplier.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       supplier.address?.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      // מיון לפי השדה הנבחר
      const aValue = a[sortField] || '';
      const bValue = b[sortField] || '';
      
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue, 'he');
      } else {
        return bValue.localeCompare(aValue, 'he');
      }
    });
  
  // חישוב הספקים לתצוגה בעמוד הנוכחי
  const displayedSuppliers = filteredSuppliers
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  return (
    <PageContainer>
      <ContentContainer maxWidth="lg">
        {/* כותרת הדף */}
        <HeaderSection>
          <Avatar
            sx={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              width: 80,
              height: 80,
              mb: 3,
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            }}
          >
            <BusinessIcon sx={{ fontSize: 45, color: 'white' }} />
          </Avatar>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: colors.text,
              mb: 2,
              textAlign: 'center',
            }}
          >
            ניהול ספקים
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colors.textLight,
              textAlign: 'center',
              fontWeight: 500,
              maxWidth: 800,
              mx: 'auto',
              mb: 4
            }}
          >
            צפייה, הוספה ועריכה של ספקים במערכת
          </Typography>
        </HeaderSection>
        
        {/* אזור פעולות */}
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <SearchField
              placeholder="חיפוש ספק..."
              variant="outlined"
              size="medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="sort-field-label">מיון לפי</InputLabel>
              <Select
                labelId="sort-field-label"
                value={sortField}
                label="מיון לפי"
                onChange={(e) => handleSort(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                  </InputAdornment>
                }
              >
                <MenuItem value="supplierName">שם ספק</MenuItem>
                <MenuItem value="contactName">איש קשר</MenuItem>
                <MenuItem value="phone">טלפון</MenuItem>
                <MenuItem value="email">אימייל</MenuItem>
                <MenuItem value="address">כתובת</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <ActionButton
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              bgcolor: colors.accent,
              color: 'white',
              '&:hover': {
                bgcolor: colors.accentDark,
              },
            }}
            onClick={handleOpenAddDialog}
          >
            הוספת ספק חדש
          </ActionButton>
        </Box>
        
        {/* סיכום נתונים */}
        <Box sx={{ mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: `1px solid ${colors.border}`,
              bgcolor: colors.card,
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
                <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text }}>
                  סך הספקים במערכת
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textLight }}>
                  מציג {filteredSuppliers.length} ספקים מתוך {suppliers.filter(s => s.institutionId === currUser?.institutionId).length} ספק
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
              }}
            />
          </Paper>
        </Box>
        
        {/* טבלת ספקים */}
        {displayedSuppliers.length > 0 ? (
          <>
            <StyledTableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: 650 }} aria-label="טבלת ספקים">
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
                        onClick={() => handleSort('supplierName')}
                      >
                        שם ספק
                        {sortField === 'supplierName' && (
                          <Box component="span" sx={{ ml: 1 }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
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
                        onClick={() => handleSort('contactName')}
                      >
                        איש קשר
                        {sortField === 'contactName' && (
                          <Box component="span" sx={{ ml: 1 }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
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
                        onClick={() => handleSort('phone')}
                      >
                        טלפון
                        {sortField === 'phone' && (
                          <Box component="span" sx={{ ml: 1 }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
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
                        onClick={() => handleSort('email')}
                      >
                        אימייל
                        {sortField === 'email' && (
                          <Box component="span" sx={{ ml: 1 }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
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
                        onClick={() => handleSort('address')}
                      >
                        כתובת
                        {sortField === 'address' && (
                          <Box component="span" sx={{ ml: 1 }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>פעולות</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedSuppliers.map((supplier) => (
                    <TableRow key={supplier.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          <SupplierAvatar sx={{ mr: 2, bgcolor: colors.primary }}>
                            {supplier.supplierName?.charAt(0) || 'S'}
                          </SupplierAvatar>
                          <Typography sx={{ fontWeight: 600 }}>{supplier.supplierName}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">{supplier.contactName || '-'}</TableCell>
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          <PhoneIcon fontSize="small" sx={{ mr: 1, color: colors.textLight }} />
                          {supplier.phone || '-'}
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          <EmailIcon fontSize="small" sx={{ mr: 1, color: colors.textLight }} />
                          {supplier.email || '-'}
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          <LocationOnIcon fontSize="small" sx={{ mr: 1, color: colors.textLight }} />
                          {supplier.address || '-'}
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Tooltip title="ערוך ספק">
                            <IconButton 
                              size="small" 
                              sx={{ 
                                color: colors.secondary,
                                '&:hover': { bgcolor: `${colors.secondary}15` }
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="מחק ספק">
                            <IconButton 
                              size="small" 
                              sx={{ 
                                color: colors.error,
                                '&:hover': { bgcolor: `${colors.error}15` }
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
            
            <TablePagination
              component="div"
              count={filteredSuppliers.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="שורות בעמוד:"
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
              rowsPerPageOptions={[5, 10, 25, 50]}
              sx={{
                mt: 2,
                '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
                  fontWeight: 500,
                },
              }}
            />
          </>
        ) : (
          <Paper
            elevation={0}
            sx={{
              p: 6,
              borderRadius: 4,
              border: `1px solid ${colors.border}`,
              bgcolor: colors.card,
              textAlign: 'center',
            }}
          >
            <BusinessIcon sx={{ fontSize: 60, color: colors.textLight, opacity: 0.5, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.text, mb: 1 }}>
              לא נמצאו ספקים
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textLight, mb: 3 }}>
              {searchTerm ? 'לא נמצאו ספקים התואמים את החיפוש שלך' : 'עדיין לא הוספת ספקים למערכת'}
            </Typography>
            <ActionButton
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                bgcolor: colors.accent,
                color: 'white',
                '&:hover': {
                  bgcolor: colors.accentDark,
                },
              }}
              onClick={handleOpenAddDialog}
            >
              הוספת ספק חדש
            </ActionButton>
          </Paper>
        )}
        
        {/* דיאלוג הוספת ספק */}
        <Dialog 
          open={openAddDialog} 
          onClose={handleCloseAddDialog}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              p: 1
            }
          }}
        >
          <DialogTitle sx={{ fontWeight: 700, fontSize: '1.5rem', textAlign: 'center', pt: 3 }}>
            הוספת ספק חדש
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  name="supplierName"
                  label="שם ספק"
                  fullWidth
                  variant="outlined"
                  value={newSupplier.supplierName}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="contactName"
                  label="איש קשר"
                  fullWidth
                  variant="outlined"
                  value={newSupplier.contactName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="phone"
                  label="טלפון"
                  fullWidth
                  variant="outlined"
                  value={newSupplier.phone}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  label="אימייל"
                  fullWidth
                  variant="outlined"
                  value={newSupplier.email}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address"
                  label="כתובת"
                  fullWidth
                  variant="outlined"
                  value={newSupplier.address}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3, justifyContent: 'space-between' }}>
            <Button 
              onClick={handleCloseAddDialog}
              variant="outlined"
              sx={{ 
                borderRadius: 30,
                px: 3,
                borderColor: colors.border,
                color: colors.textLight,
                '&:hover': {
                  borderColor: colors.text,
                  bgcolor: 'transparent',
                }
              }}
            >
              ביטול
            </Button>
            <Button 
              onClick={handleAddSupplier}
              variant="contained"
              disabled={!newSupplier.supplierName}
              sx={{ 
                borderRadius: 30,
                px: 4,
                bgcolor: colors.accent,
                '&:hover': {
                  bgcolor: colors.accentDark,
                },
                '&.Mui-disabled': {
                  bgcolor: `${colors.accent}50`,
                  color: 'white',
                }
              }}
            >
              הוסף ספק
            </Button>
          </DialogActions>
        </Dialog>
        
        {/* הודעת סנאקבר */}
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
            severity={snackbar.severity} 
            sx={{ width: '100%', borderRadius: 3 }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </ContentContainer>
    </PageContainer>
  );
};

export default Supplier;
