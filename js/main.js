let body = document.querySelector("body");
let navBarIcon = document.querySelector(".header .navbar__icon");
let navBarBody = document.querySelector(".header .navbar");
let navBarItems = document.querySelectorAll(".header .navbar *");

if(navBarIcon != null && navBarBody != null){
    navBarIcon.addEventListener("click", function() {
        navBarIcon.classList.toggle("navbar__icon--change");
        navBarBody.classList.toggle("navbar--active");
        body.classList.toggle("lock");
    });
}

if(navBarItems != null){
    for (const Items of navBarItems) {
        Items.addEventListener("click", function () {
            if(navBarIcon.classList.contains("navbar__icon--change")){
                navBarIcon.classList.remove("navbar__icon--change");
                navBarBody.classList.remove("navbar--active");
                if(body.classList.contains("lock")){
                    body.classList.remove("lock");
                }
            }
        });
    }
}

let filterBtn = document.querySelector(".filter-btn");
let filtersMenu = document.querySelector(".filters__menu");
let filtersMenuItems = document.querySelectorAll(".filters__menu *");
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

if(filtersMenuItems != null){
    for (const Items of filtersMenuItems) {
        Items.addEventListener("click", function () {
            console.log(1);
            if(filtersMenu.classList.contains("filters__menu--active")){
                filtersMenu.classList.remove("filters__menu--active");
            }
            if(body.classList.contains("lock")){
                body.classList.remove("lock");
            }
        });
    }
}