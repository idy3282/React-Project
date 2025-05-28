// // import * as React from 'react';

// // import { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux'
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
// // import { Button, Input, InputAdornment, InputBase, OutlinedInput } from '@mui/material';
// // import Box from '@mui/material/Box';
// // import InputLabel from '@mui/material/InputLabel';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import Select from '@mui/material/Select';
// // import { useState } from 'react';
// // import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
// // import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// // import './user.css'


// // export const User = () => {

// //   const [showInput, setShowInput] = useState(false)
// //   const [id, setId] = useState('')
// //   const [UserName, setUserName] = useState('')
// //   const [sSymbol, setSsymbol] = useState('')

// //   const userFromServer = useSelector(s => s.user.allUsers)
// //   const users = [...userFromServer];
// //   const currUser = useSelector(s => s.user.currUser)

// //   const schools = useSelector(s => s.school.allSchools)
  
// //   const dispatch = useDispatch()

// //   const getData = async () => {
// //     await dispatch(allUsersThunk())
// //   }
// //   const addUser = async () => {
// //     // setShowInput(false);
// //    debugger
// //     await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
    
// //     setId('');
// //     setUserName('');
// //     setSsymbol('');
// //     getData();
// //   }
// //   const getSchools = async () => {
// //     await dispatch(allSchoolsThunk());
    
// //   }
// // const sorting=()=>{
  
// // }
// //   // useEffect(() => {
// //   //   users.sort((a,b)=>a.schoolSymbol-b.schoolSymbol)
// //   //  // getSchools()
// //   // }, [users])

// // useEffect(()=>{
// //   if(users.length>0){
// //     getSchools()
// //   }
// // },[users])


// //   return <>


// //     {

      
// //       <TableContainer component={Paper} sx={{ width: "40%", height:"850px"}}>
// //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //           <TableHead sx={{position:'sticky',scrollbarColor:"blue"}}>
// //             <TableRow>
// //             <TableCell align="right"> שם משתמש</TableCell>
// //               <TableCell>  ססמת משתמש</TableCell>   
// //               <TableCell align="right"> שם מוסד</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {users.map((sc) => (
// //              (sc.schoolSymbol == currUser.schoolSymbol||currUser.schoolSymbol==0)&&<TableRow
// //                 key={sc.id}
// //                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //               >
// //                 <TableCell align="right">{sc.userName}</TableCell>
// //                 <TableCell component="th" scope="row">
// //                   {sc.id}
// //                 </TableCell>
                
// //                 <TableCell align="right">{sc.schoolSymbol}</TableCell>
              
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       }
      
// //        {currUser.schoolSymbol==0 && !showInput && <button className='button' onClick={() => { debugger; setShowInput(true) ; getSchools()}}>להוספת משתמש</button>}

// //             {showInput &&
// //               <div id="addUser">
// //                 <Input value={id} onChange={(i) => setId(i.target.value)} placeholder='Id' />
// //                 <Input value={UserName} onChange={(n) => setUserName(n.target.value)} placeholder='User Name' />
// //               {/* ======================================= */}

              
// //             {/* --------------- */}
// //               <Box sx={{ minWidth: 120 }}>
// //                  <FormControl fullWidth>
// //                  <InputLabel id="demo-simple-select-label">סמל מוסד</InputLabel>
// //                <Select
// //                  labelId="demo-simple-select-label"
// //                  id="demo-simple-select"
// //                  value={sSymbol}
// //             // label="schoolSymbol"
// //                     onChange={ (n)=>setSsymbol(n.target.value)}>      
// //                     {schools?.map((s,index)=>{
// //                      return <MenuItem value={schools[index].schoolSymbol}>{s.schoolSymbol}</MenuItem>
// //                     })}

// //                   </Select>
// //                 </FormControl>
// //               </Box>




// //               {/* ======================================= */}
// //               <button className='button' onClick={() => {addUser();setShowInput(false)}}>לאישור</button>

// //               </div>}
       


// //   </>}















//   // export default function BasicSelect() {
//   //   const [schoolSymbol, setSchoolSymbol] = React.useState('');
  
//   //   const handleChange = (event) => {
//   //     setSchoolSymbol(event.target.value);
//   //   };
  
//   //   return (
//   //     <Box sx={{ minWidth: 120 }}>
//   //       <FormControl fullWidth>
//   //         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//   //         <Select
//   //           labelId="demo-simple-select-label"
//   //           id="demo-simple-select"
//   //           value={schoolSymbol}
//   //           label="schoolSymbol"
//   //           onChange={handleChange}
//   //         >
//   //           <MenuItem value={10}>Ten</MenuItem>
//   //           <MenuItem value={20}>Twenty</MenuItem>
//   //           <MenuItem value={30}>Thirty</MenuItem>
//   //         </Select>
//   //       </FormControl>
//   //     </Box>
//   //   );
//   // }







// // מה שהיה עכשיו


// //   import * as React from 'react';
// //   import { useEffect } from 'react';
// //   import { useSelector, useDispatch } from 'react-redux';
// //   import Table from '@mui/material/Table';
// //   import TableBody from '@mui/material/TableBody';
// //   import TableCell from '@mui/material/TableCell';
// //   import TableContainer from '@mui/material/TableContainer';
// //   import TableHead from '@mui/material/TableHead';
// //   import TableRow from '@mui/material/TableRow';
// //   import Paper from '@mui/material/Paper';
// //   import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
// //   import { 
// //     Button, Input, Box, Typography, IconButton, 
// //     FormControl, InputLabel, MenuItem, Select, 
// //     Tooltip, Dialog, DialogTitle, DialogContent, DialogActions
// //   } from '@mui/material';
// //   import SortIcon from '@mui/icons-material/Sort';
// //   import AddCircleIcon from '@mui/icons-material/AddCircle';
// //   import PersonAddIcon from '@mui/icons-material/PersonAdd';
// //   import { useState } from 'react';
// //   import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
// //   import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// //   import './user.css';
  
// //   export const User = () => {
// //     const [showInput, setShowInput] = useState(false);
// //     const [id, setId] = useState('');
// //     const [UserName, setUserName] = useState('');
// //     const [sSymbol, setSsymbol] = useState('');
// //     const [sortBy, setSortBy] = useState('');
// //     const [sortDirection, setSortDirection] = useState('asc');
  
// //     const userFromServer = useSelector(s => s.user.allUsers);
// //     const users = [...userFromServer];
// //     const currUser = useSelector(s => s.user.currUser);
// //     const schools = useSelector(s => s.school.allSchools);
    
// //     const dispatch = useDispatch();
  
// //     const getData = async () => {
// //       await dispatch(allUsersThunk());
// //     };
  
// //     const addUser = async () => {
// //       await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
// //       setId('');
// //       setUserName('');
// //       setSsymbol('');
// //       getData();
// //     };
  
// //     const getSchools = async () => {
// //       await dispatch(allSchoolsThunk());
// //     };
  
// //     const handleSort = (field) => {
// //       if (sortBy === field) {
// //         // Toggle direction if same field
// //         setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
// //       } else {
// //         // New field, default to ascending
// //         setSortBy(field);
// //         setSortDirection('asc');
// //       }
// //     };
  
// //     const getSortedUsers = () => {
// //       if (!sortBy) return users;
  
// //       return [...users].sort((a, b) => {
// //         let valueA, valueB;
  
// //         if (sortBy === 'userName') {
// //           valueA = a.userName || '';
// //           valueB = b.userName || '';
// //         } else if (sortBy === 'schoolSymbol') {
// //           valueA = a.schoolSymbol || 0;
// //           valueB = b.schoolSymbol || 0;
// //           // For numeric values
// //           return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
// //         } else {
// //           valueA = a[sortBy] || '';
// //           valueB = b[sortBy] || '';
// //         }
  
// //         // For string values
// //         if (sortDirection === 'asc') {
// //           return valueA.localeCompare(valueB, 'he');
// //         } else {
// //           return valueB.localeCompare(valueA, 'he');
// //         }
// //       });
// //     };
  
// //     useEffect(() => {
// //       getData();
// //     }, []);
  
// //     useEffect(() => {
// //       if (users.length > 0) {
// //         getSchools();
// //       }
// //     }, [users]);
  
// //     const sortedUsers = getSortedUsers();
  
// //     // return (
// //     //   <Box sx={{ padding: 3, direction: 'rtl' }}>
// //     //     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
// //     //       <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
// //     //         ניהול משתמשים
// //     //       </Typography>
          
