import React from 'react'
import styles from "./Gallery.module.css"
import style from "./Button.module.css"
import images from '../images/card.jpg'
export default function Gallery() {
  return (
	<div>
		<div className={`${style.container}`}>
			<div className={`${styles.gallery}`}>
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
				<div className= {`${styles.img}`}>
					<img src={images} className= {`${styles.gridImg}`} />
				</div>
				
				

			</div>
		</div>
	</div>
  )
}
