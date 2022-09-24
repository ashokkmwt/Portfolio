import React, { useState } from 'react'
import styles from "./index.module.css";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from 'react-router-dom';
import { useLocalStorage, useWindowSize } from 'react-use';
import { tabs } from './data';
import MenuPopup from '../MenuPopup';
import Hamburger from '../../assets/icons/Hamburger.svg'
import backArrow from '../../assets/icons/backArrow.svg'



export default function Header() {

  const { width } = useWindowSize();

  const [menuPopup, setMenuPopup] = useState(false);

  const [activeTab, setActiveTab] = useLocalStorage('tab', 20);

  const [activeTabName, setActiveTabName, activeTabNameRemove] = useLocalStorage('tabname', "home");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
    activeTabNameRemove('tabname');
  }

  const visit = (tab, index) => {
    if (tab === "home") {
      navigate(`/`);
      setActiveTabName(tab)
      setActiveTab(10);
      return;
    }
    // here we set index = 10 (in setActiveTab), because there is no tab on index = 10. It there will happen nothing by clicking on "home".

    if (tab !== "resume") {
      setActiveTab(index);
      setActiveTabName(tab)
      navigate(`/${tab}`);
      return;
    }
    setActiveTab(10);
  }

  return (
    <header>
      {width > 800 &&
        <>
          <div onClick={() => visit("home")} className={styles.logo}>
            <img width="100%" height="100%" src={Logo} alt="Ashok's Portfolio" />
          </div>
          <nav>
            <ul>
              {tabs.map((tab, index) => {
                return <li style={{ color: activeTab === index && "#D07C44" }} key={tab.id} onClick={() => visit(tab.name, index)}>{tab.name}</li>
              })}
            </ul>
          </nav>

          <button>
            <a href="mailto:sendtoashokkumawat@gmail.com">Hire me!</a>
          </button>
        </>
      }

      {/* rendering responsive header */}
      {width <= 800 &&
        <div className={styles.mobileContainer}>

          {menuPopup && <MenuPopup visit={visit} setMenuPopup={setMenuPopup} />}


          {activeTabName === "home" ?
            <div className={styles._logo}>
              <img width="100%" height="100%" src={Logo} alt="Ashok's Portfolio" />
            </div> : <>
              <div onClick={goBack} className={styles.backArrow}>
                <img width="100%" height="100%" src={backArrow} alt="backArrow" />
              </div>
              <span className={styles._about}>/
                <p className={styles._wc}>{activeTabName === "about" && "about me"}</p>
                <p className={styles._wc}>{activeTabName === "skills" && "my skills"}</p>
                <p className={styles._wc}>{activeTabName === "projects" && "my projects"}</p>
              </span>
            </>}

          <div onClick={() => setMenuPopup(true)} className={styles.Hamburger}>
            <img width="100%" height="100%" src={Hamburger} alt="humbarg" />
          </div>
        </div>
      }

    </header >
  )
}