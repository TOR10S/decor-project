import Logo from "../../components/Logo/Logo"
import ModalButton from "../../components/ModalButton/ModalButton"
import NavBar from "../../components/NavBar/NavBar"
import css from "./HeaderSection.module.css"


function HeaderSection() {
    return (
        <header className={css.headerSection}>
            <div className="container headerContainer">
            <Logo/>
            <NavBar/>
            <ModalButton/>
            </div>
        </header>
    )
}


export default HeaderSection


