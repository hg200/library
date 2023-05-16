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
    const myLibrary = [];

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
    const total = document.querySelector(".total");


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let title = document.getElementById("title");
        let author = document.getElementById("author");
        let pages = document.getElementById("pages");

        let bookArr = bookObject(title.value, author.value, pages.value).getBook();
        library.addToLibrary(bookArr);
        updateDisplay();
        document.getElementById("myForm").style.display = "none";

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

    const updateEvents = () => {
        const deleteBtns = document.querySelectorAll(".delete");
        deleteBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.target.parentElement.remove();

            })
        })


    }


    const updateDisplay = () => {

        let libraryArr = library.getLibrary();
        for (let i = 0; i < libraryArr.length; i++) {
            const libraryDisplay = document.querySelector(".container");

            const book = document.createElement("div");
            book.classList.add("book");

            book.innerHTML = '<div class="delete">x</div>' +
                `<div class="title">Title: ${libraryArr[i][0]}</div>` +
                `<div class="author">Author: ${libraryArr[i][1]}</div>` +
                `<div class="pages">No. of pages: ${libraryArr[i][2]}</div>` +
                '<div class="status">READ <label class="switch"> <input type="checkbox"><span class="slider round"></span> </label> </div>';


            libraryDisplay.appendChild(book);
            updateEvents();
        }
        total.innerHTML = `Total : ${libraryArr.length}`;

    }


    return { updateDisplay, dltbtn }
})();


const libraryController = (() => {

    const addBook = () => {


    }

    return { addBook }
})();