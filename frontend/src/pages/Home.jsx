import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Avatar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { motion } from "framer-motion";
import { About } from "./About";
import { Contact } from "./Contact";
import { Testimonials } from "./Testimonials";
import logo from '../assets/logo.webp'; 


const cards = [
  {
    title: "Donate Essentials",
    desc: "Contribute clothes, food, and toys to NGOs in need.",
    img: "https://media.istockphoto.com/id/1356662960/photo/unrecognizable-woman-donates-box-of-clothing-during-clothing-drive.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wz6MT4qisbSFxFix0WkWtWxdi4KPB63zGcJuHytZpmI=",
  },
  {
    title: "NGO Connect",
    desc: "NGOs can find donations nearby in real-time.",
    img: "https://tse4.mm.bing.net/th?id=OIP.faU1d5q8qGYalEo97A66_gHaEA&pid=Api&P=0&h=180",
  },
  {
    title: "Real-Time Updates",
    desc: "Get notified instantly when donations are available.",
    img: "https://images.unsplash.com/photo-1565268878573-5f968e45c9fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm90aWZpY2F0aW9uJTIwZG9uYXRpb24lMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
];

const impactData = [
  "🧥 500+ Clothes Donated",
  "🍱 800+ Meals Delivered",
  "🎁 300+ Toys to Children",
];

const ImpactHighlights = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ fontWeight: "bold", color: "#1976d2" }}
    >
      Our Impact
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {impactData.map((impact, index) => (
        <Grid item key={index}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Box
              sx={{
                background: "#e3f2fd",
                color: "#0d47a1",
                px: 4,
                py: 3,
                borderRadius: 2,
                boxShadow: 3,
                fontSize: "1.25rem",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {impact}
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f8f9fa",
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#0d47a1" }}>
        <Toolbar>
          <Box
            component="img"
            src={logo} // Update this path to your actual logo file
            alt="Logo"
            sx={{ height: 40, width: 40, mr: 2, borderRadius: "50%" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            D-Connect
          </Typography>
          {isLoggedIn ? (
            <>
              <Avatar sx={{ bgcolor: "white", color: "#0d47a1", mr: 1 }}>
                {username?.charAt(0)}
              </Avatar>
              <Typography variant="body2" sx={{ mr: 2 }}>
                {username} ({role})
              </Typography>
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/login")} color="inherit">
                Login
              </Button>
              <Button onClick={() => navigate("/register")} color="inherit">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          minHeight: "50vh",
          backgroundImage:
            'url("https://childhope.org.ph/wp-content/uploads/2022/11/childhope-giving-goods-outreach-program.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "white" }}
              gutterBottom
            >
              Welcome to D-Connect
            </Typography>
            <Typography variant="h5" sx={{ color: "white" }} gutterBottom>
              Bridging the gap between donors and NGOs through technology.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Card Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={card.img}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() =>
                        navigate(isLoggedIn ? "/dashboard" : "/login")
                      }
                    >
                      {isLoggedIn ? "Dashboard" : "Join Now"}
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Section */}
      <ImpactHighlights />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Box
        sx={{
          mt: "auto",
          py: 3,
          backgroundColor: "#0d47a1",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} D-Connect | Built by – Digital Dreamers
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
