// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as React from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Chip,
//   Autocomplete,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Divider,
//   Card,
//   CardContent,
//   Tooltip,
//   Fade,
//   Zoom,
//   Collapse,
//   Alert,
//   Menu,
//   MenuItem,
//   Avatar,
//   Grid,
//   Container,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Select,
//   CircularProgress,
//   Badge,
//   Tabs,
//   Tab,
//   useTheme,
//   alpha,
//   Input
// } from '@mui/material';
// import { styled, keyframes } from '@mui/material/styles';
// import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
// import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
// import { allCategoriesThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
// import { getSchoolBySsymbolThunk } from '../../Redux/Slices/Schools/getSchoolThunk';

// // Icons
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';

// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import ClearIcon from '@mui/icons-material/Clear';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import CategoryIcon from '@mui/icons-material/Category';
// import BusinessIcon from '@mui/icons-material/Business';
// import SchoolIcon from '@mui/icons-material/School';
// import SortIcon from '@mui/icons-material/Sort';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import PrintIcon from '@mui/icons-material/Print';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import TuneIcon from '@mui/icons-material/Tune';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// // Animations
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const pulse = keyframes`
//   0% {
//     transform: scale(1);
//     box-shadow: 0 4px 15px rgba(0,121,107,0.3);
//   }
//   50% {
//     transform: scale(1.03);
//     box-shadow: 0 8px 25px rgba(0,121,107,0.5);
//   }
//   100% {
//     transform: scale(1);
//     box-shadow: 0 4px 15px rgba(0,121,107,0.3);
//   }
// `;

// // Styled components
// const PageContainer = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: '#f8f9fa',
//   minHeight: 'calc(100vh - 64px)',
//   animation: `${fadeIn} 0.5s ease-out`,
// }));

// const PageHeader = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: theme.spacing(3),
//   [theme.breakpoints.down('sm')]: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     gap: theme.spacing(2),
//   },
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   borderRadius: 16,
//   boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
//   },
// }));

// const SearchBar = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     borderRadius: 30,
//     backgroundColor: theme.palette.background.paper,
//     transition: 'box-shadow 0.3s ease',
//     '&.Mui-focused': {
//       boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//     },
//   },
// }));

// const FilterButton = styled(Button)(({ theme }) => ({
//   borderRadius: 30,
//   padding: '8px 16px',
//   textTransform: 'none',
//   fontWeight: 600,
//   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   borderRadius: 30,
//   padding: '8px 16px',
//   textTransform: 'none',
//   fontWeight: 600,
//   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
//   },
// }));

// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//   borderRadius: 16,
//   '&::-webkit-scrollbar': {
//     width: '8px',
//     height: '8px',
//   },
//   '&::-webkit-scrollbar-track': {
//     background: '#f1f1f1',
//     borderRadius: '10px',
//   },
//   '&::-webkit-scrollbar-thumb': {
//     background: '#c1c1c1',
//     borderRadius: '10px',
//     '&:hover': {
//       background: '#a8a8a8',
//     },
//   },
// }));

// const StyledTableHead = styled(TableHead)(({ theme }) => ({
//   '& .MuiTableCell-head': {
//     backgroundColor: '#00796b',
//     color: 'white',
//     fontWeight: 700,
//     fontSize: '0.875rem',
//     whiteSpace: 'nowrap',
//     position: 'sticky',
//     top: 0,
//     zIndex: 10,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme, isEven }) => ({
//   backgroundColor: isEven ? alpha('#e0f2f1', 0.3) : 'white',
//   transition: 'background-color 0.2s ease',
//   '&:hover': {
//     backgroundColor: alpha('#00796b', 0.08),
//   },
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   padding: '16px',
//   fontSize: '0.875rem',
//   whiteSpace: 'nowrap',
// }));

// const FilterChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   fontWeight: 500,
//   boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
//   '&:hover': {
//     boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
//   },
// }));

// const SortButton = styled(IconButton)(({ theme, active }) => ({
//   color: active ? '#00796b' : 'rgba(0, 0, 0, 0.54)',
//   transition: 'all 0.2s ease',
//   '&:hover': {
//     backgroundColor: alpha('#00796b', 0.08),
//   },
// }));

// const NoDataContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: theme.spacing(6),
//   textAlign: 'center',
// }));

// export const Exp = () => {
//   const theme = useTheme();
//   const dispatch = useDispatch();
  
//   // Redux state
//   const currUser = useSelector(u => u.user.currUser);
//   const currSchool = useSelector(s => s.school.currSchool);
//   const categories = useSelector(e => e.category.allCategories || []);
//   const allExpenditures = useSelector(e => e.expenditure.allExpenditures || []);
  
//   // Local state
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [filterOptions, setFilterOptions] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [isFiltered, setIsFiltered] = useState(false);
//   const [activeFilters, setActiveFilters] = useState([]);
//   const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
//   const [filterDialogOpen, setFilterDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedExpenditure, setSelectedExpenditure] = useState(null);
//   const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });
//   const [sumRange, setSumRange] = useState({ min: '', max: '' });
  
//   // מצב חדש לשמירת ההוצאות הרלוונטיות למשתמש
//   const [expendituresOfSchool, setExpendituresOfSchool] = useState([]);
  
