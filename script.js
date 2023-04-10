const book = () => {

};

const library = (() => {
    let myLibrary = [];
})();

const displayController = (() => {
    const addBtn = document.querySelector(".add-book");
    const deleteBtns = document.querySelectorAll(".delete");



    addBtn.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", )
    })



    const test = () => {
        console.log(deleteBtns)
    }
    return { test, openForm }
})();


const libraryController = (() => {

})();