// //     //       {currUser.schoolSymbol === 0 && !showInput && (
// //     //         <Button 
// //     //           variant="contained" 
// //     //           color="primary" 
// //     //           startIcon={<PersonAddIcon />}
// //     //           onClick={() => { setShowInput(true); getSchools(); }}
// //     //           sx={{ 
// //     //             borderRadius: 8,
// //     //             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //     //             '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
// //     //           }}
// //     //         >
// //     //           הוסף משתמש
// //     //         </Button>
// //     //       )}
// //     //     </Box>
  
// //     //     <TableContainer 
// //     //       component={Paper} 
// //     //       sx={{ 
// //     //         width: "100%", 
// //     //         maxWidth: 1000,
// //     //         height: "auto", 
// //     //         maxHeight: "650px",
// //     //         mb: 3,
// //     //         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //     //         borderRadius: 2
// //     //       }}
// //     //     >
// //     //       <Table stickyHeader aria-label="users table">
// //     //         <TableHead>
// //     //           <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
// //     //             <TableCell align="right">
// //     //               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
// //     //                 <Typography sx={{ fontWeight: 'bold' }}>שם משתמש</Typography>
// //     //                 <Tooltip title="מיון לפי שם משתמש">
// //     //                   <IconButton size="small" onClick={() => handleSort('userName')}>
// //     //                     <SortIcon 
// //     //                       fontSize="small" 
// //     //                       color={sortBy === 'userName' ? 'primary' : 'action'}
// //     //                       sx={{ 
// //     //                         transform: sortBy === 'userName' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none'
// //     //                       }}
// //     //                     />
// //     //                   </IconButton>
// //     //                 </Tooltip>
// //     //               </Box>
// //     //             </TableCell>
// //     //             <TableCell>
// //     //               <Typography sx={{ fontWeight: 'bold' }}>ססמת משתמש</Typography>
// //     //             </TableCell>
// //     //             <TableCell align="right">
// //     //               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
// //     //                 <Typography sx={{ fontWeight: 'bold' }}>סמל מוסד</Typography>
// //     //                 {currUser.schoolSymbol === 0 && (
// //     //                   <Tooltip title="מיון לפי סמל מוסד">
// //     //                     <IconButton size="small" onClick={() => handleSort('schoolSymbol')}>
// //     //                       <SortIcon 
// //     //                         fontSize="small" 
// //     //                         color={sortBy === 'schoolSymbol' ? 'primary' : 'action'}
// //     //                         sx={{ 
// //     //                           transform: sortBy === 'schoolSymbol' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none'
// //     //                         }}
// //     //                       />
// //     //                     </IconButton>
// //     //                   </Tooltip>
// //     //                 )}
// //     //               </Box>
// //     //             </TableCell>
// //     //           </TableRow>
// //     //         </TableHead>
// //     //         <TableBody>
// //     //           {sortedUsers.map((sc) => (
// //     //             (sc.schoolSymbol === currUser.schoolSymbol || currUser.schoolSymbol === 0) && (
// //     //               <TableRow
// //     //                 key={sc.id}
// //     //                 sx={{ 
// //     //                   '&:last-child td, &:last-child th': { border: 0 },
// //     //                   '&:hover': { backgroundColor: '#f1f8fe' }
// //     //                 }}
// //     //               >
// //     //                 <TableCell align="right">{sc.userName}</TableCell>
// //     //                 <TableCell component="th" scope="row">{sc.id}</TableCell>
// //     //                 <TableCell align="right">{sc.schoolSymbol}</TableCell>
// //     //               </TableRow>
// //     //             )
// //     //           ))}
// //     //         </TableBody>
// //     //       </Table>
// //     //     </TableContainer>
  
// //     //     <Dialog 
// //     //       open={showInput} 
// //     //       onClose={() => setShowInput(false)}
// //     //       PaperProps={{
// //     //         sx: { borderRadius: 2, p: 1, minWidth: '400px', direction: 'rtl' }
// //     //       }}
// //     //     >
// //     //       <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
// //     //         הוספת משתמש חדש
// //     //       </DialogTitle>
// //     //       <DialogContent>
// //     //         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
// //     //           <Input 
// //     //             value={id} 
// //     //             onChange={(i) => setId(i.target.value)} 
// //     //             placeholder='מזהה משתמש' 
// //     //             fullWidth
// //     //             sx={{ mb: 2 }}
// //     //           />
// //     //           <Input 
// //     //             value={UserName} 
// //     //             onChange={(n) => setUserName(n.target.value)} 
// //     //             placeholder='שם משתמש' 
// //     //             fullWidth
// //     //             sx={{ mb: 2 }}
// //     //           />
// //     //           <FormControl fullWidth>
// //     //             <InputLabel id="school-symbol-label">סמל מוסד</InputLabel>
// //     //             <Select
// //     //               labelId="school-symbol-label"
// //     //               id="school-symbol-select"
// //     //               value={sSymbol}
// //     //               onChange={(n) => setSsymbol(n.target.value)}
// //     //             >
// //     //               {schools?.map((s, index) => (
// //     //                 <MenuItem key={s.schoolSymbol} value={s.schoolSymbol}>
// //     //                   {s.schoolSymbol} - {s.schoolName || ''}
// //     //                 </MenuItem>
// //     //               ))}
// //     //             </Select>
// //     //           </FormControl>
// //     //         </Box>
// //     //       </DialogContent>
// //     //       <DialogActions sx={{ justifyContent: 'center', p: 2 }}>
// //     //         <Button 
// //     //           variant="contained" 
// //     //           color="primary" 
// //     //           onClick={() => { addUser(); setShowInput(false); }}
// //     //           sx={{ 
// //     //             borderRadius: 8,
// //     //             minWidth: '120px',
// //     //             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //     //             '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
// //     //           }}
// //     //         >
// //     //           אישור
// //     //         </Button>
// //     //         <Button 
// //     //           variant="outlined" 
// //     //           onClick={() => setShowInput(false)}
// //     //           sx={{ 
// //     //             borderRadius: 8,
// //     //             minWidth: '120px'
// //     //           }}
// //     //         >
// //     //           ביטול
// //     //         </Button>
// //     //       </DialogActions>
// //     //     </Dialog>
// //     //   </Box>
// //     // );
// //     // אין צורך לשנות את הייבוא והלוגיקה, רק להוסיף קלאסים לאלמנטים


// //   // הקוד הקיים נשאר ללא שינוי
  
// //   return (
// //     <Box className="user-page" sx={{ padding: 3, direction: 'rtl' }}>
// //       <Box className="user-header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
// //         <Typography className="user-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
// //           ניהול משתמשים
// //         </Typography>
        
// //         {currUser.schoolSymbol === 0 && !showInput && (
// //           <Button 
// //             className="add-user-button"
// //             variant="contained" 
// //             color="primary" 
// //             startIcon={<PersonAddIcon />}
// //             onClick={() => { setShowInput(true); getSchools(); }}
// //             sx={{ 
// //               borderRadius: 8,
// //               boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //               '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
// //             }}
// //           >
// //             הוסף משתמש
// //           </Button>
// //         )}
// //       </Box>

