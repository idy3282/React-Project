// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { useState } from 'react';
// import { Button, Checkbox, Dialog, FilledInput, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField } from '@mui/material';
// import NativeSelectInput from '@mui/material/NativeSelect/NativeSelectInput';
// import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
// import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';




// export const Exp = () => {
//   //   const [name,setName]=useState('')
//   //   const [showInput,setShowInput]=useState(false)
//   //   const getSchoolDebt = async (name) => {
//   //     debugger
//   //     await dispatch(getDebtOfSchool(name))
//   // }

//   const [page, setPage] = React.useState(0);
//   const [search, setSearch] = React.useState(false);
//   const [typeSearch, setTypeSearch] = React.useState('false');

//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   // ===================
//   const currUser = useSelector(u=>u.user.currUser)

//   const columns = [
   
//     { id: 'קוד הוצאה', label: 'id', minWidth: 190 },

//     {
//       id: 'סכום הוצאה',
//       label: 'expenditureSum',
//       minWidth: 190,
//       // align: 'right',
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     currUser.schoolSymbol==0 &&{ id: 'סמל מוסד', label: 'schoolSymbol', minWidth: 100 },
    
//     { id: 'קטגוריה', label: 'categoryName', minWidth: 100 },
//     { id: 'שם ספק', label: 'supplierName', minWidth: 100 },
//     { id: 'שם המזמין', label: 'ordererName', minWidth: 100 },
//     { id: 'תאריך', label: 'date', minWidth: 100 },

//   ];

//   // =====================
//   const categories = useSelector(e => e.category.allCategories)

//   const expenditurescopy = useSelector(e => e.expenditure.allExpenditures)
//   const expenditures=[...expenditurescopy]
//   // const schoolDebt = useSelector(s => s.school.schoolDebt)

//  const a=[1,4,3,5,0]
//  console.log("arrayBefore"+a.toString());
//  a.sort((a,b)=>a-b)
//  console.log("arrayAfter{"+a.toString());
//   const dispatch = useDispatch()

//   const getData = async () => {
//     await dispatch(allExpendituresThunk())
  
//     // expenditures?.sort((a,b)=> new Date(a.date) - new Date(b.date))
//   // console.log(expenditures);
//   var cc= [...expenditurescopy]
//   console.log("befor----",cc)
//   // sort by expSum=()=>{
//   //     cc?.sort((a,b)=>b.expenditureSum-a.expenditureSum)
//   //     console.log("sortsddsd----",cc); 
//   // }

//   }
 
//   const f=(l)=>{
//     debugger
//     if( typeof(l) == String&&l =="שם ספק" )
//       return false;
//    else return false;  
//   }
//   const getSupplierName = async (lNum) => {
//     return await dispatch(getSupplierNameByLNumThunk(lNum))
//   }
//   useEffect(() => {
//     getData()

//   }, [])
//   ;
// const[input ,setInput]=useState(false)
// const[filter ,setFilter]=useState(false)
// const[d,setD]=useState(null)
// var ci =[]

//   ci = categories?.filter(c => 
//     c.categoryName.includes(d))


// useEffect(() => { 
   
  
// }, [d])
// ;

// // const filt=(value)=>{
// //   debugger
 
// //   ci= categories?.filter(c=>
// //      c.categoryName.includes(value))
// //   setFilter(true)
// // }

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <Button aria-placeholder='search' onClick={()=>{debugger; setSearch(true)}} sx={{width:"120px",height:"90px",border:"2px solid black"}}></Button>
//      {search&&<Dialog open hidden={!search}>
//               <Button onClick={()=>{setTypeSearch('date'); setSearch(false);setInput(true)}}>תאריך</Button>
//               <Button onClick={()=>{setTypeSearch('supName'); setSearch(false);setInput(true)}}>שם ספק</Button>
//               <Button onClick={()=>{setTypeSearch('category'); setSearch(false);setInput(true)}}>קטגוריה</Button>
//               <Button onClick={()=>{setTypeSearch('school'); setSearch(false) ;setInput(true)}}>שם מוסד</Button>

//     </Dialog>}
//   {input && <Input value={d} onChange={(t)=>{setD(t.target.value);debugger}}></Input>}
//   {typeSearch=='category' &&
//     ci.map((c)=>(
//       <div onClick={()=>setD(c.categoryName)}> 
//       {c.categoryName}
//     </div>
//     ))
//   }
  
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.schoolSymbol}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >

//                   {column.id}

