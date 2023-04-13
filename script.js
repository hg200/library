const bookObject = (title, author, pages) => {

    this.title = title;
    this.author = author;
    this.pages = pages;

    const getBook = () => {
        let bookInfo = [this.title, this.author, this.pages];

        return bookInfo;
    };

    return { getBook }
};

const library = (() => {
    let myLibrary = [];

    const addToLibrary = (bookArr) => {
        myLibrary.push(bookArr);
    }

    const getLibrary = () => {
        return myLibrary;
    }

    return { addToLibrary, getLibrary }
})();

const displayController = (() => {
    let form = document.querySelector(".form-container");
    const addBtn = document.querySelector(".add-book");
    const deleteBtns = document.querySelectorAll(".delete");
    const close = document.querySelector(".cancel");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let title = document.getElementById("title");
        let author = document.getElementById("author");
        let pages = document.getElementById("pages");

        let bookArr = bookObject(title.value, author.value, pages.value).getBook();
        library.addToLibrary(bookArr);

        // console.log(library.myLibrary);
        // console.log(`this books title is ${title.value} and is written by ${author.value} and has ${pages.value} pages`);

        //console.log(bookObject(title.value, author.value, pages.value).getBook());

    })

    addBtn.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });

    close.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    })

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.target.parentElement.remove();

        })
    })


    return {}
})();


const libraryController = (() => {

    const addBook = () => {


    }

    return { addBook }
})();