// //       <TableContainer 
// //         className="user-table-container"
// //         component={Paper} 
// //         sx={{ 
// //           width: "100%", 
// //           maxWidth: 1000,
// //           height: "auto", 
// //           maxHeight: "650px",
// //           mb: 3,
// //           boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //           borderRadius: 2
// //         }}
// //       >
// //         <Table className="user-table" stickyHeader aria-label="users table">
// //           <TableHead>
// //             <TableRow className="user-table-header" sx={{ backgroundColor: '#f5f5f5' }}>
// //               <TableCell align="right">
// //                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
// //                   <Typography sx={{ fontWeight: 'bold' }}>שם משתמש</Typography>
// //                   <Tooltip title="מיון לפי שם משתמש">
// //                     <IconButton size="small" onClick={() => handleSort('userName')}>
// //                       <SortIcon 
// //                         fontSize="small" 
// //                         color={sortBy === 'userName' ? 'primary' : 'action'}
// //                         sx={{ 
// //                           transform: sortBy === 'userName' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none'
// //                         }}
// //                       />
// //                     </IconButton>
// //                   </Tooltip>
// //                 </Box>
// //               </TableCell>
// //               <TableCell>
// //                 <Typography sx={{ fontWeight: 'bold' }}>ססמת משתמש</Typography>
// //               </TableCell>
// //               <TableCell align="right">
// //                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
// //                   <Typography sx={{ fontWeight: 'bold' }}>סמל מוסד</Typography>
// //                   {currUser.schoolSymbol === 0 && (
// //                     <Tooltip title="מיון לפי סמל מוסד">
// //                       <IconButton size="small" onClick={() => handleSort('schoolSymbol')}>
// //                         <SortIcon 
// //                           fontSize="small" 
// //                           color={sortBy === 'schoolSymbol' ? 'primary' : 'action'}
// //                           sx={{ 
// //                             transform: sortBy === 'schoolSymbol' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none'
// //                           }}
// //                         />
// //                       </IconButton>
// //                     </Tooltip>
// //                   )}
// //                 </Box>
// //               </TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {sortedUsers.map((sc) => (
// //               (sc.schoolSymbol === currUser.schoolSymbol || currUser.schoolSymbol === 0) && (
// //                 <TableRow
// //                   className="user-table-row"
// //                   key={sc.id}
// //                   sx={{ 
// //                     '&:last-child td, &:last-child th': { border: 0 },
// //                     '&:hover': { backgroundColor: '#f1f8fe' }
// //                   }}
// //                 >
// //                   <TableCell align="right">{sc.userName}</TableCell>
// //                   <TableCell component="th" scope="row">{sc.id}</TableCell>
// //                   <TableCell align="right">{sc.schoolSymbol}</TableCell>
// //                 </TableRow>
// //               )
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       <Dialog 
// //         open={showInput} 
// //         onClose={() => setShowInput(false)}
// //         PaperProps={{
// //           sx: { borderRadius: 2, p: 1, minWidth: '400px', direction: 'rtl' }
// //         }}
// //       >
// //         <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
// //           הוספת משתמש חדש
// //         </DialogTitle>
// //         <DialogContent>
// //           <Box className="add-user-form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
// //             <Input 
// //               className="user-input"
// //               value={id} 
// //               onChange={(i) => setId(i.target.value)} 
// //               placeholder='מזהה משתמש' 
// //               fullWidth
// //               sx={{ mb: 2 }}
// //             />
// //             <Input 
// //               className="user-input"
// //               value={UserName} 
// //               onChange={(n) => setUserName(n.target.value)} 
// //               placeholder='שם משתמש' 
// //               fullWidth
// //               sx={{ mb: 2 }}
// //             />
// //             <FormControl fullWidth>
// //               <InputLabel id="school-symbol-label">סמל מוסד</InputLabel>
// //               <Select
// //                 className="user-select"
// //                 labelId="school-symbol-label"
// //                 id="school-symbol-select"
// //                 value={sSymbol}
// //                 onChange={(n) => setSsymbol(n.target.value)}
// //               >
// //                 {schools?.map((s, index) => (
// //                   <MenuItem key={s.schoolSymbol} value={s.schoolSymbol}>
// //                     {s.schoolSymbol} - {s.schoolName || ''}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //           </Box>
// //         </DialogContent>
// //         <DialogActions sx={{ justifyContent: 'center', p: 2 }}>
// //           <Button 
// //             className="add-user-form-submit"
// //             variant="contained" 
// //             color="primary" 
// //             onClick={() => { addUser(); setShowInput(false); }}
// //             sx={{ 
// //               borderRadius: 8,
// //               minWidth: '120px',
// //               boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //               '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 8px rgba(0,0,0,0.15)' }
// //             }}
// //           >
// //             אישור
// //           </Button>
// //           <Button 
// //             className="add-user-form-cancel"
// //             variant="outlined" 
// //             onClick={() => setShowInput(false)}
// //             sx={{ 
// //               borderRadius: 8,
// //               minWidth: '120px'
// //             }}
// //           >
// //             ביטול
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Box>
// //   );
// // };


  
  
  
  

// // גרסה שנייה

// // import * as React from 'react';
// // import { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
// // import { 
// //   Button, Input, Box, Typography, IconButton, 
// //   FormControl, InputLabel, MenuItem, Select, 
// //   Tooltip, Dialog, DialogTitle, DialogContent, DialogActions,
// //   Avatar, TextField, Grid, InputAdornment, Divider, CircularProgress,
// //   FormHelperText
// // } from '@mui/material';
// // import SortIcon from '@mui/icons-material/Sort';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import PersonAddIcon from '@mui/icons-material/PersonAdd';
// // import { useState } from 'react';
// // import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
// // import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// // import './user.css';
// // import { styled } from '@mui/material/styles';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import SaveIcon from '@mui/icons-material/Save';
// // import SchoolIcon from '@mui/icons-material/School';
// // import PersonIcon from '@mui/icons-material/Person';
// // import VpnKeyIcon from '@mui/icons-material/VpnKey';
// // import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// // // Styled components
// // const StyledTextField = styled(TextField)(({ theme }) => ({
// //   marginBottom: theme.spacing(2),
// //   "& .MuiOutlinedInput-root": {
// //     borderRadius: 8,
// //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
// //       borderColor: "#00796b",
// //     },
// //   },
// //   "& .MuiInputLabel-root.Mui-focused": {
// //     color: "#00796b",
// //   },
// //   "& .MuiInputLabel-root": {
// //     fontFamily: 'Rubik, sans-serif',
// //   },
// //   "& .MuiInputBase-input": {
// //     fontFamily: 'Rubik, sans-serif',
// //   },
// // }));

// // const FormButton = styled(Button)(({ theme }) => ({
// //   borderRadius: 30,
// //   padding: "10px 24px",
// //   fontWeight: 700,
// //   textTransform: "none",
// //   fontSize: "0.9rem",
// //   fontFamily: 'Rubik, sans-serif',
// //   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     transform: "translateY(-2px)",
// //     boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
// //   },
// // }));

// // const ActionButton = styled(Button)(({ theme }) => ({
// //   borderRadius: 30,
// //   padding: "10px 24px",
// //   fontWeight: 700,
// //   textTransform: "none",
// //   fontSize: "1rem",
// //   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     transform: "translateY(-2px)",
// //     boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
// //   },
// // }));

// // export const User = () => {
// //   const [showInput, setShowInput] = useState(false);
// //   const [id, setId] = useState('');
// //   const [UserName, setUserName] = useState('');
// //   const [sSymbol, setSsymbol] = useState('');
// //   const [sortBy, setSortBy] = useState('');
// //   const [sortDirection, setSortDirection] = useState('asc');
// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState({
// //     id: false,
// //     UserName: false,
// //     sSymbol: false
// //   });

// //   const userFromServer = useSelector(s => s.user.allUsers);
// //   const users = [...userFromServer];
// //   const currUser = useSelector(s => s.user.currUser);
// //   const schools = useSelector(s => s.school.allSchools);
  
// //   // Colors based on your theme
// //   const colors = {
// //     primary: "#00796b", // Teal
// //     primaryLight: "#48a999",
// //     primaryDark: "#004c40",
// //     secondary: "#ff5722", // Deep Orange
// //     secondaryLight: "#ff8a50",
// //     secondaryDark: "#c41c00",
// //     text: "#263238",
// //     textLight: "#546e7a",
// //     background: "#f5f5f5",
// //     card: "#ffffff",
// //     border: "#e0e0e0",
// //     error: "#f44336"
// //   };
  
// //   const dispatch = useDispatch();

// //   const getData = async () => {
// //     await dispatch(allUsersThunk());
// //   };

// //   const validateForm = () => {
// //     const newErrors = {
// //       id: !id.trim(),
// //       UserName: !UserName.trim(),
// //       sSymbol: !sSymbol
// //     };
    
// //     setErrors(newErrors);
    
// //     return !Object.values(newErrors).some(error => error);
// //   };

// //   const addUser = async () => {
// //     if (!validateForm()) {
// //       return;
// //     }
    
// //     try {
// //       setLoading(true);
// //       await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
      
// //       setId('');
// //       setUserName('');
// //       setSsymbol('');
// //       setShowInput(false);
// //       getData();
// //     } catch (error) {
// //       console.error("Error adding user:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getSchools = async () => {
// //     await dispatch(allSchoolsThunk());
// //   };

// //   const handleSort = (field) => {
// //     if (sortBy === field) {
// //       // Toggle direction if same field
// //       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
// //     } else {
// //       // New field, default to ascending
// //       setSortBy(field);
// //       setSortDirection('asc');
// //     }
// //   };

// //   const getSortedUsers = () => {
// //     if (!sortBy) return users;

// //     return [...users].sort((a, b) => {
// //       let valueA, valueB;

// //       if (sortBy === 'userName') {
// //         valueA = a.userName || '';
// //         valueB = b.userName || '';
// //       } else if (sortBy === 'schoolSymbol') {
// //         valueA = a.schoolSymbol || 0;
// //         valueB = b.schoolSymbol || 0;
// //         // For numeric values
// //         return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
// //       } else {
// //         valueA = a[sortBy] || '';
// //         valueB = b[sortBy] || '';
// //       }

// //       // For string values
// //       if (sortDirection === 'asc') {
// //         return valueA.localeCompare(valueB, 'he');
// //       } else {
// //         return valueB.localeCompare(valueA, 'he');
// //       }
// //     });
// //   };

