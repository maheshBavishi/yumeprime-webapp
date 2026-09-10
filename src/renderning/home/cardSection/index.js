'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './cardSection.module.scss';
import Button from '@/components/button';
import Link from 'next/link';

const Trading = '/assets/images/Trading.png';
const Introducing = '/assets/images/Introducing.png';
const Trade = '/assets/images/Trade.png';

const cardsData = [
    {
        id: 'trading-solutions',
        image: Trading,
        alt: 'Trading Solutions',
        title: 'Trading Solutions',
        description: 'Copy top-performing strategies with Social Trading, or invest passively through PAMM.',
        buttonText: 'Explore Trading Solutions',
        link: '/trading-platforms',
    },
    {
        id: 'ib-programme',
        image: Introducing,
        alt: 'Introducing Broker Programme',
        title: 'Introducing Broker Programme',
        description: 'Earn up to 80% commission rebate share with instant IB activation and instant withdrawals.',
        buttonText: 'Become an IB',
        link: '/introducing-broker',
    },
    {
        id: 'trade-and-win',
        image: Trade,
        alt: 'Trade & Win',
        title: 'Trade & Win',
        description: 'Trade eligible instruments, accumulate lot volume, unlock milestone rewards.',
        buttonText: 'View Rewards',
        link: '/trade-win',
    },
];

// One by one sequential animation variants
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.94
    },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.75,
            delay: index * 0.25, // Staggers each card one by one: 0s, 0.25s, 0.5s
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function CardSection() {
    return (
        <section className={styles.cardSection}>
            <div className='container'>
                <div className={styles.grid}>
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={styles.items}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            {/* Card Image Container */}
                            <motion.div
                                className={styles.imageWrapper}
                                variants={{
                                    hover: {
                                        y: -6,
                                        transition: { duration: 0.35, ease: 'easeOut' }
                                    }
                                }}
                            >
                                <motion.img
                                    src={card.image}
                                    alt={card.alt}
                                    variants={{
                                        hover: {
                                            scale: 1.05,
                                            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                />
                            </motion.div>

                            {/* Card Details */}
                            <div className={styles.details}>
                                <motion.h3
                                    variants={{
                                        hover: { color: '#1B3170', transition: { duration: 0.25 } }
                                    }}
                                >
                                    {card.title}
                                </motion.h3>

                                <p>{card.description}</p>

                                <motion.div
                                    className={styles.buttonWrapper}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button text={card.buttonText} fill href={card.link} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}



