import React from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import DeleteIcon from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/AddCircle";
import styles from "./HeaderMui.module.css";

function HeaderMui() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
        >
          Add New Employee
        </Button>
      </Stack>
    </Box>
  );
}

export default HeaderMui;