// //   const handleIdChange = (e) => {
// //     setId(e.target.value);
// //     if (errors.id) {
// //       setErrors({...errors, id: false});
// //     }
// //   };

// //   const handleUserNameChange = (e) => {
// //     setUserName(e.target.value);
// //     if (errors.UserName) {
// //       setErrors({...errors, UserName: false});
// //     }
// //   };

// //   const handleSymbolChange = (e) => {
// //     setSsymbol(e.target.value);
// //     if (errors.sSymbol) {
// //       setErrors({...errors, sSymbol: false});
// //     }
// //   };

// //   const resetForm = () => {
// //     setId('');
// //     setUserName('');
// //     setSsymbol('');
// //     setErrors({
// //       id: false,
// //       UserName: false,
// //       sSymbol: false
// //     });
// //     setShowInput(false);
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   useEffect(() => {
// //     if (users.length > 0) {
// //       getSchools();
// //     }
// //   }, [users]);

// //   const sortedUsers = getSortedUsers();

// //   return <>
// //     {
// //       <TableContainer component={Paper} sx={{ width: "40%", height:"850px"}}>
// //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //           <TableHead sx={{position:'sticky',scrollbarColor:"blue"}}>
// //             <TableRow>
// //             <TableCell align="right"> שם משתמש</TableCell>
// //               <TableCell>  ססמת משתמש</TableCell>   
// //               <TableCell align="right"> שם מוסד</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {sortedUsers.map((sc) => (
// //              (sc.schoolSymbol == currUser.schoolSymbol||currUser.schoolSymbol==0)&&<TableRow
// //                 key={sc.id}
// //                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //               >
// //                 <TableCell align="right">{sc.userName}</TableCell>
// //                 <TableCell component="th" scope="row">
// //                   {sc.id}
// //                 </TableCell>
                
// //                 <TableCell align="right">{sc.schoolSymbol}</TableCell>
              
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     }
    
// //     {currUser.schoolSymbol==0 && !showInput && 
// //       <Button 
// //         variant="contained" 
// //         color="primary" 
// //         startIcon={<PersonAddIcon />}
// //         onClick={() => { getSchools(); setShowInput(true); }}
// //         sx={{ 
// //           borderRadius: 8,
// //           mt: 2,
// //           bgcolor: colors.primary,
// //           color: "white",
// //           "&:hover": {
// //             bgcolor: colors.primaryDark,
// //           },
// //         }}
// //       >
// //         להוספת משתמש
// //       </Button>
// //     }

// //     <Dialog 
// //       open={showInput} 
// //       onClose={resetForm}
// //       PaperProps={{
// //         sx: { borderRadius: 2, p: 1, minWidth: '500px', direction: 'rtl' }
// //       }}
// //     >
// //       <Box sx={{ padding: "20px" }}>
// //         <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
// //           <ActionButton
// //             variant="outlined"
// //             startIcon={<ArrowBackIcon />}
// //             sx={{
// //               borderColor: colors.primary,
// //               color: colors.primary,
// //               "&:hover": {
// //                 borderColor: colors.primaryDark,
// //                 bgcolor: `${colors.primary}10`,
// //               },
// //               fontFamily: 'Rubik, sans-serif',
// //             }}
// //             onClick={resetForm}
// //           >
// //             חזרה
// //           </ActionButton>
          
// //           <Box sx={{ display: "flex", alignItems: "center" }}>
// //             <Box>
// //               <Typography
// //                 variant="h4"
// //                 sx={{
// //                   fontWeight: 800,
// //                   color: colors.text,
// //                   fontFamily: 'Rubik, sans-serif',
// //                 }}
// //               >
// //                 הוספת משתמש חדש 
// //               </Typography>
// //               <Typography
// //                 variant="body1"
// //                 sx={{
// //                   color: colors.textLight,
// //                   fontFamily: 'Rubik, sans-serif',
// //                 }}
// //               >
// //                 הזן את פרטי המשתמש החדש
// //               </Typography>
// //             </Box>
// //             <Avatar
// //               sx={{
// //                 bgcolor: `${colors.primary}15`,
// //                 color: colors.primary,
// //                 width: 60,
// //                 height: 60,
// //                 ml: 2,
// //               }}
// //             >
// //               <AddCircleOutlineIcon sx={{ fontSize: 35 }} />
// //             </Avatar>
// //           </Box>
// //         </Box>

// //         <Divider sx={{ mb: 3 }} />
        
// //         <Grid container spacing={3}>
// //           <Grid item xs={12} md={6}>
// //             <StyledTextField
// //               fullWidth
// //               label="ססמת משתמש"
// //               variant="outlined"
// //               value={id}
// //               onChange={handleIdChange}
// //               error={errors.id}
// //               InputProps={{
// //                 startAdornment: (
// //                   <InputAdornment position="start">
// //                     <VpnKeyIcon sx={{ color: errors.id ? colors.error : colors.primary }} />
// //                   </InputAdornment>
// //                 ),
// //               }}
// //             />
// //             {errors.id && (
// //               <FormHelperText error sx={{ mt: -1, mb: 1, mx: 1 }}>
// //                 שדה חובה - יש להזין ססמת משתמש
// //               </FormHelperText>
// //             )}
// //           </Grid>
          
// //           <Grid item xs={12} md={6}>
// //             <StyledTextField
// //               fullWidth
// //               label="שם משתמש"
// //               variant="outlined"
// //               value={UserName}
// //               onChange={handleUserNameChange}
// //               error={errors.UserName}
// //               InputProps={{
// //                 startAdornment: (
// //                   <InputAdornment position="start">
// //                     <PersonIcon sx={{ color: errors.UserName ? colors.error : colors.primary }} />
// //                   </InputAdornment>
// //                 ),
// //               }}
// //             />
// //             {errors.UserName && (
// //               <FormHelperText error sx={{ mt: -1, mb: 1, mx: 1 }}>
// //                 שדה חובה - יש להזין שם משתמש
// //               </FormHelperText>
// //             )}
// //           </Grid>
          
// //           <Grid item xs={12}>
// //             <FormControl fullWidth variant="outlined" error={errors.sSymbol}>
// //               <InputLabel id="school-symbol-label">סמל מוסד</InputLabel>
// //               <Select
// //                 labelId="school-symbol-label"
// //                 id="school-symbol-select"
// //                 value={sSymbol}
// //                 onChange={handleSymbolChange}
// //                 label="סמל מוסד"
// //                 sx={{
// //                   borderRadius: 2,
// //                   "& .MuiOutlinedInput-notchedOutline": {
// //                     borderColor: errors.sSymbol ? colors.error : "rgba(0, 0, 0, 0.23)",
// //                   },
// //                   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
// //                     borderColor: colors.primary,
// //                   },
// //                   "& .MuiSvgIcon-root": {
// //                     color: errors.sSymbol ? colors.error : colors.primary,
// //                   }
// //                 }}
// //                 startAdornment={
// //                   <InputAdornment position="start">
// //                     <SchoolIcon sx={{ color: errors.sSymbol ? colors.error : colors.primary }} />
// //                   </InputAdornment>
// //                 }
// //               >
// //                 {schools?.map((s) => (
// //                   <MenuItem key={s.schoolSymbol} value={s.schoolSymbol}>
// //                     {s.schoolSymbol} - {s.schoolName || ''}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //               {errors.sSymbol && (
// //                 <FormHelperText error sx={{ mx: 1 }}>
// //                   שדה חובה - יש לבחור סמל מוסד
// //                 </FormHelperText>
// //               )}
// //             </FormControl>
// //           </Grid>
          
// //           <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
// //             <FormButton
// //               variant="contained"
// //               onClick={addUser}
// //               disabled={loading}
// //               startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
// //               sx={{
// //                 bgcolor: colors.primary,
// //                 color: "white",
// //                 "&:hover": {
// //                   bgcolor: colors.primaryDark,
// //                 },
// //               }}
// //             >
// //               {loading ? "שומר..." : "לאישור"}
// //             </FormButton>
// //           </Grid>
// //         </Grid>
// //       </Box>
// //     </Dialog>
// //   </>
// // }

// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
//   Box, Typography, Button, IconButton, TextField, InputAdornment, Tooltip,
//   FormControl, InputLabel, Select, MenuItem, Chip, Avatar, Divider
// } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
// import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
// import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// import { getSchoolBySsymbolThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// import './user.css';

// // Icons
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import PersonIcon from '@mui/icons-material/Person';
// import SchoolIcon from '@mui/icons-material/School';
// import KeyIcon from '@mui/icons-material/Key';
// import ClearIcon from '@mui/icons-material/Clear';

// // Styled components
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//   width: '100%',
//   maxWidth: 1200,
//   margin: '0 auto',
//   borderRadius: 12,
//   boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//   overflow: 'hidden',
//   height: 'auto',
//   maxHeight: '70vh',
// }));

// const StyledTable = styled(Table)(({ theme }) => ({
//   minWidth: 650,
//   '& .MuiTableCell-root': {
//     fontFamily: 'Rubik, sans-serif',
//   },
// }));

// const StyledTableHead = styled(TableHead)(({ theme }) => ({
//   backgroundColor: alpha('#00796b', 0.08),
//   '& .MuiTableCell-head': {
//     fontWeight: 700,
//     color: '#00796b',
//     fontSize: '0.95rem',
//     padding: '16px',
//     position: 'sticky',
//     top: 0,
//     zIndex: 10,
//     backgroundColor: alpha('#00796b', 0.08),
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: alpha('#f5f5f5', 0.5),
//   },
//   '&:hover': {
//     backgroundColor: alpha('#00796b', 0.04),
//     transition: 'background-color 0.2s ease',
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const StyledSearchField = styled(TextField)(({ theme }) => ({
//   width: '100%',
//   maxWidth: 400,
//   '& .MuiOutlinedInput-root': {
//     borderRadius: 30,
//     backgroundColor: alpha('#ffffff', 0.9),
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#00796b',
//     },
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#00796b',
//     },
//   },
//   '& .MuiInputLabel-root.Mui-focused': {
//     color: '#00796b',
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   borderRadius: 30,
//   padding: '8px 24px',
//   fontWeight: 600,
//   textTransform: 'none',
//   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//   transition: 'all 0.3s ease',
//   fontFamily: 'Rubik, sans-serif',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
//   },
// }));

// const StyledFilterChip = styled(Chip)(({ theme }) => ({
//   margin: '0 8px 8px 0',
//   borderRadius: 16,
//   fontWeight: 500,
//   '& .MuiChip-deleteIcon': {
//     color: alpha('#000', 0.5),
//     '&:hover': {
//       color: '#f44336',
//     },
//   },
// }));

// export const User = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   // Redux state
//   const userFromServer = useSelector(s => s.user.allUsers);
//   const users = [...userFromServer];
//   const currUser = useSelector(s => s.user.currUser);
//   const schools = useSelector(s => s.school.allSchools);
  
//   // Local state
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('');
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [schoolFilter, setSchoolFilter] = useState('');
//   const [schoolNames, setSchoolNames] = useState({});
  
//   // Fetch data
//   const getData = async () => {
//     await dispatch(allUsersThunk());
//   };
  
//   const getSchools = async () => {
//     await dispatch(allSchoolsThunk());
//   };
  
//   const getSchoolName = async (symbol) => {
//     if (!schoolNames[symbol]) {
//       try {
//         const response = await dispatch(getSchoolBySsymbolThunk(symbol)).unwrap();
//         if (response && response.schoolName) {
//           setSchoolNames(prev => ({
//             ...prev,
//             [symbol]: response.schoolName
//           }));
//         }
//       } catch (error) {
//         console.error("Error fetching school name:", error);
//       }
//     }
//   };
  
//   // Handlers
//   const handleSort = (field) => {
//     if (sortBy === field) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortBy(field);
//       setSortDirection('asc');
//     }
//   };
  
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };
  
//   const handleSchoolFilter = (e) => {
//     setSchoolFilter(e.target.value);
//   };
  
//   const clearFilters = () => {
//     setSearchTerm('');
//     setSchoolFilter('');
//     setSortBy('');
//     setSortDirection('asc');
//   };
  
//   const navigateToAddUser = () => {
//     navigate('/addUser');
//   };
  
//   // Filter and sort users
//   const getFilteredAndSortedUsers = () => {
//     let filteredUsers = users.filter(user => {
//       // Filter by current user's school or show all for admin
//       const schoolMatch = 
//       String(user.schoolSymbol) === String(currUser.schoolSymbol) || 
//       Number(currUser.schoolSymbol) === 0;      
//       // Filter by search term
//       const searchMatch = searchTerm === '' || 
//         user.userName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//         user.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.schoolSymbol?.toString().includes(searchTerm);
      
//       // Filter by selected school
//       const schoolFilterMatch = schoolFilter === '' || user.schoolSymbol == schoolFilter;
      
//       return schoolMatch && searchMatch && schoolFilterMatch;
//     });
    
//     // Sort users
//     if (sortBy) {
//       filteredUsers.sort((a, b) => {
//         let valueA, valueB;
        
//         if (sortBy === 'userName') {
//           valueA = a.userName || '';
//           valueB = b.userName || '';
//         } else if (sortBy === 'schoolSymbol') {
//           valueA = a.schoolSymbol || 0;
//           valueB = b.schoolSymbol || 0;
//           // For numeric values
//           return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
//         } else {
//           valueA = a[sortBy] || '';
//           valueB = b[sortBy] || '';
//         }
        
//         // For string values
//         if (sortDirection === 'asc') {
//           return valueA.localeCompare(valueB, 'he');
//         } else {
//           return valueB.localeCompare(valueA, 'he');
//         }
//       });
//     }
    
//     return filteredUsers;
//   };
  
//   // Effects
//   useEffect(() => {
//     getData();
//     getSchools();
//   }, []);
  
//   useEffect(() => {
//     // Fetch school names for all users
//     const uniqueSchoolSymbols = [...new Set(users.map(user => user.schoolSymbol))];
//     uniqueSchoolSymbols.forEach(symbol => {
//       if (symbol) getSchoolName(symbol);
//     });
//   }, [users]);
  
//   const filteredUsers = getFilteredAndSortedUsers();
  
//   // Active filters count for badge
//   const activeFiltersCount = [
//     searchTerm !== '',
//     schoolFilter !== '',
//     sortBy !== ''
//   ].filter(Boolean).length;
  
//   return (
//     <Box sx={{ padding: 3, direction: 'rtl' }}>
//       {/* Header */}
//       <Box sx={{ 
//         display: 'flex', 
//         justifyContent: 'space-between', 
//         alignItems: 'center', 
//         mb: 3,
//         flexWrap: 'wrap',
//         gap: 2
//       }}>
//         <Typography 
//           variant="h4" 
//           component="h1" 
//           sx={{ 
//             fontWeight: 800, 
//             color: '#263238',
//             fontFamily: 'Rubik, sans-serif'
//           }}
//         >
//           ניהול משתמשים
//         </Typography>
        
//         {currUser.schoolSymbol === 0 && (
//           <StyledButton
//             variant="contained"
//             color="primary"
//             startIcon={<PersonAddIcon />}
//             onClick={navigateToAddUser}
//             sx={{ 
//               bgcolor: '#00796b',
//               '&:hover': {
//                 bgcolor: '#004c40',
//               }
//             }}
//           >
//             הוספת משתמש
//           </StyledButton>
//         )}
//       </Box>
      
//       {/* Filters */}
//       <Box sx={{ 
//         mb: 3, 
//         p: 2, 
//         borderRadius: 3, 
//         bgcolor: alpha('#f5f5f5', 0.7),
//         boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
//       }}>
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: 2,
//           mb: 2
//         }}>
//           <Typography 
//             variant="h6" 
//             sx={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: 1,
//               fontFamily: 'Rubik, sans-serif',
//               fontWeight: 600,
//               color: '#263238'
//             }}
//           >
//             <FilterListIcon /> סינון וחיפוש
//             {activeFiltersCount > 0 && (
//               <Chip 
//                 size="small" 
//                 label={activeFiltersCount} 
//                 color="primary" 
//                 sx={{ 
//                   bgcolor: '#00796b',
//                   height: 22,
//                   minWidth: 22,
//                   fontWeight: 'bold'
//                 }} 
//               />
//             )}
//           </Typography>
          
//           {activeFiltersCount > 0 && (
//             <Button 
//               size="small" 
//               startIcon={<ClearIcon />} 
//               onClick={clearFilters}
//               sx={{ 
//                 color: '#f44336',
//                 '&:hover': { bgcolor: alpha('#f44336', 0.08) }
//               }}
//             >
//               נקה סינון
//             </Button>
//           )}
//         </Box>
        
//         <Box sx={{ 
//           display: 'flex', 
//           flexWrap: 'wrap', 
//           gap: 2, 
//           alignItems: 'center'
//         }}>
//           <StyledSearchField
//             size="small"
//             label="חיפוש משתמש"
//             variant="outlined"
//             value={searchTerm}
//             onChange={handleSearch}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon sx={{ color: '#00796b' }} />
//                 </InputAdornment>
//               ),
//               endAdornment: searchTerm && (
//                 <InputAdornment position="end">
//                   <IconButton
//                     size="small"
//                     onClick={() => setSearchTerm('')}
//                     edge="end"
//                   >
//                     <ClearIcon fontSize="small" />
//                   </IconButton>
//                 </InputAdornment>
//               )
//             }}
//           />
          
//           {currUser.schoolSymbol === 0 && (
//             <FormControl 
//               variant="outlined" 
//               size="small" 
//               sx={{ 
//                 minWidth: 200,
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: 2,
//                   '&:hover .MuiOutlinedInput-notchedOutline': {
//                     borderColor: '#00796b',
//                   },
//                   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//                     borderColor: '#00796b',
//                   },
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: '#00796b',
//                 },
//               }}
//             >
//               <InputLabel id="school-filter-label">סינון לפי מוסד</InputLabel>
//               <Select
//                 labelId="school-filter-label"
//                 id="school-filter"
//                 value={schoolFilter}
//                 onChange={handleSchoolFilter}
//                 label="סינון לפי מוסד"
//                 startAdornment={<SchoolIcon sx={{ mr: 1, color: '#00796b' }} />}
//               >
//                 <MenuItem value="">
//                   <em>כל המוסדות</em>
//                 </MenuItem>
//                 {schools.map((school) => (
//                   <MenuItem key={school.schoolSymbol} value={school.schoolSymbol}>
//                     {school.schoolName} ({school.schoolSymbol})
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}
//         </Box>
        
//                 {/* Active filters display */}
//                 {activeFiltersCount > 0 && (
//           <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
//             <Typography variant="body2" sx={{ color: '#546e7a', mr: 1 }}>
//               מסננים פעילים:
//             </Typography>
            
//             {searchTerm && (
//               <StyledFilterChip
//                 label={`חיפוש: ${searchTerm}`}
//                 onDelete={() => setSearchTerm('')}
//                 size="small"
//                 sx={{ bgcolor: alpha('#00796b', 0.1) }}
//               />
//             )}
            
//             {schoolFilter && (
//               <StyledFilterChip
//                 label={`מוסד: ${schools.find(s => s.schoolSymbol == schoolFilter)?.schoolName || schoolFilter}`}
//                 onDelete={() => setSchoolFilter('')}
//                 size="small"
//                 sx={{ bgcolor: alpha('#00796b', 0.1) }}
//               />
//             )}
            
//             {sortBy && (
//               <StyledFilterChip
//                 label={`מיון לפי: ${
//                   sortBy === 'userName' ? 'שם משתמש' : 
//                   sortBy === 'id' ? 'ססמה' : 
//                   'סמל מוסד'
//                 } (${sortDirection === 'asc' ? 'עולה' : 'יורד'})`}
//                 onDelete={() => {setSortBy(''); setSortDirection('asc');}}
//                 size="small"
//                 sx={{ bgcolor: alpha('#00796b', 0.1) }}
//               />
//             )}
//           </Box>
//         )}
//       </Box>
      
//       {/* Users count */}
//       <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//         <Typography variant="body2" sx={{ color: '#546e7a', fontWeight: 500 }}>
//           סה"כ {filteredUsers.length} משתמשים {searchTerm || schoolFilter ? 'מסוננים' : ''}
//         </Typography>
//       </Box>
      
//       {/* Table */}
//       <StyledTableContainer component={Paper}>
//         <StyledTable stickyHeader aria-label="users table">
//           <StyledTableHead>
//             <TableRow>
//               <TableCell align="right">
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                   <Typography sx={{ fontWeight: 'bold' }}>שם משתמש</Typography>
//                   <Tooltip title="מיון לפי שם משתמש">
//                     <IconButton size="small" onClick={() => handleSort('userName')}>
//                       <SortIcon 
//                         fontSize="small" 
//                         color={sortBy === 'userName' ? 'primary' : 'action'}
//                         sx={{ 
//                           transform: sortBy === 'userName' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none',
//                           transition: 'transform 0.3s ease'
//                         }}
//                       />
//                     </IconButton>
//                   </Tooltip>
//                 </Box>
//               </TableCell>
              
//               <TableCell>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Typography sx={{ fontWeight: 'bold' }}>ססמת משתמש</Typography>
//                   <Tooltip title="מיון לפי ססמה">
//                     <IconButton size="small" onClick={() => handleSort('id')}>
//                       <SortIcon 
//                         fontSize="small" 
//                         color={sortBy === 'id' ? 'primary' : 'action'}
//                         sx={{ 
//                           transform: sortBy === 'id' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none',
//                           transition: 'transform 0.3s ease'
//                         }}
//                       />
//                     </IconButton>
//                   </Tooltip>
//                 </Box>
//               </TableCell>
              
//               <TableCell align="right">
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                   <Typography sx={{ fontWeight: 'bold' }}>שם מוסד</Typography>
//                   {currUser.schoolSymbol === 0 && (
//                     <Tooltip title="מיון לפי מוסד">
//                       <IconButton size="small" onClick={() => handleSort('schoolSymbol')}>
//                         <SortIcon 
//                           fontSize="small" 
//                           color={sortBy === 'schoolSymbol' ? 'primary' : 'action'}
//                           sx={{ 
//                             transform: sortBy === 'schoolSymbol' && sortDirection === 'desc' ? 'rotate(180deg)' : 'none',
//                             transition: 'transform 0.3s ease'
//                           }}
//                         />
//                       </IconButton>
//                     </Tooltip>
//                   )}
//                 </Box>
//               </TableCell>
//             </TableRow>
//           </StyledTableHead>
          
//           <TableBody>
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user) => (
//                 <StyledTableRow key={user.id}>
//                   <TableCell align="right">
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                       <Typography>{user.userName}</Typography>
//                       <Avatar 
//                         sx={{ 
//                           width: 32, 
//                           height: 32, 
//                           bgcolor: alpha('#00796b', 0.15), 
//                           color: '#00796b',
//                           mr: 1
//                         }}
//                       >
//                         <PersonIcon fontSize="small" />
//                       </Avatar>
//                     </Box>
//                   </TableCell>
                  
//                   <TableCell>
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Avatar 
//                         sx={{ 
//                           width: 32, 
//                           height: 32, 
//                           bgcolor: alpha('#ff5722', 0.15), 
//                           color: '#ff5722',
//                           mr: 1
//                         }}
//                       >
//                         <KeyIcon fontSize="small" />
//                       </Avatar>
//                       <Typography>{user.id}</Typography>
//                     </Box>
//                   </TableCell>
                  
//                   <TableCell align="right">
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//                       <Chip
//                         label={schoolNames[user.schoolSymbol] || user.schoolSymbol}
//                         size="small"
//                         icon={<SchoolIcon />}
//                         sx={{
//                           bgcolor: alpha('#00796b', 0.1),
//                           color: '#00796b',
//                           fontWeight: 500,
//                           '& .MuiChip-icon': {
//                             color: '#00796b',
//                           },
//                         }}
//                       />
//                     </Box>
//                   </TableCell>
//                 </StyledTableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
//                     <SearchIcon sx={{ fontSize: 48, color: alpha('#000', 0.2) }} />
//                     <Typography variant="h6" sx={{ color: alpha('#000', 0.5), fontWeight: 500 }}>
//                       לא נמצאו משתמשים
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: alpha('#000', 0.4) }}>
//                       נסה לשנות את הגדרות הסינון או החיפוש
//                     </Typography>
//                     {(searchTerm || schoolFilter) && (
//                       <Button 
//                         variant="outlined" 
//                         size="small" 
//                         onClick={clearFilters}
//                         sx={{ mt: 1 }}
//                       >
//                         נקה סינון
//                       </Button>
//                     )}
//                   </Box>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </StyledTable>
//       </StyledTableContainer>
//     </Box>
//   );
// };

