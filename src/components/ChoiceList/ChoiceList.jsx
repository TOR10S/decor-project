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
                <div className={css.choiceItemWraper}>
                <h3 className={css.h3Choice}>гендер паті</h3>
                </div>
                
            </a>
        </li>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.choiceItemWraper}>
                <h3 className={css.h3Choice}>фотозони</h3>
                </div>
            </a>
        </li>
    </ul>
 )
}

export default ChoiceList
/*
.choiceItemWraper {

}

.choiceList {
 display: flex;
 gap: 20px;
 flex-wrap: wrap;
}

.choiceItem {

}

.h3Choice {
    font-size: 16px;
    letter-spacing: 0.01em;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}*/