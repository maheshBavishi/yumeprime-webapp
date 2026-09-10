import React from 'react';
import styles from './restrictedCountries.module.scss';
import PolicyBanner from '@/components/policyBanner';
import VisionSection from '../home/visionSection';

const restrictedCountriesBannerData = {
    titleMain: 'Restricted',
    titleSpan: 'Countries',
    lastUpdated: 'October 2025',
};

const noticeText = "This list reflects jurisdictions where Yume Prime does not currently offer services, based on regulatory, sanctions, or licensing constraints. This must be confirmed against Yume Prime's actual license and legal counsel's guidance before publishing it is a compliance decision, not boilerplate, and directly affects which markets your marketing campaigns can target.";

const restrictedSections = [
    {
        id: 1,
        title: 'Restricted Jurisdictions',
        paragraphs: [
            '[Legal Entity Name], operating as Yume Prime, does not provide services to residents or citizens of [list commonly includes the United States and countries subject to comprehensive international sanctions], or to persons in any other jurisdiction where offering these services would contravene local law or regulation.',
        ],
    },
    {
        id: 2,
        title: 'Why This List Matters',
        paragraphs: [
            "This list must be built from Yume Prime's actual regulatory license and target-market strategy not copied from another broker. It should be cross-checked against active marketing campaigns before launch: a country excluded here cannot simultaneously be a target market for paid acquisition (for example, the Meta Ads campaigns currently scoped toward India in the Marketing Proposal). Confirm this list with legal counsel first, then align campaign targeting to match not the other way around.",
        ],
    },
    {
        id: 3,
        title: 'Client Responsibility',
        paragraphs: [
            "It is the client's responsibility to determine whether they are permitted to open and hold an account with Yume Prime under the laws of their country of residence or citizenship. Accessing the Yume Prime website or platform from a restricted jurisdiction does not constitute an offer or solicitation to residents of that jurisdiction.",
        ],
    },
];

export default function RestrictedCountries() {
    return (
        <div>
            <PolicyBanner
                titleMain={restrictedCountriesBannerData.titleMain}
                titleSpan={restrictedCountriesBannerData.titleSpan}
                lastUpdated={restrictedCountriesBannerData.lastUpdated}
            />
            <div className={styles.restrictedCountries}>
                <div className='container-sm'>
                    <div className={styles.noticeBox}>
                        <p>{noticeText}</p>
                    </div>

                    <div className={styles.contentList}>
                        {restrictedSections.map((section) => (
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

