//run script after page is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    //grab the individual pages from html
    const pages = document.querySelectorAll(".page li");
  
//loop through each page, page is the current page, index keeps track of page number
    pages.forEach((page, index) => {
        //when page is clicked, function will execute
        page.addEventListener("click", function () {
            //checks if page is already flipped
            const flipped = page.classList.contains("flipped");
//if not flipped, rotate it -160 deg
            if(!flipped){
                page.style.transform = `rotateY(-160deg) translateZ(5px)`;
                //increase z-index so flipped pages will be brought forward
                page.style.zIndex = `${10 + index}`;
                //if page is flipped, reset transform and z-index to keep stacking order correct
            }else{
                page.style.transform = `rotateY(-28deg) translateZ(-1px)`;
                page.style.zIndex = `${index}`;
            }
            //if classList exists, remove it, if not, add it
            page.classList.toggle("flipped");
        });
    })
})