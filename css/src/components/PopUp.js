import React from 'react'
import styles from './Button.module.css'
import style from './PopUp.module.css'
export default function PopUp({content,isPopUp,setIsPopUp}) {
  return (
	<div>
		<div className={`${styles.container}`}>
			<div className={`${style.popUp}`}>
				<h2>{content}</h2>
				<button className={style.secondary} onClick={()=>{setIsPopUp(false)}}>close</button>
			</div>

		</div>
	</div>
  )
}
