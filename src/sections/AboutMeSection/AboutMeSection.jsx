import css from "./AboutMeSection.module.css"

function AboutMeSection() {
    return(
        <section>
            <div className="container">
                <h2 className={css.visuallyHidden}>Трішки про мене</h2>
            <div className={css.aboutMeWrapper}>
                <p className={css.aboutMeText}>а ось така я крута розумна все таке</p>
                <img src="" alt="А ось я така гарна" />
            </div>
            </div>
        </section>
    )
}

export default AboutMeSection