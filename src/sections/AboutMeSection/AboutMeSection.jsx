import css from "./AboutMeSection.module.css"

function AboutMeSection() {
    return(
        <section>
            <div className="container">
                <h2 className={css.visuallyHidden}>Трішки про мене</h2>
            <div className={css.aboutMeWrapper}>
                <p className={css.aboutMeText}>а ось така я крута розумна все таке</p>
                <img srcSet="../../../public/images/aboutMe/about-me-1x.jpg 1x, ../../../public/images/aboutMe/about-me-2x.jpg 2x " alt="А ось я така гарна" className={css.aboutMeImage} />
            </div>
            </div>
        </section>
    )
}

export default AboutMeSection