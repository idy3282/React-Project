// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import PropTypes from 'prop-types';
// import useAutocomplete from '@mui/material/useAutocomplete';
// // import CheckIcon from '@mui/icons-material/Check';
// // import CloseIcon from '@mui/icons-material/Close';
// import { styled } from '@mui/material/styles';
// import { autocompleteClasses } from '@mui/material/Autocomplete';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { getDebtOfSchool } from '../../Redux/Slices/Schools/getSchoolThunk';
// import { getTotalSumOfSchool } from '../../Redux/Slices/Schools/getSchoolThunk';
// import { Button } from '@mui/material';
// import { AddSchool } from './addSchool';

// // export const S = (prop) => {
// //   const { school } = prop;
// //   const [open, setOpen] = React.useState(false);
  


// //   //const exp = useSelector(s => s.school.exp)


// //   console.log("school  --", school);


 

// //   return (
// //     <React.Fragment>
// //       <TableRow sx={{ '& > *': { borderBottom: 'unset' }, height: "auto" }}>
// //         <TableCell>
// //           <IconButton
// //             aria-label="expand row"
// //             size="small"
// //             // show data
// //             onClick={() => { setOpen(!open) }}
// //           >
// //             {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}🔹
// //           </IconButton>
// //         </TableCell>
// //         <TableCell component="th" scope="row"></TableCell>
// //         <TableCell align="right">{school.schoolSymbol}</TableCell>
// //         <TableCell align="right">{school.schoolName}</TableCell>
// //         <TableCell align="right">{school.budget}</TableCell>
// //         {/* <TableCell align="right">{schools.protein}</TableCell> */}
// //       </TableRow>
// //       <TableRow>
// //         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
// //           <Collapse in={open} timeout="auto" unmountOnExit>
// //             {/* טבלה שנפתחת בלחיצה */}
// //             <Box sx={{ margin: 1 }}>
// //               <Typography variant="h6" gutterBottom component="div">
// //                 הוצאות בית ספר
// //               </Typography>

// //               <Table size="small" aria-label="purchases">
// //                 <TableHead>
// //                   <TableRow>
// //                     <TableCell>תאריך הזמנה </TableCell>
// //                     <TableCell>סכום הוצאה</TableCell>
// //                     <TableCell>קטגוריה</TableCell>
// //                     <TableCell align="right">בית ספר</TableCell>
// //                     <TableCell align="right">שם  מבצע ההזמנה</TableCell>
// //                     <TableCell align="right">קוד ספק</TableCell>
// //                     <TableCell>האם אושר?</TableCell>


// //                   </TableRow>
// //                 </TableHead>
// //                 <TableBody>
// //                   {school.expenditures.map((exp) => (
// //                     <TableRow >
// //                       <TableCell> {exp.date}</TableCell>
// //                       <TableCell component="th" scope="row">
// //                         {exp.expenditureSum}
// //                       </TableCell>


// //                       <TableCell> {exp.categorId}</TableCell>
// //                       <TableCell> {exp.schoolSymbol}</TableCell>
// //                       <TableCell> {exp.ordererName}</TableCell>
// //                       <TableCell>{exp?.supplierNum}</TableCell>
// //                       <TableCell align="right">{exp?.isAccepted}</TableCell>
// //                       {/* <TableCell align="right">
// //                         {Math.round(historyRow.amount * exp.price * 100) / 100}
// //                       </TableCell> */}
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </Box>
// //           </Collapse>
// //         </TableCell>
// //       </TableRow>
// //     </React.Fragment>
// //   );
// // }

// // ==================




// export  function CollapsibleTable() {

  
//   const schools = useSelector(s => s.school.allSchools)
//   const dispatch = useDispatch()

//   const getSchoolDebt = async (name) => {
//     debugger
//     await dispatch(getDebtOfSchool(name))
//   }

//   const getSchoolTotalSum = async (name) => {
//     debugger
//     await dispatch(getTotalSumOfSchool(name))
//   }

  

//   const getData = async () => {
//     await dispatch(allSchoolsThunk())
//   }
//   React.useEffect(() => {
//     getData()
//   }, [])
//   return <>
//     {/* <TableContainer component={Paper}>
//       <Table aria-label="collapsible table" sx={{ width: '40%' }}>
//         <TableHead >
//           <TableRow style={{ color: 'rgba(29, 77, 132, 0.987)', border: "1px blue solid" }}>

//             <TableCell sx={{ width: '200px' }} >שם מוסד</TableCell>
//             <TableCell sx={{ width: '500px' }} >סמל מוסד</TableCell>
//             <TableCell sx={{ width: '500px' }}>תקציב כולל</TableCell>
           
//           </TableRow>
//         </TableHead>
//         <TableBody>
          
//           {schools.map((row) => (
            
//             <S school={row} />)
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer> */}



//     {/* {showInput &&
//   <div>
//     <Input value={name} onChange={(n) => setName(n.target.value)} placeholder='שם מוסד' />
//     <button onClick={() => getSchoolDebt(name)}> לאישור</button>
   
//   </div>} */}
//     {/*  */}
//     {/* 
// {showInput2 &&
//   <div>
//     <Input value={name} onChange={(n) => setName(n.target.value)} placeholder='שם מוסד' />
//     <button onClick={() => getSchoolTotalSum(name)}> לאישור</button>
    
//   </div>} */}


//     {
//       // <Box sx={{ minWidth: 120 }}>
//       //   <FormControl fullWidth>
//       //     <InputLabel id="demo-simple-select-label">סמל מוסד</InputLabel>
//       //     <Select
//       //       labelId="demo-simple-select-label"
//       //       id="demo-simple-select"
//       //       value={name}
//       //       onChange={(n) => setName(n.target.value)}>
//       //       {schools?.map((s, index) => {
//       //         return <MenuItem value={schools[index].schoolName}>{s.schoolName}</MenuItem>
//       //       })}

//       //     </Select>
//       //   </FormControl>
//       // </Box> 
    
//       // <CustomizedHook/>
//       <CustomizedHook school={schools}/>
//     }

//     {/* {name &&<div>
//       <button onClick={() => { debugger; setShowInput(true)}}>לקבלת חוב</button> 
//       <button onClick={() => { debugger; setShowInput2(true) }}>לקבלת הוצאות מוסד</button></div>
//     } */}

//   </>
// }











// // ===============================================



// //אופציות לבחירה
// const Root = styled('div')(({ theme }) => ({
//   color: 'rgba(0,0,0,0.85)',
//   fontSize: '14px',
//   ...theme.applyStyles('dark', {
//     color: 'rgba(255,255,255,0.65)',
//   }),
// }));
// // input
// const Label = styled('label')`
//   padding: 0 0 4px;
//   line-height: 1.5;
//   display: block;
// `;
// //input
// const InputWrapper = styled('div')(({ theme }) => ({
//   width: '300px',
//   border: '1px solid #d9d9d9',
//   backgroundColor: '#fff',
//   borderRadius: '4px',
//   padding: '1px',
//   display: 'flex',
//   flexWrap: 'wrap',
//   ...theme.applyStyles('dark', {
//     borderColor: '#434343',
//     backgroundColor: '#141414',
//   }),
//   '&:hover': {
//     borderColor: '#40a9ff',
//     ...theme.applyStyles('dark', {
//       borderColor: '#177ddc',
//     }),
//   },
//   '&.focused': {
//     borderColor: '#40a9ff',
//     boxShadow: '0 0 0 2px rgb(24 144 255 / 0.2)',
//     ...theme.applyStyles('dark', {
//       borderColor: '#177ddc',
//     }),
//   },
//   '& input': {
//     backgroundColor: '#fff',
//     color: 'rgba(0,0,0,.85)',
//     height: '30px',
//     boxSizing: 'border-box',
//     padding: '4px 6px',
//     width: '0',
//     minWidth: '30px',
//     flexGrow: 1,
//     border: 0,
//     margin: 0,
//     outline: 0,
//     ...theme.applyStyles('dark', {
//       color: 'rgba(255,255,255,0.65)',
//       backgroundColor: '#141414',
//     }),
//   },
// }));

// function Tag(props) {
//   const { label, onDelete, ...other } = props;
//   return (
//     <div {...other}>
//       <span>{label}</span>
//       {/* <CloseIcon onClick={onDelete} /> */}
//       <span onClick={onDelete} style={{ cursor: 'pointer', marginLeft: '8px' }}>❌</span>
//     </div>
//   );
// }

// Tag.propTypes = {
//   label: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// const StyledTag = styled(Tag)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   height: '24px',
//   margin: '2px',
//   lineHeight: '22px',
//   backgroundColor: '#fafafa',
//   border: `1px solid #e8e8e8`,
//   borderRadius: '2px',
//   boxSizing: 'content-box',
//   padding: '0 4px 0 10px',
//   outline: 0,
//   overflow: 'hidden',
//   ...theme.applyStyles('dark', {
//     backgroundColor: 'rgba(255,255,255,0.08)',
//     borderColor: '#303030',
//   }),
//   '&:focus': {
//     borderColor: '#40a9ff',
//     backgroundColor: '#e6f7ff',
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#003b57',
//       borderColor: '#177ddc',
//     }),
//   },
//   '& span': {
//     overflow: 'hidden',
//     whiteSpace: 'nowrap',
//     textOverflow: 'ellipsis',
//   },
//   '& span:last-child': {
//     overflow: 'visible',
//     cursor: 'pointer',
//     padding: '0 4px',
//   },
// }));

// const Listbox = styled('ul')(({ theme }) => ({
//   width: '300px',
//   margin: '2px 0 0',
//   padding: 0,
//   position: 'absolute',
//   listStyle: 'none',
//   backgroundColor: '#fff',
//   overflow: 'auto',
//   maxHeight: '250px',
//   borderRadius: '4px',
//   boxShadow: '0 2px 8px rgb(0 0 0 / 0.15)',
//   zIndex: 1,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#141414',
//   }),
//   '& li': {
//     padding: '5px 12px',
//     display: 'flex',
//     '& span': {
//       flexGrow: 1,
//     },
//     '& svg': {
//       color: 'transparent',
//     },
//   },
//   "& li[aria-selected='true']": {
//     backgroundColor: '#fafafa',
//     fontWeight: 600,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#2b2b2b',
//     }),
//     '& svg': {
//       color: '#1890ff',
//     },
//   },
//   [`& li.${autocompleteClasses.focused}`]: {
//     backgroundColor: '#e6f7ff',
//     cursor: 'pointer',
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#003b57',
//     }),
//     '& svg': {
//       color: 'currentColor',
//     },
//   },
// }));

// // ================

// // ====================

