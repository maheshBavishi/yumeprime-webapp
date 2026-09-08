'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ourValues.module.scss';
import ValuesIcon from '@/icons/valuesIcon';

const Precision = '/assets/images/Precision.png';
const Transparency = '/assets/images/Transparency.png';
const Security = '/assets/images/Security.png';

const valuesData = [
    {
        id: 1,
        title: 'Precision',
        description: 'Every published number is a commitment, not a marketing range',
        image: Precision,
    },
    {
        id: 2,
        title: 'Transparency',
        description: 'No condition buried in fine print',
        image: Transparency,
    },
    {
        id: 3,
        title: 'Security',
        description: 'Segregated funds and strong account security as a baseline, not a premium feature',
        image: Security,
    },
    {
        id: 4,
        title: 'Longevity',
        description: "We'd rather keep traders for years than chase quick sign-ups",
        image: Precision,

    },
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
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export default function OurValues() {
    return (
        <div className={styles.ourValues}>
            <div className='container-xl'>
                <motion.div
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={fadeInUp}
                >
                    <h2>Our Values</h2>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                >
                    {valuesData.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.items}
                            variants={fadeInUp}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: 'easeOut' },
                            }}
                        >
                            <div className={styles.icon}>
                                <ValuesIcon />
                            </div>
                            <div className={styles.image}>
                                <img src={item.image} alt={item.image} />
                            </div>
                            <div className={styles.content}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

