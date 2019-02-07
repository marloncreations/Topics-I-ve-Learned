// Get Image Container
const imageContainer = document.querySelector(".gallery");
const galleryImages = document.querySelectorAll(".gallery__image-container img");
let index;

// Creates Modal
function openModal(e) {
    if(e.target.src) {
        index = parseInt(e.target.id);
        let html = `
        <div class="modal">

            <div class="modal__container">
                <img src="${e.target.src}">
                <p>${index + 1}/${galleryImages.length}</p>
            </div>

            <span class="modal__button modal__close-button icon-close"></span>
            <span class="modal__button modal__left-arrow icon-left"></span>
            <span class="modal__button modal__right-arrow icon-right"></span>

        </div>
        `
        document.body.insertAdjacentHTML('beforeend', html);
    }
}

// Closes Modal Dynamically
function closeModal(e) {
    if(e.target.classList.contains('modal__close-button')){
        let modal = document.querySelector('.modal');
        document.body.removeChild(modal); 
    }
}


// Goes Left Dynamically
function goLeft(e) {
    const modal = document.querySelector('.modal .modal__container img');
    const p = document.querySelector('.modal .modal__container p');
    if(e.target.classList.contains('modal__left-arrow')){
        if(index === 0) {
            index = galleryImages.length - 1;
        } else {
            index--;
        }
        modal.setAttribute("src", galleryImages[index].src);
        p.textContent = `${index + 1}/${galleryImages.length}`;
    }
}

// Goes Left Dynamically
function goRight(e) {
    const modal = document.querySelector('.modal .modal__container img');
    const p = document.querySelector('.modal .modal__container p');
    if(e.target.classList.contains('modal__right-arrow')){
        if(index === galleryImages.length - 1) {
            index = 0;
        } else {
            index++;
        }
        modal.setAttribute("src", galleryImages[index].src);
        p.textContent = `${index + 1}/${galleryImages.length}`;
    }
}

imageContainer.addEventListener('click', openModal);
document.body.addEventListener('click', goLeft);
document.body.addEventListener('click', goRight);
document.body.addEventListener('click', closeModal);