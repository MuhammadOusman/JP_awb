import React, { useState } from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import DeleteIcon from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "./HeaderMui.module.css";

function HeaderMui() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleAddNewEmployee = () => {
    navigate('/create');
  };

  const handleDeleteAll = () => {
    setOpenConfirmDialog(true);
  };

  const confirmDeleteAll = async () => {
    try {
      // Make API call to delete all records
      await axios.delete('http://localhost:3000/users');
      // Optionally, you could fetch the updated data here
      // and update the state to reflect the changes in the UI
    } catch (error) {
      console.error('Error deleting all records:', error);
    } finally {
      setOpenConfirmDialog(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenConfirmDialog(false);
  };

  return (
    <Box
      className={styles.header}
      sx={{
        backgroundColor: "#496786",
        color: "white",
        px: { xs: 2, sm: 3 },
        py: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography variant={isSmall ? "h6" : "h5"} sx={{ fontWeight: "bold", flex: 1 }}>
        Manage <span style={{ color: "white", fontWeight: "bolder" }}>Employees</span>
      </Typography>

      <Stack direction="row" spacing={2} sx={{ flexShrink: 0 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteAll}
        >
          Delete All
        </Button>

        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleAddNewEmployee}
        >
          Add New Employee
        </Button>
      </Stack>

      <Dialog
        open={openConfirmDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete all records? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDeleteAll} color="error" autoFocus>
            Delete All
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default HeaderMui;
