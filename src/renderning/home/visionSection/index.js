import Button from '@/components/button';
import styles from './visionSection.module.scss';
const Execution = '/assets/images/execution-coin.png';

export default function VisionSection() {
    return (
        <div className={styles.visionSection}>
            <div className='container-xl'>
                <h2>
                    Your vision. <br />
                    Our execution.
                </h2>
                <p>
                    Your vision sets the course. We
                    handle the rest with precision and care.
                </p>
                <div className={styles.btnAlignment}>
                    <Button text="Open Live account" fill />
                    <Button text="Register Now" outlinePrimary />
                </div>
                <div className={styles.imageAlignment}>
                    <img src={Execution} alt='Execution' />
                </div>
            </div>
        </div>
    );
}

