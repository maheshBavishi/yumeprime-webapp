'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './yourTrade.module.scss';
import Button from '@/components/button';

const Image1 = '/assets/images/img1.png';
const Image2 = '/assets/images/img2.png';
const Image3 = '/assets/images/img3.png';
const Image4 = '/assets/images/img4.png';
const Image5 = '/assets/images/img5.png';
const Image6 = '/assets/images/img6.png';

const tradeImages = [
    { id: 1, img: Image1, alt: 'Trade Image 1' },
    { id: 2, img: Image2, alt: 'Trade Image 2' },
    { id: 3, img: Image3, alt: 'Trade Image 3' },
    { id: 4, img: Image4, alt: 'Trade Image 4' },
    { id: 5, img: Image5, alt: 'Trade Image 5' },
    { id: 6, img: Image6, alt: 'Trade Image 6' },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export default function YourTrade() {
    return (
        <div className={styles.yourTrade}>
            <div className='container-xl'>
                <motion.div
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={fadeInUp}
                >
                    <h2>What Can You Trade</h2>
                </motion.div>
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                >
                    {tradeImages.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.items}
                            variants={fadeInUp}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: 'easeOut' },
                            }}
                        >
                            <img src={item.img} alt={item.alt} />
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className={styles.lastContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                >
                    <motion.h3 variants={fadeInUp}>
                        Every market you want, within one Yume Prime account.
                    </motion.h3>
                    <motion.div className={styles.btnWrap} variants={fadeInUp}>
                        <Button text="Open Live Account" fill />
                        <Button text="Try Demo Free" lightButton />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

