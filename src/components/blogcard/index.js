'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './blogcard.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

const BlogImage = '/assets/images/blog.png';

export default function Blogcard({ textwhite }) {
    return (
        <motion.div
            className={classNames(styles.blogcard, textwhite ? styles.textwhite : "")}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
        >
            <div className={styles.image}>
                <img src={BlogImage} alt='BlogImage' />
            </div>
            <div className={styles.details}>
                <span>
                    Education
                </span>
                <h3>
                    Gold's Rally: What's Really Driving
                    Spot Prices Higher
                </h3>
                <p>
                    A weekly breakdown of the macro forces moving XAU/USD.
                </p>
                <div className={styles.line}></div>
                <Link href="/blog-details">
                    Read more
                </Link>
            </div>
        </motion.div>
    );
}

