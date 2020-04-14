'use strict';

// Just a simple example of injecting a style and an image into a page.
import '../styles/main.sass';
import pageImage from '../img/example.svg';

const container = document.querySelector('body');

const image = document.createElement('img');
image.setAttribute('src', pageImage);
container.appendChild(image);
