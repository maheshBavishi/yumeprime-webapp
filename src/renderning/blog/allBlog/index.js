'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './allBlog.module.scss';
import Blogcard from '@/components/blogcard';

const BlogImage = '/assets/images/blog.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
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

export default function AllBlog() {
    return (
        <div className={styles.allblog}>
            <div className='container-xl'>
                <div className={styles.title}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Education
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        From first trade to advanced risk management, written without jargon
                    </motion.p>
                </div>

                <motion.div
                    className={styles.mainBlog}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.image}>
                        <img src={BlogImage} alt='BlogImage' />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.info}>
                            <div className={styles.infoheader}>
                                <span>
                                    Yume Prime Team
                                </span>
                                <p>. 4 min read</p>
                                <p>
                                    . Education
                                </p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <span>
                                Education
                            </span>
                            <h3>
                                Leverage, Explained <br /> Without the Scare Tactics
                            </h3>
                            <p>
                                What leverage actually changes about a trade and the questions to ask
                                before you increase
                            </p>
                            <div className={styles.line}></div>
                            <a href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {[...Array(9)].map((_, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Blogcard />
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className={styles.pagination}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.button
                        className={styles.prevBtn}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span>PREV</span>
                    </motion.button>

                    <motion.button
                        className={`${styles.numBtn} ${styles.active}`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        1
                    </motion.button>

                    <motion.button
                        className={styles.numBtn}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        2
                    </motion.button>

                    <motion.button
                        className={styles.numBtn}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        3
                    </motion.button>

                    <motion.button
                        className={styles.nextBtn}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span>NEXT</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}


