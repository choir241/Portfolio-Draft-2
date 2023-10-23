'use client'
import React from "react"
import profileImg from "../images/profile.jpg"
import styles from "../assets/css/main.module.css"
import {useStore} from "../middleware/State"
import Nav from "./Nav"

export default function Header(){
 
    const menu = useStore((state)=>state.menu);
    const setMenu = useStore((state)=>state.setMenu);

	function toggleMenu(check: boolean){
		check ? setMenu(false) : setMenu(true);
	}

    return(
        <header id = "header" className = {`${styles.flex} ${styles["justify-between"]} ${styles["align-center"]}`}>	
				<i id = "menu" className = {`${menu? "fa-solid fa-xmark" : "fa-solid fa-bars"}`} onClick = {(e)=>toggleMenu(menu)}></i>

				<Nav/>

				<ul className={styles.icons}>
					<li><h1>Richard Choi</h1></li>
					<li><p>NJ Frontend Software Engineer</p></li>
					<li><a target = "_blank" href="https://twitter.com/choir241">Twitter<small className="fa-brands fa-twitter"></small></a></li>
					<li id = "copyright"><small>Copyright &copy; 2023. All rights are reserved</small></li>
				</ul>

				<section className = {`${styles.callToAction} ${styles.flex} ${styles["flex-col"]} ${styles["justify-between"]}`}>
					<a target = "_blank" href="https://github.com/choir27" className={styles.button}>View My GitHub<small className = "fa-brands fa-github"></small></a>
					<a target = "_blank" href="https://www.linkedin.com/in/richard-choir/" className={styles.button}>View My LinkedIn<small className = "fa-brands fa-linkedin"></small></a>
				</section>
									
				<div className = {styles.imageContainer}>
					<img src = {profileImg.src} alt = "professional profile picture of myself"/>
				</div>
								
			</header>
    )
}