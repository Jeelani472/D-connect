import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

function NGORegister() {
  const [orgId, setOrgId] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [docs, setDocs] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/ngo/register",
        { orgId, name, area, docs },
        { headers: { "x-auth-token": token } }
      );
      alert("NGO registered successfully!");
      navigate("/dashboard");
    } catch  {
      alert("NGO registration failed");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        NGO Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Organization ID"
          fullWidth
          margin="normal"
          value={orgId}
          onChange={(e) => setOrgId(e.target.value)}
        />
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Area"
          fullWidth
          margin="normal"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <TextField
          label="Documents"
          fullWidth
          margin="normal"
          value={docs}
          onChange={(e) => setDocs(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Box>
  );
}

export default NGORegister;
