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

const MetaTrader = '/assets/images/WebTrader.png';

const platformBannerData = {
    titleMain: 'Trade on',
    titleSpan: 'your terms.',
    description: 'One account. Every device. Full execution power wherever you are.',
    buttons: [
        { text: 'MetaTrader 5 (MT5)', lightButton: true, link: '/trading-platforms' },
        { text: 'WebTrader', fill: true, link: '/webtrader' },
        { text: 'Mobile App', lightButton: true, link: '/mobileapp' },
    ],
};

const mt5TradeSectionData = {
    title: 'WebTrader',
    description: "No installation, no setup. Log in from any browser and trade with full platform functionality built for traders who move between devices and don’t want to install software on every one of them.",
    buttonText: ' Launch WebTrader',
    image: MetaTrader,
    imageAlt: 'MetaTrader 5',
    features: [
        {
            icon: <ChartIcon />,
            text: 'Full charting suite directly in-browser',
        },
        {
            icon: <DeviceIcon />,
            text: 'Instant access from any device with an internet connection',
        },
        {
            icon: <AccountIcon />,
            text: 'Same account, same pricing, same execution as MT5 desktop',
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

export default function Webtrader() {
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
