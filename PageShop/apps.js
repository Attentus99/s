function openWindow(img){
    let gallery = document.querySelector('#galleryOpen');
    let galleryImage = document.querySelector('#galleryPhoto');
    gallery.style.display = 'block';
    galleryImage.src = img.src;    
}

function closeGallery(){
    let gallery = document.querySelector("#galleryOpen");
    gallery.style.display = "none";
}
///////////////////////////////////////////////////////////////////////////


let activeSlideNumber = 1;
let next = document.querySelector("#arrowRight");
let previous = document.querySelector("#arrowLeft");

let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");

let hideSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideSlide();
    document.querySelector('.slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activeSlideNumber === 3)
    {
        activeSlideNumber = 1
    }
    else
    {
        activeSlideNumber = activeSlideNumber + 1
    }
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if (activeSlideNumber === 1)
    {
        activeSlideNumber = 3
    }
    else
    {
        activeSlideNumber = activeSlideNumber - 1
    }
    showSlide(activeSlideNumber);
};



let showSlide1 = () => {
    showSlide (1);
};
let showSlide2 = () => {
    showSlide (2);
};
let showSlide3 = () => {
    showSlide (3);
};

next.addEventListener('click', showNextSlide);
previous.addEventListener('click', showPreviousSlide);
