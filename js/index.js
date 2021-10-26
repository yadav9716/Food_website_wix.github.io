let navbar = document.getElementById("navbar");
let burger = document.getElementById("burger-box");
let links = document.getElementById("links-column");
let navbar2 = document.querySelector(".second-navbar");
navbar2.style.display = 'none';
let i = 1;

burger.addEventListener("click", function() {
    if(i%2==0){
        links.style.display = 'none';
        navbar2.style.display = 'none';
    }
    else{
        links.style.display = 'block';
        navbar2.style.display = 'flex';
    }

    i++;

});