// //  export const CustomizedHook=(props) =>{
// //   const {school} = props;
// //   const [name, setName] = useState(false);
// //   const [showInput, setShowInput] = useState(false);
// //   const [showInput2, setShowInput2] = useState(false);
// //   const [totalDebt, setTotalDebt] = React.useState(0);

  
// // // const getTotalDebt =()=>{
// // //   value.map(s=>{ s.expenditures.map(e=> setTotalDebt(totalDebt+e.remainToPay))})
// // //  }
// //  const getTotalDebt = () => {
// //   let total = 0;
// //   value.forEach(s => {
// //     s.expenditures.forEach(e => {
// //       total += e.remainToPay;
// //     });
// //   });
// //   setTotalDebt(total);
// // }
// //   const {
// //     getRootProps,
// //     getInputLabelProps,
// //     getInputProps,
// //     getTagProps,
// //     getListboxProps,
// //     getOptionProps,
// //     groupedOptions,
// //     value,
// //     focused,
// //     setAnchorEl,
// //   } = useAutocomplete({
// //     id: 'customized-hook-demo',
// //     // defaultValue: undefined,
// //     multiple: true,
// //     options: school,
// //     getOptionLabel: (option) => option?.schoolName,
// //   });
    

// //   return (
// //     <Root>
// //       <div {...getRootProps()}>
// //         <Label {...getInputLabelProps()}>Customized hook</Label>
// //         <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
// //           {/*המוסדות הנבחרים  */}
// //           {value.map((option, index) => {
// //             console.log(value);
// //             console.log(option.schoolName+"❤❤");
// //             const { key, ...tagProps } = getTagProps({ index });
// //             index>=0?setName(true):setName(false);
// //             return <StyledTag key={key} {...tagProps} label={option?.schoolName} />;
            
// //           })}
// //           <input {...getInputProps()}/>
// //         </InputWrapper>
// //       </div>
// //       {groupedOptions.length > 0 ? (
// //         <Listbox {...getListboxProps()}>
// //           {groupedOptions.map((option, index) => {
// //             const { key, ...optionProps } = getOptionProps({ option, index });
// //             return (
// //               <li key={key} {...optionProps}>
// //                 <span>{option.schoolName}</span>
// //                 {/* <CheckIcon fontSize="small" /> */}
// //               </li>
// //             );
// //           })}
// //         </Listbox>
// //       ) : null}
// //       {name &&<div>
// //       <button onClick={() => { debugger; setShowInput(true)}}>לקבלת חוב</button> 
// //       <button onClick={() => { debugger; setShowInput2(true) }}>לקבלת הוצאות מוסד</button></div>
// //     }
// //     {/* {name && <div style={{ marginTop: '16px', display: 'flex' }}>
// //   <StyledButton primary onClick={() => { setShowInput(true) }}>לקבלת חוב</StyledButton>
// //   <StyledButton onClick={() => { setShowInput2(true) }}>לקבלת הוצאות מוסד</StyledButton>
// // </div>} */}
// //     </Root>
// //   );
// // }
// export const CustomizedHook = (props) => {
//   const { school } = props;
//   const [name, setName] = useState(false);
//   const [showInput, setShowInput] = useState(false);
//   const [showInput2, setShowInput2] = useState(false);
//   const [totalDebt, setTotalDebt] = React.useState(0);

//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getTagProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'customized-hook-demo',
//     multiple: true,
//     options: school || [],
//     getOptionLabel: (option) => option?.schoolName || '',
//   });
  
//   // Use useEffect to update the name state when value changes
//   React.useEffect(() => {
//     setName(value.length > 0);
//   }, [value]);

//   const getTotalDebt = () => {
//     let total = 0;
//     value.forEach(s => {
//       if (s.expenditures) {
//         s.expenditures.forEach(e => {
//           total += e.remainToPay || 0;
//         });
//       }
//     });
//     setTotalDebt(total);
//   }

//   return (
//     <Root>
     
     


     
//       <div {...getRootProps()}>
//         <Label {...getInputLabelProps()}>בחר מוסד</Label>
//         <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//           {value.map((option, index) => {
//             const tagProps = getTagProps({ index });
//             return (
//               <StyledTag 
//                 key={`tag-${index}`} 
//                 {...tagProps} 
//                 label={option?.schoolName || ''} 
//                 onDelete={tagProps.onDelete}
//               />
//             );
//           })}
//           <input {...getInputProps()} />
//         </InputWrapper>
//       </div>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => (
//             <li {...getOptionProps({ option, index })} key={`option-${index}`}>
//               <span>{option.schoolName}</span>
//             </li>
//           ))}
//         </Listbox>
//       ) : null}
      
//       {name && (
//         <div style={{ marginTop: '16px' }}>
//           <button onClick={() => { setShowInput(true); }}>לקבלת חוב</button> 
//           <button onClick={() => { setShowInput2(true); }}>לקבלת הוצאות מוסד</button>
//           <button onClick={getTotalDebt}>חשב סך חובות</button>
//           {totalDebt > 0 && <div>סך החובות: {totalDebt}</div>}
//         </div>
//       )}
//     </Root>
//   );
// }






// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Box, Paper, Typography, Chip, Button, Divider, 
//   Card, CardContent, Grid, IconButton, Tooltip,
//   Dialog, DialogTitle, DialogContent, DialogActions,
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Collapse, CircularProgress, Alert, Tabs, Tab
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import useAutocomplete from '@mui/material/useAutocomplete';
// import { autocompleteClasses } from '@mui/material/Autocomplete';

// // Icons
// import SchoolIcon from '@mui/icons-material/School';
// import MoneyOffIcon from '@mui/icons-material/MoneyOff';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DownloadIcon from '@mui/icons-material/Download';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import RefreshIcon from '@mui/icons-material/Refresh';

// // Redux actions
// import { 
//   allSchoolsThunk, 
//   getDebtOfSchool, 
//   getTotalSumOfSchool 
// } from '../../Redux/Slices/Schools/getSchoolThunk';
// import { AddSchool } from './addSchool';

// // Styled components
// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(3),
//   backgroundColor: '#f5f7fa',
//   borderRadius: theme.shape.borderRadius,
//   minHeight: '85vh',
//   direction: 'rtl'
// }));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius * 2,
//   boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//   backgroundColor: '#fff',
//   overflow: 'hidden'
// }));

// const Header = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: theme.spacing(3)
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   borderRadius: theme.shape.borderRadius * 1.5,
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   transition: 'all 0.2s',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//   }
// }));

// const SchoolChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   padding: theme.spacing(1, 0.5),
//   fontWeight: 500,
//   backgroundColor: theme.palette.primary.light,
//   color: theme.palette.primary.contrastText,
//   '&:hover': {
//     backgroundColor: theme.palette.primary.main,
//   }
// }));

// const ResultCard = styled(Card)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   borderRadius: theme.shape.borderRadius * 1.5,
//   boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
//   overflow: 'hidden',
//   transition: 'all 0.3s',
//   '&:hover': {
//     boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
//   }
// }));

// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//   borderRadius: theme.shape.borderRadius,
//   maxHeight: '400px',
//   '& .MuiTableCell-head': {
//     backgroundColor: theme.palette.primary.light,
//     color: theme.palette.primary.contrastText,
//     fontWeight: 'bold'
//   }
// }));

// // Input components for autocomplete
// const InputWrapper = styled('div')(({ theme }) => ({
//   width: '100%',
//   border: `1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'}`,
//   backgroundColor: theme.palette.mode === 'dark' ? '#141414' : '#fff',
//   borderRadius: theme.shape.borderRadius * 1.5,
//   padding: theme.spacing(1),
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: theme.spacing(0.5),
//   '&:hover': {
//     borderColor: theme.palette.primary.main,
//   },
//   '&.focused': {
//     borderColor: theme.palette.primary.main,
//     boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
//   },
//   '& input': {
//     backgroundColor: 'transparent',
//     color: theme.palette.text.primary,
//     height: '30px',
//     boxSizing: 'border-box',
//     padding: theme.spacing(0.5, 1),
//     width: '0',
//     minWidth: '30px',
//     flexGrow: 1,
//     border: 0,
//     margin: 0,
//     outline: 0,
//   },
// }));

// const StyledTag = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   height: '32px',
//   margin: theme.spacing(0.25),
//   lineHeight: '22px',
//   backgroundColor: theme.palette.primary.light,
//   color: theme.palette.primary.contrastText,
//   borderRadius: theme.shape.borderRadius,
//   padding: theme.spacing(0.5, 1),
//   '& .deleteIcon': {
//     marginLeft: theme.spacing(0.5),
//     cursor: 'pointer',
//     '&:hover': {
//       color: theme.palette.error.light,
//     }
//   }
// }));

// const Listbox = styled('ul')(({ theme }) => ({
//   width: '100%',
//   margin: theme.spacing(0.5, 0, 0),
//   padding: 0,
//   position: 'absolute',
//   listStyle: 'none',
//   backgroundColor: theme.palette.background.paper,
//   overflow: 'auto',
//   maxHeight: '250px',
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//   zIndex: 1,
//   '& li': {
//     padding: theme.spacing(1, 2),
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     }
//   },
//   [`& li.${autocompleteClasses.focused}`]: {
//     backgroundColor: theme.palette.action.selected,
//     cursor: 'pointer',
//   },
// }));

// // Tab panel component
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`school-tabpanel-${index}`}
//       aria-labelledby={`school-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// // Main component
// export const School = () => {
//   const dispatch = useDispatch();
//   const schools = useSelector(s => s.school.allSchools);
//   const loading = useSelector(s => s.school.loading);
//   const error = useSelector(s => s.school.error);
  
//   // States
//   const [selectedSchools, setSelectedSchools] = useState([]);
//   const [showDebtResults, setShowDebtResults] = useState(false);
//   const [showExpenditureResults, setShowExpenditureResults] = useState(false);
//   const [totalDebt, setTotalDebt] = useState(0);
//   const [expenditures, setExpenditures] = useState([]);
//   const [addSchoolDialog, setAddSchoolDialog] = useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const [expandedSchool, setExpandedSchool] = useState(null);

//   // Fetch schools on component mount
//   useEffect(() => {
//     dispatch(allSchoolsThunk());
//   }, [dispatch]);

//   // Autocomplete hook
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'schools-autocomplete',
//     multiple: true,
//     options: schools || [],
//     getOptionLabel: (option) => option?.schoolName || '',
//     onChange: (_, newValue) => {
//       setSelectedSchools(newValue);
//       // Reset results when selection changes
//       setShowDebtResults(false);
//       setShowExpenditureResults(false);
//     }
//   });

//   // Calculate total debt for selected schools
//   const calculateTotalDebt = () => {
//     let total = 0;
//     selectedSchools.forEach(school => {
//       if (school.expenditures) {
//         school.expenditures.forEach(exp => {
//           total += exp.remainToPay || 0;
//         });
//       }
//     });
//     setTotalDebt(total);
//     setShowDebtResults(true);
//     setShowExpenditureResults(false);
//   };