//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
            
         
//                              {expenditures
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                return (row.schoolSymbol==currUser.schoolSymbol || currUser.schoolSymbol==0) &&  (
//                   <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.label];
//                       // row[column.id]===' '?'':row[column.id]===''?'':value=row[column.label]
                      
//                       //   if(column.id === 'שם ספק')
//                       //   value= getSupplierName(column.label)
//                         // else if(column.id === 'u')
//                         // value = getCategoryname()
//                         // else value = row[column.label]

//                       return ( 
//                         <TableCell key={column.id} align={column.align}>
                          
//                         {/* <Button>uhuhju</Button>  */}
//                          {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
                            
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 25, 100]}
//         component="div"
//         count={expenditures.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//       {/* <button onClick={()=>{debugger;setShowInput(true)}}>לקבלת סכום חוב לפי קטגוריה</button> */}

//       {/* {showInput && 
//          <div>
//               <Input value={name} onChange={(n)=>setName(n.target.value)}/>
//               <button onClick={()=>getSchoolDebt(name)}> לאישור</button>
             
//           </div>} */}

//     </Paper>);





// }
// // }   

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { useState } from 'react';
// import { 
//   Button, 
//   Checkbox, 
//   Dialog, 
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Autocomplete,
//   TextField,
//   Box,
//   Typography,
//   Chip
// } from '@mui/material';
// import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
// import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';

// export const Exp = () => {
//   const [page, setPage] = React.useState(0);
//   const [search, setSearch] = React.useState(false);
//   const [typeSearch, setTypeSearch] = React.useState('');
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [searchValue, setSearchValue] = useState('');
//   const [filteredExpenditures, setFilteredExpenditures] = useState([]);
//   const [isFiltered, setIsFiltered] = useState(false);
//   const [searchOptions, setSearchOptions] = useState([]);

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
//   const expenditures = [...expendituresCopy];
//   const dispatch = useDispatch();

//   const columns = [
//     { id: 'קוד הוצאה', label: 'id', minWidth: 190 },
//     {
//       id: 'סכום הוצאה',
//       label: 'expenditureSum',
//       minWidth: 190,
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     currUser.schoolSymbol == 0 && { id: 'סמל מוסד', label: 'schoolSymbol', minWidth: 100 },
//     { id: 'קטגוריה', label: 'categoryName', minWidth: 100 },
//     { id: 'שם ספק', label: 'supplierName', minWidth: 100 },
//     { id: 'שם המזמין', label: 'ordererName', minWidth: 100 },
//     { id: 'תאריך', label: 'date', minWidth: 100 },
//   ].filter(Boolean);

//   const getData = async () => {
//     await dispatch(allExpendituresThunk());
//   };

//   const getSupplierName = async (lNum) => {
//     return await dispatch(getSupplierNameByLNumThunk(lNum));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // Generate search options based on selected search type
//   useEffect(() => {
//     if (!typeSearch) return;

//     let options = [];
//     switch (typeSearch) {
//       case 'date':
//         // Get unique dates
//         options = [...new Set(expenditures.map(exp => exp.date))].map(date => ({
//           label: date,
//           value: date
//         }));
//         break;
//       case 'supName':
//         // Get unique supplier names
//         options = [...new Set(expenditures.map(exp => exp.supplierName))].map(name => ({
//           label: name || 'לא צוין',
//           value: name
//         }));
//         break;
//       case 'category':
//         // Use categories from the store
//         options = categories.map(cat => ({
//           label: cat.categoryName,
//           value: cat.categoryName
//         }));
//         break;
//       case 'school':
//         // Get unique school symbols
//         options = [...new Set(expenditures.map(exp => exp.schoolSymbol))].map(symbol => ({
//           label: `מוסד ${symbol}`,
//           value: symbol
//         }));
//         break;
//       default:
//         options = [];
//     }
//     setSearchOptions(options);
//   }, [typeSearch, expenditures, categories]);

//   // Filter expenditures based on search value
//   useEffect(() => {
//     if (!searchValue || !typeSearch) {
//       setIsFiltered(false);
//       setFilteredExpenditures([]);
//       return;
//     }

//     let filtered = [];
//     switch (typeSearch) {
//       case 'date':
//         filtered = expenditures.filter(exp => exp.date === searchValue);
//         break;
//       case 'supName':
//         filtered = expenditures.filter(exp => exp.supplierName === searchValue);
//         break;
//       case 'category':
//         filtered = expenditures.filter(exp => exp.categoryName === searchValue);
//         break;
//       case 'school':
//         filtered = expenditures.filter(exp => exp.schoolSymbol === searchValue);
//         break;
//       default:
//         filtered = [];
//     }
    
//     setFilteredExpenditures(filtered);
//     setIsFiltered(filtered.length > 0);
//   }, [searchValue, typeSearch, expenditures]);

