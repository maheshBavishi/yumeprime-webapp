'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './newsletter.module.scss';
import Button from '@/components/button';
import Input from '@/components/input';

export default function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <div className='container-xl'>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    Newsletter <span> signup </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    No spam just what's moving the markets and what's new
                    at Yume Prime.
                </motion.p>

                <motion.div
                    className={styles.line}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                ></motion.div>

                <motion.div
                    className={styles.inputgrid}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Input placeholder="Enter your email" />
                    <Button text='Open Live account' />
                </motion.div>
            </div>
        </div>
    );
}

