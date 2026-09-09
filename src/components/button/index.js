import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export default function Button({ text, outline, fill, lightButton, onClick, href, link, target }) {
    const destination = href || link;
    const buttonClasses = classNames(
        styles.button,
        outline ? styles.outline : "",
        fill ? styles.fill : "",
        lightButton ? styles.lightButton : ""
    );

    const innerContent = <span className={styles.btnText}>{text}</span>;

    if (destination) {
        if (destination.startsWith('http')) {
            return (
                <a
                    href={destination}
                    target={target || "_blank"}
                    rel="noopener noreferrer"
                    className={buttonClasses}
                    onClick={onClick}
                >
                    {innerContent}
                </a>
            );
        }
        return (
            <Link
                href={destination}
                className={buttonClasses}
                onClick={onClick}
            >
                {innerContent}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={onClick}
            aria-label={text}
        >
            {innerContent}
        </button>
    );
}



