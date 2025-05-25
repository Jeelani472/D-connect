import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

export function About() {
  return (
    <Container sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          About D-Connect
        </Typography>
        <Typography variant="body1" color="text.secondary">
          D-Connect is a platform that connects households willing to donate items such as clothes,
          food, and toys with NGOs that need them. By using real-time geolocation, smart matching,
          and AI-based scheduling, we aim to reduce waste and empower charities. Our mission is to
          simplify the act of giving and amplify its impact by bridging donors and receivers through
          seamless technology.
        </Typography>
      </motion.div>
    </Container>
  );
}
