'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './marketInsights.module.scss';

const Blog1 = '/assets/images/blog1.png';
const Blog2 = '/assets/images/blog2.png';
const Blog3 = '/assets/images/blog3.png';

const insightsData = [
    {
        id: 'forex-spread',
        image: Blog1,
        alt: 'Forex Spread',
        title: "How to Read a Forex Spread: What You're Actually Paying to Trade",
        description: 'The gap between the price you see and the price you trade at, explained.',
    },
    {
        id: 'gold-rally',
        image: Blog2,
        alt: "Gold's Rally",
        title: "Gold's Rally: What's Really Driving Spot Prices Higher",
        description: 'A weekly breakdown of the macro forces moving XAU/USD.',
    },
    {
        id: 'position-sizing',
        image: Blog3,
        alt: 'Position Sizing 101',
        title: 'Position Sizing 101: Trading Your Account, Not Your Ego',
        description: 'A practical framework used across our Standard, Plus, and Pro accounts.',
    },
];

// Title entrance animation
const titleVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// Card one-by-one sequential entrance animation
const cardVariant = {
    hidden: { 
        opacity: 0, 
        y: 55, 
        scale: 0.95 
    },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.75,
            delay: index * 0.22, // Sequential stagger: 0s, 0.22s, 0.44s
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function MarketInsights() {
    return (
        <section className={styles.marketInsights}>
            <div className='container'>
                {/* Title */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={titleVariant}
                >
                    Market Insights
                </motion.h2>

                {/* Cards Grid */}
                <div className={styles.grid}>
                    {insightsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.items}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={cardVariant}
                            whileHover="hover"
                        >
                            {/* Image with zoom on card hover */}
                            <div className={styles.imageWrapper}>
                                <motion.img 
                                    src={item.image} 
                                    alt={item.alt} 
                                    variants={{
                                        hover: { 
                                            scale: 1.06, 
                                            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
                                        }
                                    }}
                                />
                            </div>

                            {/* Card Content */}
                            <div className={styles.details}>
                                <motion.h3
                                    variants={{
                                        hover: { color: '#1A2E63', transition: { duration: 0.25 } }
                                    }}
                                >
                                    {item.title}
                                </motion.h3>
                                
                                <p>{item.description}</p>
                                
                                <div className={styles.readmore}>
                                    <motion.div 
                                        className={styles.readmoreContent}
                                        variants={{
                                            hover: { x: 3, transition: { duration: 0.25 } }
                                        }}
                                    >
                                        <span>Read more</span>
                                      
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

