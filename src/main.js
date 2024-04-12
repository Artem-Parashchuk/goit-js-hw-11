import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import { fetchPhotoByPixaby } from "./js/pixabay-api";
import { createCard } from "./js/render-functions";


const formElem = document.querySelector('.form')
const inputFormElem = document.querySelector('.form-input')
const galleryListElem = document.querySelector('.gallery-list')
const loaderElem = document.querySelector('.loader')

function inputSearch(event) {
    event.preventDefault();

    if (inputFormElem.value.trim() === '') {
        iziToast.info({
            message: 'Введіть слово в поле для пошуку',
            position: 'topRight',
            backgroundColor: 'orange',
        })
        galleryListElem.innerHTML = ''

        return
    }
    loaderElem.classList.add('is-visible')

    fetchPhotoByPixaby(inputFormElem.value)
        .finally(() => loaderElem.classList.remove('is-visible'))

        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: 'red',
                    theme: 'dark',
                    position: 'topRight',
                });
                return
            }

            galleryListElem.innerHTML = createCard(data.hits)
        })
        .catch(error => console.log(error))


    inputFormElem.value = ''
}
formElem.addEventListener('submit', inputSearch)


let gallery = new SimpleLightbox('.gallery-item__link', {
    captionsData: 'alt',
    captionDelay: 250
}
);

gallery.on('show.simplelightbox', function (event) {
    event.preventDefault()
});