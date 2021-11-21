let library=[];

function book(t,a,p,r){
    this.t=t
    this.a=a
    this.p=p
    this.r=r
    this.info=function(){
        return `${t+' '+a+' '+p+' '+r}`
    }
}
function addBookToLibrary(){
    const hobbit=new book('adww','wdaw','dawd','wdaaw')
    const bladd=new book('adw','dawdaw','dawd','dawd')
    library.push(hobbit);  
    library.push(bladd);
}

let y=addBookToLibrary();
console.table(library)
const card=document.querySelector('#card')
card.textContent=library[0];
function displayData(){
    for (let i = 0; i < library.length; i++) {
        card.textContent=library[i]
        
    }
}

let x=displayData();