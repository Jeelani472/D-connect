import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Logout as LogoutIcon,
  Home as HomeIcon,
  AccountCircle as AccountIcon,
} from "@mui/icons-material";
// Correct above: Home as HomeIcon, AccountCircle as AccountIcon

function Dashboard() {
  const [donations, setDonations] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food");
  const [location, setLocation] = useState("");
  // const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchDonations = async () => {
      try {
        const url =
          role === "ngo"
            ? "http://localhost:5000/api/donation"
            : `http://localhost:5000/api/donation?donor=${userid}`;
        const res = await axios.get(url, {
          headers: { "x-auth-token": token },
        });
        setDonations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDonations();
  }, [role, userid, navigate]);

  const addDonation = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/donation",
        { title, description, category, location, /*language*/ donor: userid },
        { headers: { "x-auth-token": token } }
      );
      const url =
        role === "ngo"
          ? "http://localhost:5000/api/donation"
          : `http://localhost:5000/api/donation?donor=${userid}`;
      const res = await axios.get(url, { headers: { "x-auth-token": token } });
      setDonations(res.data);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.log(err);
    }
  };

  const collectDonation = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:5000/api/donation/${id}/collect`,
        {},
        { headers: { "x-auth-token": token } }
      );
      const res = await axios.get("http://localhost:5000/api/donation", {
        headers: { "x-auth-token": token },
      });
      setDonations(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#1e88e5" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate("/")}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, {username} ({role})
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => navigate("/profile")}
            sx={{ mr: 2 }}
          >
            <AccountIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3, flex: 1 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            {role === "donor" ? "Post a Donation" : "Available Donations"}
          </Typography>
          {role === "donor" && (
            <>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Description"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 2 }}
              />
              {/* <TextField
                label="Category"
                select
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ mb: 2 }}
              >
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
                <option value="toys">Toys</option>
                <option value="other">Other</option>
              </TextField> */}

              {/* Adil */}

              <TextField
                label="Category"
                select
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ mb: 2 }}
              >
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="clothes">Clothes</MenuItem>
                <MenuItem value="toys">Toys</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>

              <TextField
                label="Location"
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button onClick={addDonation} variant="contained" sx={{ mb: 2 }}>
                Add Donation
              </Button>
            </>
          )}
        </Paper>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            {role === "donor" ? "Your Donations" : "All Pending Donations"}
          </Typography>
          <List>
            {donations.map((donation) => (
              <ListItem key={donation._id}>
                <ListItemText
                  primary={donation.title}
                  secondary={`${donation.description} (${
                    donation.urgency || "low"
                  })`}
                />
                {role === "ngo" && (
                  <Button onClick={() => collectDonation(donation._id)}>
                    Collect
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
}

export default Dashboard;
