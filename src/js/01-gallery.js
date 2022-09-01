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
    <div class="gallery__item">
<a class="gallery__item" href="${image.original}">
  <img 
  class="gallery__image" 
  src="${image.preview}" 
  alt="${image.description}" />
</a>
    </div>
    `;
    })
    .join('');
}

const galleryMarkup = createGalleryOfImages(galleryItems);
containerOfImages.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});


// console.log(galleryItems);
