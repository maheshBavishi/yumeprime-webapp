import React from 'react';
import styles from './socialTrading.module.scss';
import SocialTradingHero from './socialTradingHero';
import SocialTradingDetails from './socialTradingDetails';
import VisionSection from '../home/visionSection';

const socialTradingHeroData = {
    titleLine1: "FOLLOW THE",
    titleLine2: "STRATEGIES",
    titleSpan: "THAT WORK.",
    description: "Copy the trades of experienced strategy providers automatically, in real time, proportional to your account size. No manual execution required."
};

const socialTradingDetailsData = {
    followersSection: {
        titleLine1: "How it works",
        titleLine2: "followers",
        items: [
            {
                id: 1,
                text: "Browse the leaderboard of ranked strategy providers, filtered by performance, risk score, and asset class."
            },
            {
                id: 2,
                text: "Allocate an amount to copy and set your risk parameters."
            },
            {
                id: 3,
                text: "Trades are copied automatically and proportionally to your account you retain full control to stop copying at any time."
            }
        ]
    },
    providersSection: {
        titleLine1: "How it works",
        titleLine2: "Strategy Providers",
        items: [
            {
                id: 1,
                text: "Transparent performance history for every strategy provider"
            },
            {
                id: 2,
                text: "Set your own risk level per strategy you follow"
            },
            {
                id: 3,
                text: "Stop copying or adjust allocation at any time"
            }
        ]
    },
    buttonText: "Explore Social Trading"
};

export default function SocialTrading() {
    return (
        <div>
            <SocialTradingHero heroData={socialTradingHeroData} />
            <SocialTradingDetails detailsData={socialTradingDetailsData} />
            <VisionSection />
        </div>
    );
}


