import React from 'react';
import styles from './privacyPolicy.module.scss';
import PolicyBanner from '@/components/policyBanner';
import VisionSection from '../home/visionSection';

const privacyPolicyBannerData = {
    titleMain: 'Privacy',
    titleSpan: 'Policy',
    lastUpdated: 'October 2025',
};

const noticeText = "This Privacy Policy explains how [Legal Entity Name] collects, uses, and protects personal data in connection with the Yume Prime website, client portal, and trading platforms.";

const privacySections = [
    {
        id: 1,
        title: '1. Information We Collect',
        paragraphs: [
            'We collect information you provide directly name, date of birth, nationality, contact details, government ID, proof of address, and financial information (such as income, source of funds, and trading experience) during registration and account verification. We also collect technical and usage data automatically, including IP address, device and browser type, login activity, and platform usage, through cookies and similar technologies.',
        ],
    },
    {
        id: 2,
        title: '2. How We Use Your Information',
        paragraphs: [
            'We use your information to: verify your identity and comply with Know Your Customer (KYC) and Anti-Money Laundering (AML) obligations; open, administer, and support your trading account; process deposits and withdrawals; detect and prevent fraud; communicate service-related updates; and, where you have given consent, send marketing communications about products, promotions, and the Trade & Win programme. You may withdraw marketing consent at any time without affecting the service-related communications necessary to operate your account.',
        ],
    },
    {
        id: 3,
        title: '3. How We Share Your Information',
        paragraphs: [
            'We share personal data only where necessary: with regulators and law enforcement where legally required; with payment processors and banking partners to process deposits and withdrawals; with liquidity providers as needed to execute your trades; with identity verification providers to complete KYC checks; and with IT and infrastructure providers who process data on our behalf under confidentiality obligations. We do not sell personal data to third parties.',
        ],
    },
    {
        id: 4,
        title: '4. Data Retention',
        paragraphs: [
            'We retain personal data for as long as your account remains active and for a period afterward as required by applicable financial recordkeeping and AML regulations commonly [5–7 years] after account closure, though this varies by jurisdiction. [Confirm the exact retention period required under Yume Prime’s regulatory framework.]',
        ],
    },
    {
        id: 5,
        title: '5. Your Rights',
        paragraphs: [
            'Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal data, and to object to or restrict certain processing. Requests can be submitted to [privacy@yumeprime.com / compliance@yumeprime.com]. Certain data cannot be deleted while your account remains subject to ongoing regulatory recordkeeping obligations.',
        ],
    },
    {
        id: 6,
        title: '6. Cookies & Tracking',
        paragraphs: [
            'Our website and client portal use cookies and similar technologies to keep you logged in, remember preferences, and understand platform usage. You can control cookie preferences through your browser settings; disabling certain cookies may affect platform functionality.',
        ],
    },
    {
        id: 7,
        title: '7. Data Security',
        paragraphs: [
            'We apply administrative, technical, and physical safeguards including encryption in transit, access controls, and regular security review to protect personal data. No system is completely secure, and we cannot guarantee absolute security of data transmitted over the internet.',
        ],
    },
    {
        id: 8,
        title: '8. Contact',
        paragraphs: [
            'Questions about this Privacy Policy or requests relating to your personal data can be directed to [privacy@yumeprime.com].',
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <div>
            <PolicyBanner
                titleMain={privacyPolicyBannerData.titleMain}
                titleSpan={privacyPolicyBannerData.titleSpan}
                lastUpdated={privacyPolicyBannerData.lastUpdated}
            />
            <div className={styles.privacyPolicy}>
                <div className='container-sm'>
                    <div className={styles.noticeBox}>
                        <p>{noticeText}</p>
                    </div>

                    <div className={styles.contentList}>
                        {privacySections.map((section) => (
                            <div key={section.id} className={styles.item}>
                                <h3>{section.title}</h3>
                                {section.paragraphs.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <VisionSection />
        </div>
    );
}


