'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import styles from './faqSection.module.scss';
import Button from '@/components/button';

const Scan = '/assets/icons/scan.png';
const Googleplay = '/assets/images/googleplay.svg';
const ScanHeader = '/assets/images/scan-header.png';
const Appstore = '/assets/images/appstore.svg';

const faqColumnLeft = [
    {
        id: 'faq-1',
        question: 'Is Yume Prime a regulated broker?',
        answer: 'Yume Prime complies with regulations where it operates. Clients should review legal and regulatory info before opening an account.',
    },
    {
        id: 'faq-2',
        question: 'How long does account verification (KYC) take?',
        answer: 'KYC verification usually takes minutes to 24 hours if documents are clear. More info may be requested for further checks.',
    },
    {
        id: 'faq-3',
        question: 'What is the minimum deposit to open an account?',
        answer: 'The minimum deposit starts at $50 on the Standard account. Plus and Pro accounts require $250 and $1,000 respectively, reflecting their tighter pricing structures.',
    },
    {
        id: 'faq-4',
        question: 'How fast are deposits and withdrawals processed?',
        answer: 'Deposits are processed quickly; withdrawal times vary by payment method, verification, and financial institution.',
    },
    {
        id: 'faq-5',
        question: 'Does Yume Prime offer Islamic (swap-free) accounts?',
        answer: 'Yume Prime offers swap-free accounts for clients needing Islamic trading conditions. Terms vary by account type and instruments.',
    },
];

const faqColumnRight = [
    {
        id: 'faq-6',
        question: 'What trading platforms does Yume Prime support?',
        answer: 'Yume Prime offers professional trading platforms with fast execution, advanced charts, market analysis, and smooth trade management on supported devices.',
    },
    {
        id: 'faq-7',
        question: 'What markets can I trade with Yume Prime?',
        answer: 'Trade in global markets like Forex, Metals, Indices, Crypto CFDs, Commodities, and Stock CFDs, based on your account and region.',
    },
    {
        id: 'faq-8',
        question: 'What leverage does Yume Prime offer?',
        answer: 'Leverage depends on account type, instrument, and regulations. Maximum leverage shows when you open your account and pick an instrument.',
    },
    {
        id: 'faq-9',
        question: 'Are there any commissions or hidden fees?',
        answer: 'Yume Prime offers transparent pricing with clear upfront trading costs. Depending on the account, costs include spreads, commissions, and any overnight or other charges.',
    },
    {
        id: 'faq-10',
        question: 'Can I trade from my mobile device?',
        answer: 'Yes. Yume Prime supports mobile trading, allowing you to monitor markets, manage positions, and execute trades from compatible smartphones and tablets.',
    },
];

const columnContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const downloadContentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function FaqSection() {
    // By default all closed
    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    const renderColumn = (items) => (
        <motion.div
            className={styles.column}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={columnContainerVariants}
        >
            {items.map((item) => {
                const isOpen = openId === item.id;

                return (
                    <motion.div
                        key={item.id}
                        variants={faqItemVariants}
                        className={classNames(styles.faqItem, { [styles.active]: isOpen })}
                    >
                        <div
                            className={styles.faqHeader}
                            onClick={() => toggleFaq(item.id)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isOpen}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    toggleFaq(item.id);
                                }
                            }}
                        >
                            <h3>{item.question}</h3>
                            <div className={styles.iconWrapper} aria-hidden="true">
                                <motion.span
                                    className={styles.horizontalBar}
                                    animate={{
                                        rotate: isOpen ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                />
                                <motion.span
                                    className={styles.verticalBar}
                                    animate={{
                                        scaleY: isOpen ? 0 : 1,
                                        opacity: isOpen ? 0 : 1,
                                        rotate: isOpen ? 90 : 0,
                                    }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </div>
                        </div>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="answer"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: 'auto',
                                        opacity: 1,
                                        transition: {
                                            height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                                            opacity: { duration: 0.26, delay: 0.08, ease: 'easeOut' },
                                        },
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: {
                                            height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                            opacity: { duration: 0.16, ease: 'easeIn' },
                                        },
                                    }}
                                    className={styles.answerWrapper}
                                >
                                    <div className={styles.answer}>
                                        <motion.p
                                            initial={{ y: -6, opacity: 0 }}
                                            animate={{ y: 0, opacity: 0.7 }}
                                            exit={{ y: -6, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            {item.answer}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );

    return (
        <section className={styles.faqsection} aria-label="Frequently Asked Questions">
            <div className="container-xl">
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 0.7, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Frequently asked questions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Quick Answers
                    </motion.h2>
                </motion.div>

                <div className={styles.faqGrid}>
                    {renderColumn(faqColumnLeft)}
                    {renderColumn(faqColumnRight)}
                </div>

                <motion.div
                    className={styles.buttonAlignment}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Button text="View all faqs" />
                </motion.div>
            </div>

            <div className={styles.downloadapp}>
                <motion.div
                    className={styles.imageAlignment}
                    initial={{ opacity: 0, x: 70, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img src={ScanHeader} alt='ScanHeader' />
                </motion.div>

                <div className="container-xl">
                    <motion.div
                        className={styles.content}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={downloadContentVariants}
                    >
                        <motion.h3 variants={fadeInUp}>
                            Trade <br />from Anywhere.
                        </motion.h3>

                        <motion.p variants={fadeInUp}>
                            Download the Yume Prime app and manage your account, monitor markets, and trade
                            on the move.
                        </motion.p>

                        <motion.div
                            className={styles.scanBox}
                            variants={fadeInUp}
                            whileHover={{ y: -4, transition: { duration: 0.25 } }}
                        >
                            <img src={Scan} alt='Scan' />
                            <div className={styles.btnAlignment}>
                                <Button text="scan to download APK" fillwhite />
                            </div>
                        </motion.div>

                        <motion.div className={styles.downloadFrom} variants={fadeInUp}>
                            <span>OR DOWNLOAD FROM</span>
                        </motion.div>

                        <motion.div className={styles.storeButtons} variants={fadeInUp}>
                            <motion.a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download on the App Store"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img src={Appstore} alt="App Store" />
                            </motion.a>
                            <motion.a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get it on Google Play"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img src={Googleplay} alt="Google Play" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
