let library=['dawdawd'];

class book{
    constructor(bname,author){
    this.bname=bname;
    this.author=author;
    }
}

const bname=document.querySelector('#bname');
const author=document.querySelector('#author');

function addToLibrary(){
    const newBook=new book(bname.value,author.value);
    library.push(newBook);    
}
console.table(library)

const card=document.querySelector('.card');
card.innerHTML=library;

const submitBtn=document.querySelector('#submitBtn');
submitBtn.addEventListener('click',addToLibrary);