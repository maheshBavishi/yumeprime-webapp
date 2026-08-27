import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

export default function Button({ text, outline, fill, lightButton, onClick }) {
    return (
        <div 
            className={classNames(
                styles.button, 
                outline ? styles.outline : "", 
                fill ? styles.fill : "", 
                lightButton ? styles.lightButton : ""
            )}
            onClick={onClick}
        >
            <button aria-label={text}>
                <span className={styles.btnText}>{text}</span>
            </button>
        </div>
    );
}

