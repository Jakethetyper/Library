window.onload = function hideSubmit() {
    newBook.style.visibility = 'hidden';
}


let myLibrary = [];
const addBook = document.querySelector('.but1');
const submitBtn = document.querySelector('.publish');
const newBook = document.querySelector('.newBook');
const lib = document.querySelector('.container');
const exit = document.querySelector('.close');
const read = document.querySelector('.finish');
const deleteBook = document.querySelector('.deleteBook');


function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


addBook.addEventListener('click', createBook);
exit.addEventListener('click', closeWindow);

newBook.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let finished = document.getElementById("finish").value;


    newBook.style.visibility = 'hidden';

    latest =  new book(title, author, pages, finished);

    myLibrary.push(latest);

    displayCollection();
})

function createBook() {
    newBook.style.visibility = 'visible';
}


function displayCollection() {
    lib.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const item = myLibrary[i];
        
        const bookElement = document.createElement('div');
        const bookName = document.createElement('h1');
        const bookAuthor = document.createElement('h1');
        const bookPages = document.createElement('h1');
        const bookRead = document.createElement('h1');
        const del = document.createElement('button');

        bookName.classList.add('one');
        bookAuthor.classList.add('two');
        bookPages.classList.add('three');
        bookRead.classList.add('four');
        bookElement.classList.add('book');
        del.classList.add('deleteBook');

        del.setAttribute('data-item-index', i);
        del.addEventListener('mousedown', removeFromCollection);


        bookName.textContent = item.name;
        bookAuthor.textContent = item.author;
        bookPages.textContent = item.pages;
        bookRead.textContent = item.read;
        del.textContent = 'Delete';

        lib.appendChild(bookElement);
        bookElement.appendChild(bookName);
        bookElement.appendChild(bookAuthor);
        bookElement.appendChild(bookPages);
        bookElement.appendChild(bookRead);
        bookElement.appendChild(del);
    }

}

function closeWindow() {
    newBook.style.visibility = 'hidden';
};

function removeFromCollection() {
    let indexItem = this.getAttribute('data-item-index');
    myLibrary.splice(indexItem, 1);

    displayCollection();
};