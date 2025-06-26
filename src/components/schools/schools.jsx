

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,
  CircularProgress,
  Divider,
  Alert,
  Fade,
  Zoom,
  Grow,
  Collapse,
  Switch,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';

import { styled } from '@mui/material/styles';

// Icons
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RefreshIcon from '@mui/icons-material/Refresh';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PaymentIcon from '@mui/icons-material/Payment';
import WarningIcon from '@mui/icons-material/Warning';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SortIcon from '@mui/icons-material/Sort';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { allSchoolsThunk } from '../../Redux/Slices/Schools/getSchoolThunk';
import { allExpendituresThunk } from '../../Redux/Slices/Expenditures/getExpendituresThunk';
import { allCategoriesThunk } from '../../Redux/Slices/Categories/getCategoriesThunk';
import { updatePaymentsThunk }  from '../../Redux/Slices/Payments/updateThunk';
import { clearPaymentStatus } from '../../Redux/Slices/Payments/paymentsSlice';
import { getDebtOfSchool } from '../../Redux/Slices/Schools/getSchoolThunk';

import './school.css';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  direction: 'rtl',
  height: '90vh',
  width: '90%',
  overflow: 'hidden',
  borderRadius: '16px',
  // boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  margin: '0 auto',
  padding: '24px',
  // backgroundColor: '#ffffff',
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
}));

const HeaderWithIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}));

const HeaderIcon = styled(SchoolIcon)(({ theme }) => ({
  fontSize: '40px',
  color: '#00796b',
  backgroundColor: 'rgba(0, 121, 107, 0.1)',
  padding: '8px',
  borderRadius: '50%',
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '30px',
  padding: '8px 16px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: variant === 'contained' ? '0 4px 12px rgba(0, 121, 107, 0.2)' : 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: variant === 'contained'
      ? '0 6px 16px rgba(0, 121, 107, 0.3)'
      : '0 4px 12px rgba(0, 121, 107, 0.1)',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
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
}));

const StyledTableCell = styled(TableCell)(({ theme, header }) => ({
  padding: header ? '16px' : '12px 16px',
  fontSize: header ? '0.875rem' : '0.875rem',
  fontWeight: header ? 700 : 400,
  backgroundColor: header ? '#00796b' : 'inherit',
  color: header ? 'white' : 'inherit',
  whiteSpace: 'nowrap',
}));

const SchoolChip = styled(Chip)(({ theme }) => ({

  fontWeight: 100,
  margin: '4px',
  borderRadius: '16px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
    transform: 'translateY(-2px)',
  },
}));

const SummaryCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

const StatBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StatIconBox = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 121, 107, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
}));

const PaymentInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#00796b',
        borderWidth: '2px',
      },
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#00796b',
  },
}));

