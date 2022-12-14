let body = document.querySelector("body");
let navBarIcon = document.querySelector(".navbar__icon");
let navBarBody = document.querySelector(".header .navbar__body");
if(navBarIcon != null && navBarBody != null){
    navBarIcon.addEventListener("click", function() {
        navBarIcon.classList.toggle("change");
        navBarBody.classList.toggle("change");
        body.classList.toggle("lock");
    });
}

window.onclick = function(event) {
    if(navBarIcon != null && navBarBody != null){
        if(!event.target.navBarIcon && !event.target.matches(".line1") && !event.target.matches(".line2") && !event.target.matches(".line3") && navBarIcon.classList.contains("change")){
            if(!event.target.matches(".header .navbar__body.change")){
                navBarIcon.classList.remove("change");
                navBarBody.classList.remove("change");
                if(body.classList.contains("lock")){
                    body.classList.toggle("lock");
                }
            }
        }
    }
}