// // export default User;


import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
  Tooltip,
  TablePagination,
  Divider,
  Alert,
  Snackbar,
  CircularProgress,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { allUsersThunk } from '../../Redux/Slices/Users/getUsersThunk';
import { addUserThunk } from '../../Redux/Slices/Users/usersThunk';
import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';

// Icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import KeyIcon from '@mui/icons-material/Key';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import InfoIcon from '@mui/icons-material/Info';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import './user.css';

export const User = () => {
  // Redux state
  const userFromServer = useSelector(s => s.user.allUsers);
  const users = [...userFromServer];
  const currUser = useSelector(s => s.user.currUser);
  const schools = useSelector(s => s.school.allSchools);
  
  // Local state
  const [showInput, setShowInput] = useState(false);
  const [id, setId] = useState('');
  const [UserName, setUserName] = useState('');
  const [sSymbol, setSsymbol] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [schoolFilter, setSchoolFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({
    id: false,
    UserName: false,
    sSymbol: false
  });
  
  const dispatch = useDispatch();

  // Fetch data
  const getData = async () => {
    await dispatch(allUsersThunk());
  };
  
  const getSchools = async () => {
    await dispatch(allSchoolsThunk());
  };

  // Handlers
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };
  
  const handleSchoolFilter = (e) => {
    setSchoolFilter(e.target.value);
    setPage(0);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSchoolFilter('');
    setSortBy('');
    setSortDirection('asc');
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {
      id: !id.trim(),
      UserName: !UserName.trim(),
      sSymbol: !sSymbol
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };

  // Add user
  const addUser = async () => {
    if (!validateForm()) {
      return;
    }
    
    try {
      setLoading(true);
      await dispatch(addUserThunk({ id: id, UserName: UserName, schoolSymbol: sSymbol }));
      
      setId('');
      setUserName('');
      setSsymbol('');
      setShowInput(false);
      getData();
      
      setSnackbar({
        open: true,
        message: 'המשתמש נוסף בהצלחה',
        severity: 'success'
      });
    } catch (error) {
      console.error("Error adding user:", error);
      setSnackbar({
        open: true,
        message: 'שגיאה בהוספת המשתמש',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort users
  const getFilteredAndSortedUsers = () => {
    let filteredUsers = users.filter(user => {
      // Filter by current user's school or show all for admin
      const schoolMatch = 
        String(user.schoolSymbol) === String(currUser.schoolSymbol) || 
        Number(currUser.schoolSymbol) === 0;
      
      // Filter by search term
      const searchMatch = searchTerm === '' || 
        (user.userName && user.userName.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (user.id && String(user.id).toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.schoolSymbol && String(user.schoolSymbol).includes(searchTerm));
      
      // Filter by selected school
      const schoolFilterMatch = schoolFilter === '' || String(user.schoolSymbol) === String(schoolFilter);
      
      return schoolMatch && searchMatch && schoolFilterMatch;
    });
    
    // Sort users
    if (sortBy) {
      filteredUsers.sort((a, b) => {
        let valueA, valueB;
        
        if (sortBy === 'userName') {
          valueA = a.userName || '';
          valueB = b.userName || '';
        } else if (sortBy === 'id') {
          valueA = String(a.id || '');
          valueB = String(b.id || '');
        } else if (sortBy === 'schoolSymbol') {
          valueA = Number(a.schoolSymbol || 0);
          valueB = Number(b.schoolSymbol || 0);
          // For numeric values
          return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        } else {
          valueA = a[sortBy] || '';
          valueB = b[sortBy] || '';
        }
        
        // For string values
        if (sortDirection === 'asc') {
          return String(valueA).localeCompare(String(valueB), 'he');
        } else {
          return String(valueB).localeCompare(String(valueA), 'he');
        }
      });
    }
    
    return filteredUsers;
  };

  // Effects
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      getSchools();
    }
  }, [users]);

  const filteredUsers = getFilteredAndSortedUsers();
  
  // Pagination
  const displayedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  // Active filters count for badge
  const activeFiltersCount = [
    searchTerm !== '',
    schoolFilter !== '',
    sortBy !== ''
  ].filter(Boolean).length;

  // Get school name by symbol
  const getSchoolName = (symbol) => {
    const school = schools.find(s => String(s.schoolSymbol) === String(symbol));
    return school ? school.schoolName : symbol;
  };

  return (
    <Box className="user-page" sx={{ padding: 3, direction: "rtl" }}>
      <Container maxWidth="lg" className="user-container">
        {/* כותרת ופעולות */}
        <Paper className="user-header-paper" elevation={2}>
          <Box className="user-header" sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" className="user-title" sx={{ fontWeight: 'bold' }}>
              ניהול משתמשים
            </Typography>
            {currUser.schoolSymbol === 0 && (
              <Button 
                variant="contained" 
                className="add-user-button"
                startIcon={<PersonAddIcon />}
                onClick={() => { setShowInput(true); getSchools(); }}
                sx={{ 
                  bgcolor: '#00796b',
                  '&:hover': { bgcolor: '#004c40' },
                  borderRadius: 8,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  fontWeight: 'bold'
                }}
              >
                הוספת משתמש חדש
              </Button>
            )}
          </Box>
        </Paper>
        
        {/* אזור חיפוש וסינון */}
        <Paper className="user-filters-paper" elevation={2} sx={{ mt: 3, borderRadius: 2, overflow: 'hidden' }}>
          <Box className="user-filters-header" sx={{ p: 2, bgcolor: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography 
              variant="h6" 
              className="user-filters-title"
              sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem', fontWeight: 'bold' }}
            >
              <FilterListIcon sx={{ mr: 1 }} /> סינון וחיפוש
              {activeFiltersCount > 0 && (
                <Chip 
                  size="small" 
                  label={activeFiltersCount} 
                  color="primary" 
                  sx={{ ml: 1, bgcolor: '#00796b', height: 22, minWidth: 22 }}
                /> 
              )}
            </Typography>
            
            {activeFiltersCount > 0 && (
              <Button 
                size="small" 
                startIcon={<ClearIcon />} 
                onClick={clearFilters}
                sx={{ color: '#546e7a' }}
              >
                נקה סינון
              </Button>
            )}
          </Box>
          
          <Divider />
          
          <Box className="user-filters" sx={{ p: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              placeholder="חיפוש משתמש..."
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearch}
              className="user-search"
              sx={{ 
                flexGrow: 1, 
                maxWidth: 500,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 4
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setSearchTerm('')}
                      edge="end"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            
            {currUser.schoolSymbol === 0 && (
              <FormControl 
                variant="outlined" 
                size="small" 
                sx={{ minWidth: 200 }}
              >
                <InputLabel id="school-filter-label">סינון לפי מוסד</InputLabel>
                <Select
                  labelId="school-filter-label"
                  id="school-filter"
                  value={schoolFilter}
                  onChange={handleSchoolFilter}
                  label="סינון לפי מוסד"
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="">
                    <em>כל המוסדות</em>
                  </MenuItem>
                  {schools.map((school) => (
                    <MenuItem key={school.schoolSymbol} value={school.schoolSymbol}>
                      {school.schoolName} ({school.schoolSymbol})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Box>
          
          {/* Active filters display */}
          {activeFiltersCount > 0 && (
            <Box sx={{ px: 2, pb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#546e7a', mr: 1 }}>
                מסננים פעילים:
              </Typography>
              
              {searchTerm && (
                <Chip
                  label={`חיפוש: ${searchTerm}`}
                  onDelete={() => setSearchTerm('')}
                  size="small"
                  sx={{ bgcolor: 'rgba(0, 121, 107, 0.1)', color: '#00796b' }}
                />
              )}
              
              {schoolFilter && (
                <Chip
                  label={`מוסד: ${getSchoolName(schoolFilter)}`}
                  onDelete={() => setSchoolFilter('')}
                  size="small"
                  sx={{ bgcolor: 'rgba(0, 121, 107, 0.1)', color: '#00796b' }}
                />
              )}
              
              {sortBy && (
                <Chip
                  label={`מיון לפי: ${
                    sortBy === 'userName' ? 'שם משתמש' : 
                    sortBy === 'id' ? 'מזהה' : 
                    sortBy === 'schoolSymbol' ? 'מוסד' : sortBy
                  } (${sortDirection === 'asc' ? 'עולה' : 'יורד'})`}
                  onDelete={() => { setSortBy(''); setSortDirection('asc'); }}
                  size="small"
                  sx={{ bgcolor: 'rgba(0, 121, 107, 0.1)', color: '#00796b' }}
                />
              )}
            </Box>
          )}
        </Paper>
        
        {/* סיכום נתונים */}
        <Paper 
          elevation={1} 
          sx={{ 
            mt: 3, 
            p: 3, 
            borderRadius: 2, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            bgcolor: 'rgba(0, 121, 107, 0.05)',
            border: '1px solid rgba(0, 121, 107, 0.1)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar 
              sx={{ 
                bgcolor: 'rgba(0, 121, 107, 0.2)', 
                color: '#00796b', 
                width: 56, 
                height: 56, 
                mr: 2 
              }}
            >
              <PersonIcon sx={{ fontSize: 30 }} />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#263238' }}>
                סך המשתמשים במערכת
              </Typography>
              <Typography variant="body2" sx={{ color: '#546e7a' }}>
                מציג {filteredUsers.length} משתמשים מתוך {
                  currUser.schoolSymbol === 0 
                    ? users.length 
                    : users.filter(u => String(u.schoolSymbol) === String(currUser.schoolSymbol)).length
                } משתמשים
              </Typography>
            </Box>
          </Box>
          <Chip
            label={`${filteredUsers.length} משתמשים`}
            sx={{ 
              bgcolor: 'rgba(0, 121, 107, 0.1)', 
              color: '#00796b', 
              fontWeight: 'bold',
              border: '1px solid rgba(0, 121, 107, 0.3)',
              px: 2,
              py: 2.5,
              fontSize: '0.9rem'
            }}
          />
        </Paper>
        
        {/* טופס הוספת משתמש */}
        {showInput && (
          <Paper 
            elevation={2} 
            sx={{ 
              mt: 3, 
              borderRadius: 2, 
              overflow: 'hidden' 
            }}
          >
            <Box 
              sx={{ 
                p: 2, 
                bgcolor: '#00796b', 
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                <PersonAddIcon sx={{ mr: 1 }} />
                הוספת משתמש חדש
              </Typography>
              <IconButton 
                onClick={() => setShowInput(false)}
                sx={{ color: 'white' }}
              >
                <ClearIcon />
              </IconButton>
            </Box>
            
            <Box sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="מזהה משתמש"
                    variant="outlined"
                    fullWidth
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                      if (e.target.value) setErrors(prev => ({ ...prev, id: false }));
                    }}
                    error={errors.id}
                    helperText={errors.id ? "שדה חובה" : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00796b',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00796b',
                      },
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <TextField
                    label="שם משתמש"
                    variant="outlined"
                    fullWidth
                    value={UserName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                      if (e.target.value) setErrors(prev => ({ ...prev, UserName: false }));
                    }}
                    error={errors.UserName}
                    helperText={errors.UserName ? "שדה חובה" : ""}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00796b',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00796b',
                      },
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <FormControl 
                    fullWidth 
                    variant="outlined" 
                    error={errors.sSymbol}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00796b',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#00796b',
                      },
                    }}
                  >
                    <InputLabel id="school-select-label">מוסד</InputLabel>
                    <Select
                      labelId="school-select-label"
                      value={sSymbol}
                      onChange={(e) => {
                        setSsymbol(e.target.value);
                        if (e.target.value) setErrors(prev => ({ ...prev, sSymbol: false }));
                      }}
                      label="מוסד"
                      startAdornment={<SchoolIcon sx={{ mr: 1, color: '#757575' }} />}
                    >
                      <MenuItem value="">
                        <em>בחר מוסד</em>
                      </MenuItem>
                      {schools.map((school) => (
                        <MenuItem key={school.schoolSymbol} value={school.schoolSymbol}>
                          {school.schoolName} ({school.schoolSymbol})
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.sSymbol && (
                      <Typography variant="caption" color="error" sx={{ mt: 0.5, mr: 1.5 }}>
                        יש לבחור מוסד
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowInput(false)}
                  startIcon={<ArrowBackIcon />}
                  sx={{ 
                    borderRadius: 8,
                    color: '#546e7a',
                    borderColor: '#546e7a',
                    '&:hover': {
                      borderColor: '#263238',
                      bgcolor: 'rgba(84, 110, 122, 0.1)',
                    }
                  }}
                >
                  ביטול
                </Button>
                
                <Button
                  variant="contained"
                  onClick={addUser}
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                  sx={{ 
                    borderRadius: 8,
                    bgcolor: '#00796b',
                    '&:hover': {
                      bgcolor: '#004c40',
                    },
                    '&.Mui-disabled': {
                      bgcolor: 'rgba(0, 121, 107, 0.5)',
                      color: 'white',
                    }
                  }}
                >
                  {loading ? "מוסיף..." : "הוסף משתמש"}
                </Button>
              </Box>
            </Box>
          </Paper>
        )}
        
        {/* טבלת משתמשים */}
        {displayedUsers.length > 0 ? (
          <Paper elevation={2} sx={{ mt: 3, borderRadius: 2, overflow: 'hidden' }}>
            <TableContainer>
              <Table aria-label="טבלת משתמשים">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                    <TableCell 
                      align="right" 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: '#263238',
                        py: 2
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'right',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleSort('id')}
                      >
                        מזהה משתמש
                        {sortBy === 'id' && (
                          <Box component="span" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                    <TableCell 
                      align="right" 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: '#263238',
                        py: 2
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'right',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleSort('userName')}
                      >
                        שם משתמש
                        {sortBy === 'userName' && (
                          <Box component="span" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                    <TableCell 
                      align="right" 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: '#263238',
                        py: 2
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'right',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleSort('schoolSymbol')}
                      >
                        מוסד
                        {sortBy === 'schoolSymbol' && (
                          <Box component="span" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                            {sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedUsers.map((user) => (
                    <TableRow 
                      key={user.id} 
                      sx={{ 
                        '&:hover': { 
                          bgcolor: 'rgba(0, 121, 107, 0.05)' 
                        },
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          <KeyIcon sx={{ mr: 1, color: '#546e7a' }} />
                          <Typography sx={{ fontWeight: 500 }}>
                            {user.id}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          <Avatar 
                            sx={{ 
                              mr: 2, 
                              bgcolor: '#00796b',
                              width: 40,
                              height: 40,
                              fontSize: '1.2rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {user.userName?.charAt(0) || 'U'}
                          </Avatar>
                          <Typography sx={{ fontWeight: 600 }}>
                            {user.userName}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Chip
                          icon={<SchoolIcon />}
                          label={getSchoolName(user.schoolSymbol)}
                          variant="outlined"
                          sx={{ 
                            borderColor: '#00796b',
                            color: '#00796b'
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <TablePagination
              component="div"
              count={filteredUsers.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="שורות בעמוד:"
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
              rowsPerPageOptions={[5, 10, 25, 50]}
              sx={{
                borderTop: '1px solid #e0e0e0',
                '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
                  fontWeight: 500,
                },
              }}
            />
          </Paper>
        ) : (
          <Paper 
            elevation={2} 
            sx={{ 
              mt: 3, 
              p: 4, 
              borderRadius: 2, 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 300
            }}
          >
            <PersonIcon sx={{ fontSize: 60, color: '#546e7a', opacity: 0.5, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#263238', mb: 1 }}>
              לא נמצאו משתמשים
            </Typography>
            <Typography variant="body2" sx={{ color: '#546e7a', mb: 3, maxWidth: 500 }}>
              {searchTerm || schoolFilter ? 
                'לא נמצאו משתמשים התואמים את החיפוש שלך. נסה לשנות את הסינון או לנקות את החיפוש.' : 
                'לא נמצאו משתמשים במערכת. אם יש לך הרשאות מתאימות, תוכל להוסיף משתמשים חדשים.'
              }
            </Typography>
            
            {(searchTerm || schoolFilter) ? (
              <Button
                variant="outlined"
                startIcon={<ClearIcon />}
                onClick={clearFilters}
                sx={{ 
                  borderRadius: 8,
                  px: 3,
                  py: 1,
                  color: '#546e7a',
                  borderColor: '#546e7a',
                  '&:hover': {
                    borderColor: '#263238',
                    bgcolor: 'rgba(84, 110, 122, 0.1)',
                  }
                }}
              >
                נקה סינון
              </Button>
            ) : currUser.schoolSymbol === 0 && (
              <Button
                variant="contained"
                startIcon={<PersonAddIcon />}
                onClick={() => { setShowInput(true); getSchools(); }}
                sx={{ 
                  borderRadius: 8,
                  px: 3,
                  py: 1,
                  bgcolor: '#00796b',
                  '&:hover': {
                    bgcolor: '#004c40',
                  },
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
                    bgcolor: '#004c40',
                  },
                }}
              >
                הוסף משתמש חדש
              </Button>
            )}
          </Paper>
        )}
        
        {/* כרטיסיית מידע */}
        <Paper 
          elevation={0} 
          sx={{ 
            mt: 3, 
            p: 3, 
            borderRadius: 2, 
            bgcolor: 'rgba(0, 121, 107, 0.05)',
            border: '1px dashed #00796b'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <InfoIcon sx={{ color: '#00796b', mr: 2, fontSize: 24 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#263238', mb: 1 }}>
                מידע על ניהול משתמשים
              </Typography>
              <Typography variant="body2" sx={{ color: '#546e7a', mb: 1 }}>
                • רק מנהל מערכת יכול להוסיף משתמשים חדשים למערכת.
              </Typography>
              <Typography variant="body2" sx={{ color: '#546e7a', mb: 1 }}>
                • מנהל מערכת יכול לראות את כל המשתמשים בכל המוסדות.
              </Typography>
              <Typography variant="body2" sx={{ color: '#546e7a' }}>
                • משתמש רגיל יכול לראות רק את המשתמשים במוסד שלו.
              </Typography>
            </Box>
          </Box>
        </Paper>
        
        {/* Snackbar */}
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
            sx={{ width: '100%', borderRadius: 2 }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};









              
