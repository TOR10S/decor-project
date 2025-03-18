import css from "./ChoiceList.module.css"

function ChoiceList() {
 return(
    <ul className={css.choiceList}>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.choiceItemWraper}>
                <h3 className={css.h3Choice}>1</h3>
                </div>
                
            </a>
        </li>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.choiceItemWraper}>
                <h3 className={css.h3Choice}>2</h3>
                </div>
                
            </a>
        </li>
        <li className={css.choiceItem}>
            <a href="">
                <div className={css.choiceItemWraper}>
                <h3 className={css.h3Choice}>3</h3>
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