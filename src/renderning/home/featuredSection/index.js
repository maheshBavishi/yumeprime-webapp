'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './featuredSection.module.scss';

const featuredCount = 10;
const boxList = Array.from({ length: featuredCount });

export default function FeaturedSection() {
    return (
        <section className={styles.featuredSection}>
            <div className='container'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    As Featured In
                </motion.h2>
            </div>

            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                    {[0, 1].map((trackIndex) => (
                        <motion.div
                            key={trackIndex}
                            className={styles.marqueeGroup}
                            animate={{ x: ['-100%', '0%'] }}
                            transition={{
                                ease: 'linear',
                                duration: 25,
                                repeat: Infinity,
                            }}
                        >
                            {boxList.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.box}
                                    whileHover={{ 
                                        opacity: 0.25, 
                                        scale: 1.03,
                                        transition: { duration: 0.2 } 
                                    }}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

