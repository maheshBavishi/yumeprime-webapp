'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './featuredSection.module.scss';

const Lgpsm = '/assets/images/lgpsm.svg';
const Logoposum = '/assets/images/logoposum.svg';
const Logoposum1 = '/assets/images/4.svg';

const Icon1 = '/assets/icons/icon1.svg';
const Icon2 = '/assets/icons/icon2.svg';
const Icon3 = '/assets/icons/icon3.svg';
const Icon4 = '/assets/icons/icon4.svg';
const Icon5 = '/assets/icons/icon5.svg';
const Icon6 = '/assets/icons/icon6.svg';
const Icon7 = '/assets/icons/icon7.svg';
const Icon8 = '/assets/icons/icon8.svg';

const featuredLogos = [
    { src: Lgpsm, alt: 'Lgpsm' },
    { src: Logoposum, alt: 'Logoposum' },
    { src: Logoposum1, alt: 'Logoposum1' },
    { src: Lgpsm, alt: 'Lgpsm' },
    { src: Logoposum, alt: 'Logoposum' },
    { src: Logoposum1, alt: 'Logoposum1' },
    { src: Lgpsm, alt: 'Lgpsm' },
    { src: Logoposum, alt: 'Logoposum' },
    { src: Logoposum1, alt: 'Logoposum1' },
];

const statsRow1 = [
    { icon: Icon1, value: '0.0 Pips', label: 'Spread From' },
    { icon: Icon2, value: '$100', label: 'Minimum Deposit' },
    { icon: Icon3, value: '1:1000', label: 'Max Leverage' },
    { icon: Icon4, value: '<30MS', label: 'Execution Speed' },
];

const statsRow2 = [
    { icon: Icon5, value: 'Free', label: 'Funding Fee' },
    { icon: Icon6, value: '+10', label: 'Funding Options' },
    { icon: Icon7, value: 'Hundreds of', label: 'Trading Instruments' },
    { icon: Icon8, value: '100%', label: 'Segregated Client Funds' },
];

const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function FeaturedSection() {
    return (
        <section className={styles.featuredSection}>
            <div className='container-xl'>
                <div className={styles.title}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        As Featured In
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        overflow: 'hidden',
                        display: 'flex',
                        width: '100%',
                        userSelect: 'none',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    }}
                >
                    {[0, 1].map((trackIndex) => (
                        <motion.div
                            key={trackIndex}
                            className={styles.allBoxAlignment}
                            style={{
                                flexShrink: 0,
                                paddingRight: '24px',
                            }}
                            animate={{ x: ['0%', '-100%'] }}
                            transition={{
                                ease: 'linear',
                                duration: 25,
                                repeat: Infinity,
                            }}
                        >
                            {featuredLogos.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.box}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <img src={item.src} alt={item.alt} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row 1 */}
                <motion.div
                    className={styles.listViewAlignment}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={rowVariants}
                >
                    {statsRow1.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.items}
                            variants={itemVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <motion.img
                                src={item.icon}
                                alt={item.label}
                                whileHover={{ scale: 1.12, rotate: 4 }}
                                transition={{ duration: 0.2 }}
                            />
                            <div>
                                <p>{item.value}</p>
                                <span>{item.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row 2 */}
                <motion.div
                    className={styles.listViewAlignment}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={rowVariants}
                >
                    {statsRow2.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.items}
                            variants={itemVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <motion.img
                                src={item.icon}
                                alt={item.label}
                                whileHover={{ scale: 1.12, rotate: 4 }}
                                transition={{ duration: 0.2 }}
                            />
                            <div>
                                <p>{item.value}</p>
                                <span>{item.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
