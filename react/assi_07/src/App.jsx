import React from 'react';
import TableMui from './Components/TableMui/TableMui';
import HeaderMui from './Components/HeaderMui/HeaderMui';
import styles from './App.module.css';
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box className={styles.app}>
        <HeaderMui />
        <TableMui />
      </Box>
    </Container>
  );
}

export default App;
