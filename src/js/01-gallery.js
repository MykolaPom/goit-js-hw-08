// Add imports above this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const containerOfImages = document.querySelector('.gallery');

function createGalleryOfImages(images) {
  return images
    .map(image => {
      return `
<a class="gallery__item" href="${image.original}">
  <img 
  class="gallery__image" 
  src="${image.preview}" 
  alt="${image.description}" />
</a>
    `;
    })
    .join('');
}

const galleryMarkup = createGalleryOfImages(galleryItems);
containerOfImages.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});


// console.log(galleryItems);
