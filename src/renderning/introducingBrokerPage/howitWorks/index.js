'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './howitWorks.module.scss';
import RoundDolor from '@/icons/roundDolor';

const WorkImage = '/assets/images/works.png';

const stepsData = [
    {
        id: '01',
        title: 'Apply',
        description: 'Submit your IB application through the partner portal. Approval is typically instant for verified applicants.',
    },
    {
        id: '02',
        title: 'Share Your Link',
        description: 'Your unique referral link and IB dashboard are generated immediately.',
    },
    {
        id: '03',
        title: 'Clients Trade',
        description: 'Every trade your referred clients place generates commission.',
    },
    {
        id: '04',
        title: 'Earn & Withdraw',
        description: 'Your rebate share is calculated in real time and available for instant withdrawal.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function HowitWorks() {
    return (
        <div className={styles.howitWorks}>
            <div className='container-xl'>
                <div className={styles.title}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        How it works
                    </motion.h2>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className='container-xl'>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.img}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img src={WorkImage} alt='WorkImage' />
                    </motion.div>

                    <div>
                        <motion.div
                            className={styles.boxgrid}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {stepsData.map((step) => (
                                <motion.div
                                    key={step.id}
                                    className={styles.box}
                                    variants={boxVariants}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                >
                                    <div className={styles.boxheader}>
                                        <div className={styles.counter}>{step.id}</div>
                                        <RoundDolor />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>
        </div>
    );
}

