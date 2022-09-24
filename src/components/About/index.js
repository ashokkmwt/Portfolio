import React from 'react'
import styles from './index.module.css'
import AboutImg from '../../assets/images/about14.svg'
import ContactBar from '../Reusable/ContactBar'
import { useWindowSize } from 'react-use'

export default function About() {

    const { width } = useWindowSize();

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutImageDesktop}>
                <img width="100%" height="100%" src={AboutImg} alt="about" />
            </div>
            <div className={styles.aboutDetail}>
                <h1>
                    <span>/</span>
                    About Me
                </h1>
                <h2>
                    I am Civil Service Aspirant<br />turned Web Developer!
                </h2>

                <div className={styles.aboutImageMobile}>
                    <img width="100%" height="100%" src={AboutImg} alt="about" />
                </div>

                <p>
                    I hail from Bhilwara, a small city in Rajasthan. I'm an intermediate react<br />
                    developer and constantly improving my ReactJS and Vanilla JavaScript skills.<br />
                    Interested in working with me on web app development?
                </p>

                <button className={styles.chatBtn}>
                    <a href='https://www.linkedin.com/in/devashok/' target='_blank' rel="noreferrer"  >Let's chat!</a>
                </button>

                <ContactBar style={{ justifyContent: width <= 800 ? "flex-start" : "flex-end", marginTop: 20 }} />

            </div>
        </div>
    )
}