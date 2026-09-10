import React from 'react';
import styles from './kycPolicy.module.scss';
import PolicyBanner from '@/components/policyBanner';
import VisionSection from '../home/visionSection';

const kycPolicyBannerData = {
    titleMain: 'AML / KYC',
    titleSpan: 'Policy',
    lastUpdated: 'October 2025',
};

const noticeText = "Yume Prime is committed to preventing money laundering, terrorist financing, and financial crime, and applies the following due diligence standards to every client.";

const kycSections = [
    {
        id: 1,
        title: '1. Customer Due Diligence (CDD)',
        paragraphs: [
            'Before an account can be funded, every client must provide a valid government-issued photo ID (passport, national ID, or driving licence) and proof of address dated within the last [3 months] (utility bill or bank statement). Identity documents are verified against the details provided at registration before an account is approved for trading.',
        ],
    },
    {
        id: 2,
        title: '2. Enhanced Due Diligence (EDD)',
        paragraphs: [
            'Clients identified as higher-risk including politically exposed persons (PEPs), clients from higher-risk jurisdictions, or clients with unusual transaction patterns are subject to enhanced due diligence, which may include additional documentation, source-of-funds verification, and closer ongoing monitoring.',
        ],
    },
    {
        id: 3,
        title: '3. Source of Funds',
        paragraphs: [
            'Clients depositing above [$10,000] cumulatively, or exhibiting transaction patterns inconsistent with their stated profile, may be asked to provide evidence of the origin of their funds (such as payslips, bank statements, or business records) before further deposits or withdrawals are processed. [Confirm actual threshold against your regulatory framework.]',
        ],
    },
    {
        id: 4,
        title: '4. Ongoing Monitoring',
        paragraphs: [
            "Client accounts and transactions are monitored on an ongoing basis for patterns inconsistent with normal trading activity, including unusual deposit/withdrawal patterns, rapid movement of funds, or activity inconsistent with the client's stated occupation and income.",
        ],
    },
    {
        id: 5,
        title: '5. Reporting Obligations',
        paragraphs: [
            'Where suspicious activity is identified, Yume Prime is obligated to file reports with the relevant financial intelligence unit or regulator in its licensing jurisdiction, and may be required to freeze or restrict an account while an investigation is ongoing, without prior notice to the client where legally required.',
        ],
    },
    {
        id: 6,
        title: '6. Sanctions Screening',
        paragraphs: [
            'All clients are screened against applicable international sanctions lists at onboarding and on an ongoing basis. Yume Prime will not open or maintain an account for any individual or entity appearing on an applicable sanctions list.',
        ],
    },
];

export default function KycPolicy() {
    return (
        <div>
            <PolicyBanner
                titleMain={kycPolicyBannerData.titleMain}
                titleSpan={kycPolicyBannerData.titleSpan}
                lastUpdated={kycPolicyBannerData.lastUpdated}
            />
            <div className={styles.kycPolicy}>
                <div className='container-sm'>
                    <div className={styles.noticeBox}>
                        <p>{noticeText}</p>
                    </div>

                    <div className={styles.contentList}>
                        {kycSections.map((section) => (
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

