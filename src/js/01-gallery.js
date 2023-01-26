// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
const cardMarkup = createCard(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend', cardMarkup);
galleryConteiner.addEventListener('click', galleryClick);

function createCard(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

function galleryClick(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== `IMG`) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
      `);
  instance.show();
}