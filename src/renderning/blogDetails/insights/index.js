import React from 'react'
import styles from './insights.module.scss';
import Blogcard from '@/components/blogcard';
export default function Insights() {
    return (
        <div className={styles.insights}>
            <div className='container-xl'>
                <h2>
                    More from <br /> yume prime <span> insights </span>
                </h2>
                <div className={styles.grid}>
                    {
                        [...Array(3)].map(() => {
                            return (
                                <Blogcard textwhite />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