//   // Get expenditures for selected schools
//   const getExpenditures = async () => {
//     const allExpenditures = [];
    
//     for (const school of selectedSchools) {
//       try {
//         // Assuming getTotalSumOfSchool returns expenditure data
//         const result = await dispatch(getTotalSumOfSchool(school.schoolName)).unwrap();
//         if (result && Array.isArray(result)) {
//           allExpenditures.push(...result);
//         } else if (school.expenditures) {
//           allExpenditures.push(...school.expenditures);
//         }
//       } catch (error) {
//         console.error("Error fetching expenditures:", error);
//       }
//     }
    
//     setExpenditures(allExpenditures);
//     setShowExpenditureResults(true);
//     setShowDebtResults(false);
//   };

//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Format currency
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('he-IL', { 
//       style: 'currency', 
//       currency: 'ILS',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     }).format(amount);
//   };

//   // Toggle school details expansion
//   const toggleSchoolExpansion = (schoolSymbol) => {
//     if (expandedSchool === schoolSymbol) {
//       setExpandedSchool(null);
//     } else {
//       setExpandedSchool(schoolSymbol);
//     }
//   };

//   // Export to Excel (placeholder function)
//   const exportToExcel = () => {
//     alert('פונקציונליות ייצוא לאקסל תתווסף בהמשך');
//     // Implementation would go here
//   };

//   // Refresh data
//   const refreshData = () => {
//     dispatch(allSchoolsThunk());
//     setShowDebtResults(false);
//     setShowExpenditureResults(false);
//   };

//   return (
//     <Root>
//       <StyledPaper>
//         <Header>
//           <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
//             <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
//             ניהול מוסדות חינוך
//           </Typography>
          
//           <Box>
//             <Tooltip title="רענן נתונים">
//               <IconButton onClick={refreshData} color="primary">
//                 <RefreshIcon />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="הוסף מוסד חדש">
//               <ActionButton 
//                 variant="contained" 
//                 color="primary" 
//                 startIcon={<AddIcon />}
//                 onClick={() => setAddSchoolDialog(true)}
//               >
//                 הוסף מוסד
//               </ActionButton>
//             </Tooltip>
//           </Box>
//         </Header>

//         {loading && (
//           <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
//             <CircularProgress />
//           </Box>
//         )}

//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}

//         {!loading && !error && (
//           <>
//             <Box sx={{ mb: 3 }}>
//               <Typography variant="h6" gutterBottom fontWeight="medium">
//                 <FilterAltIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
//                 בחר מוסדות לסינון
//               </Typography>
              
//               <Box {...getRootProps()} sx={{ position: 'relative' }}>
//                 <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//                   {selectedSchools.map((school, index) => (
//                     <StyledTag key={`${school.schoolSymbol}-${index}`}>
//                       {school.schoolName}
//                       <DeleteIcon 
//                         className="deleteIcon" 
//                         fontSize="small" 
//                         onClick={() => {
//                           const newSelected = [...selectedSchools];
//                           newSelected.splice(index, 1);
//                           setSelectedSchools(newSelected);
//                         }} 
//                       />
//                     </StyledTag>
//                   ))}
//                   <input {...getInputProps()} placeholder="חפש מוסד..." />
//                 </InputWrapper>
                
//                 {groupedOptions.length > 0 && (
//                   <Listbox {...getListboxProps()}>
//                     {groupedOptions.map((option, index) => (
//                       <li {...getOptionProps({ option, index })} key={option.schoolSymbol || index}>
//                         {option.schoolName} ({option.schoolSymbol})
//                       </li>
//                     ))}
//                   </Listbox>
//                 )}
//               </Box>
//             </Box>

//             {selectedSchools.length > 0 && (
//               <>
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
//                 <ActionButton 
//                     variant="contained" 
//                     color="secondary" 
//                     startIcon={<MoneyOffIcon />}
//                     onClick={calculateTotalDebt}
//                   >
//                     חשב סך חובות
//                   </ActionButton>
                  
//                   <ActionButton 
//                     variant="contained" 
//                     color="info" 
//                     startIcon={<ReceiptIcon />}
//                     onClick={getExpenditures}
//                   >
//                     הצג הוצאות
//                   </ActionButton>
                  
//                   <ActionButton 
//                     variant="outlined" 
//                     color="success" 
//                     startIcon={<DownloadIcon />}
//                     onClick={exportToExcel}
//                   >
//                     ייצא לאקסל
//                   </ActionButton>
//                 </Box>

//                 <Divider sx={{ mb: 3 }} />

//                 {/* Results Section */}
//                 {(showDebtResults || showExpenditureResults) && (
//                   <Box sx={{ mt: 2 }}>
//                     <Tabs 
//                       value={tabValue} 
//                       onChange={handleTabChange}
//                       variant="fullWidth"
//                       sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}
//                     >
//                       <Tab label="סיכום" value={0} />
//                       <Tab label="פירוט מוסדות" value={1} />
//                       {showExpenditureResults && <Tab label="טבלת הוצאות" value={2} />}
//                     </Tabs>

//                     {/* Tab 1: Summary */}
//                     <TabPanel value={tabValue} index={0}>
//                       <ResultCard>
//                         <CardContent>
//                           <Typography variant="h6" gutterBottom color="textSecondary">
//                             סיכום נתונים עבור {selectedSchools.length} מוסדות נבחרים
//                           </Typography>
                          
//                           <Grid container spacing={3} sx={{ mt: 1 }}>
//                             {showDebtResults && (
//                               <Grid item xs={12} md={6}>
//                                 <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'error.light', color: 'error.contrastText' }}>
//                                   <Typography variant="subtitle1">סך החובות</Typography>
//                                   <Typography variant="h4" fontWeight="bold">
//                                     {formatCurrency(totalDebt)}
//                                   </Typography>
//                                 </Paper>
//                               </Grid>
//                             )}
                            
//                             {showExpenditureResults && (
//                               <Grid item xs={12} md={6}>
//                                 <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'info.light', color: 'info.contrastText' }}>
//                                   <Typography variant="subtitle1">סך ההוצאות</Typography>
//                                   <Typography variant="h4" fontWeight="bold">
//                                     {formatCurrency(expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0))}
//                                   </Typography>
//                                 </Paper>
//                               </Grid>
//                             )}
                            
//                             <Grid item xs={12} md={6}>
//                               <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
//                                 <Typography variant="subtitle1">תקציב כולל</Typography>
//                                 <Typography variant="h4" fontWeight="bold">
//                                   {formatCurrency(selectedSchools.reduce((sum, school) => sum + (school.budget || 0), 0))}
//                                 </Typography>
//                               </Paper>
//                             </Grid>
                            
//                             <Grid item xs={12} md={6}>
//                               <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
//                                 <Typography variant="subtitle1">יתרה</Typography>
//                                 <Typography variant="h4" fontWeight="bold">
//                                   {formatCurrency(
//                                     selectedSchools.reduce((sum, school) => sum + (school.budget || 0), 0) - 
//                                     (showExpenditureResults ? 
//                                       expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0) : 
//                                       totalDebt)
//                                   )}
//                                 </Typography>
//                               </Paper>
//                             </Grid>
//                           </Grid>
//                         </CardContent>
//                       </ResultCard>
//                     </TabPanel>

//                     {/* Tab 2: Schools Details */}
//                     <TabPanel value={tabValue} index={1}>
//                       <Box>
//                         {selectedSchools.map((school) => (
//                           <ResultCard key={school.schoolSymbol} sx={{ mb: 2 }}>
//                             <CardContent sx={{ p: 0 }}>
//                               <Box 
//                                 sx={{ 
//                                   p: 2, 
//                                   display: 'flex', 
//                                   justifyContent: 'space-between',
//                                   alignItems: 'center',
//                                   cursor: 'pointer',
//                                   bgcolor: 'primary.light',
//                                   color: 'primary.contrastText'
//                                 }}
//                                 onClick={() => toggleSchoolExpansion(school.schoolSymbol)}
//                               >
//                                 <Box>
//                                   <Typography variant="h6">
//                                     {school.schoolName}
//                                   </Typography>
//                                   <Typography variant="body2">
//                                     סמל מוסד: {school.schoolSymbol}
//                                   </Typography>
//                                 </Box>
//                                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                   <Typography variant="h6" sx={{ mr: 2 }}>
//                                     תקציב: {formatCurrency(school.budget || 0)}
//                                   </Typography>
//                                   {expandedSchool === school.schoolSymbol ? 
//                                     <ExpandLessIcon /> : <ExpandMoreIcon />}
//                                 </Box>
//                               </Box>
                              
//                               <Collapse in={expandedSchool === school.schoolSymbol}>
//                                 <Box sx={{ p: 2 }}>
//                                   <Grid container spacing={2}>
//                                     <Grid item xs={12} md={6}>
//                                       <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'error.contrastText' }}>
//                                         <Typography variant="subtitle2">סך החובות</Typography>
//                                         <Typography variant="h5">
//                                           {formatCurrency(
//                                             (school.expenditures || []).reduce(
//                                               (sum, exp) => sum + (exp.remainToPay || 0), 0
//                                             )
//                                           )}
//                                         </Typography>
//                                       </Paper>
//                                     </Grid>
//                                     <Grid item xs={12} md={6}>
//                                       <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'info.contrastText' }}>
//                                         <Typography variant="subtitle2">סך ההוצאות</Typography>
//                                         <Typography variant="h5">
//                                           {formatCurrency(
//                                             (school.expenditures || []).reduce(
//                                               (sum, exp) => sum + (exp.expenditureSum || 0), 0
//                                             )
//                                           )}
//                                         </Typography>
//                                       </Paper>
//                                     </Grid>
//                                   </Grid>
                                  
//                                   {(school.expenditures?.length > 0) && (
//                                     <Box sx={{ mt: 2 }}>
//                                       <Typography variant="subtitle1" gutterBottom>
//                                         פירוט הוצאות אחרונות
//                                       </Typography>
//                                       <StyledTableContainer component={Paper}>
//                                         <Table size="small">
//                                           <TableHead>
//                                             <TableRow>
//                                               <TableCell>תאריך</TableCell>
//                                               <TableCell>סכום</TableCell>
//                                               <TableCell>קטגוריה</TableCell>
//                                               <TableCell>שם המזמין</TableCell>
//                                               <TableCell>סטטוס</TableCell>
//                                             </TableRow>
//                                           </TableHead>
//                                           <TableBody>
//                                             {(school.expenditures || [])
//                                               .slice(0, 5) // Show only last 5 expenditures
//                                               .map((exp, index) => (
//                                                 <TableRow key={index}>
//                                                   <TableCell>{exp.date}</TableCell>
//                                                   <TableCell>{formatCurrency(exp.expenditureSum || 0)}</TableCell>
//                                                   <TableCell>{exp.categorId}</TableCell>
//                                                   <TableCell>{exp.ordererName}</TableCell>
//                                                   <TableCell>
//                                                     <Chip 
//                                                       label={exp.isAccepted ? "אושר" : "ממתין לאישור"} 
//                                                       color={exp.isAccepted ? "success" : "warning"}
//                                                       size="small"
//                                                     />
//                                                   </TableCell>
//                                                 </TableRow>
//                                               ))}
//                                           </TableBody>
//                                         </Table>
//                                       </StyledTableContainer>
//                                     </Box>
//                                   )}
//                                 </Box>
//                               </Collapse>
//                             </CardContent>
//                           </ResultCard>
//                         ))}
//                       </Box>
//                     </TabPanel>

//                     {/* Tab 3: Expenditures Table */}
//                     <TabPanel value={tabValue} index={2}>
//                       {showExpenditureResults && (
//                         <StyledTableContainer component={Paper}>
//                           <Table stickyHeader>
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>תאריך הזמנה</TableCell>
//                                 <TableCell>סכום הוצאה</TableCell>
//                                 <TableCell>יתרה לתשלום</TableCell>
//                                 <TableCell>קטגוריה</TableCell>
//                                 <TableCell>בית ספר</TableCell>
//                                 <TableCell>שם מבצע ההזמנה</TableCell>
//                                 <TableCell>קוד ספק</TableCell>
//                                 <TableCell>סטטוס</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {expenditures.map((exp, index) => (
//                                 <TableRow key={index} hover>
//                                   <TableCell>{exp.date}</TableCell>
//                                   <TableCell>{formatCurrency(exp.expenditureSum || 0)}</TableCell>
//                                   <TableCell>{formatCurrency(exp.remainToPay || 0)}</TableCell>
//                                   <TableCell>{exp.categorId}</TableCell>
//                                   <TableCell>{exp.schoolSymbol}</TableCell>
//                                   <TableCell>{exp.ordererName}</TableCell>
//                                   <TableCell>{exp.supplierNum}</TableCell>
//                                   <TableCell>
//                                     <Chip 
//                                       label={exp.isAccepted ? "אושר" : "ממתין לאישור"} 
//                                       color={exp.isAccepted ? "success" : "warning"}
//                                       size="small"
//                                     />
//                                   </TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </StyledTableContainer>
//                       )}
//                     </TabPanel>
//                   </Box>
//                 )}
//               </>
//             )}

//             {selectedSchools.length === 0 && !loading && (
//               <Box sx={{ textAlign: 'center', py: 4 }}>
//                 <Typography variant="h6" color="textSecondary" gutterBottom>
//                   לא נבחרו מוסדות
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   בחר מוסד אחד או יותר מהרשימה למעלה כדי להציג נתונים
//                 </Typography>
//               </Box>
//             )}
//           </>
//         )}
//       </StyledPaper>

//       {/* Add School Dialog */}
//       <Dialog 
//         open={addSchoolDialog} 
//         onClick={() => setAddSchoolDialog(false)}
//         maxWidth="md"
//         PaperProps={{
//           sx: { borderRadius: 2 }
//         }}
//       >
//         <DialogTitle>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Typography variant="h6">הוספת מוסד חדש</Typography>
//             <IconButton onClick={() => setAddSchoolDialog(false)}>
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         </DialogTitle>
//         <DialogContent dividers>
//           <AddSchool onSuccess={() => {
//             setAddSchoolDialog(false);
//             refreshData();
//           }} />
//         </DialogContent>
//       </Dialog>
//     </Root>
//   );
// }
















// ============================================
// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Box, Paper, Typography, Button, Divider, 
//   Card, CardContent, Grid, IconButton, Tooltip,
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   TablePagination, TableSortLabel, Chip, TextField, InputAdornment,
//   Collapse, CircularProgress, Alert, Tabs, Tab, Dialog
// } from '@mui/material';
// import useAutocomplete from '@mui/material/useAutocomplete';
// import { styled } from '@mui/material/styles';
// import { autocompleteClasses } from '@mui/material/Autocomplete';

// // Icons
// import SchoolIcon from '@mui/icons-material/School';
// import MoneyOffIcon from '@mui/icons-material/MoneyOff';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SummarizeIcon from '@mui/icons-material/Summarize';
// import DownloadIcon from '@mui/icons-material/Download';
// import RefreshIcon from '@mui/icons-material/Refresh';

// // Redux actions
// import { 
//   allSchoolsThunk, 
//   getDebtOfSchool, 
//   getTotalSumOfSchool 
// } from '../../Redux/Slices/Schools/getSchoolThunk';
// import { AddSchool } from './addSchool';

// // CSS
// import './school.css';

// // Input components for autocomplete
// const InputWrapper = styled('div')(({ theme }) => ({
//   width: '100%',
//   border: `1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'}`,
//   backgroundColor: theme.palette.mode === 'dark' ? '#141414' : '#fff',
//   borderRadius: theme.shape.borderRadius * 1.5,
//   padding: theme.spacing(1),
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: theme.spacing(0.5),
//   '&:hover': {
//     borderColor: theme.palette.primary.main,
//   },
//   '&.focused': {
//     borderColor: theme.palette.primary.main,
//     boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
//   },
//   '& input': {
//     backgroundColor: 'transparent',
//     color: theme.palette.text.primary,
//     height: '30px',
//     boxSizing: 'border-box',
//     padding: theme.spacing(0.5, 1),
//     width: '0',
//     minWidth: '30px',
//     flexGrow: 1,
//     border: 0,
//     margin: 0,
//     outline: 0,
//   },
// }));

// const StyledTag = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   height: '32px',
//   margin: theme.spacing(0.25),
//   lineHeight: '22px',
//   backgroundColor: theme.palette.primary.light,
//   color: theme.palette.primary.contrastText,
//   borderRadius: theme.shape.borderRadius,
//   padding: theme.spacing(0.5, 1),
//   '& .deleteIcon': {
//     marginLeft: theme.spacing(0.5),
//     cursor: 'pointer',
//     '&:hover': {
//       color: theme.palette.error.light,
//     }
//   }
// }));

// const Listbox = styled('ul')(({ theme }) => ({
//   width: '100%',
//   margin: theme.spacing(0.5, 0, 0),
//   padding: 0,
//   position: 'absolute',
//   listStyle: 'none',
//   backgroundColor: theme.palette.background.paper,
//   overflow: 'auto',
//   maxHeight: '250px',
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//   zIndex: 1,
//   '& li': {
//     padding: theme.spacing(1, 2),
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     }
//   },
//   [`& li.${autocompleteClasses.focused}`]: {
//     backgroundColor: theme.palette.action.selected,
//     cursor: 'pointer',
//   },
// }));

// // Tab panel component
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`school-tabpanel-${index}`}
//       aria-labelledby={`school-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// // Main component
// export const School = () => {
//   const dispatch = useDispatch();
//   const schools = useSelector(s => s.school.allSchools);
//   const loading = useSelector(s => s.school.loading);
//   const error = useSelector(s => s.school.error);
  
