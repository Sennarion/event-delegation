import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createListMarkup(arr) {
    return arr
        .map(el => {
            return `<a class="gallery__item" href="${el.original}">
                        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
                    </a>`;
        })
        .join('');
}

galleryRef.innerHTML = createListMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});
