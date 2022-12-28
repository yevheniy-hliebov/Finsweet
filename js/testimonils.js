const itemsTestimonils = document.querySelectorAll(".testimonils__item");
const paginationsTestimonils = document.querySelector(".testimonils__paginations");
const paginationPrev = paginationsTestimonils.querySelector("#prev");
const paginationNext = paginationsTestimonils.querySelector("#next");

if(itemsTestimonils.length == 0){
    paginationsTestimonils.style.display = "none";
}
else{
    let itemIndex = 1;
    slideritems(itemIndex);

    paginationPrev.addEventListener("click", function () {
        itemIndex--;
        slideritems(itemIndex);
        console.log(itemIndex);
    });
    paginationNext.addEventListener("click", function () {
        itemIndex++;
        console.log(itemIndex);
        slideritems(itemIndex);
    });
}

function slideritems(index){
    if(index == 1){
        if(paginationPrev.classList.contains("testimonils__paginations__arrow--lock") === false){
            paginationPrev.classList.add("testimonils__paginations__arrow--lock");
        }
    }
    if(index == itemsTestimonils.length){
        if(paginationNext.classList.contains("testimonils__paginations__arrow--lock") === false){
            paginationNext.classList.add("testimonils__paginations__arrow--lock");
        }
    }
    if(index > 1 && index < itemsTestimonils.length){
        if(paginationPrev.classList.contains("testimonils__paginations__arrow--lock")){
            paginationPrev.classList.remove("testimonils__paginations__arrow--lock");
        }
        if(paginationNext.classList.contains("testimonils__paginations__arrow--lock")){
            paginationNext.classList.remove("testimonils__paginations__arrow--lock");
        }
    }

    for (let i = 0; i < itemsTestimonils.length; i++) {
        itemsTestimonils[i].style.display = "none";
    }

    itemsTestimonils[index-1].style.display = "flex";
}

