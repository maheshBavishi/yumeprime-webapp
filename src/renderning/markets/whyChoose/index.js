'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whyChoose.module.scss';
import FundIcon from '@/icons/fundIcon';
import SpreadsIcon from '@/icons/spreadsIcon';
import HandIcon from '@/icons/handIcon';
import WebIcon from '@/icons/webIcon';
import ExecutionIcon from '@/icons/executionIcon';
import WinIcon from '@/icons/winIcon';
import Input from '@/components/input';
import Button from '@/components/button';

const whyChooseData = [
    {
        id: 1,
        Icon: FundIcon,
        title: 'Fund Security',
        description: 'Client funds are held in accounts segregated from company operating capital.',
        floatDuration: 3.2,
    },
    {
        id: 2,
        Icon: SpreadsIcon,
        title: 'Pricing & Spreads',
        description: 'Transparent spreads with no hidden markups, published across all account types.',
        floatDuration: 3.8,
    },
    {
        id: 3,
        Icon: HandIcon,
        title: '24/5 Support',
        description: (
            <>
                Real human support via chat, <br />email, and phone.
            </>
        ),
        floatDuration: 3.0,
    },
    {
        id: 4,
        Icon: WebIcon,
        title: 'MT5, WebTrader & App',
        description: (
            <>
                Trade every market from one account, <br /> on any device.
            </>
        ),
        floatDuration: 3.5,
    },
    {
        id: 5,
        Icon: ExecutionIcon,
        title: 'Fast Execution',
        description: (
            <>
                Orders routed with no dealing-desk conflict <br /> and a full audit trail.
            </>
        ),
        floatDuration: 3.3,
    },
    {
        id: 6,
        Icon: WinIcon,
        title: 'Trade & Win Rewards',
        description: (
            <>
                Unlock milestone rewards as your trading <br />volume grows.
            </>
        ),
        floatDuration: 3.6,
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
            staggerChildren: 0.1,
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

const lastGridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const formBoxVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: cubicEase,
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: cubicEase,
        },
    },
};

export default function WhyChoose() {
    return (
        <div className={styles.whyChoose}>
            <div className='container-xl'>
                <motion.div
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                >
                    <h2>Why Choose Yume Prime</h2>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                >
                    {whyChooseData.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.items}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3, ease: cubicEase },
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                    scale: [1, 1.04, 1],
                                }}
                                transition={{
                                    duration: item.floatDuration,
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                    ease: 'easeInOut',
                                }}
                                whileHover={{
                                    scale: 1.12,
                                    rotate: [0, -4, 4, 0],
                                    transition: { duration: 0.4 },
                                }}
                            >
                                <item.Icon />
                            </motion.div>
                            <div className={styles.content}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.lastGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={lastGridVariants}
                >
                    <motion.h4 variants={cardVariants}>
                        <span> Start</span> Trading the Global Markets with Yume Prime
                    </motion.h4>
                    <motion.div className={styles.box} variants={formBoxVariants}>
                        <motion.div variants={formItemVariants}>
                            <Input label='Name' placeholder='Enter your email' />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                            <Input label='Email' placeholder='you@email.com' />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                            <Input label='Phone' placeholder='00000 00000' />
                        </motion.div>
                        <motion.div variants={formItemVariants}>
                            <Button text="Register Now" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}


