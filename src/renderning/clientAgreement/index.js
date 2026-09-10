import React from 'react';
import styles from './clientAgreement.module.scss';
import PolicyBanner from '@/components/policyBanner';
import VisionSection from '../home/visionSection';

const clientAgreementBannerData = {
    titleMain: 'Client',
    titleSpan: 'Agreement',
    lastUpdated: 'October 2025',
};

const noticeText = 'This Client Agreement governs the relationship between you ("the Client") and [Legal Entity Name], trading as Yume Prime (“the Company”), and applies from the date your account is approved.';

const agreementSections = [
    {
        id: 1,
        title: '1. Scope of Services',
        paragraphs: [
            'The Company provides an execution-only trading service. The Company does not provide investment advice, portfolio management, or personalised recommendations, and nothing on the Yume Prime platform or website should be treated as such. Any market commentary, educational content, or analysis published by the Company is for general informational purposes only.',
        ],
    },
    {
        id: 2,
        title: '2. Account Opening & Eligibility',
        paragraphs: [
            'To open an account, you must be at least 18 years old (or the legal age of majority in your jurisdiction), complete identity verification (KYC) to the Company’s satisfaction, and not be a resident of a Restricted Country as set out in Section 7.5. The Company reserves the right to decline any application at its discretion.',
        ],
    },
    {
        id: 3,
        title: '3. Trading Conditions & Order Execution',
        paragraphs: [
            'Trading conditions including spreads, commissions, leverage, and margin requirements are set out on the Account Types page and applied per the account type held. Orders are executed on a best-efforts basis; the Company does not guarantee execution at a specific price, particularly during volatile market conditions, and reserves the right to apply reasonable slippage consistent with market conditions.',
        ],
    },
    {
        id: 4,
        title: '4. Fees, Commissions & Swaps',
        paragraphs: [
            'Applicable spreads, commissions, and overnight swap charges are published on the Account Types and Trading Conditions pages and are incorporated into this Agreement by reference. The Company may amend fees with reasonable prior notice.',
        ],
    },
    {
        id: 5,
        title: '5. Deposits & Withdrawals',
        paragraphs: [
            'Deposits and withdrawals must be made using payment methods in the Client’s own name. Withdrawals are processed to the original funding source wherever possible. The Company may request additional verification before processing a withdrawal to comply with AML obligations, which may extend processing time.',
        ],
    },
    {
        id: 6,
        title: '6. Margin Call & Stop-Out Policy',
        paragraphs: [
            "If your account's margin level falls below [100%], you may receive a margin call warning. If margin level falls to or below [50%] (or the applicable stop-out level for your account type), the Company reserves the right to automatically close open positions, starting with the most unprofitable, to prevent the account balance from going into deficit where negative balance protection applies. [Confirm exact margin call and stop-out thresholds per account type before publishing.]",
        ],
    },
    {
        id: 7,
        title: '7. Liability & Indemnity',
        paragraphs: [
            "Except as required by applicable law, the Company is not liable for indirect or consequential losses, or for losses arising from circumstances beyond its reasonable control, including but not limited to connectivity failures, third-party platform outages, or force majeure events. The Client agrees to indemnify the Company against losses arising from the Client's breach of this Agreement or provision of false information.",
        ],
    },
    {
        id: 8,
        title: '8. Account Termination & Inactivity',
        paragraphs: [
            'Either party may terminate this Agreement with notice as set out below. The Company may suspend or close an account immediately in cases of suspected fraud, AML concern, or breach of this Agreement. Accounts with no trading activity for [12 months] may be classified as dormant and subject to an inactivity fee as disclosed on the Account Types page, where permitted by applicable regulation.',
        ],
    },
    {
        id: 9,
        title: '9. Dispute Resolution',
        paragraphs: [
            "Disputes should first be raised with Yume Prime support at [support@yumeprime.com]. If unresolved, disputes will be handled per the governing law and dispute resolution mechanism applicable to [Legal Entity Name]'s jurisdiction of incorporation. [Insert final governing law and arbitration/jurisdiction clause with legal counsel.]",
        ],
    },
];

export default function ClientAgreement() {
    return (
        <div>
            <PolicyBanner
                titleMain={clientAgreementBannerData.titleMain}
                titleSpan={clientAgreementBannerData.titleSpan}
                lastUpdated={clientAgreementBannerData.lastUpdated}
            />
            <div className={styles.clientAgreement}>
                <div className='container-sm'>
                    <div className={styles.noticeBox}>
                        <p>{noticeText}</p>
                    </div>

                    <div className={styles.contentList}>
                        {agreementSections.map((section) => (
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

