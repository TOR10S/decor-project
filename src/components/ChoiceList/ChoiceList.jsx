import css from "./ChoiceList.module.css"

function ChoiceList() {
 return(
    <ul className={css.choiceList}>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.sphere}>
                <h3 className={css.h3Choice}>дивокуля</h3>
                </div>
                
            </a>
        </li>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.gender}>
                <h3 className={css.h3Choice}>гендер паті</h3>
                </div>
                
            </a>
        </li>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.photoZone}>
                <h3 className={css.h3Choice}>фотозони</h3>
                </div>
            </a>
        </li>
    </ul>
 )
}

export default ChoiceList