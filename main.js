// scroll top Start ------------
let span = document.querySelector(".up");


onscroll = function () {
   
    if (this.onscroll >= 1000) {
        span.classList.add('show');

    }
    else {
        span.classList.remove('show');

    }
}

span.onclick = function (){
    this.scrollTo({
        top:0,
        behavior: "smooth",
        
    })
}



// scroll top End -----------------


// mnuy  start

const navber = document.querySelector(".navber")
const bars = document.querySelector(".fa-bars")
const xmark = document.querySelector(".fa-xmark")
const humburger = document.querySelector(".humburger")



humburger.addEventListener("click", ()=> {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navber.classList.toggle("active");

})


// mnuy  end 