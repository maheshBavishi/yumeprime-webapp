'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './trustedby.module.scss';
import Button from '@/components/button';

const Trustpilot = '/assets/images/trustpilot.svg';
const Verified = '/assets/images/Verified.svg';
const Google = '/assets/images/google.svg';

const trustCards = [
    {
        id: 'trustpilot',
        logo: Trustpilot,
        alt: 'Trustpilot',
        rating: '4.7',
        maxRating: '/5',
        reviews: 'From 2965 Reviews',
        buttonText: 'Read our Trustpilot reviews',
    },
    {
        id: 'wikifx',
        logo: Verified,
        alt: 'WikiFX Verified',
        rating: '8.5',
        maxRating: '/5',
        reviews: 'Verified license and business data',
        buttonText: 'View our WikiFX profile',
    },
    {
        id: 'google',
        logo: Google,
        alt: 'Google Reviews',
        rating: '4.6',
        maxRating: '/5',
        reviews: 'From 1568 Reviews',
        buttonText: 'Read Google reviews',
    },
];

// Animation Variants
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
            delay: index * 0.22, // One-by-one sequential reveal: 0s, 0.22s, 0.44s
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Trustedby() {
    return (
        <section className={styles.trustedbySection}>
            <div className='container'>
                <div className={styles.trustedby}>
                    {/* Title with Scroll-Reveal Animation */}
                    <div className={styles.title}>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={titleVariant}
                        >
                            Trusted by <br />
                            Traders Worldwide
                        </motion.h2>
                    </div>

                    {/* Cards Grid with One-by-One Reveal */}
                    <div className={styles.grid}>
                        {trustCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className={styles.items}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={cardVariant}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.3, ease: 'easeOut' }
                                }}
                            >
                                <div className={styles.card}>
                                    <motion.div 
                                        className={styles.logoWrapper}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <img src={card.logo} alt={card.alt} />
                                    </motion.div>
                                    
                                    <h3>
                                        {card.rating} <span>{card.maxRating}</span>
                                    </h3>
                                    
                                    <p>
                                        {card.reviews}
                                    </p>
                                </div>
                                
                                <div className={styles.buttonWrapper}>
                                    <Button text={card.buttonText} fill />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

