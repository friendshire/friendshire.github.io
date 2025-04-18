const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    } else {
        counter = counter - slides.length + 1;
        slideImage();
    }
};
const goPrev = () => {
    if (counter != 0) {
        counter--;
        slideImage();
    } else {
        counter = counter + slides.length -1;
        slideImage();
    }
};
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}