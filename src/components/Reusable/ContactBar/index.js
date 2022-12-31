import React from 'react'
import styles from "./index.module.css";
import LinkedIn from '../../../assets/icons/LinkedIn.svg'
import GitHub from '../../../assets/icons/GitHub.svg'
import Twitter from '../../../assets/icons/Twitter.svg'
import Instagram from '../../../assets/icons/Instagram.svg'
import YouTube from '../../../assets/icons/ytPremium.svg'

export default function ContactBar({ style }) {

    const Icons = [
        { img: LinkedIn, link: "https://www.linkedin.com/in/devashok/" },
        { img: GitHub, link: "https://github.com/ashokkmwt" },
        { img: Twitter, link: "https://twitter.com/ASHOKKU77882283" },
        { img: Instagram, link: "https://www.instagram.com/ashok_kumawat_1111/" },
        { img: YouTube, link: "https://www.youtube.com/channel/UCE7EdV7BqofiPWoS33xW0tQ" }
    ];

    return (
        <div style={style} className={styles.container}>
            <p className={styles.connect}>Let's connect</p>
            <p className={styles.line}></p>
            <div className={styles.logoBar}>
                {Icons.map((Icon, index) => {
                    return (
                        <a href={Icon.link} target="_blank" rel="noreferrer" key={index}>
                            <img width="100%" height="100%" src={Icon.img} alt="contacts" />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
