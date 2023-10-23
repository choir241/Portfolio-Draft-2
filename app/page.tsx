import React from "react"
import Header from "../components/Header"
import Project from "../components/Project"
import "../assets/css/global.css"
import styles from "../assets/css/main.module.css"
import priconne from "../images/priconne.png"
import kPop from "../images/kpopwired.png"
import autoAligners from "../images/autoaligners.png"

export default function Home(){
    return(
    <main>
        <Header/>

        <section id = "project">
            <h3>My Projects</h3>

            <section className ={`${styles.flex} ${styles["justify-between"]} ${styles["flex-wrap"]} ${styles["align-center"]} `}>
            <Project projectName = "AutoAligners" codeURL = "https://github.com/choir27/autoAligners" demoURL = "" projectIMG = {autoAligners.src} projectALT = "website landing page preview of AutoAligners" projectTech = {["TypeScript", "AppWrite", "Vite"]} projectDescription="AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made."/>

            <Project projectName = "Priconnect" codeURL = "https://github.com/choir27/Priconnect" demoURL = "https://priconnect.netlify.app" projectIMG = {priconne.src} projectALT="website landing page preview of For Everything Priconne" projectTech = {["React", "MongoDB", "Node"]} projectDescription = "Priconnect is a social media web application that allows users to create, like and comment posts.  Users can also interact with each other by replying on comments."/>

            <div className="flex justify-center">
                <Project classNames = "width-100" projectName = "Kpop Wired" codeURL = "https://github.com/choir27/Kpop-Wired" demoURL = "https://kpopwired.netlify.app" projectIMG = {kPop.src} projectALT="website landing page preview of Kpop Wired" projectTech = {["React", "MongoDB", "Node"]} projectDescription = "K-pop Wired is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings themselves."/>
            </div>

            {/* <Project projectName = "The Real Estate Beast" codeURL = "https://github.com/choir27/The-Real-Estate-Beast" demoURL = "https://therealestatebeast.netlify.app" projectIMG = {theRealEstate.src} projectALT="website landing page preview of The Real Estate Beast" projectTech = {["CSS", "HTML"]} projectDescription = "The Real Estate Beast is a real estate website that demonstrates Carleton Badgers' history of satisfied clients, while also providing home value estimations and available homes for purchase."/> */}

            </section>

     

        </section>

        {/* https://www.linkedin.com/posts/linguisticsjusticeleague_ljls-learning-management-system-activity-7078075839719882752-4DjY/?utm_source=share&utm_medium=member_desktop */}
        {/* https://www.linkedin.com/posts/linguisticsjusticeleague_linguisticsjustice-volunteers-welcomeonboard-activity-7072357427035181056-CxL9/?utm_source=share&utm_medium=member_desktop */}
    </main>
    )
}