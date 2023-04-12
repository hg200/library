const book = () => {

};

const library = (() => {
    let myLibrary = [];
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

        console.log(`this books title is ${title.value} and is written by ${author.value} and has ${pages.value} pages`);
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

})();