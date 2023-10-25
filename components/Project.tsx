import React from "react"
import styles from "../assets/css/main.module.css"

interface Content{
    projectName: string,
    codeURL: string,
    demoURL: string,
    projectIMG: string,
    projectALT: string,
    projectTech: string[],
    projectDescription: string,
    classNames?: string
}

export default function Project(props: Content){

    const technologyList:React.JSX.Element[] = props.projectTech.map((techLanguage)=><li className = "flex alignItems" key = {techLanguage}>{techLanguage}</li>) 

    return(
        <article className = {`${styles["align-center"]} ${styles["flex-col"]} ${styles.flex} ${props.classNames}`} id = "article">
            <section className = {`${props.classNames ? "fullWidth" : ""} ${styles.flex} ${styles["justify-between"]} ${styles["align-center"]} title`}>
                <h2>{props.projectName}</h2>
				    <div className = {`${props.classNames ? "fullWidthProject" : "buttons"} ${styles.flex} ${styles["justify-between"]} ${styles["align-center"]}`}>
				    	<a target = "_blank" href = {props.codeURL} className = {styles.button}>Code<small className = "fa-solid fa-computer"></small></a>
				    	<a target = "_blank" href = {props.demoURL} className = {styles.button}>Demo<small className = "fa-solid fa-arrow-right-from-bracket"></small></a>
				    </div>
			</section>

            <div className = "projectImgContainer">
                <a target = "_blank" href = {props.demoURL}>
			    	<img src = {props.projectIMG} alt = {props.projectALT}/>
			    </a>
            </div>
             
			

			<ul className = {`${styles.flex} languages`}>
				{technologyList}
			</ul>

			<p className = {`${props.classNames ? "fullWidthParagraph" : ""}`}>{props.projectDescription}</p>

        </article>
    )
}