//   // Define table columns
//   const columns = [
//     { id: 'קוד הוצאה', label: 'id', minWidth: 100, align: 'center', format: (value) => value },
//     {
//       id: 'סכום הוצאה',
//       label: 'expenditureSum',
//       minWidth: 150,
//       align: 'right',
//       format: (value) => value.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' }),
//     },
//     currUser.schoolSymbol === 0 && { 
//       id: 'סמל מוסד', 
//       label: 'schoolSymbol', 
//       minWidth: 120, 
//       align: 'center',
//       format: (value) => value 
//     },
//     { 
//       id: 'קטגוריה', 
//       label: 'categoryName', 
//       minWidth: 150, 
//       align: 'right',
//       format: (value) => value,
//       renderCell: (value) => (
//         <Chip 
//           label={value} 
//           size="small" 
//           icon={<CategoryIcon />} 
//           sx={{ 
//             backgroundColor: getCategoryColor(value),
//             color: 'white',
//             fontWeight: 500
//           }} 
//         />
//       )
//     },
//     { 
//       id: 'שם ספק', 
//       label: 'supplierName', 
//       minWidth: 180, 
//       align: 'right',
//       format: (value) => value,
//       renderCell: (value) => (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <BusinessIcon sx={{ mr: 1, fontSize: '0.875rem', color: '#00796b' }} />
//           {value}
//         </Box>
//       )
//     },
//     { 
//       id: 'שם המזמין', 
//       label: 'ordererName', 
//       minWidth: 150, 
//       align: 'right',
//       format: (value) => value 
//     },
//     { 
//       id: 'תאריך', 
//       label: 'date', 
//       minWidth: 120, 
//       align: 'center',
//       format: (value) => formatDate(value),
//       renderCell: (value) => (
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <DateRangeIcon sx={{ mr: 1, fontSize: '0.875rem', color: '#00796b' }} />
//           {formatDate(value)}
//         </Box>
//       )
//     },
//     { 
//       id: 'פעולות', 
//       label: 'actions', 
//       minWidth: 100, 
//       align: 'center',
//       renderCell: (row) => (
//         <IconButton
//           size="small"
//           onClick={(event) => handleMenuOpen(event, row)}
//         >
//           <MoreVertIcon />
//         </IconButton>
//       )
//     },
//   ].filter(Boolean);
  
//   // Helper function to format date
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('he-IL');
//   };
  
//   // Helper function to get category color
//   const getCategoryColor = (categoryName) => {
//     const colors = [
//       '#00796b', // teal
//       '#0288d1', // blue
//       '#7b1fa2', // purple
//       '#c2185b', // pink
//       '#d32f2f', // red
//       '#f57c00', // orange
//       '#689f38', // green
//       '#5d4037', // brown
//     ];
    
//     if (!categoryName) return colors[0];
    
//     // Generate consistent color based on category name
//     let hash = 0;
//     for (let i = 0; i < categoryName.length; i++) {
//       hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
//     }
    
//     return colors[Math.abs(hash) % colors.length];
//   };
  
//   // קבלת נתונים מהשרת
//   const getData = async () => {
//     setLoading(true);
//     setRefreshing(true);
    
//     try {
//       // קבלת קטגוריות
//       await dispatch(allCategoriesThunk());
      
//       if (currUser.schoolSymbol !== 0) {
//         // אם זה משתמש רגיל - קבל רק את ההוצאות של בית הספר שלו
//         await dispatch(getSchoolBySsymbolThunk(currUser.schoolSymbol));
//       } else {
//         // אם זה מנהל - קבל את כל ההוצאות
//         await dispatch(allExpendituresThunk());
//       }
//     } catch (error) {
//       console.error("שגיאה בטעינת נתונים:", error);
//     }
//   };
  
//   // Fetch data on component mount
//   useEffect(() => {
//     getData();
//   }, [dispatch]);
  
//   // עדכון נתונים כאשר הנתונים מהסטור משתנים
//   useEffect(() => {
//     if (currUser.schoolSymbol !== 0) {
//       // אם זה משתמש רגיל - השתמש בנתוני בית הספר
//       if (currSchool?.expenditures?.length >= 0) {
//         setExpendituresOfSchool(currSchool.expenditures || []);
//         setFilteredData(currSchool.expenditures || []);
//         setLoading(false);
//         setRefreshing(false);
//       }
//     } else {
//       // אם זה מנהל - השתמש בכל ההוצאות
//       if (allExpenditures?.length >= 0) {
//         setExpendituresOfSchool(allExpenditures);
//         setFilteredData(allExpenditures);
//         setLoading(false);
//         setRefreshing(false);
//       }
//     }
//   }, [currSchool, allExpenditures, currUser.schoolSymbol]);
  
//   // Update filtered data when expenditures change or filters change
//   useEffect(() => {
//     let result = [...expendituresOfSchool];
    
//     // Apply search filter
//     if (searchQuery) {
//       result = result.filter(exp => 
//         exp.supplierName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         exp.categoryName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         exp.ordererName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         exp.expenditureSum?.toString().includes(searchQuery)
//       );
//     }
    
//     // Apply active filters
//     activeFilters.forEach(filter => {
//       if (filter.type === 'category') {
//         result = result.filter(exp => exp.categoryName === filter.value);
//       } else if (filter.type === 'supplier') {
//         result = result.filter(exp => exp.supplierName === filter.value);
//       } else if (filter.type === 'date') {
//         const filterDate = new Date(filter.value).setHours(0, 0, 0, 0);
//         result = result.filter(exp => {
//           const expDate = new Date(exp.date).setHours(0, 0, 0, 0);
//           return expDate === filterDate;
//         });
//       } else if (filter.type === 'school') {
//         result = result.filter(exp => exp.schoolSymbol === filter.value);
//       }
//     });
    
//     // Apply date range filter
//     if (dateRange.start && dateRange.end) {
//       const startDate = new Date(dateRange.start).setHours(0, 0, 0, 0);
//       const endDate = new Date(dateRange.end).setHours(23, 59, 59, 999);
      
//       result = result.filter(exp => {
//         const expDate = new Date(exp.date).getTime();
//         return expDate >= startDate && expDate <= endDate;
//       });
//     }
    
//     // Apply sum range filter
//     if (sumRange.min || sumRange.max) {
//       result = result.filter(exp => {
//         const sum = exp.expenditureSum;
//         if (sumRange.min && sumRange.max) {
//           return sum >= Number(sumRange.min) && sum <= Number(sumRange.max);
//         } else if (sumRange.min) {
//           return sum >= Number(sumRange.min);
//         } else if (sumRange.max) {
//           return sum <= Number(sumRange.max);
//         }
//         return true;
//       });
//     }
    
//     // Apply sorting
//     if (sortConfig.key) {
//       result.sort((a, b) => {
//         let aValue = a[sortConfig.key];
//         let bValue = b[sortConfig.key];
        
