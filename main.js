let library=[];

function book(name,author){
    this.name=name
    this.author=author
    this.info=function(){
        return name+author
    }
}

const hob=new book('awdawd','adwdaw');

function addToLibrary(){
    library.push(hob);    
}

addToLibrary();
console.table(library)

const card=document.querySelector('.card');
