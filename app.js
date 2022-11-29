function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

book.prototype.info = function() {
    return `title: ${this.title} author: ${this.author}  pages:  ${this.pages} status: ${this.read} `
}


const book1 = Object.create(book.prototype);
book1.title = "javascript";
book1.author = "brendan eich";
book1.pages = "infinity";
book1.read = "continuum";
console.log(book1.info());
/*const hobbit = new book("The Hobbit", "J.R.R Tolkien", "297 pages", "Not yet read");
const negotiation = new book("Never split the difference", "Chris Voss", "265 pages", "read");
console.log(hobbit.info());
console.log(negotiation.info());*/