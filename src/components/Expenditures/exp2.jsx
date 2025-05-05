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

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { 
  Button, 
  Checkbox, 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,
  TextField,
  Box,
  Typography,
  Chip
} from '@mui/material';
import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
import { getSupplierNameByLNumThunk } from '../../Redux/Slices/Suplliers/getSupplierThunk';

export const Exp = () => {
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState(false);
  const [typeSearch, setTypeSearch] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [filteredExpenditures, setFilteredExpenditures] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const currUser = useSelector(u => u.user.currUser);
  const categories = useSelector(e => e.category.allCategories);
  const expendituresCopy = useSelector(e => e.expenditure.allExpenditures);
  const expenditures = [...expendituresCopy];
  const dispatch = useDispatch();

  const columns = [
    { id: 'קוד הוצאה', label: 'id', minWidth: 190 },
    {
      id: 'סכום הוצאה',
      label: 'expenditureSum',
      minWidth: 190,
      format: (value) => value.toLocaleString('en-US'),
    },
    currUser.schoolSymbol == 0 && { id: 'סמל מוסד', label: 'schoolSymbol', minWidth: 100 },
    { id: 'קטגוריה', label: 'categoryName', minWidth: 100 },
    { id: 'שם ספק', label: 'supplierName', minWidth: 100 },
    { id: 'שם המזמין', label: 'ordererName', minWidth: 100 },
    { id: 'תאריך', label: 'date', minWidth: 100 },
  ].filter(Boolean);

  const getData = async () => {
    await dispatch(allExpendituresThunk());
  };

  const getSupplierName = async (lNum) => {
    return await dispatch(getSupplierNameByLNumThunk(lNum));
  };

  useEffect(() => {
    getData();
  }, []);

  // Generate search options based on selected search type
  useEffect(() => {
    if (!typeSearch) return;

    let options = [];
    switch (typeSearch) {
      case 'date':
        // Get unique dates
        options = [...new Set(expenditures.map(exp => exp.date))].map(date => ({
          label: date,
          value: date
        }));
        break;
      case 'supName':
        // Get unique supplier names
        options = [...new Set(expenditures.map(exp => exp.supplierName))].map(name => ({
          label: name || 'לא צוין',
          value: name
        }));
        break;
      case 'category':
        // Use categories from the store
        options = categories.map(cat => ({
          label: cat.categoryName,
          value: cat.categoryName
        }));
        break;
      case 'school':
        // Get unique school symbols
        options = [...new Set(expenditures.map(exp => exp.schoolSymbol))].map(symbol => ({
          label: `מוסד ${symbol}`,
          value: symbol
        }));
        break;
      default:
        options = [];
    }
    setSearchOptions(options);
  }, [typeSearch, expenditures, categories]);

  // Filter expenditures based on search value
  useEffect(() => {
    if (!searchValue || !typeSearch) {
      setIsFiltered(false);
      setFilteredExpenditures([]);
      return;
    }

    let filtered = [];
    switch (typeSearch) {
      case 'date':
        filtered = expenditures.filter(exp => exp.date === searchValue);
        break;
      case 'supName':
        filtered = expenditures.filter(exp => exp.supplierName === searchValue);
        break;
      case 'category':
        filtered = expenditures.filter(exp => exp.categoryName === searchValue);
        break;
      case 'school':
        filtered = expenditures.filter(exp => exp.schoolSymbol === searchValue);
        break;
      default:
        filtered = [];
    }
    
    setFilteredExpenditures(filtered);
    setIsFiltered(filtered.length > 0);
  }, [searchValue, typeSearch, expenditures]);

  // Handle search dialog close
  const handleCloseSearch = () => {
    setSearch(false);
  };

  // Handle search type selection
  const handleSearchTypeSelect = (type) => {
    setTypeSearch(type);
    setSearch(false);
  };

  // Handle search option selection
  const handleSearchOptionSelect = (event, option) => {
    if (option) {
      setSearchValue(option.value);
    } else {
      setSearchValue('');
      setIsFiltered(false);
    }
  };

  // Clear search filter
  const clearSearch = () => {
    setSearchValue('');
    setTypeSearch('');
    setIsFiltered(false);
  };

  // Get the data to display in the table
  const displayData = isFiltered ? filteredExpenditures : expenditures;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button 
          variant="contained" 
          onClick={() => setSearch(true)}
          sx={{ height: '40px' }}
        >
          חיפוש הוצאות
        </Button>

        {typeSearch && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1">
              {typeSearch === 'date' && 'חיפוש לפי תאריך:'}
              {typeSearch === 'supName' && 'חיפוש לפי ספק:'}
              {typeSearch === 'category' && 'חיפוש לפי קטגוריה:'}
              {typeSearch === 'school' && 'חיפוש לפי מוסד:'}
            </Typography>
            
            <Autocomplete
              id="search-autocomplete"
              options={searchOptions}
              getOptionLabel={(option) => option.label}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" size="small" placeholder="הקלד לחיפוש..." />
              )}
              onChange={handleSearchOptionSelect}
              isOptionEqualToValue={(option, value) => option.value === value.value}
            />
            
            {isFiltered && (
              <Chip 
                label={`נמצאו ${filteredExpenditures.length} תוצאות`} 
                color="primary" 
                variant="outlined" 
              />
            )}
            
            <Button 
              variant="outlined" 
              color="error" 
              size="small" 
              onClick={clearSearch}
            >
              נקה חיפוש
            </Button>
          </Box>
        )}
      </Box>

      {/* Search Dialog */}
      <Dialog open={search} onClose={handleCloseSearch}>
        <DialogTitle>בחר סוג חיפוש</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '250px', p: 1 }}>
            <Button variant="outlined" onClick={() => handleSearchTypeSelect('date')}>תאריך</Button>
            <Button variant="outlined" onClick={() => handleSearchTypeSelect('supName')}>שם ספק</Button>
            <Button variant="outlined" onClick={() => handleSearchTypeSelect('category')}>קטגוריה</Button>
            <Button variant="outlined" onClick={() => handleSearchTypeSelect('school')}>שם מוסד</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSearch}>ביטול</Button>
        </DialogActions>
      </Dialog>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (row.schoolSymbol == currUser.schoolSymbol || currUser.schoolSymbol == 0) && (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.label];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={displayData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};