//         // Handle date sorting
//         if (sortConfig.key === 'date') {
//           aValue = new Date(aValue).getTime();
//           bValue = new Date(bValue).getTime();
//         }
        
//         // Handle string sorting
//         if (typeof aValue === 'string' && typeof bValue === 'string') {
//           aValue = aValue.toLowerCase();
//           bValue = bValue.toLowerCase();
//         }
        
//         if (aValue < bValue) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (aValue > bValue) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
    
//     setFilteredData(result);
//     setIsFiltered(searchQuery !== '' || activeFilters.length > 0 || (dateRange.start && dateRange.end) || sumRange.min || sumRange.max);
//   }, [expendituresOfSchool, searchQuery, activeFilters, sortConfig, dateRange, sumRange]);
  
//   // Update filter options when filter type changes
//   useEffect(() => {
//     if (filterType === 'category') {
//       const uniqueCategories = [...new Set(expendituresOfSchool.map(exp => exp.categoryName))].filter(Boolean);
//       setFilterOptions(uniqueCategories);
//     } else if (filterType === 'supplier') {
//       const uniqueSuppliers = [...new Set(expendituresOfSchool.map(exp => exp.supplierName))].filter(Boolean);
//       setFilterOptions(uniqueSuppliers);
//     } else if (filterType === 'date') {
//       const uniqueDates = [...new Set(expendituresOfSchool.map(exp => {
//         const date = new Date(exp.date);
//         return date.toISOString().split('T')[0];
//       }))].filter(Boolean);
//       setFilterOptions(uniqueDates);
//     } else if (filterType === 'school') {
//       const uniqueSchools = [...new Set(expendituresOfSchool.map(exp => exp.schoolSymbol))].filter(Boolean);
//       setFilterOptions(uniqueSchools);
//     }
//   }, [filterType, expendituresOfSchool]);
  
//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
  
//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
  
//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     setPage(0);
//   };
  
//   // Clear search
//   const handleClearSearch = () => {
//     setSearchQuery('');
//   };
  
//   // Handle filter type change
//   const handleFilterTypeChange = (event) => {
//     setFilterType(event.target.value);
//     setFilterValue('');
//   };
  
//   // Handle filter value change
//   const handleFilterValueChange = (event, newValue) => {
//     setFilterValue(newValue);
//   };
  
//   // Add filter
//   const handleAddFilter = () => {
//     if (filterType && filterValue) {
//       const newFilter = { type: filterType, value: filterValue };
//       if (!activeFilters.some(filter => filter.type === newFilter.type && filter.value === newFilter.value)) {
//         setActiveFilters([...activeFilters, newFilter]);
//       }
//       setFilterValue('');
//       setFilterDialogOpen(false);
//     }
//   };
  
//   // Remove filter
//   const handleRemoveFilter = (filterToRemove) => {
//     setActiveFilters(activeFilters.filter(filter => 
//       !(filter.type === filterToRemove.type && filter.value === filterToRemove.value)
//     ));
//   };
  
//   // Clear all filters
//   const handleClearFilters = () => {
//     setActiveFilters([]);
//     setDateRange({ start: '', end: '' });
//     setSumRange({ min: '', max: '' });
//     setSearchQuery('');
//   };
  
//   // Handle sort
//   const handleSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };
  
//   // Handle refresh data
//   const handleRefresh = async () => {
//     setRefreshing(true);
//     await getData();
//   };
  
//   // Handle menu open
//   const handleMenuOpen = (event, expenditure) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedExpenditure(expenditure);
//   };
  
//   // Handle menu close
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };
  
//   // Handle view details
//   const handleViewDetails = () => {
//     // Implement view details functionality
//     handleMenuClose();
//   };
  
//   // Handle edit
//   const handleEdit = () => {
//     // Implement edit functionality
//     handleMenuClose();
//   };
  
//   // Handle delete
//   const handleDelete = () => {
//     // Implement delete functionality
//     handleMenuClose();
//   };
  
//   // Handle export to Excel
//   const handleExport = () => {
//     // Implement export functionality
//     console.log('Exporting data...');
//   };
  
//   // Handle print
//   const handlePrint = () => {
//     // Implement print functionality
//     console.log('Printing data...');
//   };
  
//   // Get filter label
//   const getFilterLabel = (filter) => {
//     switch (filter.type) {
//       case 'category':
//         return 'קטגוריה';
//       case 'supplier':
//         return 'ספק';
//       case 'date':
//         return 'תאריך';
//       case 'school':
//         return 'מוסד';
//       default:
//         return filter.type;
//     }
//   };
  
//   // Get filter display value
//   const getFilterDisplayValue = (filter) => {
//     if (filter.type === 'date') {
//       return formatDate(filter.value);
//     }
//     return filter.value;
//   };
  
//   // Toggle advanced filter drawer
//   const toggleAdvancedFilter = () => {
//     setAdvancedFilterOpen(!advancedFilterOpen);
//   };
  
//   // Apply advanced filters
//   const applyAdvancedFilters = () => {
//     setAdvancedFilterOpen(false);
//   };
  
//   // Reset advanced filters
//   const resetAdvancedFilters = () => {
//     setDateRange({ start: '', end: '' });
//     setSumRange({ min: '', max: '' });
//   };
  
//   // שמירה על הקוד המקורי של exp2.jsx
//   const [search, setSearch] = useState(false);
//   const [typeSearch, setTypeSearch] = useState('false');
//   const [input, setInput] = useState(false);
//   const [filter, setFilter] = useState(false);
//   const [d, setD] = useState(null);
  
//   // שמירה על הפונקציונליות המקורית
//   const getSupplierName = async (lNum) => {
//     return await dispatch(getSupplierNameByLNumThunk(lNum));
//   };
  
//   // חישוב קטגוריות מסוננות (מהקוד המקורי)
//   const ci = categories?.filter(c => c.categoryName.includes(d));
  
