'use strict';

const myLibrary = [
  {
    id: 1,
    title: 'Ullamco tempor nostrud irure sint',
    description:
      'Culpa commodo amet aliquip excepteur dolor elit nulla cupidatat veniam dolor fugiat dolore ea. Anim anim voluptate labore occaecat do esse ex fugiat ut mollit excepteur aliquip adipiscing. Exercitation adipiscing quis eiusmod consequat laboris cupidatat lorem occaecat eu laborum ex laborum enim exercitation. Lorem incididunt occaecat deserunt duis elit commodo lorem dolore ex ex. Laboris ullamco excepteur ut laborum eiusmod non consectetur veniam mollit mollit commodo.',
    pages: 211,
    read: true,
  },
  {
    id: 2,
    title: 'Occaecat duis proident nostrud excepteur tempor magna',
    description:
      'Dolore non voluptate labore ea eiusmod excepteur eu anim nostrud. Laboris adipiscing elit anim consequat commodo consequat pariatur anim laborum. Esse commodo cupidatat et ullamco quis do excepteur proident nostrud proident amet sed reprehenderit aliquip proident adipiscing eu aute dolor. Et exercitation sint qui lorem do cillum nostrud sunt non magna aliqua. Laboris ullamco anim labore incididunt sed excepteur ad fugiat nulla mollit sit. Enim minim ipsum officia consectetur minim sit amet in adipiscing nisi elit duis quis exercitation aliqua. Eiusmod elit exercitation magna aliqua do velit ad id eiusmod incididunt ea commodo dolore.',
    pages: 315,
    read: false,
  },
  {
    id: 3,
    title: 'Ad tempor consectetur',
    description:
      'Velit deserunt exercitation voluptate voluptate dolore sint veniam sed occaecat labore amet. Ipsum sunt exercitation nostrud reprehenderit laborum esse ullamco nisi anim in elit dolor reprehenderit esse sed ad veniam proident. Deserunt lorem amet nulla sit ad sunt magna voluptate dolor magna irure.',
    pages: 114,
    read: true,
  },
  {
    id: 4,
    title: 'Ipsum id in',
    description:
      'Veniam tempor enim velit adipiscing ad nisi cupidatat nisi duis. Magna nulla est et veniam est deserunt dolore cupidatat ea deserunt proident voluptate reprehenderit sint. Culpa culpa cillum aliqua cupidatat proident minim dolor ipsum officia id esse nostrud labore elit laboris laborum.',
    pages: 677,
    read: false,
  },
  {
    id: 5,
    title:
      'Esse pariatur consequat sit laborum consectetur consectetur eu nulla tempor',
    description:
      'Commodo sunt qui cillum ea minim dolore officia aliqua minim reprehenderit minim. Dolore occaecat dolor magna in aliquip culpa esse quis sint esse labore enim et nostrud do ad irure. Officia est sunt deserunt velit cillum est tempor lorem consequat dolor culpa dolore. Elit est velit veniam sint adipiscing pariatur consequat non amet. Laboris id esse adipiscing aute fugiat pariatur ipsum ad dolor eu culpa velit ex. Aliquip id tempor dolor dolor sit eu exercitation labore laboris do culpa mollit nisi minim deserunt et anim ipsum. Tempor adipiscing culpa nostrud deserunt consectetur cupidatat aliquip nostrud esse tempor est incididunt enim sit nisi in pariatur. Sed sit sunt tempor minim elit labore commodo sunt eiusmod aliquip lorem mollit culpa quis sit minim pariatur. Dolore labore sunt deserunt amet incididunt officia nulla eiusmod nisi veniam magna voluptate irure anim nostrud. Magna ut mollit est pariatur ea nisi duis laboris exercitation id sunt sint.',
    pages: 778,
    read: false,
  },
];

const addContainer = document.querySelector('dialog');
const addButton = document.querySelector('#main__addButton');
const closeButton = document.querySelector('#addBook__closeBtn');
const submitNewBookButton = document.querySelector('#addBook__addBtn');
const addInputs = document.querySelector('.main__addInputs');
const addBookForm = document.querySelector('#main__addForm');

function createElement(tag, className, textContent) {
  const elt = document.createElement(tag);

  if (className) elt.className = className;
  if (textContent) elt.textContent = textContent;
  return elt;
}

function renderLibrary() {
  const lib = document.querySelector('.main__library');

  if (!lib) return -1;

  lib.innerHTML = ''; // clear existing content

  myLibrary.forEach((book) => {
    const bookDiv = createElement('div', 'library__book');
    bookDiv.appendChild(createElement('h2', null, book.title));
    bookDiv.appendChild(createElement('p', null, book.description));
    bookDiv.appendChild(createElement('p', null, `Pages: ${book.pages}`));
    bookDiv.appendChild(
      createElement(
        'p',
        null,
        book.read ? 'Read: Already read' : 'Read: Not read'
      )
    );

    lib.appendChild(bookDiv);
  });
}

function addBookToLibrary(newBook) {
  // do stuff here
  myLibrary.push(newBook);
  renderLibrary();
}

addButton?.addEventListener('click', () => {
  addContainer?.showModal();
});

closeButton?.addEventListener('click', () => {
  addBookForm.reset();
  addContainer?.close();
});

addBookForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#addBook__title');
  const description = document.querySelector('#addBook__description');
  const pages = document.querySelector('#addBook__pages');
  const read = document.querySelector('#addBook__isRead');

  if (!title?.value || !description?.value || !pages?.value) {
    alert('Please fill out all fields');
    return -1;
  }

  const newBook = {
    id: myLibrary.length + 1,
    title: title?.value,
    description: description?.value,
    pages: Number(pages?.value),
    read: read?.checked,
  };
  addBookToLibrary(newBook);

  addBookForm.reset();
  addContainer?.close();
});

renderLibrary();
