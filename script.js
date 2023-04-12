const book = () => {

};

const library = (() => {
    let myLibrary = [];
})();

const displayController = (() => {
    const addBtn = document.querySelector(".add-book");
    const deleteBtns = document.querySelectorAll(".delete");
    const close = document.querySelector(".cancel");


    addBtn.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });

    close.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    })

    deleteBtns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            console.log(books[index]);
            e.target.parentElement.remove();

        })
    })



    const test = () => {
        console.log(deleteBtns)
    }
    return { test, openForm }
})();


const libraryController = (() => {

})();