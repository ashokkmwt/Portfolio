import React from 'react'
import styles from './index.module.css'
import Group from '../../assets/images/Group5.svg'
import ContactBar from '../Reusable/ContactBar'
import { useWindowSize } from 'react-use';

export default function Home() {
    const { width } = useWindowSize();
    return (
        <div className={styles.HomeContainer}>
            <div className={styles._line}></div>
            <div className={styles._detailContainer}>
                <div className={styles._detail}>
                    <div>
                        <p className={styles._bio}>I'm Ashok, a <br />
                            Front-end Developer</p>
                    </div>
                    <div><p className={styles._bio2}>I design web apps to turn your ideas into reality.</p></div>
                    <button className={styles.contactBtn}>
                        <a href="mailto:sendtoashokkumawat@gmail.com">Get in touch</a>
                    </button>
                    <button className={styles.hireBtn}>
                        <a href="mailto:sendtoashokkumawat@gmail.com">Hire me!</a>
                    </button>
                    {width > 600 && <ContactBar style={{ marginTop: "20px" }} />}
                </div>
                <div className={styles._detailImg}>
                    <img width="100%" height="100%" src={Group} alt="group" />
                </div>
            </div>
            {width < 600 && <ContactBar />}
        </div>
    )
}
