const container = document.querySelector(".container");
const open = document.querySelector("#show");
const close = document.querySelector("#close");
const mainH1 = document.querySelector(".main_h1");
const mainP = document.querySelector(".main_p");

const beach = document.querySelector('#beach')
const beachImage = document.querySelectorAll('.displaying')


/************************* Form *************************/

open.addEventListener("click", () => {
  container.style.display = "block";
  open.style.display = "none";
  mainH1.classList.add("clicked");
  mainP.classList.add("clicked");
});

close.addEventListener("click", () => {
  container.style.display = "none";
  open.style.display = "block";
  mainH1.classList.remove("clicked");
  mainP.classList.remove("clicked");
});

/*************************** Set Images ***************************/

const setImage = () => {
    if(beach.value === 'select') 
    addClass(beachImage)
    if(beach.value === 'phuket') {
        addClass(beachImage)
        beachImage[0].classList.remove('displaying')
    }
    if(beach.value === 'pa-tong'){
        addClass(beachImage)
        beachImage[1].classList.remove('displaying')
    }
    if(beach.value === 'ko-samui'){
        addClass(beachImage)
        beachImage[2].classList.remove('displaying');
    }
    if(beach.value === 'pattaya-city'){
        addClass(beachImage)
        beachImage[3].classList.remove('displaying');
    }
}

function addClass(beachImage) {
    for(let i = 0; i < beachImage.length; i++){
        beachImage[i].classList.add('displaying');
    }
}

beach.addEventListener('change', setImage);




/*********************** Smooth Scroll *******************/



const links = document.querySelectorAll('#nav ul li a')
console.log(links)

links.forEach(event => event.addEventListener('click', smoothScroll))

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if(!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if(progress < duration) window.requestAnimationFrame(step)
    }
}


/* Smooth Scroll Types */
function easeInCubic(t, b, c, d) {
	t /= d;
	return c*t*t*t + b;
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};