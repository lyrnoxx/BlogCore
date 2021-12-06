let library=['dawdawd'];

class book{
    constructor(bname,author){
    this.bname=bname;
    this.author=author;
    }
}

const bname=document.querySelector('#bname');
const author=document.querySelector('#author');
const form=document.querySelector('form').addEventListener('submit',(e)=>{
    addToLibrary();
});

function addToLibrary(){
    const newBook=new book(bname.value,author.value);
    library.push(newBook);    
}
console.table(library)

const card=document.querySelector('.card');
card.innerHTML=library;
console.table(library)