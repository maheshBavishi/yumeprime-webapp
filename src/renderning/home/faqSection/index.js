'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './faqSection.module.scss';
import Button from '@/components/button';
const Googleplay = '/assets/images/googrleplay.svg';
const Appstore = '/assets/images/appstore.svg';
const Mobile = '/assets/images/mobile-fram.png';

const faqList = [
    {
        id: 1,
        question: "Is Yume Prime a regulated broker?",
        answer: "Yes, Yume Prime operates in full compliance with international financial regulatory standards, maintaining segregated client accounts to ensure complete fund safety and transparency.",
    },
    {
        id: 2,
        question: "How long does account verification (KYC) take?",
        answer: "Account verification is typically completed within a few minutes to 24 hours once all required identification and proof of address documents are uploaded.",
    },
    {
        id: 3,
        question: "What is the minimum deposit to open an account?",
        answer: "The minimum deposit starts at $50 on the Standard account. Plus and Pro accounts require $250 and $1,000 respectively, reflecting their tighter pricing structures.",
    },
    {
        id: 4,
        question: "How fast are deposits and withdrawals processed?",
        answer: "Deposits are processed instantly across all major payment channels. Withdrawals are executed within 24 hours with zero hidden processing charges.",
    },
    {
        id: 5,
        question: "Does Yume Prime offer Islamic (swap-free) accounts?",
        answer: "Yes, we provide 100% Sharia-compliant Islamic swap-free accounts with zero overnight rollover interest fees for eligible traders.",
    },
];

export default function FaqSection() {
    // null = all closed by default; click one opens it and closes others
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className={styles.faqSection}>
            <div className='container'>
                <div className={styles.grid}>
                    {/* Left Sticky Content */}
                    <div className={styles.items}>
                        <motion.div
                            className={styles.content}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span>
                                Frequently asked questions
                            </span>
                            <h2>
                                Quick Answers
                            </h2>
                            <Button text="View all faqs" />
                        </motion.div>
                    </div>

                    {/* Right Accordion List */}
                    <div className={styles.items}>
                        <div className={styles.accordionList}>
                            {faqList.map((item, index) => {
                                const isOpen = activeIndex === index;

                                return (
                                    <motion.div
                                        key={item.id}
                                        className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {/* Question Header */}
                                        <div
                                            className={styles.faqHeader}
                                            onClick={() => toggleFaq(index)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    toggleFaq(index);
                                                }
                                            }}
                                        >
                                            <h3>{item.question}</h3>

                                            {/* Plus / Minus Morph Icon */}
                                            <div className={styles.iconWrapper}>
                                                <span className={styles.horizontalBar} />
                                                <motion.span
                                                    className={styles.verticalBar}
                                                    initial={false}
                                                    animate={{
                                                        scaleY: isOpen ? 0 : 1,
                                                        opacity: isOpen ? 0 : 1,
                                                        rotate: isOpen ? 90 : 0
                                                    }}
                                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                />
                                            </div>
                                        </div>

                                        {/* Expandable Answer Body */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="accordion-content"
                                                    initial="collapsed"
                                                    animate="open"
                                                    exit="collapsed"
                                                    variants={{
                                                        open: {
                                                            height: "auto",
                                                            opacity: 1,
                                                            transition: {
                                                                height: {
                                                                    duration: 0.4,
                                                                    ease: [0.04, 0.62, 0.23, 0.98]
                                                                },
                                                                opacity: {
                                                                    duration: 0.3,
                                                                    delay: 0.08
                                                                }
                                                            }
                                                        },
                                                        collapsed: {
                                                            height: 0,
                                                            opacity: 0,
                                                            transition: {
                                                                height: {
                                                                    duration: 0.35,
                                                                    ease: [0.04, 0.62, 0.23, 0.98]
                                                                },
                                                                opacity: {
                                                                    duration: 0.2
                                                                }
                                                            }
                                                        }
                                                    }}
                                                    className={styles.faqBody}
                                                >
                                                    <motion.div
                                                        className={styles.faqBodyInner}
                                                        initial={{ y: -6, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -6, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                                    >
                                                        <p>{item.answer}</p>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* Trade from Anywhere Section */}
                <div className={styles.tradeFrom}>
                    <motion.div 
                        className={styles.sectionTitle}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.12,
                                    delayChildren: 0.1,
                                },
                            },
                        }}
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 35 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            Trade from Anywhere.
                        </motion.h2>
                        
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            Download the Yume Prime app and manage your account, monitor
                            markets, and trade on the move.
                        </motion.p>
                        
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                        >
                            download from
                        </motion.span>
                    </motion.div>

                    {/* App Store / Google Play buttons */}
                    <motion.div 
                        className={styles.buttonAlignment}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className={styles.storeBtn}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={Googleplay} alt='Get it on Google Play' />
                        </motion.div>

                        <motion.div
                            className={styles.storeBtn}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={Appstore} alt='Download on App Store' />
                        </motion.div>
                    </motion.div>

                    {/* Floating Mobile Frame */}
                    <motion.div 
                        className={styles.mobile}
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className={styles.mobileWrapper}
                            whileHover={{ y: -6, scale: 1.015 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <img src={Mobile} alt='Yume Prime Mobile App' />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



