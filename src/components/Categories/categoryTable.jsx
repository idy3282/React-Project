import React from 'react';
import { Paper, Typography, Box, Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import './categories.css';

export const CategoryTable = ({ categories, onEdit, onDelete }) => {
  if (!categories || categories.length === 0) {
    return (
      <Box className="empty-state">
        <Typography variant="body2">אין קטגוריות להצגה</Typography>
      </Box>
    );
  }

  // Group categories into rows of 3 for table-like display
  const rows = [];
  for (let i = 0; i < categories.length; i += 3) {
    rows.push(categories.slice(i, i + 3));
  }

  return (
    <Paper elevation={0} className="category-table-container">
      <Box className="category-table-header">
        <Box className="category-table-row header-row">
          <Typography className="table-cell" variant="subtitle2">שם קטגוריה</Typography>
          <Typography className="table-cell" variant="subtitle2">מספר פריטים</Typography>
          <Typography className="table-cell" variant="subtitle2">פעולות</Typography>
        </Box>
      </Box>
      
      <Box className="category-table-body">
        {categories.map((category) => (
          <Box key={category.id || category.categoryName} className="category-table-row">
            <Box className="table-cell category-name">
              <FolderIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">{category.categoryName}</Typography>
            </Box>
            <Box className="table-cell">
              <Typography variant="body2">{category.itemCount || 0}</Typography>
            </Box>
            <Box className="table-cell actions">
              <Tooltip title="ערוך">
                <IconButton 
                  size="small" 
                  color="primary"
                  onClick={() => onEdit && onEdit(category)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="מחק">
                <IconButton 
                  size="small" 
                  color="error"
                  onClick={() => onDelete && onDelete(category)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};