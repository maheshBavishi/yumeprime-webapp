import React from 'react';
import TradeWinHero from './tradeWinHero';
import Winrewards from './winrewards';
import TradeWinWork from './tradeWinWork';
import ProgrammeHighlights from './programmeHighlights';
import VisionSection from '../home/visionSection';

const tradeWinHeroData = {
    titleMain: "yume prime trade & win volume based",
    titleSpan: "trading rewards.",
    description: "Trade the markets that move. Accumulate volume. Unlock milestone rewards built for traders who trade often and deserve more than just tighter spreads for it.",
    primaryBtnText: "Get Started Now",
    secondaryBtnText: "View Milestones"
};

const programmeHighlightsData = {
    titleLine1: "Programme",
    titleLine2: "highlights",
    highlights: [
        {
            id: 1,
            title: "Volume-Based",
            spanText: "Rewards tied directly to lot volume, not deposit size"
        },
        {
            id: 2,
            title: "All Clients Eligible",
            spanText: "Open to both new and existing traders"
        },
        {
            id: 3,
            title: "No Limits",
            spanText: "Progress through every milestone with no cap"
        },
        {
            id: 4,
            title: "Closed Trades Only",
            spanText: "Volume counts from completed trades"
        },
        {
            id: 5,
            title: "Transparent Conditions",
            spanText: "Clear pricing, fast execution, no hidden qualifying rules"
        },
        {
            id: 6,
            title: "Performance Focused",
            spanText: "Built for active, high-volume traders"
        }
    ],
    buttonText: "Open Live Account"
};

export default function TradeWin() {
    return (
        <div>
            <TradeWinHero heroData={tradeWinHeroData} />
            <Winrewards />
            <TradeWinWork />
            <ProgrammeHighlights highlightsData={programmeHighlightsData} />
            <VisionSection />
        </div>
    );
}


