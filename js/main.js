let body = document.querySelector("body");
let navBarIcon = document.querySelector(".header .navbar__icon");
let navBarBody = document.querySelector(".header .navbar__body");

if(navBarIcon != null && navBarBody != null){
    navBarIcon.addEventListener("click", function() {
        navBarIcon.classList.toggle("change");
        navBarBody.classList.toggle("change");
        body.classList.toggle("lock");
    });
}

let filterBtn = document.querySelector(".filter-btn");
let filtersMenu = document.querySelector(".filters__menu");
let filterCloseMenu = document.querySelector(".filter-close");
if(filterBtn != null && filtersMenu != null){
    filterBtn.addEventListener("click", function() {
        filtersMenu.classList.toggle("filters__menu--active");
        body.classList.toggle("lock");
    });
}
if(filterCloseMenu != null && filtersMenu != null){
    filterCloseMenu.addEventListener("click", function() {
        if(filtersMenu.classList.contains("filters__menu--active")){
            filtersMenu.classList.remove("filters__menu--active");
        }
        if(body.classList.contains("lock")){
            body.classList.remove("lock");
        }
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

    if(filterBtn != null && filterCloseMenu != null && filtersMenu != null){
        if(!event.target.matches(".filter-btn") && !event.target.matches(".line1") && !event.target.matches(".line3") && filtersMenu.classList.contains("filters__menu--active")){
            if(!event.target.matches(".filters__menu--active")){
                if(filtersMenu.classList.contains("filters__menu--active")){
                    filtersMenu.classList.remove("filters__menu--active");
                }
                if(body.classList.contains("lock")){
                    body.classList.remove("lock");
                }
            }
        }
    }
}