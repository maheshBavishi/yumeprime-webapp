'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './contactHero.module.scss';
import Input from '@/components/input';
import Button from '@/components/button';
import SupportIcon from '@/icons/supportIcon';
import PartnershipsIcon from '@/icons/partnershipsIcon';
import ChatIcon from '@/icons/chatIcon';
import CallIcon from '@/icons/callIcon';
import LocationIcon from '@/icons/locationIcon';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function ContactHero() {
  return (
    <div className={styles.contactHero}>
      <div className={styles.contentAlignment}>
        <motion.div
          className={styles.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>
            Talk to someone
            <span> who trades too.</span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Our support team is trained on the platform and the markets, ready
            to help with anything from account verification to trading conditions.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.div className={styles.items} variants={fadeInLeft}>
            <div className={styles.twoCol}>
              <Input label='Name' placeholder='Enter your email' />
              <Input label='Email' placeholder='you@email.com' />
              <Input label='Account ID (optional)' placeholder='e.g. yp-000000' />
              <Input label='Subject' placeholder='general' />
            </div>
            <div className={styles.messageBox}>
              <label>Message</label>
              <textarea placeholder='how can we help?' />
            </div>
            <Button text="Send a Message" />
          </motion.div>

          <motion.div className={styles.items} variants={fadeInRight}>
            <motion.div className={styles.information} variants={staggerContainer}>
              <motion.div className={styles.icontextGrid} variants={fadeInUp}>
                <SupportIcon />
                <div>
                  <p>Support</p>
                  <a href='mailto:support@yumeprime.com'>support@yumeprime.com</a>
                </div>
              </motion.div>

              <motion.div className={styles.icontextGrid} variants={fadeInUp}>
                <PartnershipsIcon />
                <div>
                  <p>Partnerships / IB</p>
                  <a href='mailto:support@yumeprime.com'>partners@yumeprime.com</a>
                </div>
              </motion.div>

              {/* <motion.div className={styles.icontextGrid} variants={fadeInUp}>
                <ChatIcon />
                <div>
                  <p>Live Chat</p>
                  <span>Available [24/5 / 24/7] via website and app</span>
                </div>
              </motion.div> */}

              {/* <motion.div className={styles.icontextGrid} variants={fadeInUp}>
                <CallIcon />
                <div>
                  <p>Phone</p>
                  <span>[+___ ___ ___ ____]</span>
                </div>
              </motion.div> */}

              <motion.div className={styles.icontextGrid} variants={fadeInUp}>
                <LocationIcon />
                <div>
                  <p>Registered Office</p>
                  <span>Unit 1, La Place Creole Rodney Bay Village Gros Islet, Saint Lucia.</span>
                </div>
              </motion.div>
            </motion.div>

            {/* <div className={styles.support}>
              <h3>Support Hours</h3>
              <div className={styles.allContentAlignment}>
                <div className={styles.content}>
                  <p>Monday – Friday</p>
                  <span>Monday – Friday</span>
                </div>
                <div className={styles.content}>
                  <p>Saturday</p>
                  <span>[Limited / Live chat only]</span>
                </div>
                <div className={styles.content}>
                  <p>Sunday</p>
                  <span>[Closed / Live chat only]</span>
                </div>
                <div className={styles.content}>
                  <p>Languages</p>
                  <span>English, Arabic, Hindi, [others]</span>
                </div>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

