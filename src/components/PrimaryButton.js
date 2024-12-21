import React, { useState } from 'react'
import styles from './Button.module.css'

export default function PrimaryButton({type,content}) {
  return (
	<div>
		<button className={`${styles.primary}`} type={type}>{content}</button>
	</div>
  )
}
