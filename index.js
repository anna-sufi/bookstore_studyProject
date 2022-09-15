const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    item.addEventListener('click', (event)=> {
        event.preventDefault();
        item.classList.toggle('redHeart');
    })
})

const searchInp = document.querySelector('#search');
const books = document.querySelectorAll('.book');

searchInp.addEventListener('keyup', (event)=> {
    let word = event.target.value.toLowerCase();

    books.forEach(book => {
        (book.querySelector('h4').textContent.toLocaleLowerCase().includes(word) || book.querySelector('h5').textContent.toLocaleLowerCase().includes(word)) ? (book.style.display = 'block') : (book.style.display = 'none');
    })
})