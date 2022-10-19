import React from 'react'
import styles from './index.module.css'
import CloseIcon from '../../assets/icons/closeIcon.svg'
import Portfolio from '../../assets/images/Portfolio.svg'

export default function MenuPopup(props) {

  const { setMenuPopup, visit } = props;

  const pages = [
    "home", "about", "projects", "skills"
  ]

  return (
    <div className={styles.menuContainer}>

      <div onClick={() => setMenuPopup(false)} className={styles.closeBtn}>
        <img width="100%" height="100%" src={CloseIcon} alt="close" />
      </div>

      <div onClick={() => visit("home")} className={styles.logo}>
        <img width="100%" height="100%" src={Portfolio} alt="portfolio" />
      </div>

      {pages.map((page, index) =>
        <div key={index} className={styles.menu}>
          <p onClick={() => visit(page, index - 1)}>{page}</p>
        </div>
      )}

    </div>
  )
}
