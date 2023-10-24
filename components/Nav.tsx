import {useStore} from "../middleware/State"
import styles from "../assets/css/main.module.css"

export default function Nav(){

    const menu = useStore((state)=>state.menu);

    return(
        <nav className = {menu ? "menu" : "hidden"}>
            <ul>
                <li><h2>Menu</h2></li>
                <li><a href = "/">Home</a></li>
                <li><a href = "/aboutMe">About Me</a></li>
                <li><a href = "/allProjects">All Projects</a></li>
            </ul>

            <ul className = {`${styles.flex} ${styles["justify-between"]} ${styles.social}`}>
                <li><a target = "_blank" href="https://github.com/choir27"><small className = "fa-brands fa-github"><span className = "hidden">My Github</span></small></a></li>
                <li><a target = "_blank" href="https://www.linkedin.com/in/richard-choir/"><small className = "fa-brands fa-linkedin"><span className = "hidden">My LinkedIn</span></small></a></li>
                <li><a target = "_blank" href = "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing"><small className = "fa-solid fa-file-lines"><span className = "hidden">My Resume</span></small></a></li>
                <li><a target = "_blank" href="https://twitter.com/choir241"><small className="fa-brands fa-twitter"><span className = "hidden">Twitter</span></small></a></li>
            </ul>
        </nav>
    )
}