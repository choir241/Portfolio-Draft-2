import {useStore} from "../middleware/State"

export default function Nav(){

    const menu = useStore((state)=>state.menu);
    const setMenu = useStore((state)=>state.setMenu);

    return(
        <nav className = {menu ? "menu" : "hidden"}>
            <ul>
                <li><h2>Menu</h2></li>
                <li><a href = "/aboutMe">About Me</a></li>
                <li><a href = "/allProjects">All Projects</a></li>
            </ul>
        </nav>
    )
}