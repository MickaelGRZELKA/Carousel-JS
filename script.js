const next = document.querySelector('.next')
const li = document.querySelectorAll('li')
let i = 0;

function scrollingNext() {
     li[i].classList.remove('active'); 
     i++;
     if (i == li.length) {
          i = 0
         }
    li[i].classList.add('active');
 }

 next.addEventListener('click', scrollingNext);