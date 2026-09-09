import PlatformBanner from '@/components/platformBanner';
import PlatformComparison from '@/components/platformComparison';
import TradeSection from '@/components/tradeSection';
import BitCoinIcon from '@/icons/bitCoinIcon';
import SystemIcon from '@/icons/systemIcon';
import AutomatedIcon from '@/icons/automatedIcon';
import HedgingIcon from '@/icons/hedgingIcon';
import VisionSection from '../home/visionSection';

const MetaTrader = '/assets/images/metatrader.png';

const platformBannerData = {
    titleMain: 'Trade on',
    titleSpan: 'your terms.',
    description: 'One account. Every device. Full execution power wherever you are.',
    buttons: [
        { text: 'MetaTrader 5 (MT5)', lightButton: true },
        { text: 'WebTrader', fill: true },
        { text: 'Mobile App', lightButton: true },
    ],
};

const mt5TradeSectionData = {
    title: 'MetaTrader 5 (MT5)',
    description: "The industry-standard platform, tuned to Yume Prime’s low-latency infrastructure. Advanced charting, algorithmic trading via Expert Advisors, and access to every instrument across all six markets from a single interface.",
    buttonText: 'Download MT5',
    image: MetaTrader,
    imageAlt: 'MetaTrader 5',
    features: [
        {
            icon: <BitCoinIcon />,
            text: '21 analytical objects, 38 built-in indicators, 9 timeframes',
        },
        {
            icon: <SystemIcon />,
            text: 'One-click trading and full order-book depth on supported instruments',
        },
        {
            icon: <HedgingIcon />,
            text: 'Hedging and netting account modes available',
        },
        {
            icon: <AutomatedIcon />,
            text: 'Automated trading support via Expert Advisors (EAs)',
        },
        {
            icon: <SystemIcon />,
            text: 'Available on Windows, macOS, iOS, Android, and Web no download required for WebTrader access',
        },
    ],
};

const platformComparisonData = {
    title: 'Platform comparison',
    headers: ['Feature', 'MT5', 'WebTrader', 'Mobile App'],
    rows: [
        { feature: 'Advanced charting', mt5: 'Yes', webTrader: 'Yes', mobileApp: 'Yes' },
        { feature: 'Algorithmic trading (EAs)', mt5: 'Yes', webTrader: 'No', mobileApp: 'No' },
        { feature: 'One-click trading', mt5: 'Yes', webTrader: 'Yes', mobileApp: 'Yes' },
        { feature: 'Biometric login', mt5: '—', webTrader: '—', mobileApp: 'Yes' },
        { feature: 'No download required', mt5: 'No', webTrader: 'Yes', mobileApp: 'No' },
    ],
};

export default function TradingPlaforms() {
    return (
        <div>
            <PlatformBanner
                titleMain={platformBannerData.titleMain}
                titleSpan={platformBannerData.titleSpan}
                description={platformBannerData.description}
                buttons={platformBannerData.buttons}
            />
            <TradeSection
                title={mt5TradeSectionData.title}
                description={mt5TradeSectionData.description}
                buttonText={mt5TradeSectionData.buttonText}
                features={mt5TradeSectionData.features}
                image={mt5TradeSectionData.image}
                imageAlt={mt5TradeSectionData.imageAlt}
            />
            <PlatformComparison
                title={platformComparisonData.title}
                headers={platformComparisonData.headers}
                rows={platformComparisonData.rows}
            />
            <VisionSection />
        </div>
    );
}
