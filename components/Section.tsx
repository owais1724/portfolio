
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative py-24 px-6 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
