import React from "react"
import styles from "./menu.module.css"
import Link from "next/link"
import Image from "next/image"
import MenuPost from "../menuPost/MenuPost"
import MenuCategory from "../menuCategory/MenuCategory"

const Menu = () => {
	return (
		<div className={styles.container}>
			{/* Popular Blog */}
			<h2 className={styles.subtitle}>{"What's hot"}</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<MenuPost widthImage={false} />

			{/* Category List */}
			<h2 className={styles.subtitle}>{"Discoper by topic:"}</h2>
			<h1 className={styles.title}>Categories</h1>
			<MenuCategory />

			{/* Editor Choosem Blog*/}
			<h2 className={styles.subtitle}>{"Choosen by the editor"}</h2>
			<h1 className={styles.title}>Editors Pick</h1>
			<MenuPost widthImage={true} />
		</div>
	)
}

export default Menu
