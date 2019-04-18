let reader = document.querySelector('.book');
let controls = document.querySelector('.book__control_font-size');

for (let control of controls.children) {
    control.addEventListener('click', change)
}

function change(event) {
    event.preventDefault();
    switch (event.target.dataset.size){
        case 'big':{
            reader.classList.add('book_fs-big');
            reader.classList.remove('book_fs-small');
            break;
        }
        case 'small':{
            reader.classList.add('book_fs-small');
            reader.classList.remove('book_fs-big');
            break;
        }
        default: {
            reader.classList.remove('book_fs-small');
            reader.classList.remove('book_fs-big');
        }
    }
    for (let letter of document.querySelectorAll('.font-size')) {
        letter.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
}