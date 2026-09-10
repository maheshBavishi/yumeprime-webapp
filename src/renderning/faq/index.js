'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import styles from './faq.module.scss';
import Button from '@/components/button';
import VisionSection from '../home/visionSection';

const categories = [
    "Accounts",
    "Trading",
    "Payments & Support",
    "Security & Compliance"
];

const faqs = [
    {
        id: 1,
        category: "Security & Compliance",
        question: "Is Yume Prime a regulated broker?",
        answer: "Yume Prime is a fully regulated broker adhering to strict international financial standards. Client funds are kept in segregated bank accounts with tier-1 banking institutions to ensure maximum safety and compliance."
    },
    {
        id: 2,
        category: "Accounts",
        question: "How long does account verification (KYC) take?",
        answer: "Most accounts are verified within [X] hours once your identification documents are submitted, provided they meet our verification requirements."
    },
    {
        id: 3,
        category: "Payments & Support",
        question: "How fast are deposits and withdrawals processed?",
        answer: "Deposits are processed instantly or within a few minutes depending on the payment method. Withdrawal requests are typically processed within 24 hours on business days."
    },
    {
        id: 4,
        category: "Trading",
        question: "What trading platforms does Yume Prime offer?",
        answer: "Yume Prime offers MetaTrader 5 (MT5), WebTrader, and our mobile trading applications for iOS and Android."
    },
    {
        id: 5,
        category: "Accounts",
        question: "Can I try Yume Prime before trading with real money?",
        answer: "Yes, you can open a free Demo Account with virtual funds to test our trading conditions, tools, and platforms before opening a live account."
    },
    {
        id: 6,
        category: "Accounts",
        question: "Does Yume Prime offer Islamic (swap-free) accounts?",
        answer: "Yes, Yume Prime offers swap-free (Islamic) accounts compliant with Sharia principles for traders who cannot receive or pay interest."
    },
    {
        id: 7,
        category: "Trading",
        question: "How does the Introducing Broker programme work?",
        answer: "Our Introducing Broker (IB) programme allows partners to earn competitive rebates by introducing new clients to Yume Prime, supported by dedicated tools and reporting."
    }
];

// Animation variants for entrance
const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Faq() {
    const [activeCategory, setActiveCategory] = useState("Accounts");
    const [openId, setOpenId] = useState(null); // By default all closed

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div>
            <div className={styles.faq}>
                <div className="container-sm">
                    <motion.div
                        className={styles.sectionheader}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={headerVariants}
                    >
                        <h2>
                            Frequently <span>asked questions.</span>
                        </h2>
                        <p>
                            Clear answers to common questions about trading and accounts.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.btnAlignemnt}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                text={cat}
                                lightButton={activeCategory !== cat}
                                fill={activeCategory === cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setOpenId(null); // Reset open accordion on tab switch
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        className={styles.allFaq}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                    >
                        {faqs.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    variants={itemVariants}
                                    className={classNames(styles.faqItem, { [styles.active]: isOpen })}
                                >
                                    <div
                                        className={styles.faqheader}
                                        onClick={() => toggleFaq(item.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                toggleFaq(item.id);
                                            }
                                        }}
                                    >
                                        <h3>{item.question}</h3>
                                        <div className={styles.iconWrapper}>
                                            <motion.svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                {/* Horizontal line always present */}
                                                <path
                                                    d="M5 12H19"
                                                    stroke="#0B1638"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                {/* Vertical line rotates/fades out when open */}
                                                <motion.path
                                                    d="M12 5V19"
                                                    stroke="#0B1638"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    animate={{
                                                        scaleY: isOpen ? 0 : 1,
                                                        opacity: isOpen ? 0 : 1
                                                    }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                    style={{ originX: "12px", originY: "12px" }}
                                                />
                                            </motion.svg>
                                        </div>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                                        opacity: { duration: 0.3, delay: 0.1 }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                                        opacity: { duration: 0.2 }
                                                    }
                                                }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <motion.p
                                                    initial={{ y: -8, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 0.7 }}
                                                    exit={{ y: -8, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                    className={styles.faqAnswer}
                                                >
                                                    {item.answer}
                                                </motion.p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
            <VisionSection />
        </div>
    );
}