//   return (
//     <PageContainer>
//       <PageHeader>
//         <Box>
//           <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#263238', mb: 1 }}>
//             ניהול הוצאות
//           </Typography>
//           <Typography variant="body1" sx={{ color: '#546e7a' }}>
//             צפייה וניהול של כל ההוצאות במערכת
//           </Typography>
//         </Box>
        
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <ActionButton
//             variant="contained"
//             startIcon={<AddCircleOutlineIcon />}
//             sx={{
//               bgcolor: '#00796b',
//               '&:hover': { bgcolor: '#00695c' },
//             }}
//             onClick={() => {/* Navigate to add expenditure */}}
//           >
//             הוספת הוצאה
//           </ActionButton>
          
//           <ActionButton
//             variant="outlined"
//             startIcon={<RefreshIcon sx={{ animation: refreshing ? `${pulse} 1s infinite` : 'none' }} />}
//             sx={{
//               borderColor: '#00796b',
//               color: '#00796b',
//               '&:hover': { borderColor: '#00695c', color: '#00695c' },
//             }}
//             onClick={handleRefresh}
//             disabled={refreshing}
//           >
//             רענון
//           </ActionButton>
//         </Box>
//       </PageHeader>
      
//       <StyledCard sx={{ mb: 3 }}>
//         <CardContent>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <SearchBar
//                 fullWidth
//                 placeholder="חיפוש לפי ספק, קטגוריה, מזמין או סכום..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon color="action" />
//                     </InputAdornment>
//                   ),
//                   endAdornment: searchQuery && (
//                     <InputAdornment position="end">
//                       <IconButton size="small" onClick={handleClearSearch}>
//                         <ClearIcon fontSize="small" />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//             <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
//                 <FilterButton
//                   variant="outlined"
//                   startIcon={<FilterListIcon />}
//                   onClick={() => setFilterDialogOpen(true)}
//                   sx={{
//                     borderColor: '#00796b',
//                     color: '#00796b',
//                     '&:hover': { borderColor: '#00695c', color: '#00695c' },
//                   }}
//                 >
//                   סינון מהיר
//                 </FilterButton>
                
//                 <FilterButton
//                   variant="outlined"
//                   startIcon={<TuneIcon />}
//                   onClick={toggleAdvancedFilter}
//                   sx={{
//                     borderColor: '#00796b',
//                     color: '#00796b',
//                     '&:hover': { borderColor: '#00695c', color: '#00695c' },
//                   }}
//                 >
//                   סינון מתקדם
//                 </FilterButton>
                
//                 <FilterButton
//                   variant="outlined"
//                   startIcon={<FileDownloadIcon />}
//                   onClick={handleExport}
//                   sx={{
//                     borderColor: '#00796b',
//                     color: '#00796b',
//                     '&:hover': { borderColor: '#00695c', color: '#00695c' },
//                     display: { xs: 'none', md: 'flex' }
//                   }}
//                 >
//                   ייצוא
//                 </FilterButton>
//               </Box>
//             </Grid>
//           </Grid>
          
//           {/* Active filters */}
//           {(activeFilters.length > 0 || dateRange.start || sumRange.min) && (
//             <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
//               <Typography variant="body2" sx={{ mr: 1, color: '#546e7a' }}>
//                 סינון לפי:
//               </Typography>
              
//               {activeFilters.map((filter, index) => (
//                 <FilterChip
//                   key={`${filter.type}-${filter.value}-${index}`}
//                   label={`${getFilterLabel(filter)}: ${getFilterDisplayValue(filter)}`}
//                   onDelete={() => handleRemoveFilter(filter)}
//                   color="primary"
//                   variant="outlined"
//                   size="small"
//                 />
//               ))}
              
//               {dateRange.start && dateRange.end && (
//                 <FilterChip
//                   label={`תאריך: ${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}`}
//                   onDelete={() => setDateRange({ start: '', end: '' })}
//                   color="primary"
//                   variant="outlined"
//                   size="small"
//                   icon={<DateRangeIcon />}
//                 />
//               )}
              
//               {(sumRange.min || sumRange.max) && (
//                 <FilterChip
//                   label={`סכום: ${sumRange.min || '0'} - ${sumRange.max || 'מקסימום'} ₪`}
//                   onDelete={() => setSumRange({ min: '', max: '' })}
//                   color="primary"
//                   variant="outlined"
//                   size="small"
//                   icon={<AttachMoneyIcon />}
//                 />
//               )}
              
//               {isFiltered && (
//                 <Button
//                   size="small"
//                   onClick={handleClearFilters}
//                   sx={{ ml: 1, color: '#d32f2f' }}
//                 >
//                   נקה הכל
//                 </Button>
//               )}
//             </Box>
//           )}
//         </CardContent>
//       </StyledCard>
      
