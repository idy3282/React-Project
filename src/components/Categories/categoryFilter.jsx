import React, { useState } from 'react';
import { 
  Paper, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel,
  Collapse,
  Divider,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import './categories.css';

export const CategoryFilter = ({ onFilter, onClose, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showActive, setShowActive] = useState(true);
  const [showInactive, setShowInactive] = useState(true);

  const handleApplyFilter = () => {
    onFilter({
      searchTerm,
      sortBy,
      sortDirection,
      showActive,
      showInactive
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setSortBy('name');
    setSortDirection('asc');
    setShowActive(true);
    setShowInactive(true);
    onFilter({
      searchTerm: '',
      sortBy: 'name',
      sortDirection: 'asc',
      showActive: true,
      showInactive: true
    });
  };

  return (
    <Collapse in={isOpen}>
      <Paper className="filter-container" elevation={2}>
        <Box className="filter-header">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FilterListIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1" fontWeight="bold">סינון וחיפוש</Typography>
          </Box>
          <IconButton size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        
        <Divider />
        
        <Box className="filter-content">
          <TextField
            label="חיפוש לפי שם"
            variant="outlined"
            size="small"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            margin="normal"
          />
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>מיון לפי:</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Button 
                variant={sortBy === 'name' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => {setSortBy('name')
                if (sortBy === 'name') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortBy('name');
                    setSortDirection('asc');
                  }}}
                startIcon={sortBy === 'name' && <SortIcon />}
                
              >
                שם
              </Button>
              <Button 
                variant={sortBy === 'date' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => {
                  if (sortBy === 'date') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortBy('date');
                    setSortDirection('asc');
                  }
                }}
                startIcon={sortBy === 'date' && <SortIcon />}
              >
                תאריך
              </Button>
              <Button 
                variant={sortBy === 'count' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => {
                  if (sortBy === 'count') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortBy('count');
                    setSortDirection('asc');
                  }
                }}
                startIcon={sortBy === 'count' && <SortIcon />}
              >
                מספר פריטים
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>סטטוס:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={showActive} 
                    onChange={(e) => setShowActive(e.target.checked)}
                    color="primary"
                  />
                }
                label="פעיל"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={showInactive} 
                    onChange={(e) => setShowInactive(e.target.checked)}
                    color="primary"
                  />
                }
                label="לא פעיל"
              />
            </Box>
          </Box>
        </Box>
        
        <Box className="filter-actions">
          <Button variant="text" onClick={handleReset}>
            איפוס
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleApplyFilter}
          >
            החל סינון
          </Button>
        </Box>
      </Paper>
    </Collapse>
  );
};
