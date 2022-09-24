import React, { useState } from 'react'
import styles from "./index.module.css";
import Logo from "../../assets/images/logo.svg";
import Hamburger from '../../assets/icons/Hamburger.svg'
import backArrow from '../../assets/icons/backArrow.svg'
import MenuPopup from '../MenuPopup';
import { useNavigate } from 'react-router-dom';

export default function MobileHeader() {

    const [menuPopup, setMenuPopup] = useState(false);

    // const navigate = useNavigate();

    // const goBack = () => {
    //     navigate("/")
    // } 
  
    return (
        <div className={styles.mobileContainer}>

            <div className={styles.menuPopup}>
                {menuPopup && <MenuPopup setMenuPopup={setMenuPopup} />}
            </div>

            <div className={styles.logo}> 
                <img width="100%" height="100%" src={Logo} alt="Ashok's Portfolio" />
            </div>


            {/* <div className={styles.aboutMeContainer}>
                <div onClick={goBack} className={styles.backArrow}>
                    <img width="100%" height="100%" src={backArrow} alt="backArrow" />
                </div>
                <span className={styles._about}>/ <p className={styles._wc}>About Me</p></span>
            </div> */}


            {/* <div className={styles.aboutMeContainer}>
                <div onClick={goBack} className={styles.backArrow}>
                    <img width="100%" height="100%" src={backArrow} alt="backArrow" />
                </div>
                <span className={styles._about}>/ <p className={styles._wc}>My Projects</p></span>
            </div> */}


            {/* <div className={styles.aboutMeContainer}>
                <div onClick={goBack} className={styles.backArrow}>
                    <img width="100%" height="100%" src={backArrow} alt="backArrow" />
                </div>
                <span className={styles._about}>/ <p className={styles._wc}>My Skills</p></span>
            </div> */}



            <div onClick={() => setMenuPopup(true)} className={styles.Hamburger}>
                <img width="100%" height="100%" src={Hamburger} alt="humbarg" />
            </div>
        </div>
    )
}
