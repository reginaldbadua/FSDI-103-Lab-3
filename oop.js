//Created class for book 

class Book {
  constructor(title, author) {
  alert('inside book');
    this.title = title;
    this.author = author;
  }
}

//Created class checkout where users add books before checking out.

class Checkout {
  constructor() {
    this.checkedOut = [];
  }
  addBook (title) {
    this.checkedOut.push(title);
    alert ('inside addBook');
  }
 Final() {
  
let z;
for (let i=0; i<this.checkedOut.length; i++) {
z = Object.values(this.checkedOut[i]);
alert(z);
} 
  
}
  printFinal() {
alert ('inside printFinal');
    alert('You have checked out ' + this.Final());
  }
}

//books

const Finn = new Book('Huckleberry Finn', 'Twain');
const Romeo = new Book('Romeo and Juliet', 'Shakespeare');
const Don = new Book('Don Quixote', 'Cervantes');
const library = new Checkout();

library.addBook(Finn);
library.addBook(Romeo);
library.addBook(Don);

library.Final(); 

