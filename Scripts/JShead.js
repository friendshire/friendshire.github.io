const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ?
        "fa-solid fa-xmark" :
        "fa-solid fa-bars";
};

let library = { 
    name: "City Library", 
    location: "Downtown", 
    books: [ 
    {title: "1984", author: "George Orwell", pages: 328}, 
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180} 
    ]
}; 
    library.books.append({title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 }); 
    console.log(library.books [2].title)