//   // States
//   const [selectedSchools, setSelectedSchools] = useState([]);
//   const [showDebtResults, setShowDebtResults] = useState(false);
//   const [showExpenditureResults, setShowExpenditureResults] = useState(false);
//   const [totalDebt, setTotalDebt] = useState(0);
//   const [expenditures, setExpenditures] = useState([]);
//   const [allExpenditures, setAllExpenditures] = useState([]);
//   const [addSchoolDialog, setAddSchoolDialog] = useState(false);
//   const [tabValue, setTabValue] = useState(0);
//   const [expandedSchool, setExpandedSchool] = useState(null);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [orderBy, setOrderBy] = useState('date');
//   const [order, setOrder] = useState('desc');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('');

//   // Fetch schools on component mount
//   useEffect(() => {
//     dispatch(allSchoolsThunk());
//   }, [dispatch]);

//   // Autocomplete hook
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value,
//     focused,
//     setAnchorEl,
//   } = useAutocomplete({
//     id: 'schools-autocomplete',
//     multiple: true,
//     options: schools || [],
//     getOptionLabel: (option) => option?.schoolName || '',
//     onChange: (_, newValue) => {
//       setSelectedSchools(newValue);
//       // Reset results when selection changes
//       setShowDebtResults(false);
//       setShowExpenditureResults(false);
//     }
//   });

//   // Calculate total debt for selected schools
//   const calculateTotalDebt = () => {
//     let total = 0;
//     selectedSchools.forEach(school => {
//       if (school.expenditures) {
//         school.expenditures.forEach(exp => {
//           total += exp.remainToPay || 0;
//         });
//       }
//     });
//     setTotalDebt(total);
//     setShowDebtResults(true);
//     setShowExpenditureResults(false);
//   };

//   // Get expenditures for selected schools
//   const getExpenditures = async () => {
//     const expendituresArray = [];
    
//     for (const school of selectedSchools) {
//       try {
//         // Assuming getTotalSumOfSchool returns expenditure data
//         const result = await dispatch(getTotalSumOfSchool(school.schoolName)).unwrap();
//         if (result && Array.isArray(result)) {
//           // Add school name to each expenditure
//           const schoolExpenditures = result.map(exp => ({
//             ...exp,
//             schoolName: school.schoolName
//           }));
//           expendituresArray.push(...schoolExpenditures);
//         } else if (school.expenditures) {
//           const schoolExpenditures = school.expenditures.map(exp => ({
//             ...exp,
//             schoolName: school.schoolName
//           }));
//           expendituresArray.push(...schoolExpenditures);
//         }
//       } catch (error) {
//         console.error("Error fetching expenditures:", error);
//       }
//     }
    
//     setAllExpenditures(expendituresArray);
//     setExpenditures(expendituresArray);
//     setShowExpenditureResults(true);
//     setShowDebtResults(false);
//   };

