import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableMui from './Components/TableMui/TableMui';
import HeaderMui from './Components/HeaderMui/HeaderMui';
import CreateUser from './Components/UserForms/CreateUser';
import EditUser from './Components/UserForms/EditUser';
import styles from './App.module.css';
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Container maxWidth="xl" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box className={styles.app}>
          <HeaderMui />
          <Routes>
            <Route path="/" element={<TableMui />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
