import { Bars3Icon } from "@heroicons/react/20/solid"
import css from "./ModalButton.module.css"

function ModalButton() {
    return (
        <button className={css.modalButton}>
            <Bars3Icon width={30} height={30} color="black" />
        </button>

    )
}

export default ModalButton

