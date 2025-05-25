import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

export function Testimonials() {
  const feedbacks = [
    {
      name: 'Aarav Sharma',
      text: 'D-Connect helped us find the right people to distribute clothes during winter. Amazing platform!',
    },
    {
      name: 'Sneha Patel',
      text: 'The interface is intuitive and easy to use. It made donation so much simpler for my family.',
    },
    {
      name: 'NGO ReachOut',
      text: 'Our NGO was able to serve more families thanks to timely donations received via D-Connect.',
    },
  ];

  return (
    <Container sx={{ py: 8, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom align="center">
          What People Say
        </Typography>
        <Grid container spacing={10} justifyContent="center" sx={{ mt: 4 }}>
          {feedbacks.map((fb, index) => (
            <Grid item xs={12} sm={8} md={6} key={index}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  backgroundColor: '#f0f4ff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  mb: 2, // <--- This ensures vertical spacing between cards
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.02)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#1e88e5', mr: 2, width: 48, height: 48 }}>
                    {fb.name.charAt(0)}
                  </Avatar>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {fb.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {fb.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