//       {/* Data table */}
//       <StyledCard>
//         <StyledTableContainer sx={{ maxHeight: 'calc(100vh - 300px)' }}>
//           {loading ? (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
//               <CircularProgress color="primary" />
//             </Box>
//           ) : filteredData.length === 0 ? (
//             <NoDataContainer>
//               <Box sx={{ mb: 2, opacity: 0.7 }}>
//                 <ReceiptIcon sx={{ fontSize: 60, color: '#00796b' }} />
//               </Box>
//               <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#263238' }}>
//                 לא נמצאו הוצאות
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#546e7a', mb: 3 }}>
//                 {isFiltered 
//                   ? 'לא נמצאו הוצאות התואמות את הסינון שבחרת. נסה לשנות את הסינון או לנקות אותו.'
//                   : 'לא נמצאו הוצאות במערכת. לחץ על "הוספת הוצאה" כדי להוסיף הוצאה חדשה.'}
//               </Typography>
//               {isFiltered && (
//                 <Button
//                   variant="outlined"
//                   onClick={handleClearFilters}
//                   sx={{ 
//                     borderColor: '#00796b', 
//                     color: '#00796b',
//                     borderRadius: 30,
//                     px: 3
//                   }}
//                 >
//                   נקה סינון
//                 </Button>
//               )}
//             </NoDataContainer>
//           ) : (
//             <Table stickyHeader aria-label="טבלת הוצאות">
//               <StyledTableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: column.align === 'right' ? 'flex-end' : column.align === 'center' ? 'center' : 'flex-start' }}>
//                         {column.label !== 'actions' && (
//                           <SortButton
//                             size="small"
//                             active={sortConfig.key === column.label}
//                             onClick={() => handleSort(column.label)}
//                           >
//                             {sortConfig.key === column.label ? (
//                               sortConfig.direction === 'ascending' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
//                             ) : (
//                               <SortIcon fontSize="small" />
//                             )}
//                           </SortButton>
//                         )}
//                         <Typography variant="subtitle2">
//                           {column.id}
//                         </Typography>
//                       </Box>
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </StyledTableHead>
//               <TableBody>
//                 {filteredData
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row, index) => {
//                     return (
//                       <StyledTableRow 
//                         hover 
//                         role="checkbox" 
//                         tabIndex={-1} 
//                         key={row.id || index}
//                         isEven={index % 2 === 0}
//                       >
//                         {columns.map((column) => {
//                           const value = row[column.label];
//                           return (
//                             <StyledTableCell key={column.id} align={column.align}>
//                               {column.renderCell && column.label !== 'actions'
//                                 ? column.renderCell(value)
//                                 : column.label === 'actions'
//                                   ? column.renderCell(row)
//                                   : column.format
//                                     ? column.format(value)
//                                     : value}
//                             </StyledTableCell>
//                           );
//                         })}
//                       </StyledTableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           )}
//         </StyledTableContainer>
        
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 50, 100]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           labelRowsPerPage="שורות בעמוד:"
//           labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
//           sx={{ 
//             borderTop: '1px solid #e0e0e0',
//             '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows, .MuiTablePagination-select, .MuiTablePagination-selectIcon': {
//               fontFamily: 'inherit',
//             }
//           }}
//         />
//       </StyledCard>
      
//       {/* Filter Dialog */}
//       <Dialog 
//         open={filterDialogOpen} 
//         onClose={() => setFilterDialogOpen(false)}
//         PaperProps={{
//           sx: {
//             borderRadius: 3,
//             width: '100%',
//             maxWidth: 500,
//           }
//         }}
//       >
//         <DialogTitle sx={{ fontWeight: 600 }}>
//           סינון הוצאות
//         </DialogTitle>
//         <DialogContent>
//           <Box sx={{ my: 1 }}>
//             <FormControl fullWidth sx={{ mb: 2 }}>
//               <InputLabel id="filter-type-label">סוג סינון</InputLabel>
//               <Select
//                 labelId="filter-type-label"
//                 value={filterType}
//                 onChange={handleFilterTypeChange}
//                 label="סוג סינון"
//               >
//                 <MenuItem value="category">קטגוריה</MenuItem>
//                 <MenuItem value="supplier">ספק</MenuItem>
//                 <MenuItem value="date">תאריך</MenuItem>
//                 {currUser.schoolSymbol === 0 && <MenuItem value="school">מוסד</MenuItem>}
//               </Select>
//             </FormControl>
            
//             {filterType && (
//               <Autocomplete
//                 value={filterValue}
//                 onChange={handleFilterValueChange}
//                 options={filterOptions}
//                 renderInput={(params) => (
//                   <TextField 
//                     {...params} 
//                     label={filterType === 'category' ? 'בחר קטגוריה' : filterType === 'supplier' ? 'בחר ספק' : filterType === 'school' ? 'בחר מוסד' : 'בחר תאריך'} 
//                     variant="outlined"
//                   />
//                 )}
//                 sx={{ mb: 2 }}
//               />
//             )}
//           </Box>
//         </DialogContent>
//         <DialogActions sx={{ px: 3, pb: 3 }}>
//           <Button 
//             onClick={() => setFilterDialogOpen(false)} 
//             sx={{ color: '#546e7a' }}
//           >
//             ביטול
//           </Button>
//           <Button 
//             onClick={handleAddFilter} 
//             variant="contained" 
//             disabled={!filterType || !filterValue}
//             sx={{ 
//               bgcolor: '#00796b', 
//               '&:hover': { bgcolor: '#00695c' },
//               borderRadius: 30,
//               px: 3
//             }}
//           >
//             הוסף סינון
//           </Button>
//         </DialogActions>
//       </Dialog>
      
//       {/* Advanced Filter Drawer */}
//       <Drawer
//         anchor="right"
//         open={advancedFilterOpen}
//         onClose={toggleAdvancedFilter}
//         PaperProps={{
//           sx: {
//             width: 320,
//             borderTopLeftRadius: 16,
//             borderBottomLeftRadius: 16,
//             p: 3,
//           }
//         }}
//       >
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: 600 }}>
//             סינון מתקדם
//           </Typography>
//           <IconButton onClick={toggleAdvancedFilter}>
//             <ClearIcon />
//           </IconButton>
//         </Box>
        
//         <Divider sx={{ mb: 3 }} />
        
//         <Typography variant="subtitle2" sx={{ mb: 1 }}>
//           טווח תאריכים
//         </Typography>
//         <Box sx={{ mb: 3 }}>
//           <TextField
//             label="מתאריך"
//             type="date"
//             value={dateRange.start}
//             onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="עד תאריך"
//             type="date"
//             value={dateRange.end}
//             onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//           />
//         </Box>
        
//         <Typography variant="subtitle2" sx={{ mb: 1 }}>
//           טווח סכומים
//         </Typography>
//         <Box sx={{ mb: 3 }}>
//           <TextField
//             label="מסכום"
//             type="number"
//             value={sumRange.min}
//             onChange={(e) => setSumRange({ ...sumRange, min: e.target.value })}
//             InputProps={{
//               startAdornment: <InputAdornment position="start">₪</InputAdornment>,
//             }}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="עד סכום"
//             type="number"
//             value={sumRange.max}
//             onChange={(e) => setSumRange({ ...sumRange, max: e.target.value })}
//             InputProps={{
//               startAdornment: <InputAdornment position="start">₪</InputAdornment>,
//             }}
//             fullWidth
//           />
//         </Box>
        