export const School = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State variables
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [availableSchools, setAvailableSchools] = useState([]);
  const [filteredExpenditures, setFilteredExpenditures] = useState([]);
  const [updatedPayments, setUpdatedPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paymentStatus, setPaymentStatus] = useState({});
  const [paymentAmounts, setPaymentAmounts] = useState({});
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [selectedExpenditure, setSelectedExpenditure] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [schoolDialogOpen, setSchoolDialogOpen] = useState(false);
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [debtData, setDebtData] = useState({
    totalDebt: 0,
    debtBySupplier: {}
  });
  const [showDebtDialog, setShowDebtDialog] = useState(false);

  // Redux selectors
  const currUser = useSelector(u => u.user.currUser);
  const allSchools = useSelector(s => s.school.allSchools || []);
  const allExpenditures = useSelector(e => e.expenditure.allExpenditures || []);
  const categories = useSelector(e => e.category.allCategories || []);
  const paymentsLoading = useSelector(state => state.payments.loading);
  const paymentsError = useSelector(state => state.payments.error);
  const paymentsSuccess = useSelector(state => state.payments.success);
  const updatedCount = useSelector(state => state.payments.updatedCount);
  // Table columns definition
  const columns = [
    { id: 'קוד הוצאה', label: 'id', minWidth: 80, align: 'center', sortable: true },
    {
      id: 'סמל מוסד',
      label: 'schoolSymbol',
      minWidth: 100,
      align: 'center',
      sortable: true,

    },
    {
      id: 'סכום הוצאה',
      label: 'expenditureSum',
      minWidth: 120,
      align: 'right',
      sortable: true,
      format: (value) => value.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' }),
    },
    {
      id: 'קטגוריה',
      label: 'categoryName',
      minWidth: 120,
      align: 'right',
      sortable: true,

    },
    {
      id: 'שם ספק',
      label: 'supplierName',
      minWidth: 150,
      align: 'right',
      sortable: true,
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
      minWidth: 120,
      align: 'right',
      sortable: true,
    },
    {
      id: 'תאריך',
      label: 'date',
      minWidth: 100,
      align: 'center',
      sortable: true,
      renderCell: (value) => (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DateRangeIcon sx={{ mr: 1, fontSize: '0.875rem', color: '#00796b' }} />
          {formatDate(value)}
        </Box>
      )
    },
    {
      id: 'תשלום',
      label: 'payment',
      minWidth: 150,
      align: 'center',
      renderCell: (row) => (
        <Box className="payment-cell">
          {paymentStatus[row.id] ? (
            <Box className="payment-info">
              {paymentAmounts[row.id] && paymentAmounts[row.id] < row.expenditureSum ? (
                <Tooltip title={`שולם ${paymentAmounts[row.id].toLocaleString('he-IL')} ₪ מתוך ${row.expenditureSum.toLocaleString('he-IL')} ₪`}>
                  <Chip
                    icon={<WarningIcon />}
                    label="תשלום חלקי"
                    size="small"
                    color="warning"
                    onClick={() => handlePaymentClick(row)}
                    className="partial-payment-chip"
                  />
                </Tooltip>
              ) : (
                <Tooltip title="שולם במלואו">
                  <Chip
                    icon={<CheckCircleIcon />}
                    label="שולם"
                    size="small"
                    color="success"
                    className="full-payment-chip"
                  />
                </Tooltip>
              )}
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Checkbox
                checked={false}
                onChange={() => handleFullPaymentChange(row)}
                size="small"
                sx={{
                  color: '#00796b',
                  '&.Mui-checked': {
                    color: '#00796b',
                  }
                }}
              />
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handlePaymentClick(row)}
                sx={{
                  borderRadius: '8px',
                  minWidth: 'auto',
                  padding: '3px 8px',
                  borderColor: '#00796b',
                  color: '#00796b',
                  '&:hover': {
                    borderColor: '#00695c',
                    backgroundColor: 'rgba(0, 121, 107, 0.04)',
                  }
                }}
              >
                חלקי
              </Button>
            </Box>
          )}
        </Box>
      )
    },
  ];

  // Helper functions
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
  };

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

  const getSchoolColor = (schoolSymbol) => {
    const colors = [
      '#00796b', // teal
      '#0288d1', // blue
      '#7b1fa2', // purple
      '#c2185b', // pink
      '#d32f2f', // red
      '#f57c00', // orange
      '#689f38', // green
      '#5d4037', // brown
      '#455a64', // blue grey
      '#5e35b1', // deep purple
      '#e53935', // red
      '#43a047', // green
      '#fb8c00', // orange
      '#00acc1', // cyan
    ];

    if (!schoolSymbol) return colors[0];

    // Use school symbol to generate consistent color
    return colors[schoolSymbol % colors.length];
  };

  const getSchoolNameBySymbol = (symbol) => {
    const school = allSchools.find(s => s.schoolSymbol === symbol);
    return school ? school.schoolName : `מוסד ${symbol}`;
  };

  // Data fetching
  const fetchData = async () => {
    setLoading(true);
    setRefreshing(true);

    try {
      // Fetch all schools
      await dispatch(allSchoolsThunk());

      // Fetch all expenditures
      await dispatch(allExpendituresThunk());

      // Fetch all categories
      await dispatch(allCategoriesThunk());
    } catch (error) {
      console.error("שגיאה בטעינת נתונים:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Initialize data on component mount
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  // Update available schools when allSchools changes
  useEffect(() => {
    if (allSchools && allSchools.length > 0) {
      // Filter out school with symbol 0 (manager)
      const schools = allSchools.filter(school => school.schoolSymbol !== 0);
      setAvailableSchools(schools);
    }
  }, [allSchools]);

  // Update filtered expenditures when selected schools or all expenditures change
  useEffect(() => {
    if (selectedSchools.length > 0 && allExpenditures && allExpenditures.length > 0) {
      const selectedSymbols = selectedSchools.map(school => school.schoolSymbol);

      // Filter expenditures by selected school symbols
      const filtered = allExpenditures.filter(exp =>
        selectedSymbols.includes(exp.schoolSymbol)
      );

      setFilteredExpenditures(filtered);

      // Initialize payment status and amounts
      const initialPaymentStatus = {};
      const initialPaymentAmounts = {};

      filtered.forEach(exp => {
        initialPaymentStatus[exp.id] = false;
        initialPaymentAmounts[exp.id] = exp.expenditureSum;
      });

      setPaymentStatus(initialPaymentStatus);
      setPaymentAmounts(initialPaymentAmounts);
    } else {
      setFilteredExpenditures([]);
    }
  }, [selectedSchools, allExpenditures]);

  // Fetch debt data for selected schools
  const fetchDebtData = async () => {
    if (selectedSchools.length === 0) return;

    setLoading(true);

    try {
      let totalDebt = 0;
      const debtBySupplier = {};

      // Fetch debt for each selected school
      for (const school of selectedSchools) {
        const response = await dispatch(getDebtOfSchool(school.schoolName));

        if (response.payload) {
          // Add to total debt
          totalDebt += parseFloat(response.payload);

          // Group debt by supplier
          const schoolExpenditures = allExpenditures.filter(
            exp => exp.schoolSymbol === school.schoolSymbol
          );

          schoolExpenditures.forEach(exp => {
            if (!paymentStatus[exp.id] ||
              (paymentStatus[exp.id] && paymentAmounts[exp.id] < exp.expenditureSum)) {

              const unpaidAmount = paymentStatus[exp.id]
                ? exp.expenditureSum - paymentAmounts[exp.id]
                : exp.expenditureSum;

              if (debtBySupplier[exp.supplierName]) {
                debtBySupplier[exp.supplierName] += unpaidAmount;
              } else {
                debtBySupplier[exp.supplierName] = unpaidAmount;
              }
            }
          });
        }
      }

      setDebtData({
        totalDebt,
        debtBySupplier
      });

      setShowDebtDialog(true);
    } catch (error) {
      console.error("שגיאה בטעינת נתוני חוב:", error);
    } finally {
      setLoading(false);
    }
  };

  // Event handlers
  const handleSchoolDialogOpen = () => {
    setSchoolDialogOpen(true);
  };

  const handleSchoolDialogClose = () => {
    setSchoolDialogOpen(false);
    setSchoolSearchQuery('');
  };

  const handleSchoolSelect = (school) => {
    if (!selectedSchools.some(s => s.schoolSymbol === school.schoolSymbol)) {
      setSelectedSchools([...selectedSchools, school]);
    }
  };

  const handleRemoveSchool = (schoolToRemove) => {
    setSelectedSchools(selectedSchools.filter(
      school => school.schoolSymbol !== schoolToRemove.schoolSymbol
    ));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

    if (!event.target.value) {
      // Reset to all filtered expenditures
      if (selectedSchools.length > 0 && allExpenditures && allExpenditures.length > 0) {
        const selectedSymbols = selectedSchools.map(school => school.schoolSymbol);
        const filtered = allExpenditures.filter(exp =>
          selectedSymbols.includes(exp.schoolSymbol)
        );
        setFilteredExpenditures(filtered);
      }
      return;
    }

    // Filter based on search query
    const query = event.target.value.toLowerCase();

    if (selectedSchools.length > 0 && allExpenditures && allExpenditures.length > 0) {
      const selectedSymbols = selectedSchools.map(school => school.schoolSymbol);

      const filtered = allExpenditures.filter(exp =>
        selectedSymbols.includes(exp.schoolSymbol) && (
          exp.supplierName?.toLowerCase().includes(query) ||
          exp.categoryName?.toLowerCase().includes(query) ||
          exp.ordererName?.toLowerCase().includes(query) ||
          exp.expenditureSum?.toString().includes(query) ||
          exp.id?.toString().includes(query)
        )
      );

      setFilteredExpenditures(filtered);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');

    // Reset to all filtered expenditures
    if (selectedSchools.length > 0 && allExpenditures && allExpenditures.length > 0) {
      const selectedSymbols = selectedSchools.map(school => school.schoolSymbol);
      const filtered = allExpenditures.filter(exp =>
        selectedSymbols.includes(exp.schoolSymbol)
      );
      setFilteredExpenditures(filtered);
    }
  };

  const handleRefresh = async () => {
    await fetchData();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFullPaymentChange = (row) => {
    setPaymentStatus(prev => ({
      ...prev,
      [row.id]: true
    }));

    setPaymentAmounts(prev => ({
      ...prev,
      [row.id]: row.expenditureSum
    }));

    setUpdatedPayments(prev => {
      const existingIndex = prev.findIndex(payment => payment.expenditureId === row.id);
      const updatedPayment = {
        expenditureId: row.id,
        paidAmount: row.expenditureSum
      };

      if (existingIndex >= 0) {
        // עדכן תשלום קיים
        const newArray = [...prev];
        newArray[existingIndex] = updatedPayment;
        return newArray;
      } else {
        // הוסף תשלום חדש
        return [...prev, updatedPayment];
      }
    });
  };

  const handlePaymentClick = (expenditure) => {
    setSelectedExpenditure(expenditure);
    setPaymentAmount(paymentAmounts[expenditure.id] || expenditure.expenditureSum.toString());
    setPaymentDialogOpen(true);
  };

  const handlePaymentDialogClose = () => {
    setPaymentDialogOpen(false);
    setSelectedExpenditure(null);
    setPaymentAmount('');
  };

  const handlePaymentAmountChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setPaymentAmount(value);
    }
  };

  const handlePaymentConfirm = () => {
    if (selectedExpenditure && paymentAmount) {
      const amount = parseFloat(paymentAmount);

      // Update payment status and amount
      setPaymentStatus(prev => ({
        ...prev,
        [selectedExpenditure.id]: true
      }));

      setPaymentAmounts(prev => ({
        ...prev,
        [selectedExpenditure.id]: amount
      }));

      // החלף את כל הקוד הישן בפונקציה הזו עם:
      setUpdatedPayments(prev => {
        const existingIndex = prev.findIndex(payment => payment.expenditureId === selectedExpenditure.id);
        const updatedPayment = {
          expenditureId: selectedExpenditure.id,
          paidAmount: amount
        };

        if (existingIndex >= 0) {
          // עדכן תשלום קיים
          const newArray = [...prev];
          newArray[existingIndex] = updatedPayment;
          return newArray;
        } else {
          // הוסף תשלום חדש
          return [...prev, updatedPayment];
        }
      });

      handlePaymentDialogClose();
    }
  };

  // פונקציה לשליחת עדכוני התשלומים לשרת
  // החלף את הפונקציה sendPaymentUpdatesToServer עם:

  // החלף את הפונקציה הקיימת עם זו:
  const sendPaymentUpdatesToServer = async () => {
    if (updatedPayments.length === 0) {
      alert('אין תשלומים לעדכן');
      return;
    }

    try {
      // הכן את הנתונים לשליחה
      const paymentData = {
        payments: updatedPayments.map(payment => ({
          expenditureId: payment.expenditureId,
          paidAmount: payment.paidAmount
        })),
        updatedBy: currUser.id || currUser.schoolSymbol,
        updateDate: new Date().toISOString()
      };

      // שלח דרך Redux
      const result = await dispatch(updatePaymentsThunk(paymentData));

      if (updatePaymentsThunk.fulfilled.match(result)) {
        alert(`עודכנו ${updatedPayments.length} תשלומים בהצלחה!`);
        setUpdatedPayments([]); // נקה את המערך אחרי שליחה מוצלחת
        await fetchData(); // רענן את הנתונים
        dispatch(clearPaymentStatus()); // נקה את הסטטוס
      } else {
        throw new Error(result.payload || 'שגיאה לא ידועה');
      }

    } catch (error) {
      console.error('Error updating payments:', error);
      alert(`שגיאה בעדכון התשלומים: ${error.message}`);
    }
  };


  const handleSort = (columnId) => {
    const column = columns.find(col => col.id === columnId);
    if (!column || !column.sortable) return;

    const label = column.label;

    let direction = 'asc';
    if (sortConfig.key === label) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }

    setSortConfig({ key: label, direction });

    const sortedData = [...filteredExpenditures].sort((a, b) => {
      if (a[label] === null) return 1;
      if (b[label] === null) return -1;
      if (a[label] === undefined) return 1;
      if (b[label] === undefined) return -1;

      let comparison = 0;
      if (typeof a[label] === 'string') {
        comparison = a[label].localeCompare(b[label]);
      } else {
        comparison = a[label] - b[label];
      }

      return direction === 'asc' ? comparison : -comparison;
    });

    setFilteredExpenditures(sortedData);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleExportToExcel = () => {
    handleMenuClose();

    // Prepare data for export
    const dataToExport = filteredExpenditures.map(exp => ({
      'קוד הוצאה': exp.id,
      'סמל מוסד': exp.schoolSymbol,
      'שם מוסד': getSchoolNameBySymbol(exp.schoolSymbol),
      'סכום הוצאה': exp.expenditureSum,
      'קטגוריה': exp.categoryName,
      'שם ספק': exp.supplierName,
      'שם המזמין': exp.ordererName,
      'תאריך': formatDate(exp.date),
      'סטטוס תשלום': paymentStatus[exp.id] ?
        (paymentAmounts[exp.id] < exp.expenditureSum ? 'תשלום חלקי' : 'שולם במלואו') :
        'לא שולם',
      'סכום ששולם': paymentStatus[exp.id] ? paymentAmounts[exp.id] : 0,
      'יתרה לתשלום': paymentStatus[exp.id] ?
        (exp.expenditureSum - paymentAmounts[exp.id]) :
        exp.expenditureSum
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(dataToExport, {
      header: [
        'קוד הוצאה', 'סמל מוסד', 'שם מוסד', 'סכום הוצאה', 'קטגוריה',
        'שם ספק', 'שם המזמין', 'תאריך', 'סטטוס תשלום', 'סכום ששולם', 'יתרה לתשלום'
      ]
    });

    // Set RTL direction
    ws['!cols'] = [
      { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 15 },
      { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 15 }, { wch: 15 }
    ];

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "הוצאות");

    // Generate filename with current date
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const fileName = `הוצאות_מוסדות_${dateStr}.xlsx`;

    // Export to file
    XLSX.writeFile(wb, fileName);
  };

  const handleCloseDebtDialog = () => {
    setShowDebtDialog(false);
  };

  // Filter schools for selection dialog
  const filteredSchoolsForDialog = availableSchools.filter(school =>
    !selectedSchools.some(s => s.schoolSymbol === school.schoolSymbol) &&
    (school.schoolName?.toLowerCase().includes(schoolSearchQuery.toLowerCase()) ||
      school.schoolSymbol?.toString().includes(schoolSearchQuery))
  );


  return (
    <StyledPaper>
      <HeaderBox>
        <HeaderWithIcon>
          <HeaderIcon />
          <Box>
            <Typography variant="h4" component="h1" sx={{
              fontWeight: 700,
              color: '#263238',
              marginBottom: '18px'
            }}>
              ניהול הוצאות מוסדות
            </Typography>
            <Typography variant="body1" sx={{ color: '#546e7a' }}>
              צפייה וניהול של הוצאות לפי מוסדות נבחרים
            </Typography>
          </Box>
        </HeaderWithIcon>

        <Box sx={{ display: 'flex', gap: '16px' }}>
          <ActionButton
            variant="contained"
            startIcon={<SchoolIcon />}
            onClick={handleSchoolDialogOpen}
            sx={{
              bgcolor: '#00796b',
              '&:hover': { bgcolor: '#00695c' },
            }}
          >
            בחירת מוסדות
          </ActionButton>

          <ActionButton
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleExportToExcel}
            disabled={filteredExpenditures.length === 0}
            sx={{
              borderColor: '#00796b',
              color: '#00796b',
              '&:hover': { borderColor: '#00695c', color: '#00695c' },
            }}
          >
            ייצוא לאקסל
          </ActionButton>

          <ActionButton
            variant="outlined"
            startIcon={<RefreshIcon sx={{ animation: refreshing ? 'spin 1s infinite linear' : 'none' }} />}
            onClick={handleRefresh}
            disabled={refreshing}
            sx={{
              borderColor: '#00796b',
              color: '#00796b',
              '&:hover': { borderColor: '#00695c', color: '#00695c' },
            }}
          >
            רענון נתונים
          </ActionButton>

          {/* <IconButton
    aria-label="אפשרויות נוספות"
    onClick={handleMenuOpen}
    sx={{
      color: '#00796b',
      '&:hover': { backgroundColor: 'rgba(0, 121, 107, 0.08)' },
    }}
  >
    <MoreVertIcon />
  </IconButton> */}

          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                padding: '8px',
              }
            }}
          >
            {/* <MenuItem onClick={handleExportToExcel} disabled={filteredExpenditures.length === 0}>
              <ListItemIcon>
                <DownloadIcon fontSize="small" sx={{ color: '#00796b' }} />
              </ListItemIcon>
              <ListItemText primary="ייצוא לאקסל" />
            </MenuItem> */}

            {/* <MenuItem onClick={fetchDebtData} disabled={selectedSchools.length === 0}>
              <ListItemIcon>
                <AnalyticsIcon fontSize="small" sx={{ color: '#00796b' }} />
              </ListItemIcon>
              <ListItemText primary="ניתוח חובות" />
            </MenuItem> */}
          </Menu>
        </Box>

      </HeaderBox>
      {selectedSchools.length > 0 && <TextField
        fullWidth
        placeholder="חיפוש לפי ספק, קטגוריה, מזמין, סכום או קוד הוצאה..."
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            width: '37%',
            height: '50px',
            marginTop: '10px',

            marginRight: '10%',
            borderRadius: '30px',
            backgroundColor: '#ffffff',
            transition: 'box-shadow 0.3s ease',
            '&.Mui-focused': {
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',

            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00796b',
              borderWidth: '2px',
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
      />}
      {/* Selected Schools */}
      {/* <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#263238' }}>
          מוסדות נבחרים
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {selectedSchools.length === 0 ? (
            <Typography variant="body2" sx={{ color: '#78909c', fontStyle: 'italic' }}>
              לא נבחרו מוסדות. לחץ על "בחירת מוסדות" כדי להתחיל.
            </Typography>
          ) : (
            selectedSchools.map(school => (
              <SchoolChip
                key={school.schoolSymbol}
                label={`${school.schoolName} (${school.schoolSymbol})`}
                onDelete={() => handleRemoveSchool(school)}
                deleteIcon={<CloseIcon />}
                // avatar={<Avatar sx={{ bgcolor: getSchoolColor(school.schoolSymbol) }}>{school.schoolSymbol}</Avatar>}
              />
            ))
          )}
        </Box>
      </Box> */}

      {/* Search Box */}
      {selectedSchools.length > 0 && (
        // ===================זה כל הסרגל הגדול שבו נמצא החיפוש
        <Card sx={{
          //  backgroundColor: 'red',
          marginTop: '24px',
          marginBottom: '24px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}>
          {/* <CardContent sx={{width:'40%'}}>
           
          </CardContent> */}

          {/* להעביר את המוסדות הנבחרים לסרגל זה*/}



        </Card>
      )}

      {/* Expenditures Table */}
      {selectedSchools.length > 0 ? (
        <>
          {/* העברת הטבלה לאמצע העמוד וגודל הטבלה*/}
          <Box sx={{ mb: 3, width: '80%', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
            {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#263238' }}>
              הוצאות
              {filteredExpenditures.length > 0 && ` (${filteredExpenditures.length})`}
            </Typography> */}

            <StyledTableContainer>
              <Table stickyHeader aria-label="טבלת הוצאות">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        header={true}
                        onClick={() => column.sortable && handleSort(column.id)}
                        sx={{
                          cursor: column.sortable ? 'pointer' : 'default',
                          '&:hover': column.sortable ? { opacity: 0.9 } : {}
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: column.align === 'center' ? 'center' : column.align === 'right' ? 'flex-end' : 'flex-start' }}>
                          {column.id}
                          {column.sortable && sortConfig.key === column.label && (
                            <Box component="span" sx={{ ml: 1 }}>
                              {sortConfig.direction === 'asc' ?
                                <ArrowUpwardIcon fontSize="small" /> :
                                <ArrowDownwardIcon fontSize="small" />}
                            </Box>
                          )}
                        </Box>
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={columns.length} align="center" sx={{ py: 3 }}>
                        <CircularProgress size={40} sx={{ color: '#00796b' }} />
                        <Typography sx={{ mt: 2 }}>טוען נתונים...</Typography>
                      </TableCell>
                    </TableRow>
                  ) : filteredExpenditures.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={columns.length} align="center" sx={{ py: 3 }}>
                        <Typography>לא נמצאו הוצאות למוסדות הנבחרים</Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredExpenditures
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
                              if (column.label === 'payment') {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                      padding: '8px',
                                      fontSize: '0.875rem',
                                    }}
                                  >
                                    {column.renderCell(row)}
                                  </TableCell>
                                );
                              }

                              const value = row[column.label];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{
                                    padding: '8px 16px',
                                    fontSize: '0.875rem',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  {column.renderCell && column.label !== 'payment'
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
            </StyledTableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={filteredExpenditures.length}
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
              <Button sx={{
                borderRadius: '30px',
                minWidth: '80px',
                color: '#00796b',
                backgroundColor: '#00695c',
                fontWeight: 550,
                bgcolor: '#e0f2f1',
                '&:hover': { bgcolor: '#00796b' },
              }}>למעבר לתשלום</Button>
              
              <Button
                onClick={sendPaymentUpdatesToServer}
                disabled={updatedPayments.length === 0 || paymentsLoading}
                sx={{
                  borderRadius: '30px',
                  minWidth: '120px',
                  color: 'white',
                  backgroundColor: '#ff5722',
                  fontWeight: 550,
                  '&:hover': { bgcolor: '#e64a19' },
                  '&:disabled': { bgcolor: '#ccc' }
                }}
              >
                {paymentsLoading ? 'שולח...' : `עדכן ${updatedPayments.length} תשלומים`}
              </Button>

            </Box>
          </Box>




          {/* Summary Cards */}
          <Grid container spacing={3} sx={{
            mt:
              2
          }}>
            <Grid item xs={12} md={4}>
              <SummaryCard>
                <CardContent>
                  <StatBox>
                    <StatIconBox>
                      <Typography sx={{ color: '#00796b', fontWeight: 'bold' }}>₪</Typography>
                    </StatIconBox>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#546e7a' }}>
                        סך הכל הוצאות
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {filteredExpenditures.reduce((sum, exp) => sum + (exp.expenditureSum || 0), 0).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                      </Typography>
                    </Box>
                  </StatBox>
                </CardContent>
              </SummaryCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <SummaryCard>
                <CardContent>
                  <StatBox>
                    <StatIconBox>
                      <PaymentIcon sx={{ color: '#00796b' }} />
                    </StatIconBox>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#546e7a' }}>
                        סך הכל שולם
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {filteredExpenditures.reduce((sum, exp) => {
                          if (paymentStatus[exp.id]) {
                            return sum + (paymentAmounts[exp.id] || 0);
                          }
                          return sum;
                        }, 0).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                      </Typography>
                    </Box>
                  </StatBox>
                </CardContent>
              </SummaryCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <SummaryCard>
                <CardContent>
                  <StatBox>
                    <StatIconBox>
                      <WarningIcon sx={{ color: '#00796b' }} />
                    </StatIconBox>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#546e7a' }}>
                        יתרה לתשלום
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {filteredExpenditures.reduce((sum, exp) => {
                          if (paymentStatus[exp.id]) {
                            return sum + (exp.expenditureSum - paymentAmounts[exp.id]);
                          }
                          return sum + exp.expenditureSum;
                        }, 0).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                      </Typography>
                    </Box>
                  </StatBox>
                </CardContent>
              </SummaryCard>
            </Grid>
          </Grid>
        </>
      ) : (
        <Box sx={{ width: '80%', alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: '100px' }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            backgroundColor: 'rgba(0, 121, 107, 0.04)',
            borderRadius: '16px',
            border: '1px dashed rgba(0, 121, 107, 0.3)',
          }}>
            <SchoolIcon sx={{ fontSize: 60, color: 'rgba(0, 121, 107, 0.5)', mb: 2 }} />
            <Typography variant="h6" sx={{ color: '#00796b', mb: 1, fontWeight: 600 }}>
              לא נבחרו מוסדות
            </Typography>
            {selectedSchools.length === 0 && <Typography variant="body1" sx={{ color: '#546e7a', mb: 3, textAlign: 'center' }}>
              בחר מוסדות כדי להציג את ההוצאות שלהם
            </Typography>}

          </Box>
        </Box>
      )
      }

      {/* School Selection Dialog */}
      <Dialog
        open={schoolDialogOpen}
        onClose={handleSchoolDialogClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: '16px',
            padding: '16px',
            width: '100%',
            maxWidth: '600px'
          }
        }}
      >
        <DialogTitle sx={{
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon sx={{ color: '#00796b' }} />
            <Typography variant="h6">בחירת מוסדות</Typography>
          </Box>
          <IconButton onClick={handleSchoolDialogClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent  >
          <TextField
            fullWidth
            placeholder="חיפוש לפי שם או סמל מוסד..."
            value={schoolSearchQuery}
            onChange={(e) => setSchoolSearchQuery(e.target.value)}
            sx={{
              mb: 3,

              '& .MuiOutlinedInput-root': {
                borderRadius: '30px',
                height: '45px',
                marginTop: '10px',
                backgroundColor: '#ffffff',
                transition: 'box-shadow 0.3s ease',
                '&.Mui-focused': {
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#00796b',
                  borderWidth: '2px',
                },


              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: schoolSearchQuery && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSchoolSearchQuery('')}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {selectedSchools.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#00796b' }}>
                מוסדות נבחרים:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedSchools.map(school => (
                  <SchoolChip
                    key={school.schoolSymbol}
                    label={`${school.schoolName} (${school.schoolSymbol})`}
                    onDelete={() => handleRemoveSchool(school)}
                    deleteIcon={<CloseIcon sx={{ paddingRight: '0.01px', paddingLeft: '8px' }} />}

                  // avatar={<Avatar sx={{ bgcolor: getSchoolColor(school.schoolSymbol) }}>{school.schoolSymbol}</Avatar>}
                  />
                ))}
              </Box>
            </Box>
          )}

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#00796b' }}>
            מוסדות זמינים:
          </Typography>

          {filteredSchoolsForDialog.length === 0 ? (
            <Typography variant="body2" sx={{ color: '#78909c', fontStyle: 'italic', textAlign: 'center', py: 2 }}>
              {schoolSearchQuery ? 'לא נמצאו מוסדות התואמים את החיפוש' : 'אין מוסדות זמינים נוספים'}
            </Typography>
          ) : (
            <Box sx={{
              maxHeight: '300px',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '8px',
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
              {filteredSchoolsForDialog.map(school => (
                <Card
                  key={school.schoolSymbol}
                  onClick={() => handleSchoolSelect(school)}
                  sx={{
                    mb: 1,
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 121, 107, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <CardContent sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px !important',
                    '&:last-child': { paddingBottom: '12px' }
                  }}>
                    {/* <Avatar sx={{
                      bgcolor: getSchoolColor(school.schoolSymbol),
                      width: 36,
                      height: 36,
                      mr: 2
                    }}>
                      {school.schoolSymbol}
                    </Avatar> */}
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {school.schoolName}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#546e7a' }}>
                        סמל מוסד: {school.schoolSymbol}
                      </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <AddIcon sx={{ color: '#00796b' }} />
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ padding: '16px', justifyContent: 'space-between' }}>
          <Button
            onClick={() => setSelectedSchools(allSchools)}
            // disabled={selectedSchools.length === 0}
            sx={{
              borderRadius: '30px',
              minWidth: '80px',
              color: '#00796b',
              fontWeight: 550,
              bgcolor: '#e0f2f1',
              '&:hover': { bgcolor: '#00695c' },
            }}
          >
            בחר הכל
          </Button>
          <Button
            onClick={() => setSelectedSchools([])}
            disabled={selectedSchools.length === 0}
            sx={{
              borderRadius: '30px',
              minWidth: '80px',
              fontWeight: 550,
              color: '#00796b',
              bgcolor: '#e0f2f1',
              '&:hover': { bgcolor: '#00695c' },
            }}
          >
            נקה הכל
          </Button>
          <Button
            onClick={handleSchoolDialogClose}
            variant="contained"
            sx={{
              marginRight: '250px',
              borderRadius: '30px',
              minWidth: '100px',
              bgcolor: '#00796b',
              '&:hover': { bgcolor: '#00695c' },
            }}
          >
            אישור
          </Button>
        </DialogActions>
      </Dialog>

      {/* Payment Dialog */}
      <Dialog
        open={paymentDialogOpen}
        onClose={handlePaymentDialogClose}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            padding: '8px',
            maxWidth: '400px',
            width: '100%'
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <PaymentIcon color="primary" />
            <Typography variant="h6">הזנת סכום לתשלום</Typography>
          </Box>
        </DialogTitle>

        <DialogContent>
          {selectedExpenditure && (
            <>
              <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  סכום ההוצאה המלא:
                </Typography>
                <Typography variant="h5" color="text.primary" sx={{ fontWeight: 600 }}>
                  {selectedExpenditure.expenditureSum.toLocaleString('he-IL')} ₪
                </Typography>
              </Box>

              <PaymentInput
                label="סכום לתשלום"
                variant="outlined"
                fullWidth
                value={paymentAmount}
                onChange={handlePaymentAmountChange}
                type="text"
                InputProps={{
                  endAdornment: <InputAdornment position="end">₪</InputAdornment>,
                }}
                sx={{ mb: 2 }}
                autoFocus
              />

              {paymentAmount && parseFloat(paymentAmount) < selectedExpenditure.expenditureSum && (
                <Box sx={{
                  backgroundColor: 'rgba(255, 152, 0, 0.1)',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <WarningIcon color="warning" fontSize="small" />
                  <Typography variant="body2" color="warning.main">
                    שים לב: הסכום שהזנת נמוך מסכום ההוצאה המלא. זה יסומן כתשלום חלקי.
                  </Typography>
                </Box>
              )}
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ padding: '16px', justifyContent: 'center' }}>
          <Button
            onClick={handlePaymentDialogClose}
            variant="outlined"
            sx={{
              borderRadius: '30px',
              minWidth: '100px'
            }}
          >
            ביטול
          </Button>
          <Button
            onClick={handlePaymentConfirm}
            variant="contained"
            color="primary"
            disabled={!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0}
            sx={{
              borderRadius: '30px',
              minWidth: '100px',
              bgcolor: '#00796b',
              '&:hover': { bgcolor: '#00695c' },
            }}
          >
            אישור תשלום
          </Button>
        </DialogActions>
      </Dialog>

      {/* Debt Analysis Dialog */}
      <Dialog
        open={showDebtDialog}
        onClose={handleCloseDebtDialog}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: '16px',
            padding: '16px',
            width: '100%',
            maxWidth: '700px'
          }
        }}
      >
        {/* ======== */}
        <DialogTitle sx={{
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AnalyticsIcon sx={{ color: '#00796b' }} />
            <Typography variant="h6">ניתוח חובות</Typography>
          </Box>
          <IconButton onClick={handleCloseDebtDialog} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

      </Dialog>
    </StyledPaper >
  );
};

