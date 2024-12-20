import React from 'react'
import styles from './Button.module.css'
export default function SuccessButton({type,content}) {
  return (
	<div>
    <button type={type} className={`${styles.success}`}>{content}</button>
  </div>
  )
}
