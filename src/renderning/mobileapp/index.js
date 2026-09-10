import PlatformBanner from '@/components/platformBanner';
import PlatformComparison from '@/components/platformComparison';
import TradeSection from '@/components/tradeSection';
import BitCoinIcon from '@/icons/bitCoinIcon';
import SystemIcon from '@/icons/systemIcon';
import AutomatedIcon from '@/icons/automatedIcon';
import HedgingIcon from '@/icons/hedgingIcon';
import VisionSection from '../home/visionSection';
import ChartIcon from '@/icons/chartIcon';
import DeviceIcon from '@/icons/deviceIcon';
import AccountIcon from '@/icons/accountIcon';
import MobileIcon from '@/icons/mobileIcon';
import FaceidIcon from '@/icons/faceidIcon';
import RealtimeIcon from '@/icons/realtimeIcon';
import OneTapIcon from '@/icons/oneTapIcon';

const MetaTrader = '/assets/images/mobileapp.png';

const platformBannerData = {
    titleMain: 'Trade on',
    titleSpan: 'your terms.',
    description: 'One account. Every device. Full execution power wherever you are.',
    buttons: [
        { text: 'MetaTrader 5 (MT5)', lightButton: true, link: '/trading-platforms' },
        { text: 'WebTrader', lightButton: true, link: '/webtrader' },
        { text: 'Mobile App', fill: true, link: '/mobileapp' },
    ],
};

const mt5TradeSectionData = {
    title: 'Mobile App',
    description: "Manage positions, monitor markets, and execute trades from anywhere. Biometric login, real-time push alerts on price levels and account activity, and full charting on the go.",
    buttonText: ' Download the App',
    image: MetaTrader,
    imageAlt: 'MetaTrader 5',
    features: [
        {
            icon: <MobileIcon />,
            text: 'Available on iOS and Android',
        },
        {
            icon: <FaceidIcon />,
            text: 'Biometric (Face ID / fingerprint) login',
        },
        {
            icon: <RealtimeIcon />,
            text: 'Real-time price alerts and account notifications',
        },
        {
            icon: <OneTapIcon />,
            text: 'One-tap deposit and withdrawal',
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


export default function Mobileapp() {
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
    )
}