//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Format currency
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('he-IL', { 
//       style: 'currency', 
//       currency: 'ILS',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     }).format(amount);
//   };

//   // Toggle school details expansion
//   const toggleSchoolExpansion = (schoolSymbol) => {
//     if (expandedSchool === schoolSymbol) {
//       setExpandedSchool(null);
//     } else {
//       setExpandedSchool(schoolSymbol);
//     }
//   };

//   // Export to Excel (placeholder function)
//   const exportToExcel = () => {
//     alert('פונקציונליות ייצוא לאקסל תתווסף בהמשך');
//     // Implementation would go here
//   };

//   // Refresh data
//   const refreshData = () => {
//     dispatch(allSchoolsThunk());
//     setShowDebtResults(false);
//     setShowExpenditureResults(false);
//   };

//   // Handle sort
//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   // Handle pagination
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Filter expenditures
//   useEffect(() => {
//     if (allExpenditures.length > 0) {
//       let filtered = [...allExpenditures];
      
//       // Apply search term filter
//       if (searchTerm) {
//         filtered = filtered.filter(exp => 
//           (exp.schoolName && exp.schoolName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//           (exp.ordererName && exp.ordererName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//           (exp.categorId && exp.categorId.toString().includes(searchTerm)) ||
//           (exp.supplierNum && exp.supplierNum.toString().includes(searchTerm))
//         );
//       }
      
//       // Apply category filter
//       if (filterCategory) {
//         filtered = filtered.filter(exp => 
//           exp.categorId === filterCategory
//         );
//       }
      
//       setExpenditures(filtered);
//     }
//   }, [searchTerm, filterCategory, allExpenditures]);

//   // Get unique categories
//   const uniqueCategories = React.useMemo(() => {
//     if (!allExpenditures.length) return [];
    
//     const categories = new Set();
//     allExpenditures.forEach(exp => {
//       if (exp.categorId) {
//         categories.add(exp.categorId);
//       }
//     });
    
//     return Array.from(categories);
//   }, [allExpenditures]);

//   // Sort function
//   const sortedExpenditures = React.useMemo(() => {
//     if (!expenditures.length) return [];
    
//     return [...expenditures].sort((a, b) => {
//       const aValue = a[orderBy] || '';
//       const bValue = b[orderBy] || '';
      
//       if (order === 'asc') {
//         if (typeof aValue === 'number' && typeof bValue === 'number') {
//           return aValue - bValue;
//         }
//         return String(aValue).localeCompare(String(bValue));
//       } else {
//         if (typeof aValue === 'number' && typeof bValue === 'number') {
//           return bValue - aValue;
//         }
//         return String(bValue).localeCompare(String(aValue));
//       }
//     });
//   }, [expenditures, order, orderBy]);

//   // Paginated data
//   const paginatedExpenditures = sortedExpenditures.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <div className="schools-page">
//       <div className="schools-container">
//         <div className="schools-header">
//           <div className="schools-title-section">
//             <SchoolIcon className="schools-icon" />
//             <Typography variant="h4" className="schools-title">
//               ניהול מוסדות חינוך
//             </Typography>
//           </div>
          
//           <div className="schools-actions">
//             <Tooltip title="רענן נתונים">
//               <IconButton onClick={refreshData} className="schools-refresh-button">
//                 <RefreshIcon />
//               </IconButton>
//             </Tooltip>
//             <Button 
//               variant="contained" 
//               className="schools-add-button"
//               startIcon={<SchoolIcon />}
//               onClick={() => setAddSchoolDialog(true)}
//             >
//               הוסף מוסד
//             </Button>
//           </div>
//         </div>

//         {loading && (
//           <div className="schools-loading">
//             <CircularProgress />
//           </div>
//         )}

//         {error && (
//           <Alert severity="error" className="schools-error">
//             {error}
//           </Alert>
//         )}

//         {!loading && !error && (
//           <>
//             <Paper className="schools-filter-section">
//               <Typography variant="h6" className="schools-filter-title">
//                 <FilterListIcon className="schools-filter-icon" />
//                 בחר מוסדות לסינון
//               </Typography>
              
//               <div {...getRootProps()} className="schools-autocomplete">
//                 <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
//                 {selectedSchools.map((school, index) => (
//                     <StyledTag key={`${school.schoolSymbol}-${index}`} className="schools-tag">
//                       {school.schoolName}
//                       <IconButton 
//                         size="small" 
//                         className="schools-tag-delete"
//                         onClick={() => {
//                           const newSelected = [...selectedSchools];
//                           newSelected.splice(index, 1);
//                           setSelectedSchools(newSelected);
//                         }}
//                       >
//                         <ExpandLessIcon fontSize="small" />
//                       </IconButton>
//                     </StyledTag>
//                   ))}
//                   <input {...getInputProps()} placeholder="חפש מוסד..." className="schools-search-input" />
//                 </InputWrapper>
                
//                 {groupedOptions.length > 0 && (
//                   <Listbox {...getListboxProps()} className="schools-options-list">
//                     {groupedOptions.map((option, index) => (
//                       <li {...getOptionProps({ option, index })} key={option.schoolSymbol || index} className="schools-option-item">
//                         {option.schoolName} ({option.schoolSymbol})
//                       </li>
//                     ))}
//                   </Listbox>
//                 )}
//               </div>
//             </Paper>

//             {selectedSchools.length > 0 && (
//               <div className="schools-actions-section">
//                 <Button 
//                   variant="contained" 
//                   color="secondary" 
//                   startIcon={<MoneyOffIcon />}
//                   onClick={calculateTotalDebt}
//                   className="schools-action-button debt-button"
//                 >
//                   חשב סך חובות
//                 </Button>
                
//                 <Button 
//                   variant="contained" 
//                   color="primary" 
//                   startIcon={<ReceiptIcon />}
//                   onClick={getExpenditures}
//                   className="schools-action-button expenditures-button"
//                 >
//                   הצג הוצאות
//                 </Button>
                
//                 <Button 
//                   variant="outlined" 
//                   color="success" 
//                   startIcon={<DownloadIcon />}
//                   onClick={exportToExcel}
//                   className="schools-action-button export-button"
//                 >
//                   ייצא לאקסל
//                 </Button>
//               </div>
//             )}

//             {/* Results Section */}
//             {(showDebtResults || showExpenditureResults) && (
//               <Paper className="schools-results-section">
//                 <Tabs 
//                   value={tabValue} 
//                   onChange={handleTabChange}
//                   variant="fullWidth"
//                   className="schools-tabs"
//                 >
//                   <Tab label="סיכום" value={0} className="schools-tab" />
//                   <Tab label="פירוט מוסדות" value={1} className="schools-tab" />
//                   {showExpenditureResults && <Tab label="טבלת הוצאות" value={2} className="schools-tab" />}
//                 </Tabs>

//                 {/* Tab 1: Summary */}
//                 <TabPanel value={tabValue} index={0}>
//                   <Card className="schools-summary-card">
//                     <CardContent>
//                       <Typography variant="h6" className="schools-summary-title">
//                         סיכום נתונים עבור {selectedSchools.length} מוסדות נבחרים
//                       </Typography>
                      
//                       <Grid container spacing={3} className="schools-summary-grid">
//                         {showDebtResults && (
//                           <Grid item xs={12} md={6}>
//                             <Paper className="schools-summary-item debt-summary">
//                               <Typography variant="subtitle1">סך החובות</Typography>
//                               <Typography variant="h4" className="schools-summary-value">
//                                 {formatCurrency(totalDebt)}
//                               </Typography>
//                             </Paper>
//                           </Grid>
//                         )}
                        
//                         {showExpenditureResults && (
//                           <Grid item xs={12} md={6}>
//                             <Paper className="schools-summary-item expenditures-summary">
//                               <Typography variant="subtitle1">סך ההוצאות</Typography>
//                               <Typography variant="h4" className="schools-summary-value">
//                                 {formatCurrency(expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0))}
//                               </Typography>
//                             </Paper>
//                           </Grid>
//                         )}
                        
//                         <Grid item xs={12} md={6}>
//                           <Paper className="schools-summary-item budget-summary">
//                             <Typography variant="subtitle1">תקציב כולל</Typography>
//                             <Typography variant="h4" className="schools-summary-value">
//                               {formatCurrency(selectedSchools.reduce((sum, school) => sum + (school.budget || 0), 0))}
//                             </Typography>
//                           </Paper>
//                         </Grid>
                        
//                         <Grid item xs={12} md={6}>
//                           <Paper className="schools-summary-item balance-summary">
//                             <Typography variant="subtitle1">יתרה</Typography>
//                             <Typography variant="h4" className="schools-summary-value">
//                               {formatCurrency(
//                                 selectedSchools.reduce((sum, school) => sum + (school.budget || 0), 0) - 
//                                 (showExpenditureResults ? 
//                                   expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0) : 
//                                   totalDebt)
//                               )}
//                             </Typography>
//                           </Paper>
//                         </Grid>
//                       </Grid>
//                     </CardContent>
//                   </Card>
//                 </TabPanel>

//                 {/* Tab 2: Schools Details */}
//                 <TabPanel value={tabValue} index={1}>
//                   <div className="schools-details-list">
//                     {selectedSchools.map((school) => (
//                       <Card key={school.schoolSymbol} className="schools-detail-card">
//                         <div 
//                           className="schools-detail-header"
//                           onClick={() => toggleSchoolExpansion(school.schoolSymbol)}
//                         >
//                           <div>
//                             <Typography variant="h6" className="schools-detail-name">
//                               {school.schoolName}
//                             </Typography>
//                             <Typography variant="body2" className="schools-detail-symbol">
//                               סמל מוסד: {school.schoolSymbol}
//                             </Typography>
//                           </div>
//                           <div className="schools-detail-budget">
//                             <Typography variant="h6">
//                               תקציב: {formatCurrency(school.budget || 0)}
//                             </Typography>
//                             {expandedSchool === school.schoolSymbol ? 
//                               <ExpandLessIcon /> : <ExpandMoreIcon />}
//                           </div>
//                         </div>
                        
//                         <Collapse in={expandedSchool === school.schoolSymbol}>
//                           <div className="schools-detail-content">
//                             <Grid container spacing={2}>
//                               <Grid item xs={12} md={6}>
//                                 <Paper className="schools-detail-summary debt-detail">
//                                   <Typography variant="subtitle2">סך החובות</Typography>
//                                   <Typography variant="h5">
//                                     {formatCurrency(
//                                       (school.expenditures || []).reduce(
//                                         (sum, exp) => sum + (exp.remainToPay || 0), 0
//                                       )
//                                     )}
//                                   </Typography>
//                                 </Paper>
//                               </Grid>
//                               <Grid item xs={12} md={6}>
//                                 <Paper className="schools-detail-summary expenditures-detail">
//                                   <Typography variant="subtitle2">סך ההוצאות</Typography>
//                                   <Typography variant="h5">
//                                     {formatCurrency(
//                                       (school.expenditures || []).reduce(
//                                         (sum, exp) => sum + (exp.expenditureSum || 0), 0
//                                       )
//                                     )}
//                                   </Typography>
//                                 </Paper>
//                               </Grid>
//                             </Grid>
                            
//                             {(school.expenditures?.length > 0) && (
//                               <div className="schools-detail-expenditures">
//                                 <Typography variant="subtitle1" className="schools-detail-expenditures-title">
//                                   פירוט הוצאות אחרונות
//                                 </Typography>
//                                 <TableContainer className="schools-detail-table-container">
//                                   <Table size="small" className="schools-detail-table">
//                                     <TableHead>
//                                       <TableRow>
//                                         <TableCell>תאריך</TableCell>
//                                         <TableCell>סכום</TableCell>
//                                         <TableCell>קטגוריה</TableCell>
//                                         <TableCell>שם המזמין</TableCell>
//                                         <TableCell>סטטוס</TableCell>
//                                       </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                       {(school.expenditures || [])
//                                         .slice(0, 5) // Show only last 5 expenditures
//                                         .map((exp, index) => (
//                                           <TableRow key={index} className="schools-detail-row">
//                                             <TableCell>{exp.date}</TableCell>
//                                             <TableCell>{formatCurrency(exp.expenditureSum || 0)}</TableCell>
//                                             <TableCell>{exp.categorId}</TableCell>
//                                             <TableCell>{exp.ordererName}</TableCell>
//                                             <TableCell>
//                                               <Chip 
//                                                 label={exp.isAccepted ? "אושר" : "ממתין לאישור"} 
//                                                 color={exp.isAccepted ? "success" : "warning"}
//                                                 size="small"
//                                                 className={`status-chip ${exp.isAccepted ? 'approved' : 'pending'}`}
//                                               />
//                                             </TableCell>
//                                           </TableRow>
//                                         ))}
//                                     </TableBody>
//                                   </Table>
//                                 </TableContainer>
//                               </div>
//                             )}
//                           </div>
//                         </Collapse>
//                       </Card>
//                     ))}
//                   </div>
//                 </TabPanel>

//                 {/* Tab 3: Expenditures Table */}
//                 <TabPanel value={tabValue} index={2}>
//                   {showExpenditureResults && (
//                     <div className="schools-expenditures-section">
//                       <div className="schools-expenditures-filters">
//                         <TextField
//                           placeholder="חיפוש..."
//                           variant="outlined"
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           className="schools-expenditures-search"
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <SearchIcon />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
                        
//                         <TextField
//                           select
//                           label="סינון לפי קטגוריה"
//                           value={filterCategory}
//                           onChange={(e) => setFilterCategory(e.target.value)}
//                           className="schools-expenditures-filter"
//                           variant="outlined"
//                         >
//                           <option value="">הכל</option>
//                           {uniqueCategories.map((category) => (
//                             <option key={category} value={category}>
//                               {category}
//                             </option>
//                           ))}
//                         </TextField>
//                       </div>
                      
//                       <div className="schools-expenditures-summary">
//                         <Typography variant="h6" className="schools-expenditures-summary-title">
//                           <SummarizeIcon className="schools-expenditures-summary-icon" />
//                           סיכום הוצאות
//                         </Typography>
//                         <div className="schools-expenditures-summary-items">
//                           <div className="schools-expenditures-summary-item">
//                             <Typography variant="body2">סך הכל הוצאות:</Typography>
//                             <Typography variant="h6">
//                               {formatCurrency(expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0))}
//                             </Typography>
//                           </div>
//                           <div className="schools-expenditures-summary-item">
//                             <Typography variant="body2">מספר הוצאות:</Typography>
//                             <Typography variant="h6">{expenditures.length}</Typography>
//                           </div>
//                           <div className="schools-expenditures-summary-item">
//                             <Typography variant="body2">הוצאה ממוצעת:</Typography>
//                             <Typography variant="h6">
//                               {formatCurrency(
//                                 expenditures.length > 0 
//                                   ? expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0) / expenditures.length 
//                                   : 0
//                               )}
//                             </Typography>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <TableContainer className="schools-expenditures-table-container">
//                         <Table stickyHeader className="schools-expenditures-table">
//                           <TableHead>
//                             <TableRow>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'date'}
//                                   direction={orderBy === 'date' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('date')}
//                                 >
//                                   תאריך הזמנה
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'expenditureSum'}
//                                   direction={orderBy === 'expenditureSum' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('expenditureSum')}
//                                 >
//                                   סכום הוצאה
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'remainToPay'}
//                                   direction={orderBy === 'remainToPay' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('remainToPay')}
//                                 >
//                                   יתרה לתשלום
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'categorId'}
//                                   direction={orderBy === 'categorId' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('categorId')}
//                                 >
//                                   קטגוריה
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'schoolName'}
//                                   direction={orderBy === 'schoolName' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('schoolName')}
//                                 >
//                                   בית ספר
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'ordererName'}
//                                   direction={orderBy === 'ordererName' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('ordererName')}
//                                 >
//                                   שם מבצע ההזמנה
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">
//                                 <TableSortLabel
//                                   active={orderBy === 'supplierNum'}
//                                   direction={orderBy === 'supplierNum' ? order : 'asc'}
//                                   onClick={() => handleRequestSort('supplierNum')}
//                                 >
//                                   קוד ספק
//                                 </TableSortLabel>
//                               </TableCell>
//                               <TableCell className="schools-table-header-cell">סטטוס</TableCell>
//                             </TableRow>
//                           </TableHead>
//                           <TableBody>
//                             {paginatedExpenditures.map((exp, index) => (
//                               <TableRow key={index} className="schools-expenditures-row">
//                                 <TableCell>{exp.date}</TableCell>
//                                 <TableCell>{formatCurrency(exp.expenditureSum || 0)}</TableCell>
//                                 <TableCell>{formatCurrency(exp.remainToPay || 0)}</TableCell>
//                                 <TableCell>{exp.categorId}</TableCell>
//                                 <TableCell>
//                                   <Chip 
//                                     label={exp.schoolName || exp.schoolSymbol} 
//                                     className="school-chip"
//                                     size="small"
//                                   />
//                                 </TableCell>
//                                 <TableCell>{exp.ordererName}</TableCell>
//                                 <TableCell>{exp.supplierNum}</TableCell>
//                                 <TableCell>
//                                   <Chip 
//                                     label={exp.isAccepted ? "אושר" : "ממתין לאישור"} 
//                                     color={exp.isAccepted ? "success" : "warning"}
//                                     size="small"
//                                     className={`status-chip ${exp.isAccepted ? 'approved' : 'pending'}`}
//                                   />
//                                 </TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </TableContainer>
                      
