// Get Image Container
const imageContainer = document.querySelector(".gallery");


function openModal(e) {
    if(e.target) {
        let html = `
        <div class="modal">

            <div class="modal__container">
                <img src="${e.target.src}">
            </div>

            <span class="modal__button modal__close-button">x</span>
            <span class="modal__button modal__left-arrow">&#60;</span>
            <span class="modal__button modal__right-arrow">></span>

        </div>
        `
        console.log(html);
        document.body.insertAdjacentHTML('beforeend', html);
    }
}

imageContainer.addEventListener('click', openModal);

function closeModal(e) {
    if(e.target.classList.contains('modal__close-button')){
        let modal = document.querySelector('.modal');
        document.body.removeChild(modal);
    }
}

document.body.addEventListener('click', closeModal);