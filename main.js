const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.dot');

const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0; 

// Функция для переключения слайда
function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active-slide");
        dots[i].classList.remove("active-dot");
    });

    slides[index].classList.add("active-slide");
    dots[index].classList.add("active-dot");
}

// Обработчики событий для кнопок
previousButton.addEventListener('click', function(e) {
    currentIndex --;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    console.log(currentIndex);
    goToSlide(currentIndex);  
});

nextButton.addEventListener('click', function(e) {
    currentIndex ++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    };
    console.log(currentIndex);
    goToSlide(currentIndex);  
});

// Обработчик событий для точек
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        goToSlide(currentIndex);
    });
});
    
/*
// Устанавливаем обработчики событий для кнопок

previousButton.addEventListener('click', showPreviousSlide);

nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateSlider(); 
}

// Функция для показа следующего слайда
function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateSlider(); 
} 

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Инициализация слайдера
updateSlider();
*/
  