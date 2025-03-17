import ChoiceList from "../../components/ChoiceList/ChoiceList"
import css from "./ChoiceSection.module.css"

function ChoicesSection() {
    return (
        <section>
            <div className="container">
            <h2 className={css.h2Choice}>
                подивись яку красу ми робили
            </h2>
            <ChoiceList/>
            </div>
        </section>
    )
}


export default ChoicesSection
