import styles from "../css/main.module.css";
import Image from "../components/Image";
import dashboard from "../public/images/linguisticsJusticeLeague2.png";
import assignment from "../public/images/linguisticsJusticeLegue3.png";
import translated from "../public/images/linguisticsJusticeLeague4.png";
import classroom from "../public/images/linguisticsJusticeLeague5.png";
import translatedClassroom from "../public/images/linguisticsJusticeLeague6.png";
import assignmentList from "../public/images/linguisticsJusticeLeague7.png";
import documentation from "../public/images/documentation.png";
import documentation1 from "../public/images/documentation1.png";
import profileImg from "../public/images/profile.png";
import codeAndCoffee from "../public/images/CodeAndCoffee.png";

export default function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className={`${styles.flex} ${styles["justify-center"]}`}>
        <img
          src={profileImg.src}
          className="profileImg"
          alt="professional profile picture of myself"
        />
      </div>

      <p className="bio">
        I love meeting new people, learning new concepts, and building new
        projects.
      </p>
      <p className="bio">
        Learning from my mistakes, I'm able to improve my coding and problem
        solving skills.
      </p>

      <section
        id="volunteer"
        className={`${styles.flex} ${styles["flex-col"]} ${styles["align-center"]}`}
      >
        <h3>Linguistics Justice League</h3>

        <p>
          Since June 2023, I have been volunteering as a developer for
          Linguistics Justice League, which is a 501c(3) non-profit
          organization. They support language learners who speak low-resource
          languages. Beyond facilitating language learning, the organization
          aims to raise awareness and the understanding with how important it is
          to preserve native cultures and languages.
        </p>

        <section
          className={`${styles.flex} ${styles["justify-between"]} social`}
        >
          <a
            target="_blank"
            className={styles.button}
            href="https://linguisticsjusticeleague.org/"
          >
            LJL Website<i className="fa-solid fa-globe"></i>
          </a>

          <a
            target="_blank"
            className={styles.button}
            href="https://twitter.com/Linguistics_LJL"
          >
            LJL Twitter<i className="fa-brands fa-twitter"></i>
          </a>

          <a
            target="_blank"
            className={styles.button}
            href="https://www.linkedin.com/in/linguisticsjusticeleague/"
          >
            LJL LinkedIn<i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            target="_blank"
            className={styles.button}
            href="https://www.facebook.com/LinguisticsJusticeLeague"
          >
            LJL Facebook<i className="fa-brands fa-facebook"></i>
          </a>
        </section>

        <section className="images">
          <Image
            src={dashboard.src}
            alt="dashboard UI display when the user is logged in as an authenticated user"
          />
          <Image
            src={assignment.src}
            alt="create Assignment UI display when the logged in authenticated user creates an assignment"
          />
          <Image
            src={translated.src}
            alt="create Assignment UI display when the logged in authenticated user clicks the translate button after creating an assignment"
          />
          <Image
            src={assignmentList.src}
            alt="dashboard UI of a list of all current assignments that have been created by the current user"
          />
          <Image
            src={classroom.src}
            alt="assignment display hub UI after the authenticated logged in user submitted the assignment"
          />
          <Image
            src={translatedClassroom.src}
            alt="translated assignment display hub UI after the authenticated logged in user submitted the assignment"
          />
        </section>
      </section>

      <section
        id="documentation"
        className={`${styles.flex} ${styles["flex-col"]} ${styles["align-center"]}`}
      >
        <h3>Documentation</h3>

        <p>
          During the first couple weeks of October, I was tasked with the
          low-level research and presentation of the following topics:
          TypeScript, Next Webpack 5, Next App Routing, Zustand and Context API,
          and local storage, session storage, and local state. I also prepared
          and presented my findings to my team members, improving upon my
          documentation using the feedback and suggestions I received.
        </p>

        <div className={`${styles.flex} ${styles["justify-evenly"]}`}>
          <Image
            src={documentation.src}
            alt="preview screenshot of the TypeScript section of my documentation"
          />
          <Image
            src={documentation1.src}
            alt="preview screenshot of the TypeScript section of my documentation"
          />
        </div>

        <a
          target="_blank"
          className={styles.button}
          href="https://choir.hashnode.dev/low-level-documentation"
        >
          My Tech Documentation
        </a>
      </section>

      <section
        id="meetup"
        className={`${styles.flex} ${styles["flex-col"]} ${styles["align-center"]}`}
      >
        <h3>Meetups</h3>

        <h4>Code And Coffee</h4>

        <p>
          I have been attending NY Code And Coffee meetups for awhile, and it is
          the perfect environment to meet new people in the tech world. Having
          been founded by Steve Chen, I have made many new friends and
          acquaintances from having attended multiple times.
        </p>

        <div className={`${styles.flex} coffeeLinkedIn`}>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7172752562146762752"
            height="427"
            width="504"
            frameBorder="0"
            allowFullScreen={false}
            title="Embedded post"
          ></iframe>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7167695581723758593"
            height="343"
            width="504"
            frameBorder="0"
            allowFullScreen={false}
            title="Embedded post"
          ></iframe>
        </div>

        <section
          className={`buttons ${styles["justify-between"]} ${styles.flex}`}
        >
          <a href="https://codeandcoffee.org/" className={styles.button}>
            Code & Coffee Website
          </a>
          <a
            href="https://github.com/CodeandCoffeeCommunity/"
            className={styles.button}
          >
            Code & Coffee Github
          </a>
          <a
            href="https://www.youtube.com/@USCodeCoffee/videos"
            className={styles.button}
          >
            Code & Coffee Youtube
          </a>
        </section>
      </section>
    </section>
  );
}
