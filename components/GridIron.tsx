import React from "react";
import styles from "../css/main.module.css";

export interface GridIronVods {
  h3: string;
  videoLink: string;
  projectIMG: string;
  projectALT: string;
  videoDescription: string;
  linkedIn?: React.JSX.Element;
  classNames?: string;
}

export default function GridIron(props: GridIronVods, key: string) {
  return (
    <article
      key={key}
      className={`${styles["align-center"]} ${styles["flex-col"]} ${styles.flex} ${props.classNames}`}
      id="article"
    >
      {props.linkedIn ? (
        ""
      ) : (
        <section
          className={`${props.classNames ? "fullWidth" : ""} ${styles.flex} ${styles["justify-between"]} ${styles["align-center"]} title`}
        >
          <h3>{props.h3}</h3>
        </section>
      )}

      {props.linkedIn ? (
        props.linkedIn
      ) : (
        <div className="projectImgContainer">
          <a target="_blank" href={props.videoLink}>
            <img src={props.projectIMG} alt={props.projectALT} />
          </a>
        </div>
      )}

      {props.linkedIn ? (
        ""
      ) : (
        <p className={`${props.classNames ? "fullWidthParagraph" : ""}`}>
          {props.videoDescription}
        </p>
      )}
    </article>
  );
}
