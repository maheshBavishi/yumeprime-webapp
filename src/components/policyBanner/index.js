import React from 'react';
import styles from './policyBanner.module.scss';

export default function PolicyBanner({
    titleMain = 'Risk',
    titleSpan = 'Disclosure',
    lastUpdated = 'October 2025',
}) {
    return (
        <div className={styles.policyBanner}>
            <div className='container-sm'>
                <h1>
                    {titleMain} {titleSpan && <span>{titleSpan}</span>}
                </h1>
                {lastUpdated && (
                    <p>
                        Last Updated: {lastUpdated}
                    </p>
                )}
            </div>
        </div>
    );
}