//         <Box sx={{ mt: 'auto', pt: 3 }}>
//           <Button
//             variant="outlined"
//             fullWidth
//             onClick={resetAdvancedFilters}
//             sx={{ 
//               mb: 2, 
//               borderColor: '#d32f2f', 
//               color: '#d32f2f',
//               '&:hover': { borderColor: '#b71c1c', color: '#b71c1c' },
//               borderRadius: 30
//             }}
//           >
//             נקה סינון
//           </Button>
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={applyAdvancedFilters}
//             sx={{ 
//               bgcolor: '#00796b', 
//               '&:hover': { bgcolor: '#00695c' },
//               borderRadius: 30
//             }}
//           >
//             החל סינון
//           </Button>
//         </Box>
//       </Drawer>
      
//       {/* Row Actions Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         PaperProps={{
//           sx: {
//             borderRadius: 2,
//             boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//           }
//         }}
//         >
//           <MenuItem onClick={handleViewDetails}>
//             <ListItemIcon>
//               <InfoOutlinedIcon fontSize="small" sx={{ color: '#00796b' }} />
//             </ListItemIcon>
//             פרטים מלאים
//           </MenuItem>
//           <MenuItem onClick={handleEdit}>
//             <ListItemIcon>
//               <EditIcon fontSize="small" sx={{ color: '#00796b' }} />
//             </ListItemIcon>
//             עריכה
//           </MenuItem>
//           <Divider />
//           <MenuItem onClick={handleDelete} sx={{ color: '#d32f2f' }}>
//             <ListItemIcon>
//               <DeleteIcon fontSize="small" sx={{ color: '#d32f2f' }} />
//             </ListItemIcon>
//             מחיקה
//           </MenuItem>
//         </Menu>
        
//         {/* Summary Card */}
//         <Box sx={{ mt: 3 }}>
//           <StyledCard>
//             <CardContent>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Avatar sx={{ bgcolor: alpha('#00796b', 0.1), color: '#00796b', mr: 2 }}>
//                       <AttachMoneyIcon />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" sx={{ color: '#546e7a' }}>
//                         סך הכל הוצאות
//                       </Typography>
//                       <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                         {filteredData.reduce((sum, exp) => sum + exp.expenditureSum, 0).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Avatar sx={{ bgcolor: alpha('#00796b', 0.1), color: '#00796b', mr: 2 }}>
//                       <ReceiptIcon />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" sx={{ color: '#546e7a' }}>
//                         מספר הוצאות
//                       </Typography>
//                       <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                         {filteredData.length} {filteredData.length === 1 ? 'הוצאה' : 'הוצאות'}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Avatar sx={{ bgcolor: alpha('#00796b', 0.1), color: '#00796b', mr: 2 }}>
//                       <CategoryIcon />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" sx={{ color: '#546e7a' }}>
//                         קטגוריות
//                       </Typography>
//                       <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                         {new Set(filteredData.map(exp => exp.categoryName)).size}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </StyledCard>
//         </Box>
        
//         {/* שמירה על הקוד המקורי מ-exp2.jsx */}
//         <Dialog open={search} hidden={!search}>
//           <Button onClick={() => { setTypeSearch('date'); setSearch(false); setInput(true) }}>תאריך</Button>
//           <Button onClick={() => { setTypeSearch('supName'); setSearch(false); setInput(true) }}>שם ספק</Button>
//           <Button onClick={() => { setTypeSearch('category'); setSearch(false); setInput(true) }}>קטגוריה</Button>
//           <Button onClick={() => { setTypeSearch('school'); setSearch(false); setInput(true) }}>שם מוסד</Button>
//         </Dialog>
        
//         {input && <Input value={d} onChange={(t) => { setD(t.target.value) }}></Input>}
        
//         {typeSearch === 'category' &&
//           ci.map((c) => (
//             <div key={c.id} onClick={() => setD(c.categoryName)}>
//               {c.categoryName}
//             </div>
//           ))
//         }
//       </PageContainer>
//     );
//   };
  
//   export default Exp;
  



// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { Button, Dialog, Input } from '@mui/material';
// import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
// import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
// import './expenditure.css'
// export const Exp = () => {
//   const [page, setPage] = useState(0);
//   const [search, setSearch] = useState(false);
//   const [typeSearch, setTypeSearch] = useState('false');
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [input, setInput] = useState(false);
//   const [d, setD] = useState(null);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const currUser = useSelector(u => u.user.currUser);
//   const categories = useSelector(e => e.category.allCategories);
//   const expendituresCopy = useSelector(e => e.expenditure.allExpenditures);
//   const expenditures = expendituresCopy ? [...expendituresCopy] : [];

//   const columns = [
//     { id: 'קוד הוצאה', label: 'id', minWidth: 190 },
//     {
//       id: 'סכום הוצאה',
//       label: 'expenditureSum',
//       minWidth: 190,
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     currUser.schoolSymbol === 0 && { id: 'סמל מוסד', label: 'schoolSymbol', minWidth: 100 },
//     { id: 'קטגוריה', label: 'categoryName', minWidth: 100 },
//     { id: 'שם ספק', label: 'supplierName', minWidth: 100 },
//     { id: 'שם המזמין', label: 'ordererName', minWidth: 100 },
//     { id: 'תאריך', label: 'date', minWidth: 100 },
//   ].filter(Boolean);

//   const dispatch = useDispatch();

//   const getData = async () => {
//     await dispatch(allExpendituresThunk());
//   };

//   const getSupplierName = async (lNum) => {
//     return await dispatch(getSupplierNameByLNumThunk(lNum));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const ci = categories?.filter(c => c?.categoryName?.includes(d));

//   return (
//     <Paper className="expenditures-container" sx={{ width: '100%', overflow: 'hidden' }}>
//       <h2 className="expenditures-title">ניהול הוצאות</h2>
//       <p className="expenditures-subtitle">צפייה וניהול של כל ההוצאות במערכת</p>
      
//       <Button 
//         className="search-button"
//         aria-placeholder='search' 
//         onClick={() => setSearch(true)} 
//       >
//         חיפוש
//       </Button>
      
