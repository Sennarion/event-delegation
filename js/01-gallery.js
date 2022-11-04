import { galleryItems } from './gallery-items.js';

// Create and render

const galleryRef = document.querySelector('.gallery');

function createListMarkup(arr) {
    return arr
        .map(el => {
            return `<div class="gallery__item">
                        <a class="gallery__link" href="${el.original}">
                            <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
                        </a>
                    </div>`;
        })
        .join('');
}

galleryRef.innerHTML = createListMarkup(galleryItems);

// Add listener

// MY FIRST TRY

// function onGalleryImgClick(e) {
//     e.preventDefault();

//     const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">`);

//     instance.show();

//     document.addEventListener(
//         'keydown',
//         event => {
//             if (event.code === 'Escape') {
//                 instance.close();
//             }
//         },
//         { once: true }
//     );
// }

// galleryRef.addEventListener('click', onGalleryImgClick);

// WITH OPTIONS

function onGalleryImgClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    }

    console.log(e.target, e.currentTarget);

    const instance = basicLightbox.create(
        `
    <img src="${e.target.dataset.source}" width="800" height="600">`,
        {
            onShow: instance => onModalOpen(instance),
            onClose: instance => onModalClose(instance),
        }
    );

    instance.show();
}

function onModalOpen(instance) {
    document.onkeydown = e => onGalleryImgEscape(e, instance);
}

function onModalClose() {
    document.onkeydown = null;
}

function onGalleryImgEscape(e, instance) {
    if (e.code === 'Escape') {
        instance.close();
    }
}

galleryRef.addEventListener('click', onGalleryImgClick);
