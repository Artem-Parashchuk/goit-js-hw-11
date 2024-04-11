import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchPhotoByPixaby } from "./js/pixabay-api";

const formElem = document.querySelector('.form')
const inputFormElem = document.querySelector('.form-input')
const formBtnElem = document.querySelector('.form-btn')

function inputSearch(event) {
    event.preventDefault();

    if (inputFormElem.value.trim() === '') {
        return
    }

    fetchPhotoByPixaby(inputFormElem.value)
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: 'red',
                    theme: 'dark',
                    position: 'topRight',
                });
            }
            console.log(data.hits)
        })
        .catch (error => console.log(error))

    inputFormElem.value = ''
}
formElem.addEventListener('submit', inputSearch)

