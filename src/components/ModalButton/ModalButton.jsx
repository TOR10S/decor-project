import css from "./ModalButton.module.css"

function ModalButton() {
    return (
        <button className={css.modalButton}>
        <svg width={30} height={30}>
        <use href={`/sprite.svg#icon-heroicons-solid_menu`} />
      </svg>
        </button>

    )
}

export default ModalButton

