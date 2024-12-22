import React, { useState } from 'react'
import styles from "./Gallery.module.css"
import style from "./Button.module.css"
import images from '../images/card.jpg'
import Modal from './Modal'
import GalleryModal from './GalleryModal'

export default function Gallery({setIsModal}) {
	const [galleryModal,setGalleryModal] = useState(false)

	// const moadalTrigger = ()=>{
	// 	setGalleryModal(<Modal/>)
	// 	console.log(galleryModal)
	// }


  return (
	<div>
		<div className={`${style.container}`}>
			<div className={`${styles.gallery}`}>
				<div className= {`${styles.img}`} >
					<img src={images} className= {`${styles.gridImg}`} onClick={()=>{setGalleryModal(true)}}/>
					{galleryModal===true?<GalleryModal setGalleryModal={setGalleryModal} />:''}
					
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				
				

			</div>
		</div>
	</div>
  )
}
