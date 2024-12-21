import React from 'react'
import styles from './Modal.module.css'
import buttonStyle from './Button.module.css'
import PrimaryButton from './PrimaryButton'

export default function Modal({isModal,setIsModal}) {
  return (
	<div>
		<div className={`${styles.modal}`} onClick={()=>{setIsModal(false)}} >
			<div className={`${styles.modalContent}`} onClick={(e)=>{e.stopPropagation()}}>
				<h2>Modal Title</h2>
				<p>Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
				{/* <PrimaryButton content="Close" setRandom={()=>{setIsModal(false)}}/> */}
				<button className={`${buttonStyle.primary}`} onClick={()=>{setIsModal(false)}}>Close</button>
			</div>
		</div>
	</div>
  )
}
