'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './commonCardSection.module.scss';
import Button from '../button';

const Card1 = '/assets/images/card1.png';
const Card2 = '/assets/images/card2.png';
const Card3 = '/assets/images/card3.png';
const Card4 = '/assets/images/card4.png';
const Card5 = '/assets/images/card5.png';
const Card6 = '/assets/images/card6.png';

const defaultCards = [
    {
        id: 1,
        image: Card1,
        title: '55+ Currency Pairs',
        description: 'Majors, minors, and exotics, all from a single account.',
    },
    {
        id: 2,
        image: Card2,
        title: 'Spreads From 0.0 Pips',
        description: 'Raw pricing available on our Pro account, with no hidden markups.',
    },
    {
        id: 3,
        image: Card3,
        title: 'STP/ECN Execution',
        description: 'Orders routed directly to liquidity, with no dealing-desk conflict.',
    },
    {
        id: 4,
        image: Card4,
        title: 'Long & Short Trading',
        description: 'Profit from both rising and falling markets.',
    },
    {
        id: 5,
        image: Card5,
        title: '24/5 Global Sessions',
        description: 'Trade continuously from the Sydney open to the New York close.',
    },
    {
        id: 6,
        image: Card6,
        title: 'Flexible Leverage',
        description: 'Up to [1:1000] on major pairs, depending on account type and jurisdiction.',
    },
];

const cubicEase = [0.22, 1, 0.36, 1];

const titleVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: cubicEase,
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: cubicEase,
        
        },
    },
};

const bottomVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: cubicEase,
        },
    },
};

export default function CommonCardSection({
    title = (
        <>
            Why Trade <br />Forex with <span> Yume Prime. </span>
        </>
    ),
    cards = defaultCards,
    bottomText = "Ready to trade Forex with transparent, raw pricing?",
    bottomPrimaryBtnText = "Open Live Account",
    bottomSecondaryBtnText = "Try Demo Free",
    onBottomPrimaryClick,
    onBottomSecondaryClick,
}) {
    return (
        <div className={styles.commonCardSection}>
            <div className='container-xl'>
                <motion.div
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                >
                    <h2>{title}</h2>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                >
                    {cards.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.items}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3, ease: cubicEase },
                            }}
                        >
                            <motion.img
                                src={item.image} 
                                alt={item.title}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3, ease: cubicEase }}
                            />
                            <div className={styles.content}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.bottomContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={bottomVariants}
                >
                    <p>{bottomText}</p>
                    <div className={styles.buttonDiv}>
                        {bottomPrimaryBtnText && (
                            <Button text={bottomPrimaryBtnText} fill onClick={onBottomPrimaryClick} />
                        )}
                        {bottomSecondaryBtnText && (
                            <Button text={bottomSecondaryBtnText} lightButton onClick={onBottomSecondaryClick} />
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


