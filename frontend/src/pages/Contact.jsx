// src/pages/Contact.jsx
import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <Container sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          We'd love to hear from you. Whether you’re a donor, an NGO, or just have a question,
          feel free to reach out.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Email" variant="outlined" margin="normal" />
            <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Send Message</Button>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