//                       <TablePagination
//                         component="div"
//                         count={expenditures.length}
//                         page={page}
//                         onPageChange={handleChangePage}
//                         rowsPerPage={rowsPerPage}
//                         onRowsPerPageChange={handleChangeRowsPerPage}
//                         labelRowsPerPage="שורות בעמוד:"
//                         labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
//                         rowsPerPageOptions={[5, 10, 25, 50]}
//                         className="schools-expenditures-pagination"
//                       />
//                     </div>
//                   )}
//                 </TabPanel>
//               </Paper>
//             )}

//             {selectedSchools.length === 0 && !loading && (
//               <div className="schools-empty-state">
//                 <SchoolIcon className="schools-empty-icon" />
//                 <Typography variant="h6" className="schools-empty-title">
//                   לא נבחרו מוסדות
//                 </Typography>
//                 <Typography variant="body2" className="schools-empty-subtitle">
//                   בחר מוסד אחד או יותר מהרשימה למעלה כדי להציג נתונים
//                 </Typography>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Add School Dialog */}
//       <Dialog
//         open={addSchoolDialog} 
//         onClose={() => setAddSchoolDialog(false)}
//         maxWidth="md"
//         fullWidth
//         className="schools-add-dialog"
//       >
//         <div className="schools-add-dialog-header">
//           <Typography variant="h6">הוספת מוסד חדש</Typography>
//           <IconButton onClick={() => setAddSchoolDialog(false)}>
//             <ExpandLessIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <div className="schools-add-dialog-content">
//           <AddSchool onSuccess={() => {
//             setAddSchoolDialog(false);
//             refreshData();
//           }} />
//         </div>
//       </Dialog>
//     </div>
//   );
// };
 
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Paper, Typography, Chip, Button, Divider, 
  Card, CardContent, Grid, IconButton, Tooltip,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, CircularProgress, Alert, Tabs, Tab, TextField,
  Checkbox, FormControlLabel, InputAdornment, TablePagination, TableSortLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import useAutocomplete from '@mui/material/useAutocomplete';
import { autocompleteClasses } from '@mui/material/Autocomplete';

// Icons
import SchoolIcon from '@mui/icons-material/School';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Redux actions
import { 
  allSchoolsThunk, 
  getDebtOfSchool, 
  getTotalSumOfSchool 
} from '../../Redux/Slices/Schools/getSchoolThunk';
import { AddSchool } from './addSchool';

// Styled components
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#f5f7fa',
  borderRadius: theme.shape.borderRadius,
  minHeight: '85vh',
  direction: 'rtl'
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  backgroundColor: '#fff',
  overflow: 'hidden'
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3)
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius * 1.5,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  }
}));

const SchoolChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1, 0.5),
  fontWeight: 500,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  }
}));

const ResultCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 1.5,
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  transition: 'all 0.3s',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
  }
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  maxHeight: '400px',
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold'
  }
}));

// Input components for autocomplete
const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'}`,
  backgroundColor: theme.palette.mode === 'dark' ? '#141414' : '#fff',
  borderRadius: theme.shape.borderRadius * 1.5,
  padding: theme.spacing(1),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&.focused': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
  },
  '& input': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    height: '30px',
    boxSizing: 'border-box',
    padding: theme.spacing(0.5, 1),
    width: '0',
    minWidth: '30px',
    flexGrow: 1,
    border: 0,
    margin: 0,
    outline: 0,
  },
}));

const StyledTag = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '32px',
  margin: theme.spacing(0.25),
  lineHeight: '22px',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  }
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(0.5, 0, 0),
  padding: 0,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: '250px',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  zIndex: 1,
  '& li': {
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    }
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: theme.palette.action.selected,
    cursor: 'pointer',
  },
}));

