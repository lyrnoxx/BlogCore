let library=['dawdawd'];

function book(bname,author){
    this.bname=bname
    this.author=author
    this.info=function(){
        return `${bname+author}`
    }
}



function addToLibrary(){
    library.push('daikbwdubau');    
}

addToLibrary();
console.table(library)

const card=document.querySelector('.card');
card.innerHTML=library;
