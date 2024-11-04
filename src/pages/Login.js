import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = () => {
    // Implementar lógica de login
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 24, marginTop: 50 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            style={{ marginTop: 16 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
