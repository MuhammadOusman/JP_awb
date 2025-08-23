import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./BaseTable.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BaseTable = ({
  headers,
  keys,
  rows,
  onDelete,
  editPath,
  btnText,
  btnNavigatePath,
  columnWidths = {},
}) => {
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "var(--neon-green)",
      fontWeight: "bold",
      color: "var(--background-dark)",
      fontSize: "clamp(12px, 2vw, 16px)",
      letterSpacing: 1,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-family-primary)",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "clamp(12px, 1.8vw, 14px)",
      whiteSpace: "normal",
      wordBreak: "break-word",
      color: "var(--text-primary)",
      fontFamily: "var(--font-family-primary)",
      backgroundColor: "var(--background-light)",
      borderBottom: "1px solid var(--border-color)",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "var(--background-light)",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <Typography
        variant="h4"
        className={styles.tableContainer}
        sx={{
          color: "var(--neon-green)",
          fontWeight: "bolder",
          marginTop: "120px !important",
          marginBottom: "20px",
          fontFamily: "var(--font-family-primary)",
        }}
      >
        View {btnText}
        {btnText.slice(-1) === "s" ? "es" : "s"}
      </Typography>
      <TableContainer
        className={styles.tableContainer}
        component={Paper}
        sx={{
          width: "100%",
          overflowX: "auto",
          borderRadius: "var(--border-radius-medium)",
          border: "1px solid var(--border-color)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          backgroundColor: "var(--background-light)",
        }}
      >
        <Table
          aria-label="customized table"
          sx={{ minWidth: 600, tableLayout: "fixed" }}
        >
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <StyledTableCell
                  key={i}
                  align="left"
                  sx={{ width: columnWidths[keys[i]] || "auto" }}
                >
                  {header}
                </StyledTableCell>
              ))}
              <StyledTableCell sx={{ backgroundColor: "var(--neon-green)", color: "var(--background-dark)", fontFamily: "var(--font-family-primary)" }}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                {keys.map((key, i) => (
                  <StyledTableCell
                    key={i}
                    align="left"
                    sx={{ width: columnWidths[key] || "auto" }}
                  >
                    {row[key] || "_"}
                  </StyledTableCell>
                ))}
                <StyledTableCell align="left">
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <EditIcon
                      onClick={() => navigate(`${editPath}/${row.id}`)}
                      sx={{ color: "var(--neon-green)", fontSize: "20px", cursor: "pointer", "&:hover": { transform: "scale(1.1)", color: "var(--neon-green-dark)" }, transition: "all var(--transition-speed)" }}
                    />
                    <DeleteIcon
                      onClick={() => onDelete(row.id)}
                      sx={{ color: "red", fontSize: "20px", cursor: "pointer", "&:hover": { transform: "scale(1.1)", color: "darkred" }, transition: "all var(--transition-speed)" }}
                    />
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{
          marginTop: "20px !important",
          borderColor: "var(--neon-green)",
          color: "var(--neon-green)",
          transition: "all var(--transition-speed)",
          "&:hover": {
            backgroundColor: "var(--neon-green)",
            color: "var(--background-dark)",
            borderColor: "var(--neon-green)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 30px rgba(0, 255, 153, 0.2)",
          },
          borderRadius: "var(--border-radius-small)",
          fontFamily: "var(--font-family-primary)",
        }}
        className={styles.tableContainer}
        variant="outlined"
        fullWidth
        onClick={() => navigate(btnNavigatePath)}
      >
        Add {btnText}
      </Button>
    </>
  );
};
