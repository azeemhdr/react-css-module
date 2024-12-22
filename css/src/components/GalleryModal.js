import React from 'react'
import styles from './Gallery.module.css'
import images from '../images/card.jpg'


export default function GalleryModal({setGalleryModal}) {
  return (
	<div>
		<div className={`${styles.galleryModal}`} onClick={()=>{setGalleryModal(false)}}>
			<div className={`${styles.galleryModalContent}`}>
				<img src={images} />
			</div>
		</div>
	</div>
  )
}
