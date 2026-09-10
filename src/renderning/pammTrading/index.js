import React from 'react';
import VisionSection from '../home/visionSection';
import SocialTradingHero from '../socialTrading/socialTradingHero';
import SocialTradingDetails from '../socialTrading/socialTradingDetails';

const socialTradingHeroData = {
    titleLine1: "INVEST WITH",
    titleLine2: "EXPERIENCED",
    titleSpan: "MONEY MANAGERS.",
    description: "PAMM lets investors allocate capital to professional money managers, who trade a pooled account on their behalf profits and losses are distributed proportionally to each investor’s share."
};

const socialTradingDetailsData = {
    followersSection: {
        titleLine1: "For Investors",
        items: [
            {
                id: 1,
                text: "Browse verified PAMM managers by track record, risk profile, and profit-share terms"
            },
            {
                id: 2,
                text: "Allocate capital without needing to trade yourself"
            },
            {
                id: 3,
                text: "Funds remain in your own segregated account you retain full withdrawal rights"
            }
        ]
    },
    providersSection: {
        titleLine1: "For Money Managers",
        items: [
            {
                id: 1,
                text: "Manage pooled investor capital under a single strategy"
            },
            {
                id: 2,
                text: "Earn a performance fee on profits generated for investors"
            },
            {
                id: 3,
                text: "Build a public, verifiable track record on the platform"
            }
        ]
    },
    buttonText: "Explore PAMM"
};


export default function PammTrading() {
    return (
        <div>
            <SocialTradingHero heroData={socialTradingHeroData} />
            <SocialTradingDetails detailsData={socialTradingDetailsData} />
            <VisionSection />
        </div>
    )
}
