

const cardcolumn=document.querySelector('.card-columns');
let h1=document.createElement('h1');
h1.textContent="INTECBRUSSEL";
//insertbefore();
console.log(cardcolumn.childNodes)
cardcolumn.insertBefore(h1,cardcolumn.childNodes[4]);

//append();

cardcolumn.append