//       {search && (
//         <Dialog className="search-dialog" open hidden={!search}>
//           <Button className="search-dialog-button" onClick={() => {setTypeSearch('date'); setSearch(false); setInput(true)}}>תאריך</Button>
//           <Button className="search-dialog-button" onClick={() => {setTypeSearch('supName'); setSearch(false); setInput(true)}}>שם ספק</Button>
//           <Button className="search-dialog-button" onClick={() => {setTypeSearch('category'); setSearch(false); setInput(true)}}>קטגוריה</Button>
//           <Button className="search-dialog-button" onClick={() => {setTypeSearch('school'); setSearch(false); setInput(true)}}>שם מוסד</Button>
//         </Dialog>
//       )}
      
//       {input && <Input className="search-input" value={d} onChange={(t) => setD(t.target.value)} />}
      
//       {typeSearch === 'category' && ci && (
//         <div className="category-results">
//           {ci.map((c) => (
//             <div className="category-item" key={c.id || c.categoryName} onClick={() => setD(c.categoryName)}> 
//               {c.categoryName}
//             </div>
//           ))}
//         </div>
//       )}
      
//       <TableContainer className="expenditures-table-container" sx={{ maxHeight: 440 }}>
//         <Table className="expenditures-table" stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow className="expenditures-table-header">
//               {columns.map((column) => (
//                 <TableCell
//                   className="expenditures-table-header-cell"
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.id}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {expenditures
//               .filter(row => row.schoolSymbol === currUser.schoolSymbol || currUser.schoolSymbol === 0)
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => (
//                 <TableRow className="expenditures-table-row" hover role="checkbox" tabIndex={-1} key={row.id || row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.label];
//                     return (
//                       <TableCell 
//                         className={`expenditures-table-cell ${column.label === 'expenditureSum' ? 'numeric-cell' : ''} ${column.label === 'categoryName' ? 'category-cell' : ''} ${column.label === 'date' ? 'date-cell' : ''}`}
//                         key={column.id} 
//                         align={column.align}
//                       >
//                         {column.format && typeof value === 'number'
//                           ? column.format(value)
//                           : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
      
//       <TablePagination
//         className="pagination-container"
//         rowsPerPageOptions={[5, 25, 100]}
//         component="div"
//         count={expenditures.filter(row => row.schoolSymbol === currUser.schoolSymbol || currUser.schoolSymbol === 0).length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };




import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { 
  Button, 
  Dialog, 
  Input, 
  Box, 
  Typography, 
  TextField, 
  InputAdornment, 
  IconButton, 
  Chip,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
import { allCategoriesThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
import { getSchoolBySsymbolThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
import './expenditure.css';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Exp = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // שמירה על הקוד המקורי
  const [search, setSearch] = useState(false);
  const [typeSearch, setTypeSearch] = useState('false');
  const [input, setInput] = useState(false);
  const [d, setD] = useState(null);
  
  // מצב חדש לשמירת ההוצאות הרלוונטיות למשתמש
  const [filteredData, setFilteredData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const currUser = useSelector(u => u.user.currUser);
  const currSchool = useSelector(s => s.school.currSchool);
  const categories = useSelector(e => e.category.allCategories || []);
  const allExpenditures = useSelector(e => e.expenditure.allExpenditures || []);

  // Define table columns
  const columns = [
    { id: 'קוד הוצאה', label: 'id', minWidth: 100, align: 'center' },
    {
      id: 'סכום הוצאה',
      label: 'expenditureSum',
      minWidth: 150,
      align: 'right',
      format: (value) => value.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' }),
    },
    currUser.schoolSymbol === 0 && { 
      id: 'סמל מוסד', 
      label: 'schoolSymbol', 
      minWidth: 120, 
      align: 'center'
    },
    { 
      id: 'קטגוריה', 
      label: 'categoryName', 
      minWidth: 150, 
      align: 'right',
      renderCell: (value) => (
        <Chip 
          label={value} 
          size="small" 
          icon={<CategoryIcon />} 
          sx={{ 
            backgroundColor: getCategoryColor(value),
            color: 'white',
            fontWeight: 500
          }} 
        />
      )
    },
    { 
      id: 'שם ספק', 
      label: 'supplierName', 
      minWidth: 180, 
      align: 'right',
      renderCell: (value) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BusinessIcon sx={{ mr: 1, fontSize: '0.875rem', color: '#00796b' }} />
          {value}
        </Box>
      )
    },
    { 
      id: 'שם המזמין', 
      label: 'ordererName', 
      minWidth: 150, 
      align: 'right'
    },
    { 
      id: 'תאריך', 
      label: 'date', 
      minWidth: 120, 
      align: 'center',
      renderCell: (value) => (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DateRangeIcon sx={{ mr: 1, fontSize: '0.875rem', color: '#00796b' }} />
          {formatDate(value)}
        </Box>
      )
    },
  ].filter(Boolean);

  const dispatch = useDispatch();

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
  };

  // Helper function to get category color
  const getCategoryColor = (categoryName) => {
    const colors = [
      '#00796b', // teal
      '#0288d1', // blue
      '#7b1fa2', // purple
      '#c2185b', // pink
      '#d32f2f', // red
      '#f57c00', // orange
      '#689f38', // green
      '#5d4037', // brown
    ];
    
    if (!categoryName) return colors[0];
    
    // Generate consistent color based on category name
    let hash = 0;
    for (let i = 0; i < categoryName.length; i++) {
      hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  // קבלת נתונים מהשרת
  const getData = async () => {
    setLoading(true);
    setRefreshing(true);
    
    try {
      // קבלת קטגוריות
      await dispatch(allCategoriesThunk());
      
      if (currUser.schoolSymbol !== 0) {
        // אם זה משתמש רגיל - קבל רק את ההוצאות של בית הספר שלו
        await dispatch(getSchoolBySsymbolThunk(currUser.schoolSymbol));
      } else {
        // אם זה מנהל - קבל את כל ההוצאות
        await dispatch(allExpendituresThunk());
      }
    } catch (error) {
      console.error("שגיאה בטעינת נתונים:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, [dispatch]);

  // עדכון נתונים כאשר הנתונים מהסטור משתנים
  useEffect(() => {
    if (currUser.schoolSymbol !== 0) {
      // אם זה משתמש רגיל - השתמש בנתוני בית הספר
      if (currSchool?.expenditures?.length >= 0) {
        setFilteredData(currSchool.expenditures || []);
      }
    } else {
      // אם זה מנהל - השתמש בכל ההוצאות
      if (allExpenditures?.length >= 0) {
        setFilteredData(allExpenditures);
      }
    }
  }, [currSchool, allExpenditures, currUser.schoolSymbol]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    
    // Filter data based on search query
    const query = event.target.value.toLowerCase();
    
    // Get the base data to filter from
    const baseData = currUser.schoolSymbol !== 0 ? 
      (currSchool?.expenditures || []) : 
      (allExpenditures || []);
    
    if (query) {
      const filtered = baseData.filter(exp => 
        exp.supplierName?.toLowerCase().includes(query) ||
        exp.categoryName?.toLowerCase().includes(query) ||
        exp.ordererName?.toLowerCase().includes(query) ||
        exp.expenditureSum?.toString().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(baseData);
    }
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery('');
    
    // Reset to original data
    if (currUser.schoolSymbol !== 0) {
      setFilteredData(currSchool?.expenditures || []);
    } else {
      setFilteredData(allExpenditures || []);
    }
  };

  // Handle refresh data
  const handleRefresh = async () => {
    setRefreshing(true);
    await getData();
  };

  const getSupplierName = async (lNum) => {
    return await dispatch(getSupplierNameByLNumThunk(lNum));
  };

  const ci = categories?.filter(c => c?.categoryName?.includes(d));

  return (
    <Paper className="expenditures-container" sx={{ 
      width: '100%', 
      overflow: 'hidden',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      padding: '24px'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
      }}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ 
            fontWeight: 700, 
            color: '#263238', 
            marginBottom: '8px' 
          }}>
            ניהול הוצאות
          </Typography>
          <Typography variant="body1" sx={{ color: '#546e7a' }}>
            צפייה וניהול של כל ההוצאות במערכת
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              bgcolor: '#00796b',
              '&:hover': { bgcolor: '#00695c' },
              borderRadius: '30px',
              padding: '8px 16px',
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            הוספת הוצאה
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            sx={{
              borderColor: '#00796b',
              color: '#00796b',
              '&:hover': { borderColor: '#00695c', color: '#00695c' },
              borderRadius: '30px',
              padding: '8px 16px',
              textTransform: 'none',
              fontWeight: 600,
            }}
            onClick={handleRefresh}
            disabled={refreshing}
          >
            רענון
          </Button>
        </Box>
      </Box>
      
      <Card sx={{ 
        marginBottom: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder="חיפוש לפי ספק, קטגוריה, מזמין או סכום..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px',
                backgroundColor: '#ffffff',
                transition: 'box-shadow 0.3s ease',
                '&.Mui-focused': {
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClearSearch}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>
      
      {/* שמירה על הקוד המקורי */}
      {search && (
        <Dialog open hidden={!search}>
          <Button onClick={() => {setTypeSearch('date'); setSearch(false); setInput(true)}}>תאריך</Button>
          <Button onClick={() => {setTypeSearch('supName'); setSearch(false); setInput(true)}}>שם ספק</Button>
          <Button onClick={() => {setTypeSearch('category'); setSearch(false); setInput(true)}}>קטגוריה</Button>
          <Button onClick={() => {setTypeSearch('school'); setSearch(false); setInput(true)}}>שם מוסד</Button>
        </Dialog>
      )}
      
      {input && <Input value={d} onChange={(t) => setD(t.target.value)} />}
      
      {typeSearch === 'category' && ci && (
        <div>
          {ci.map((c) => (
            <div key={c.id || c.categoryName} onClick={() => setD(c.categoryName)}> 
              {c.categoryName}
            </div>
          ))}
        </div>
      )}
      
      <TableContainer sx={{
        maxHeight: '440px',
        borderRadius: '16px',
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '10px',
          '&:hover': {
            background: '#a8a8a8',
          },
        },
      }}>
        <Table stickyHeader aria-label="טבלת הוצאות">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ 
                    minWidth: column.minWidth,
                    backgroundColor: '#00796b',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 3 }}>
                  <Typography>טוען נתונים...</Typography>
                </TableCell>
              </TableRow>
            ) : filteredData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 3 }}>
                  <Typography>לא נמצאו הוצאות</Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow 
                      hover 
                      role="checkbox" 
                      tabIndex={-1} 
                      key={row.id || index}
                      sx={{
                        backgroundColor: index % 2 === 0 ? 'rgba(224, 242, 241, 0.3)' : 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 121, 107, 0.08)',
                        },
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.label];
                        return (
                          <TableCell 
                            key={column.id} 
                            align={column.align}
                            sx={{
                              padding: '16px',
                              fontSize: '0.875rem',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {column.renderCell && column.label !== 'actions'
                              ? column.renderCell(value)
                              : column.format && typeof value === 'number'
                                ? column.format(value)
                                : column.label === 'date'
                                  ? formatDate(value)
                                  : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="שורות בעמוד:"
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
        sx={{ 
          borderTop: '1px solid #e0e0e0',
          '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows, .MuiTablePagination-select, .MuiTablePagination-selectIcon': {
            fontFamily: 'inherit',
          }
        }}
      />
      
      {/* Summary Card */}
      <Box sx={{ mt: 3 }}>
        <Card sx={{ 
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 121, 107, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}>
                    <Typography sx={{ color: '#00796b' }}>₪</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#546e7a' }}>
                      סך הכל הוצאות
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {filteredData.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 121, 107, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}>
                    <Typography sx={{ color: '#00796b' }}>#</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#546e7a' }}>
                      מספר הוצאות
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {filteredData.length} {filteredData.length === 1 ? 'הוצאה' : 'הוצאות'}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 121, 107, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}>
                    <CategoryIcon sx={{ color: '#00796b' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#546e7a' }}>
                      קטגוריות
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {new Set(filteredData.map(exp => exp.categoryName)).size}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
};

export default Exp;
