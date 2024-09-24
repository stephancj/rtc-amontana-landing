import Image from "next/image";
import styles from "./loader.module.scss";

const Loader = () => {
    return (
        <div className={styles['loader']}>
            <div className={styles['loader__spinner']}>
                <Image src="/images/rtc_logo.png" alt="Rotaract logo" width={100} height={100} />
            </div>
        </div>
    );
}

export default Loader;