'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './visionSection.module.scss';
import Button from '@/components/button';

export default function VisionSection() {
    return (
        <section className={styles.visionSection}>
            <div className='container'>
                {/* Animated Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    The vision is yours. <br />
                    The <span> execution is ours.</span>
                </motion.h2>

                {/* Animated Call To Action Button */}
                <motion.div 
                    className={styles.center}
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Button text="Open Live account" fill />
                </motion.div>
            </div>
        </section>
    );
}

