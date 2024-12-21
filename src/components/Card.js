import React from 'react'
import stylesButton from './Button.module.css'
import styles from './Card.module.css'
import PrimaryButton from './PrimaryButton'
import images from '../images/card.jpg'

export default function Card({title,content}) {
  return (
	<div>
		<div className={`${stylesButton.container}`}>
			<div className={`${styles.card}`}>
				<img className={`${styles.cardImg}`} src={images} />
				<div className={`${styles.cardContentWrapper}`}>
					<h2 className={`${styles.cardtitle}`}>{title}</h2>
					<p className={`${styles.cardContent}`}>{content}</p>
					<PrimaryButton content='Go Somewhere'/>
				</div>
			</div>
		</div>
	</div>
  )
}