// Tab panel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`school-tabpanel-${index}`}
      aria-labelledby={`school-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Main component
export const School = () => {
  const dispatch = useDispatch();
  const schools = useSelector(s => s.school.allSchools);
  const loading = useSelector(s => s.school.loading);
  const error = useSelector(s => s.school.error);
  const expenditure = useSelector(s => s.expenditure.allExpenditures);
  // States
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [showDebtResults, setShowDebtResults] = useState(false);
  const [showExpenditureResults, setShowExpenditureResults] = useState(false);
  const [totalDebt, setTotalDebt] = useState(0);
  const [expenditures, setExpenditures] = useState([]);
  const [addSchoolDialog, setAddSchoolDialog] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [expandedSchool, setExpandedSchool] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('date');
  const [order, setOrder] = useState('desc');
  
  // Payment states
  const [paymentSelections, setPaymentSelections] = useState({});
  const [paymentAmounts, setPaymentAmounts] = useState({});

  // Fetch schools on component mount
  useEffect(() => {
    dispatch(allSchoolsThunk());
  }, [dispatch]);

  // Autocomplete hook
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'schools-autocomplete',
    multiple: true,
    options: schools || [],
    getOptionLabel: (option) => option?.schoolName || '',
    value: selectedSchools,
    onChange: (_, newValue) => {
      setSelectedSchools(newValue);
      // Reset results when selection changes
      setShowDebtResults(false);
      setShowExpenditureResults(false);
    }
  });

  // Toggle school selection
  const toggleSchoolSelection = (school) => {
    const isSelected = selectedSchools.some(s => s.schoolSymbol === school.schoolSymbol);
    
    if (isSelected) {
      setSelectedSchools(selectedSchools.filter(s => s.schoolSymbol !== school.schoolSymbol));
    } else {
      setSelectedSchools([...selectedSchools, school]);
    }
    
    // Reset results when selection changes
    setShowDebtResults(false);
    setShowExpenditureResults(false);
  };

  // Calculate total debt for selected schools
  const calculateTotalDebt = () => {
    let total = 0;
    selectedSchools.forEach(school => {
      if (school.expenditures) {
        school.expenditures.forEach(exp => {
          total += exp.remainToPay || 0;
        });
      }
    });
    setTotalDebt(total);
    setShowDebtResults(true);
    setShowExpenditureResults(false);
  };

  // Get expenditures for selected schools
  const getExpenditures = async () => {
    const allExpenditures = [];
    
    for (const school of selectedSchools) {
      try {
        // Assuming getTotalSumOfSchool returns expenditure data
        const result = await dispatch(getTotalSumOfSchool(school.schoolName)).unwrap();
        if (result && Array.isArray(result)) {
          // Add school name to each expenditure
          const schoolExpenditures = result.map(exp => ({
            ...exp,
            schoolName: school.schoolName,
            schoolSymbol: school.schoolSymbol
          }));
          allExpenditures.push(...schoolExpenditures);
        } else if (school.expenditures) {
          // Add school name to each expenditure
          const schoolExpenditures = school.expenditures.map(exp => ({
            ...exp,
            schoolName: school.schoolName,
            schoolSymbol: school.schoolSymbol
          }));
          allExpenditures.push(...schoolExpenditures);
        }
      } catch (error) {
        console.error("Error fetching expenditures:", error);
      }
    }
    
    // Initialize payment states
    const initialPaymentSelections = {};
    const initialPaymentAmounts = {};
    
    allExpenditures.forEach((exp, index) => {
      const id = `${exp.schoolSymbol}-${exp.id || index}`;
      initialPaymentSelections[id] = false;
      initialPaymentAmounts[id] = exp.remainToPay || 0;
    });
    
    setPaymentSelections(initialPaymentSelections);
    setPaymentAmounts(initialPaymentAmounts);
    setExpenditures(allExpenditures);
    setShowExpenditureResults(true);
    setShowDebtResults(false);
    setTabValue(2); // Switch to expenditures tab
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('he-IL', { 
      style: 'currency', 
      currency: 'ILS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Toggle school details expansion
  const toggleSchoolExpansion = (schoolSymbol) => {
    if (expandedSchool === schoolSymbol) {
      setExpandedSchool(null);
    } else {
      setExpandedSchool(schoolSymbol);
    }
  };

  // Handle payment selection change
  const handlePaymentSelectionChange = (id) => {
    setPaymentSelections({
      ...paymentSelections,
      [id]: !paymentSelections[id]
    });
  };

  // Handle payment amount change
  const handlePaymentAmountChange = (id, value) => {
    setPaymentAmounts({
      ...paymentAmounts,
      [id]: value
    });
  };

  // Process payments
  const processPayments = () => {
    // Here you would implement the actual payment processing
    // For now, we'll just show an alert with the selected payments
    const selectedPayments = Object.keys(paymentSelections)
      .filter(id => paymentSelections[id])
      .map(id => {
        const [schoolSymbol, expId] = id.split('-');
        const expenditure = expenditures.find(exp => 
          exp.schoolSymbol === schoolSymbol && (exp.id === expId || exp.id === parseInt(expId))
        );
        
        return {
          id,
          schoolName: expenditure?.schoolName,
          amount: paymentAmounts[id]
        };
      });
    
    alert(`נבחרו ${selectedPayments.length} תשלומים לביצוע בסך כולל של ${
      formatCurrency(selectedPayments.reduce((sum, payment) => sum + Number(payment.amount), 0))
    }`);
    
    // Reset selections after processing
    const resetSelections = {};
    Object.keys(paymentSelections).forEach(id => {
      resetSelections[id] = false;
    });
    setPaymentSelections(resetSelections);
  };

  // Handle sort
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter and sort expenditures
  const filteredExpenditures = React.useMemo(() => {
    if (!expenditures.length) return [];
    
    // First filter
    let filtered = [...expenditures];
    if (searchTerm) {
      filtered = filtered.filter(exp => 
        (exp.schoolName && exp.schoolName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (exp.ordererName && exp.ordererName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (exp.categorId && exp.categorId.toString().includes(searchTerm)) ||
        (exp.supplierNum && exp.supplierNum.toString().includes(searchTerm))
      );
    }
    
    // Then sort
    return filtered.sort((a, b) => {
      const aValue = a[orderBy] || '';
      const bValue = b[orderBy] || '';
      
      if (order === 'asc') {
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return aValue - bValue;
        }
        return String(aValue).localeCompare(String(bValue));
      } else {
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return bValue - aValue;
        }
        return String(bValue).localeCompare(String(aValue));
      }
    });
  }, [expenditures, searchTerm, orderBy, order]);

  // Paginated data
  const paginatedExpenditures = filteredExpenditures.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Export to Excel (placeholder function)
  const exportToExcel = () => {
    alert('פונקציונליות ייצוא לאקסל תתווסף בהמשך');
    // Implementation would go here
  };

  // Refresh data
  const refreshData = () => {
    dispatch(allSchoolsThunk());
    setShowDebtResults(false);
    setShowExpenditureResults(false);
  };

  return (
    <Root sx={{direction:'rtl'}}>
      <StyledPaper>
        <Header>
          <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
            <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            ניהול מוסדות חינוך
          </Typography>
          
          <Box>
            <Tooltip title="רענן נתונים">
              <IconButton onClick={refreshData} color="primary">
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="הוסף מוסד חדש">
              <ActionButton 
                variant="contained" 
                color="primary" 
                startIcon={<AddIcon />}
                onClick={() => setAddSchoolDialog(true)}
              >
                הוסף מוסד
              </ActionButton>
            </Tooltip>
          </Box>
        </Header>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="medium">
                <FilterAltIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                בחר מוסדות לסינון
              </Typography>
              
              <Box sx={{ position: 'relative' }}>
                <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                  {selectedSchools.map((school) => (
                    <StyledTag 
                      key={school.schoolSymbol} 
                      onClick={() => toggleSchoolSelection(school)}
                    >
                      {school.schoolName}
                      <DeleteIcon 
                        sx={{ ml: 1, fontSize: '0.8rem' }}
                      />
                    </StyledTag>
                  ))}
                  <input {...getInputProps()} placeholder="חפש מוסד..." />
                </InputWrapper>
                
                {groupedOptions.length > 0 && (
                  <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                      <li 
                        {...getOptionProps({ option, index })} 
                        key={option.schoolSymbol || index}
                        onClick={() => toggleSchoolSelection(option)}
                      >
                        {option.schoolName} ({option.schoolSymbol})
                      </li>
                    ))}
                  </Listbox>
                )}
              </Box>
            </Box>

            {selectedSchools.length > 0 && (
              <>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  <ActionButton 
                    variant="contained" 
                    color="secondary" 
                    startIcon={<MoneyOffIcon />}
                    onClick={calculateTotalDebt}
                  >
                    חשב סך חובות
                  </ActionButton>
                  
                  <ActionButton 
                    variant="contained" 
                    color="info" 
                    startIcon={<ReceiptIcon />}
                    onClick={getExpenditures}
                  >
                    הצג הוצאות
                  </ActionButton>
                  
                  <ActionButton 
                    variant="outlined" 
                    color="success" 
                    startIcon={<DownloadIcon />}
                    onClick={exportToExcel}
                  >
                    ייצא לאקסל
                  </ActionButton>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* Results Section */}
                {(showDebtResults || showExpenditureResults) && (
                  <Box sx={{ mt: 2 }}>
                    <Tabs 
                      value={tabValue} 
                      onChange={handleTabChange}
                      variant="fullWidth"
                      sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}
                    >
                      <Tab label="סיכום" value={0} />
                      <Tab label="פירוט מוסדות" value={1} />
                      {showExpenditureResults && <Tab label="טבלת הוצאות" value={2} />}
                    </Tabs>

                    {/* Tab 1: Summary */}
                    <TabPanel value={tabValue} index={0}>
                      <ResultCard>
                        <CardContent>
                          <Typography variant="h6" gutterBottom color="textSecondary">
                            סיכום נתונים עבור {selectedSchools.length} מוסדות נבחרים
                          </Typography>
                          
                          <Grid container spacing={3} sx={{ mt: 1 }}>
                            {showDebtResults && (
                              <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'error.light', color: 'error.contrastText' }}>
                                  <Typography variant="subtitle1">סך החובות</Typography>
                                  <Typography variant="h4" fontWeight="bold">
                                    {formatCurrency(totalDebt)}
                                  </Typography>
                                </Paper>
                              </Grid>
                            )}
                            
                            {showExpenditureResults && (
                              <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'info.light', color: 'info.contrastText' }}>
                                  <Typography variant="subtitle1">סך ההוצאות</Typography>
                                  <Typography variant="h4" fontWeight="bold">
                                    {formatCurrency(expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0))}
                                  </Typography>
                                </Paper>
                              </Grid>
                            )}
                            
                            <Grid item xs={12} md={6}>
                              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                                <Typography variant="subtitle1">תקציב כולל</Typography>
                                <Typography variant="h4" fontWeight="bold">
                                  {formatCurrency(selectedSchools.reduce((sum, school) => sum + (school.budget || 0), 0))}
                                </Typography>
                              </Paper>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                              <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
                                <Typography variant="subtitle1">יתרה</Typography>
                                <Typography variant="h4" fontWeight="bold">
                                  {formatCurrency(
                                    selectedSchools.reduce((sum, school) => sum + (school.budget || 0), 0) - 
                                    (showExpenditureResults ? 
                                      expenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0) : 
                                      totalDebt)
                                  )}
                                </Typography>
                              </Paper>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </ResultCard>
                    </TabPanel>

                    {/* Tab 2: Schools Details */}
                    <TabPanel value={tabValue} index={1}>
                      <Box>
                        {selectedSchools.map((school) => (
                          <ResultCard key={school.schoolSymbol} sx={{ mb: 2 }}>
                            <CardContent sx={{ p: 0 }}>
                              <Box 
                                sx={{ 
                                  p: 2, 
                                  display: 'flex', 
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                                  bgcolor: 'primary.light',
                                  color: 'primary.contrastText'
                                }}
                                onClick={() => toggleSchoolExpansion(school.schoolSymbol)}
                              >
                                <Box>
                                  <Typography variant="h6">
                                    {school.schoolName}
                                  </Typography>
                                  <Typography variant="body2">
                                    סמל מוסד: {school.schoolSymbol}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h6" sx={{ mr: 2 }}>
                                    תקציב: {formatCurrency(school.budget || 0)}
                                  </Typography>
                                  {expandedSchool === school.schoolSymbol ? 
                                    <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </Box>
                              </Box>
                              
                              <Collapse in={expandedSchool === school.schoolSymbol}>
                                <Box sx={{ p: 2 }}>
                                  <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                      <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'error.contrastText' }}>
                                        <Typography variant="subtitle2">סך החובות</Typography>
                                        <Typography variant="h5">
                                          {formatCurrency(
                                            (school.expenditures || []).reduce(
                                              (sum, exp) => sum + (exp.remainToPay || 0), 0
                                            )
                                          )}
                                        </Typography>
                                      </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <Paper sx={{ p: 2, bgcolor: 'info.light', color: 'info.contrastText' }}>
                                        <Typography variant="subtitle2">סך ההוצאות</Typography>
                                        <Typography variant="h5">
                                          {formatCurrency(
                                            (school.expenditures || []).reduce(
                                              (sum, exp) => sum + (exp.expenditureSum || 0), 0
                                            )
                                          )}
                                        </Typography>
                                      </Paper>
                                    </Grid>
                                  </Grid>
                                  
                                  {(school.expenditures?.length > 0) && (
                                    <Box sx={{ mt: 2 }}>
                                      <Typography variant="subtitle1" gutterBottom>
                                        פירוט הוצאות אחרונות
                                      </Typography>
                                      <StyledTableContainer component={Paper}>
                                        <Table size="small">
                                          <TableHead>
                                            <TableRow>
                                              <TableCell>תאריך</TableCell>
                                              <TableCell>סכום</TableCell>
                                              <TableCell>קטגוריה</TableCell>
                                              <TableCell>שם המזמין</TableCell>
                                              <TableCell>סטטוס</TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            {(school.expenditures || [])
                                              .slice(0, 5) // Show only last 5 expenditures
                                              .map((exp, index) => (
                                                <TableRow key={index}>
                                                  
                                                  <TableCell>{exp.date}</TableCell>
                                                  <TableCell>{formatCurrency(exp.expenditureSum || 0)}</TableCell>
                                                  <TableCell>{exp.categorId}</TableCell>
                                                  <TableCell>{exp.ordererName}</TableCell>
                                                  <TableCell>
                                                    <Chip 
                                                      label={exp.isAccepted ? "אושר" : "ממתין לאישור"} 
                                                      color={exp.isAccepted ? "success" : "warning"}
                                                      size="small"
                                                    />
                                                  </TableCell>
                                                </TableRow>
                                              ))}
                                          </TableBody>
                                        </Table>
                                      </StyledTableContainer>
                                    </Box>
                                  )}
                                </Box>
                              </Collapse>
                            </CardContent>
                          </ResultCard>
                        ))}
                      </Box>
                    </TabPanel>

                    {/* Tab 3: Expenditures Table with Payment Options */}
                    <TabPanel value={tabValue} index={2}>
                      {showExpenditureResults && (
                        <>
                          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6">
                              טבלת הוצאות מרוכזת
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <TextField
                                placeholder="חיפוש..."
                                variant="outlined"
                                size="small"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <SearchIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              
                              <ActionButton
                                variant="contained"
                                color="success"
                                startIcon={<PaymentIcon />}
                                onClick={processPayments}
                                disabled={!Object.values(paymentSelections).some(selected => selected)}
                              >
                                בצע תשלום
                              </ActionButton>
                            </Box>
                          </Box>
                          
                          <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                            <Paper sx={{ p: 2, flex: 1, textAlign: 'center', bgcolor: 'info.light', color: 'info.contrastText' }}>
                              <Typography variant="subtitle2">סך הכל הוצאות</Typography>
                              <Typography variant="h6" fontWeight="bold">
                                {formatCurrency(filteredExpenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0))}
                              </Typography>
                            </Paper>
                            
                            <Paper sx={{ p: 2, flex: 1, textAlign: 'center', bgcolor: 'error.light', color: 'error.contrastText' }}>
                              <Typography variant="subtitle2">סך הכל לתשלום</Typography>
                              <Typography variant="h6" fontWeight="bold">
                                {formatCurrency(filteredExpenditures.reduce((sum, exp) => sum + (exp.remainToPay || 0), 0))}
                              </Typography>
                            </Paper>
                            
                            <Paper sx={{ p: 2, flex: 1, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
                              <Typography variant="subtitle2">נבחר לתשלום</Typography>
                              <Typography variant="h6" fontWeight="bold">
                                {formatCurrency(
                                  Object.keys(paymentSelections)
                                    .filter(id => paymentSelections[id])
                                    .reduce((sum, id) => sum + Number(paymentAmounts[id] || 0), 0)
                                )}
                              </Typography>
                            </Paper>
                          </Box>
                          
                          <StyledTableContainer component={Paper}>
                            <Table stickyHeader>
                              <TableHead>
                                <TableRow>
                                  <TableCell padding="checkbox">
                                    <Checkbox 
                                      color="primary"
                                      onChange={() => {
                                        const allSelected = Object.values(paymentSelections).every(selected => selected);
                                        const newSelections = {};
                                        Object.keys(paymentSelections).forEach(id => {
                                          newSelections[id] = !allSelected;
                                        });
                                        setPaymentSelections(newSelections);
                                      }}
                                      checked={
                                        Object.keys(paymentSelections).length > 0 &&
                                        Object.values(paymentSelections).every(selected => selected)
                                      }
                                      indeterminate={
                                        Object.values(paymentSelections).some(selected => selected) &&
                                        !Object.values(paymentSelections).every(selected => selected)
                                      }
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'date'}
                                      direction={orderBy === 'date' ? order : 'asc'}
                                      onClick={() => handleRequestSort('date')}
                                    >
                                      תאריך
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'schoolName'}
                                      direction={orderBy === 'schoolName' ? order : 'asc'}
                                      onClick={() => handleRequestSort('schoolName')}
                                    >
                                      מוסד
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'expenditureSum'}
                                      direction={orderBy === 'expenditureSum' ? order : 'asc'}
                                      onClick={() => handleRequestSort('expenditureSum')}
                                    >
                                      סכום הוצאה
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'remainToPay'}
                                      direction={orderBy === 'remainToPay' ? order : 'asc'}
                                      onClick={() => handleRequestSort('remainToPay')}
                                    >
                                      יתרה לתשלום
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'categorId'}
                                      direction={orderBy === 'categorId' ? order : 'asc'}
                                      onClick={() => handleRequestSort('categorId')}
                                    >
                                      קטגוריה
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'ordererName'}
                                      direction={orderBy === 'ordererName' ? order : 'asc'}
                                      onClick={() => handleRequestSort('ordererName')}
                                    >
                                      שם המזמין
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>
                                    <TableSortLabel
                                      active={orderBy === 'supplierNum'}
                                      direction={orderBy === 'supplierNum' ? order : 'asc'}
                                      onClick={() => handleRequestSort('supplierNum')}
                                    >
                                      קוד ספק
                                    </TableSortLabel>
                                  </TableCell>
                                  <TableCell>סטטוס</TableCell>
                                  <TableCell>תשלום</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {paginatedExpenditures.map((exp, index) => {
                                  const id = `${exp.schoolSymbol}-${exp.id || index}`;
                                  return (
                                    <TableRow key={id} hover>
                                      <TableCell padding="checkbox">
                                        <Checkbox
                                          checked={paymentSelections[id] || false}
                                          onChange={() => handlePaymentSelectionChange(id)}
                                          color="primary"
                                        />
                                      </TableCell>
                                      <TableCell>{exp.date}</TableCell>
                                      <TableCell>
                                        <Chip 
                                          label={exp.schoolName || exp.schoolSymbol} 
                                          size="small"
                                          sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}
                                        />
                                      </TableCell>
                                      <TableCell>{formatCurrency(exp.expenditureSum || 0)}</TableCell>
                                      <TableCell>{formatCurrency(exp.remainToPay || 0)}</TableCell>
                                      <TableCell>{exp.categorId}</TableCell>
                                      <TableCell>{exp.ordererName}</TableCell>
                                      <TableCell>{exp.supplierNum}</TableCell>
                                      <TableCell>
                                        <Chip 
                                          label={exp.isAccepted ? "אושר" : "ממתין לאישור"} 
                                          color={exp.isAccepted ? "success" : "warning"}
                                          size="small"
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                          <TextField
                                            type="number"
                                            size="small"
                                            value={paymentAmounts[id] || 0}
                                            onChange={(e) => handlePaymentAmountChange(id, e.target.value)}
                                            disabled={!paymentSelections[id]}
                                            InputProps={{
                                              startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                                            }}
                                            sx={{ width: '120px' }}
                                          />
                                          <Tooltip title="תשלום מלא">
                                            <IconButton 
                                              size="small" 
                                              color={paymentSelections[id] ? "success" : "default"}
                                              onClick={() => {
                                                handlePaymentSelectionChange(id);
                                                handlePaymentAmountChange(id, exp.remainToPay || 0);
                                              }}
                                            >
                                              <CheckCircleIcon />
                                            </IconButton>
                                          </Tooltip>
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </StyledTableContainer>
                          
                          <TablePagination
                            component="div"
                            count={filteredExpenditures.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage="שורות בעמוד:"
                            labelDisplayedRows={({ from, to, count }) => `${from}-${to} מתוך ${count}`}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                          />
                        </>
                      )}
                    </TabPanel>
                  </Box>
                )}
              </>
            )}

            {selectedSchools.length === 0 && !loading && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  לא נבחרו מוסדות
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  בחר מוסד אחד או יותר מהרשימה למעלה כדי להציג נתונים
                </Typography>
              </Box>
            )}
          </>
        )}
      </StyledPaper>

      {/* Add School Dialog */}
      <Dialog 
        open={addSchoolDialog} 
        onClose={() => setAddSchoolDialog(false)}
        maxWidth="md"
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">הוספת מוסד חדש</Typography>
            <IconButton onClick={() => setAddSchoolDialog(false)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <AddSchool onSuccess={() => {
            setAddSchoolDialog(false);
            refreshData();
          }} />
        </DialogContent>
      </Dialog>
    </Root>
  );
};
