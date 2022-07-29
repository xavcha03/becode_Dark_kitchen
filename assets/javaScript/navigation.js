let mainNavBtn = document.querySelector("#mainNavBtn");
let mainNavLinks = document.querySelector("#mainNav");
let darkModeBtns = document.querySelectorAll("#darkModeBtn")
mainNavBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    mainNavLinks.classList.toggle("mainNav__linkList--active");
    
})
