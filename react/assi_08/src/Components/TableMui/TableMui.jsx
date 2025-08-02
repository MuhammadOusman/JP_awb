import * as React from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Stack, Box, useMediaQuery, useTheme, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TableMui.module.css";

export default function TableMui() {
  const [rows, setRows] = useState([]);
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const formatted = response.data.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
        }));
        setRows(formatted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setRows(rows.filter((row) => row.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const columns = [
    {
      field: "firstName",
      headerName: "First name",
      minWidth: isWide ? 250 : 150,
      flex: isWide ? undefined : 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      minWidth: isWide ? 250 : 150,
      flex: isWide ? undefined : 1,
    },
    {
      field: "username",
      headerName: "Username",
      minWidth: isWide ? 250 : 150,
      flex: isWide ? undefined : 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: isWide ? 300 : 200,
      flex: isWide ? undefined : 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: isWide ? 250 : 200,
      flex: isWide ? undefined : 1,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button onClick={() => handleEdit(params.row.id)} startIcon={<EditIcon style={{ color: "orange" }} />}>
            Edit
          </Button>
          <Button onClick={() => handleDelete(params.row.id)} startIcon={<DeleteIcon style={{ color: "red" }} />}>
            Delete
          </Button>
        </Stack>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper className={styles.tableContainer} sx={{ width: "100%", overflowX: "auto" }}>
      <Box className={styles.tableBox} sx={{ width: "100%", boxSizing: "border-box" }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </Box>
    </Paper>
  );
}
