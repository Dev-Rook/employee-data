import React, {useState} from 'react'
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css"

import Pagination from '../../Page-Sections/Pagination/Pagination'

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Pagination />
    </div>
  )
}

export default Landing