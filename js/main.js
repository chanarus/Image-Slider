document.addEventListener("DOMContentLoaded", () => { 
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');

    next.addEventListener('click', () => {
        var slider = Array.prototype.slice.call( document.getElementById('slider').children ),
            currentImg = document.getElementsByClassName('active')[0];
        var indexOfcurrentImg = slider.indexOf(currentImg);
        var nextImg = slider[indexOfcurrentImg + 1];

        

        if(nextImg) {
            currentImg.style.zIndex = '-10';
            currentImg.className = '';

            nextImg.className = 'active';
            nextImg.style.zIndex = '10';            
        }
    });

    prev.addEventListener('click', () => {
        var slider = Array.prototype.slice.call( document.getElementById('slider').children ),
            currentImg = document.getElementsByClassName('active')[0];
        var indexOfcurrentImg = slider.indexOf(currentImg);
        var nextImg = slider[indexOfcurrentImg - 1];

        

        if(nextImg) {
            currentImg.style.zIndex = '-10';
            currentImg.className = '';

            nextImg.className = 'active';
            nextImg.style.zIndex = '10';            
        }
    });

    prev.addEventListener('click', () => {

    });
  });