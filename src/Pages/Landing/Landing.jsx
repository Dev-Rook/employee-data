import React, {useState} from 'react'
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css"

import Personel from '../../Page-Sections/Personel/Personel'

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Personel />
    </div>
  )
}

export default Landing