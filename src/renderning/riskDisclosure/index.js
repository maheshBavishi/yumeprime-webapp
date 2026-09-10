import React from 'react';
import styles from './riskDisclosure.module.scss';
import PolicyBanner from '@/components/policyBanner';
import VisionSection from '../home/visionSection';

const riskDisclosureBannerData = {
    titleMain: 'Risk',
    titleSpan: 'Disclosure',
    lastUpdated: 'October 2025',
};

const noticeText = "This Risk Disclosure forms part of the Client Agreement between you and [Legal Entity Name] (“Yume Prime,” “we,” “us”). Please read it in full before opening or funding an account.";

const riskSections = [
    {
        id: 1,
        title: '1. Nature of the Products',
        paragraphs: [
            'Yume Prime offers trading in forex and Contracts for Difference (“CFDs”) across metals, indices, crypto assets, commodities, and stock CFDs. These are leveraged products: you can open a position larger than the funds you deposit, which means both potential gains and potential losses are magnified relative to your account balance.',
            'Depending on your account type and jurisdiction, losses may exceed your initial deposit. Where negative balance protection applies to your account, your losses on that account are limited to the funds you have deposited; where it does not apply, you may be liable for losses beyond your deposited funds. [Confirm which account types and jurisdictions carry negative balance protection before publishing this materially changes the risk to the client and must be stated accurately.',
        ],
    },
    {
        id: 2,
        title: '2. Market Risk',
        paragraphs: [
            'Prices in forex and CFD markets can move rapidly and unpredictably, particularly during periods of low liquidity, high-impact economic announcements, or unexpected geopolitical events. In fast-moving markets, the price at which an order is executed (particularly stop-loss and take-profit orders) may differ from the price requested this is known as slippage. Gapping can also occur, where price moves directly from one level to another without trading at intermediate prices, which can result in losses larger than anticipated even with risk-management orders in place.',
        ],
    },
    {
        id: 3,
        title: '3. No Guarantee of Profit',
        paragraphs: [
            '[JKV Global legal entity] operates as an execution-only broker. Registered office and registration details: [to be confirmed]. For any privacy matter you can reach us at [privacy email to confirm]. JKV Global is the data controller responsible for the personal information described in this Policy.',
        ],
    },
    {
        id: 4,
        title: '4. Suitability',
        paragraphs: [
            'Leveraged trading is not suitable for every investor. Before trading, you should carefully consider your investment objectives, level of experience, financial situation, and risk appetite. You should not trade with funds you cannot afford to lose, and you should seek independent financial advice if you are unsure whether these products are appropriate for you.',
        ],
    },
    {
        id: 5,
        title: '5. Retail Investor Loss Statistic',
        paragraphs: [
            '[X]% of retail investor accounts lose money when trading CFDs with Yume Prime. [This figure must reflect Yume Prime’s own verified data and, in many jurisdictions, is a mandatory disclosure with specific calculation and formatting requirements confirm the exact figure and required wording with your compliance team before publishing.]',
        ],
    },
    {
        id: 6,
        title: '6. Platform, Connectivity & Third-Party Risk',
        paragraphs: [
            'Trading depends on the continuous availability of internet connectivity, hardware, software, and third-party infrastructure, including liquidity providers and banking partners. Yume Prime is not liable for losses arising from connectivity interruptions, platform outages, or third-party failures outside its reasonable control, except as required by applicable law or as set out in the Client Agreement.',
        ],
    },
    {
        id: 7,
        title: '7. Currency & Jurisdictional Risk',
        paragraphs: [
            'If you fund your account in a currency different from your base account currency, currency conversion may affect your account balance and margin requirements independently of your trading positions. Products, leverage limits, and protections described in this Risk Disclosure may vary depending on the regulated entity through which your account is opened and your country of residence.',
        ],
    },
];

export default function RiskDisclosure() {
    return (
        <div>
            <PolicyBanner
                titleMain={riskDisclosureBannerData.titleMain}
                titleSpan={riskDisclosureBannerData.titleSpan}
                lastUpdated={riskDisclosureBannerData.lastUpdated}
            />
            <div className={styles.riskDisclosure}>
                <div className='container-sm'>
                    <div className={styles.noticeBox}>
                        <p>{noticeText}</p>
                    </div>

                    <div className={styles.contentList}>
                        {riskSections.map((section) => (
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


