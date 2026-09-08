import React from 'react';
import styles from './accountStage.module.scss';
import Button from '@/components/button';

const CheckIcon = ({ className }) => (
    <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M1.5 6L5.5 10L14.5 1.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const tableRows = [
    {
        label: "PLATFORMS",
        standard: " MT5 ",
        plus: " MT5  - Trading View",
        pro: " MT5  - Trading View",
    },
    {
        label: "MINIMUM DEPOSIT",
        standard: "US$100 or Equivalent",
        plus: "US$100 or Equivalent",
        pro: "US$100 or Equivalent",
    },
    {
        label: "SPREADS",
        standard: "From 1.0 pips",
        plus: "From 0.6 pips",
        pro: "From 0.0 pips",
    },
    {
        label: "PRICING MODEL",
        standard: "Spread only",
        plus: "Spread only",
        pro: "Raw Spreads + Commssion",
    },
    {
        label: "EXECUTION TYPE",
        standard: "ECN Pricing",
        plus: "ECN Pricing",
        pro: "ECN Pricing",
    },
    {
        label: "COMMISSION PER LOT",
        standard: "Zero",
        plus: "Zero",
        pro: "US$3 per side",
    },
    {
        label: "INSTRUMENTS AVAILABLE",
        standard: "Forex, Metals, Indices, Commodities, Digital Currency",
        plus: "Forex, Metals, Indices, Commodities, Stocks, Digital Currency",
        pro: "Forex, Metals, Indices, Commodities, Stocks, Digital Currency",
    },
    {
        label: "MAXIMUM LEVERAGE",
        standard: "Up to 1:500*",
        plus: "Up to 1:500*",
        pro: "Up to 1:500*",
    },
    {
        label: "MINIMUM TRADE SIZE",
        standard: "0.01 lot",
        plus: "0.01 lot",
        pro: "0.01 lot",
    },
    {
        label: "EXPERT ADVISOR (EAS)",
        standard: "check",
        plus: "check",
        pro: "check",
    },
    {
        label: "MOBILE TRADING",
        standard: "check",
        plus: "check",
        pro: "check",
    },
    {
        label: "COPY/PAMM/MAM",
        standard: "Supported",
        plus: "Supported",
        pro: "Supported",
    },
    {
        label: "BEST FOR",
        standard: "Beginners & Casual Traders",
        plus: "Active Traders",
        pro: "Professional & high volume traders",
    },
];

export default function AccountStage() {
    const renderCellContent = (value) => {
        if (value === "check") {
            return <CheckIcon className={styles.checkIcon} />;
        }
        return value;
    };

    return (
        <section className={styles.accountStage}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>
                        An account<br />
                        for every stage
                    </h2>
                </div>

                <div className={styles.flexBox}>
                    <div className={styles.tableWrapper}>
                        <div className={styles.comparisonTable}>
                            {/* Table Header */}
                            <div className={styles.headerRow}>
                                <div className={`${styles.cell} ${styles.labelHeaderCell}`}></div>

                                <div className={`${styles.cell} ${styles.standardHeaderCell}`}>
                                    <h3 className={styles.planTitle}>Standard</h3>
                                    <div className={styles.headerLine}></div>
                                </div>

                                <div className={`${styles.cell} ${styles.plusHeaderCell}`}>
                                    <h3 className={styles.planTitle}>Plus</h3>
                                    <div className={styles.headerLine}></div>
                                </div>

                                <div className={`${styles.cell} ${styles.proHeaderCell}`}>
                                    <span className={styles.popularBadge}>MOST POPULAR</span>
                                    <h3 className={styles.planTitle}>Pro Account</h3>
                                </div>
                            </div>

                            {/* Table Body Rows */}
                            {tableRows.map((row, index) => (
                                <div key={index} className={styles.dataRow}>
                                    <div className={`${styles.cell} ${styles.labelCell}`}>
                                        <span>{row.label}</span>
                                    </div>

                                    <div className={`${styles.cell} ${styles.standardCell}`}>
                                        {renderCellContent(row.standard)}
                                    </div>

                                    <div className={`${styles.cell} ${styles.plusCell}`}>
                                        {renderCellContent(row.plus)}
                                    </div>

                                    <div className={`${styles.cell} ${styles.proCell}`}>
                                        {renderCellContent(row.pro)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.buttonTop}>
                    <Button text="Compare all accounts" fill />
                </div>
            </div>
        </section>
    );
}