//   // Handle search dialog close
//   const handleCloseSearch = () => {
//     setSearch(false);
//   };

//   // Handle search type selection
//   const handleSearchTypeSelect = (type) => {
//     setTypeSearch(type);
//     setSearch(false);
//   };

//   // Handle search option selection
//   const handleSearchOptionSelect = (event, option) => {
//     if (option) {
//       setSearchValue(option.value);
//     } else {
//       setSearchValue('');
//       setIsFiltered(false);
//     }
//   };

//   // Clear search filter
//   const clearSearch = () => {
//     setSearchValue('');
//     setTypeSearch('');
//     setIsFiltered(false);
//   };

//   // Get the data to display in the table
//   const displayData = isFiltered ? filteredExpenditures : expenditures;

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
//         <Button 
//           variant="contained" 
//           onClick={() => setSearch(true)}
//           sx={{ height: '40px' }}
//         >
//           חיפוש הוצאות
//         </Button>

//         {typeSearch && (
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Typography variant="body1">
//               {typeSearch === 'date' && 'חיפוש לפי תאריך:'}
//               {typeSearch === 'supName' && 'חיפוש לפי ספק:'}
//               {typeSearch === 'category' && 'חיפוש לפי קטגוריה:'}
//               {typeSearch === 'school' && 'חיפוש לפי מוסד:'}
//             </Typography>
            
//             <Autocomplete
//               id="search-autocomplete"
//               options={searchOptions}
//               getOptionLabel={(option) => option.label}
//               sx={{ width: 300 }}
//               renderInput={(params) => (
//                 <TextField {...params} variant="outlined" size="small" placeholder="הקלד לחיפוש..." />
//               )}
//               onChange={handleSearchOptionSelect}
//               isOptionEqualToValue={(option, value) => option.value === value.value}
//             />
            
//             {isFiltered && (
//               <Chip 
//                 label={`נמצאו ${filteredExpenditures.length} תוצאות`} 
//                 color="primary" 
//                 variant="outlined" 
//               />
//             )}
            
//             <Button 
//               variant="outlined" 
//               color="error" 
//               size="small" 
//               onClick={clearSearch}
//             >
//               נקה חיפוש
//             </Button>
//           </Box>
//         )}
//       </Box>

//       {/* Search Dialog */}
//       <Dialog open={search} onClose={handleCloseSearch}>
//         <DialogTitle>בחר סוג חיפוש</DialogTitle>
//         <DialogContent>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '250px', p: 1 }}>
//             <Button variant="outlined" onClick={() => handleSearchTypeSelect('date')}>תאריך</Button>
//             <Button variant="outlined" onClick={() => handleSearchTypeSelect('supName')}>שם ספק</Button>
//             <Button variant="outlined" onClick={() => handleSearchTypeSelect('category')}>קטגוריה</Button>
//             <Button variant="outlined" onClick={() => handleSearchTypeSelect('school')}>שם מוסד</Button>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseSearch}>ביטול</Button>
//         </DialogActions>
//       </Dialog>

//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
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
//             {displayData
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (row.schoolSymbol == currUser.schoolSymbol || currUser.schoolSymbol == 0) && (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.label];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25, 100]}
//         component="div"
//         count={displayData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };






// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Card,
  CardContent,
  Tooltip,
  Fade,
  Zoom,
  Collapse,
  Alert,
  Menu,
  MenuItem,
  Avatar,
  Grid,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Badge,
  Tabs,
  Tab,
  useTheme,
  alpha
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';
import { allCategoriesThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';
import RefreshIcon from '@mui/icons-material/Refresh';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: '#f8f9fa',
  minHeight: 'calc(100vh - 64px)',
  animation: `${fadeIn} 0.5s ease-out`,
}));

const PageHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
  },
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
    backgroundColor: theme.palette.background.paper,
    transition: 'box-shadow 0.3s ease',
    '&.Mui-focused': {
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
  },
}));

const FilterButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '8px 16px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '8px 16px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 16,
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
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  '& .MuiTableCell-head': {
    backgroundColor: '#00796b',
    color: 'white',
    fontWeight: 700,
    fontSize: '0.875rem',
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme, isEven }) => ({
  backgroundColor: isEven ? alpha('#e0f2f1', 0.3) : 'white',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: alpha('#00796b', 0.08),
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 500,
  boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
  },
}));

const SortButton = styled(IconButton)(({ theme, active }) => ({
  color: active ? '#00796b' : 'rgba(0, 0, 0, 0.54)',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: alpha('#00796b', 0.08),
  },
}));

const NoDataContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  textAlign: 'center',
}));

export const Exp = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  
  // Redux state
  const currUser = useSelector(u => u.user.currUser);
  const categories = useSelector(e => e.category.allCategories || []);
  const expendituresCopy = useSelector(e => e.expenditure.allExpenditures || []);
  const expenditures = [...expendituresCopy];
  
  // Local state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filterOptions, setFilterOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedExpenditure, setSelectedExpenditure] = useState(null);
  const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [sumRange, setSumRange] = useState({ min: '', max: '' });
  
  // Define table columns
  const columns = [
    { id: 'קוד הוצאה', label: 'id', minWidth: 100, align: 'center', format: (value) => value },
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
      align: 'center',
      format: (value) => value 
    },
    { 
      id: 'קטגוריה', 
      label: 'categoryName', 
      minWidth: 150, 
      align: 'right',
      format: (value) => value,
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
      format: (value) => value,
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
      align: 'right',
      format: (value) => value 
    },
    { 
      id: 'תאריך', 
      label: 'date', 
      minWidth: 120, 
      align: 'center',
      format: (value) => formatDate(value),
      renderCell: (value) => (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DateRangeIcon sx={{ mr: 1, fontSize: '0.875rem', color: '#00796b' }} />
          {formatDate(value)}
        </Box>
      )
    },
    { 
      id: 'פעולות', 
      label: 'actions', 
      minWidth: 100, 
      align: 'center',
      renderCell: (row) => (
        <IconButton
          size="small"
          onClick={(event) => handleMenuOpen(event, row)}
        >
          <MoreVertIcon />
        </IconButton>
      )
    },
  ].filter(Boolean);
  
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
  
  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(allExpendituresThunk());
      await dispatch(allCategoriesThunk());
      setLoading(false);
    };
    
    fetchData();
  }, [dispatch]);
  // Update filtered data when expenditures change or filters change
  useEffect(() => {
    let result = [...expenditures];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(exp => 
        exp.supplierName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.categoryName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.ordererName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.expenditureSum?.toString().includes(searchQuery)
      );
    }
    
    // Apply active filters
    activeFilters.forEach(filter => {
      if (filter.type === 'category') {
        result = result.filter(exp => exp.categoryName === filter.value);
      } else if (filter.type === 'supplier') {
        result = result.filter(exp => exp.supplierName === filter.value);
      } else if (filter.type === 'date') {
        const filterDate = new Date(filter.value).setHours(0, 0, 0, 0);
        result = result.filter(exp => {
          const expDate = new Date(exp.date).setHours(0, 0, 0, 0);
          return expDate === filterDate;
        });
      }
    });
    
    // Apply date range filter
    if (dateRange.start && dateRange.end) {
      const startDate = new Date(dateRange.start).setHours(0, 0, 0, 0);
      const endDate = new Date(dateRange.end).setHours(23, 59, 59, 999);
      
      result = result.filter(exp => {
        const expDate = new Date(exp.date).getTime();
        return expDate >= startDate && expDate <= endDate;
      });
    }
    
    // Apply sum range filter
    if (sumRange.min || sumRange.max) {
      result = result.filter(exp => {
        const sum = exp.expenditureSum;
        if (sumRange.min && sumRange.max) {
          return sum >= Number(sumRange.min) && sum <= Number(sumRange.max);
        } else if (sumRange.min) {
          return sum >= Number(sumRange.min);
        } else if (sumRange.max) {
          return sum <= Number(sumRange.max);
        }
        return true;
      });
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        
        // Handle date sorting
        if (sortConfig.key === 'date') {
          aValue = new Date(aValue).getTime();
          bValue = new Date(bValue).getTime();
        }
        
        // Handle string sorting
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredData(result);
    setIsFiltered(searchQuery !== '' || activeFilters.length > 0 || (dateRange.start && dateRange.end) || sumRange.min || sumRange.max);
  }, [expenditures, searchQuery, activeFilters, sortConfig, dateRange, sumRange]);
  
  // Update filter options when filter type changes
  useEffect(() => {
    if (filterType === 'category') {
      const uniqueCategories = [...new Set(expenditures.map(exp => exp.categoryName))].filter(Boolean);
      setFilterOptions(uniqueCategories);
    } else if (filterType === 'supplier') {
      const uniqueSuppliers = [...new Set(expenditures.map(exp => exp.supplierName))].filter(Boolean);
      setFilterOptions(uniqueSuppliers);
    } else if (filterType === 'date') {
      const uniqueDates = [...new Set(expenditures.map(exp => {
        const date = new Date(exp.date);
        return date.toISOString().split('T')[0];
      }))].filter(Boolean);
      setFilterOptions(uniqueDates);
    }
  }, [filterType, expenditures]);
  
  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };
  
  // Clear search
  const handleClearSearch = () => {
    setSearchQuery('');
  };
  
  // Handle filter type change
  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    setFilterValue('');
  };
  
  // Handle filter value change
  const handleFilterValueChange = (event, newValue) => {
    setFilterValue(newValue);
  };
  
  // Add filter
  const handleAddFilter = () => {
    if (filterType && filterValue) {
      const newFilter = { type: filterType, value: filterValue };
      if (!activeFilters.some(filter => filter.type === newFilter.type && filter.value === newFilter.value)) {
        setActiveFilters([...activeFilters, newFilter]);
      }
      setFilterValue('');
      setFilterDialogOpen(false);
    }
  };
  
  // Remove filter
  const handleRemoveFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter(filter => 
      !(filter.type === filterToRemove.type && filter.value === filterToRemove.value)
    ));
  };
  
  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilters([]);
    setDateRange({ start: '', end: '' });
    setSumRange({ min: '', max: '' });
    setSearchQuery('');
  };
  
  // Handle sort
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Handle refresh data
  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(allExpendituresThunk());
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  
  // Handle menu open
  const handleMenuOpen = (event, expenditure) => {
    setAnchorEl(event.currentTarget);
    setSelectedExpenditure(expenditure);
  };
  
  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  // Handle view details
  const handleViewDetails = () => {
    // Implement view details functionality
    handleMenuClose();
  };
  
  // Handle edit
  const handleEdit = () => {
    // Implement edit functionality
    handleMenuClose();
  };
  
  // Handle delete
  const handleDelete = () => {
    // Implement delete functionality
    handleMenuClose();
  };
  
  // Handle export to Excel
  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting data...');
  };
  
  // Handle print
  const handlePrint = () => {
    // Implement print functionality
    console.log('Printing data...');
  };
  
  // Get filter label
  const getFilterLabel = (filter) => {
    switch (filter.type) {
      case 'category':
        return 'קטגוריה';
      case 'supplier':
        return 'ספק';
      case 'date':
        return 'תאריך';
      default:
        return filter.type;
    }
  };
  
  // Get filter display value
  const getFilterDisplayValue = (filter) => {
    if (filter.type === 'date') {
      return formatDate(filter.value);
    }
    return filter.value;
  };
  
  // Toggle advanced filter drawer
  const toggleAdvancedFilter = () => {
    setAdvancedFilterOpen(!advancedFilterOpen);
  };
  
  // Apply advanced filters
  const applyAdvancedFilters = () => {
    setAdvancedFilterOpen(false);
  };
  
  // Reset advanced filters
  const resetAdvancedFilters = () => {
    setDateRange({ start: '', end: '' });
    setSumRange({ min: '', max: '' });
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#263238', mb: 1, fontFamily: 'Rubik, sans-serif' }}>
            ניהול הוצאות
          </Typography>
          <Typography variant="body1" sx={{ color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
            צפייה וניהול של כל ההוצאות במערכת
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <ActionButton
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              bgcolor: '#00796b',
              '&:hover': { bgcolor: '#00695c' },
              fontFamily: 'Rubik, sans-serif',
            }}
            onClick={() => {/* Navigate to add expenditure */}}
          >
            הוספת הוצאה
          </ActionButton>
          
          <ActionButton
            variant="outlined"
            startIcon={<RefreshIcon sx={{ animation: refreshing ? `${pulse} 1s infinite` : 'none' }} />}
            sx={{
              borderColor: '#00796b',
              color: '#00796b',
              '&:hover': { borderColor: '#00695c', color: '#00695c' },
              fontFamily: 'Rubik, sans-serif',
            }}
            onClick={handleRefresh}
            disabled={refreshing}
          >
            רענון
          </ActionButton>
        </Box>
      </PageHeader>
      
      <StyledCard sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <SearchBar
                fullWidth
                placeholder="חיפוש לפי ספק, קטגוריה, מזמין או סכום..."
                value={searchQuery}
                onChange={handleSearchChange}
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
                sx={{ fontFamily: 'Rubik, sans-serif' }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                <FilterButton
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  onClick={() => setFilterDialogOpen(true)}
                  sx={{
                    borderColor: '#00796b',
                    color: '#00796b',
                    '&:hover': { borderColor: '#00695c', color: '#00695c' },
                    fontFamily: 'Rubik, sans-serif',
                  }}
                >
                  סינון מהיר
                </FilterButton>
                
                <FilterButton
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  onClick={toggleAdvancedFilter}
                  sx={{
                    borderColor: '#00796b',
                    color: '#00796b',
                    '&:hover': { borderColor: '#00695c', color: '#00695c' },
                    fontFamily: 'Rubik, sans-serif',
                  }}
                >
                  סינון מתקדם
                </FilterButton>
                
                <FilterButton
                  variant="outlined"
                  startIcon={<FileDownloadIcon />}
                  onClick={handleExport}
                  sx={{
                    borderColor: '#00796b',
                    color: '#00796b',
                    '&:hover': { borderColor: '#00695c', color: '#00695c' },
                    fontFamily: 'Rubik, sans-serif',
                    display: { xs: 'none', md: 'flex' }
                  }}
                >
                  ייצוא
                </FilterButton>
              </Box>
            </Grid>
          </Grid>
          
          {/* Active filters */}
          {(activeFilters.length > 0 || dateRange.start || sumRange.min) && (
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 1, color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
                סינון לפי:
              </Typography>
              
              {activeFilters.map((filter, index) => (
                <FilterChip
                  key={`${filter.type}-${filter.value}-${index}`}
                  label={`${getFilterLabel(filter)}: ${getFilterDisplayValue(filter)}`}
                  onDelete={() => handleRemoveFilter(filter)}
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{ fontFamily: 'Rubik, sans-serif' }}
                />
              ))}
              
              {dateRange.start && dateRange.end && (
                <FilterChip
                  label={`תאריך: ${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}`}
                  onDelete={() => setDateRange({ start: '', end: '' })}
                  color="primary"
                  variant="outlined"
                  size="small"
                  icon={<DateRangeIcon />}
                  sx={{ fontFamily: 'Rubik, sans-serif' }}
                />
              )}
              
              {(sumRange.min || sumRange.max) && (
                <FilterChip
                  label={`סכום: ${sumRange.min || '0'} - ${sumRange.max || 'מקסימום'} ₪`}
                  onDelete={() => setSumRange({ min: '', max: '' })}
                  color="primary"
                  variant="outlined"
                  size="small"
                  icon={<AttachMoneyIcon />}
                  sx={{ fontFamily: 'Rubik, sans-serif' }}
                />
              )}
              
              {isFiltered && (
                <Button
                  size="small"
                  onClick={handleClearFilters}
                  sx={{ ml: 1, fontFamily: 'Rubik, sans-serif', color: '#d32f2f' }}
                >
                  נקה הכל
                </Button>
              )}
            </Box>
          )}
        </CardContent>
      </StyledCard>
      
      {/* Data table */}
      <StyledCard>
        <StyledTableContainer sx={{ maxHeight: 'calc(100vh - 300px)' }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : filteredData.length === 0 ? (
            <NoDataContainer>
              <Box sx={{ mb: 2, opacity: 0.7 }}>
                <ReceiptIcon sx={{ fontSize: 60, color: '#00796b' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#263238', fontFamily: 'Rubik, sans-serif' }}>
                לא נמצאו הוצאות
              </Typography>
              <Typography variant="body2" sx={{ color: '#546e7a', mb: 3, fontFamily: 'Rubik, sans-serif' }}>
                {isFiltered 
                  ? 'לא נמצאו הוצאות התואמות את הסינון שבחרת. נסה לשנות את הסינון או לנקות אותו.'
                  : 'לא נמצאו הוצאות במערכת. לחץ על "הוספת הוצאה" כדי להוסיף הוצאה חדשה.'}
              </Typography>
              {isFiltered && (
                <Button
                  variant="outlined"
                  onClick={handleClearFilters}
                  sx={{ 
                    borderColor: '#00796b', 
                    color: '#00796b',
                    borderRadius: 30,
                    px: 3,
                    fontFamily: 'Rubik, sans-serif'
                  }}
                >
                  נקה סינון
                </Button>
              )}
            </NoDataContainer>
          ) : (
            <Table stickyHeader aria-label="טבלת הוצאות">
              <StyledTableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: column.align === 'right' ? 'flex-end' : column.align === 'center' ? 'center' : 'flex-start' }}>
                        {column.label !== 'actions' && (
                          <SortButton
                            size="small"
                            active={sortConfig.key === column.label}
                            onClick={() => handleSort(column.label)}
                          >
                            {sortConfig.key === column.label ? (
                              sortConfig.direction === 'ascending' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
                            ) : (
                              <SortIcon fontSize="small" />
                            )}
                          </SortButton>
                        )}
                        <Typography variant="subtitle2" sx={{ fontFamily: 'Rubik, sans-serif' }}>
                          {column.id}
                        </Typography>
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <StyledTableRow 
                        hover 
                        role="checkbox" 
                        tabIndex={-1} 
                        key={row.id || index}
                        isEven={index % 2 === 0}
                      >
                        {columns.map((column) => {
                          const value = row[column.label];
                          return (
                            <StyledTableCell key={column.id} align={column.align}>
                              {column.renderCell && column.label !== 'actions'
                                ? column.renderCell(value)
                                : column.label === 'actions'
                                  ? column.renderCell(row)
                                  : column.format
                                    ? column.format(value)
                                    : value}
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </StyledTableContainer>
        
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
              fontFamily: 'Rubik, sans-serif',
            }
          }}
        />
      </StyledCard>
      
      {/* Filter Dialog */}
      <Dialog 
        open={filterDialogOpen} 
        onClose={() => setFilterDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            width: '100%',
            maxWidth: 500,
          }
        }}
      >
        <DialogTitle sx={{ fontFamily: 'Rubik, sans-serif', fontWeight: 600 }}>
          סינון הוצאות
        </DialogTitle>
        <DialogContent>
          <Box sx={{ my: 1 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="filter-type-label" sx={{ fontFamily: 'Rubik, sans-serif' }}>סוג סינון</InputLabel>
              <Select
                labelId="filter-type-label"
                value={filterType}
                onChange={handleFilterTypeChange}
                label="סוג סינון"
                sx={{ fontFamily: 'Rubik, sans-serif' }}
              >
                <MenuItem value="category" sx={{ fontFamily: 'Rubik, sans-serif' }}>קטגוריה</MenuItem>
                <MenuItem value="supplier" sx={{ fontFamily: 'Rubik, sans-serif' }}>ספק</MenuItem>
                <MenuItem value="date" sx={{ fontFamily: 'Rubik, sans-serif' }}>תאריך</MenuItem>
              </Select>
            </FormControl>
            
            {filterType && (
              <Autocomplete
                value={filterValue}
                onChange={handleFilterValueChange}
                options={filterOptions}
                renderInput={(params) => (
                  <TextField 
                    {...params} 
                    label={filterType === 'category' ? 'בחר קטגוריה' : filterType === 'supplier' ? 'בחר ספק' : 'בחר תאריך'} 
                    variant="outlined"
                    sx={{ fontFamily: 'Rubik, sans-serif' }}
                  />
                )}
                sx={{ mb: 2 }}
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button 
            onClick={() => setFilterDialogOpen(false)} 
            sx={{ fontFamily: 'Rubik, sans-serif', color: '#546e7a' }}
          >
            ביטול
          </Button>
          <Button 
            onClick={handleAddFilter} 
            variant="contained" 
            disabled={!filterType || !filterValue}
            sx={{ 
              bgcolor: '#00796b', 
              '&:hover': { bgcolor: '#00695c' },
              fontFamily: 'Rubik, sans-serif',
              borderRadius: 30,
              px: 3
            }}
          >
            הוסף סינון
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Advanced Filter Drawer */}
      <Drawer
        anchor="right"
        open={advancedFilterOpen}
        onClose={toggleAdvancedFilter}
        PaperProps={{
          sx: {
            width: 320,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            p: 3,
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Rubik, sans-serif' }}>
            סינון מתקדם
          </Typography>
          <IconButton onClick={toggleAdvancedFilter}>
            <ClearIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        <Typography variant="subtitle2" sx={{ mb: 1, fontFamily: 'Rubik, sans-serif' }}>
          טווח תאריכים
        </Typography>
        <Box sx={{ mb: 3 }}>
          <TextField
            label="מתאריך"
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ mb: 2, fontFamily: 'Rubik, sans-serif' }}
          />
          <TextField
            label="עד תאריך"
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ fontFamily: 'Rubik, sans-serif' }}
          />
        </Box>
        
        <Typography variant="subtitle2" sx={{ mb: 1, fontFamily: 'Rubik, sans-serif' }}>
          טווח סכומים
        </Typography>
        <Box sx={{ mb: 3 }}>
          <TextField
            label="מסכום"
            type="number"
            value={sumRange.min}
            onChange={(e) => setSumRange({ ...sumRange, min: e.target.value })}
            InputProps={{
              startAdornment: <InputAdornment position="start">₪</InputAdornment>,
            }}
            fullWidth
            sx={{ mb: 2, fontFamily: 'Rubik, sans-serif' }}
          />
          <TextField
            label="עד סכום"
            type="number"
            value={sumRange.max}
            onChange={(e) => setSumRange({ ...sumRange, max: e.target.value })}
            InputProps={{
              startAdornment: <InputAdornment position="start">₪</InputAdornment>,
            }}
            fullWidth
            sx={{ fontFamily: 'Rubik, sans-serif' }}
          />
        </Box>
        
        <Box sx={{ mt: 'auto', pt: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={resetAdvancedFilters}
            sx={{ 
              mb: 2, 
              borderColor: '#d32f2f', 
              color: '#d32f2f',
              '&:hover': { borderColor: '#b71c1c', color: '#b71c1c' },
              fontFamily: 'Rubik, sans-serif',
              borderRadius: 30
            }}
          >
            נקה סינון
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={applyAdvancedFilters}
            sx={{ 
              bgcolor: '#00796b', 
              '&:hover': { bgcolor: '#00695c' },
              fontFamily: 'Rubik, sans-serif',
              borderRadius: 30
            }}
          >
            החל סינון
          </Button>
        </Box>
      </Drawer>
      
      {/* Row Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }
        }}
      >
        <MenuItem onClick={handleViewDetails} sx={{ fontFamily: 'Rubik, sans-serif' }}>
          <ListItemIcon>
            <InfoOutlinedIcon fontSize="small" sx={{ color: '#00796b' }} />
          </ListItemIcon>
          פרטים מלאים
        </MenuItem>
        <MenuItem onClick={handleEdit} sx={{ fontFamily: 'Rubik, sans-serif' }}>
          <ListItemIcon>
            <EditIcon fontSize="small" sx={{ color: '#00796b' }} />
          </ListItemIcon>
          עריכה
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDelete} sx={{ color: '#d32f2f', fontFamily: 'Rubik, sans-serif' }}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" sx={{ color: '#d32f2f' }} />
          </ListItemIcon>
          מחיקה
        </MenuItem>
      </Menu>
      
      {/* Summary Card */}
      <Box sx={{ mt: 3 }}>
        <StyledCard>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: alpha('#00796b', 0.1), color: '#00796b', mr: 2 }}>
                    <AttachMoneyIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
                      סך הכל הוצאות
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Rubik, sans-serif' }}>
                      {filteredData.reduce((sum, exp) => sum + exp.expenditureSum, 0).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: alpha('#00796b', 0.1), color: '#00796b', mr: 2 }}>
                      <ReceiptIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
                        מספר הוצאות
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Rubik, sans-serif' }}>
                        {filteredData.length} {filteredData.length === 1 ? 'הוצאה' : 'הוצאות'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: alpha('#00796b', 0.1), color: '#00796b', mr: 2 }}>
                      <CategoryIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
                        קטגוריות
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Rubik, sans-serif' }}>
                        {new Set(filteredData.map(exp => exp.categoryName)).size}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Box>
        
        {/* Data Visualization Section */}
        {filteredData.length > 0 && (
          <Box sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            <StyledCard sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontFamily: 'Rubik, sans-serif' }}>
                  התפלגות הוצאות לפי קטגוריה
                </Typography>
                <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* Here you would add a chart component */}
                  <Typography variant="body2" sx={{ color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
                    כאן יוצג גרף התפלגות הוצאות לפי קטגוריה
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
            
            <StyledCard sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontFamily: 'Rubik, sans-serif' }}>
                  הוצאות לאורך זמן
                </Typography>
                <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* Here you would add a chart component */}
                  <Typography variant="body2" sx={{ color: '#546e7a', fontFamily: 'Rubik, sans-serif' }}>
                    כאן יוצג גרף הוצאות לאורך זמן
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Box>
        )}
        
        {/* Quick Actions Floating Button */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <SpeedDial
            ariaLabel="פעולות מהירות"
            icon={<SpeedDialIcon />}
            direction="up"
            FabProps={{
              sx: {
                bgcolor: '#00796b',
                '&:hover': {
                  bgcolor: '#00695c',
                },
              },
            }}
          >
            <SpeedDialAction
              icon={<AddCircleOutlineIcon />}
              tooltipTitle="הוספת הוצאה"
              onClick={() => {/* Navigate to add expenditure */}}
              FabProps={{
                sx: {
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                },
              }}
            />
            <SpeedDialAction
              icon={<FileDownloadIcon />}
              tooltipTitle="ייצוא לאקסל"
              onClick={handleExport}
              FabProps={{
                sx: {
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                },
              }}
            />
            <SpeedDialAction
              icon={<PrintIcon />}
              tooltipTitle="הדפסה"
              onClick={handlePrint}
              FabProps={{
                sx: {
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                },
              }}
            />
          </SpeedDial>
        </Box>
      </PageContainer>
    );
  };
  
  // Missing imports

  
