import React from 'react';
import { motion }  from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaRegHandshake } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaHandHoldingHeart className="text-4xl text-cyan-400" />,
    title: '5,000+ Donations',
    description: 'Delivered essential items to thousands of families in need.',
  },
  {
    icon: <FaRegHandshake className="text-4xl text-cyan-400" />,
    title: '100+ NGO Partners',
    description: 'Collaborating with NGOs across the country.',
  },
  {
    icon: <FaUsers className="text-4xl text-cyan-400" />,
    title: '1,200+ Volunteers',
    description: 'Passionate individuals driving real change.',
  },
];

const ImpactHighlights = () => {
  return (
    <div className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Impact Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactHighlights;
