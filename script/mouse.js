// 마우스 커서 이벤트
// if (window.innerWidth > 1024) {
   const mouse = document.querySelector('.mouse');
   const endInner = document.querySelectorAll('.end__inner');
   const workSlide = document.querySelectorAll('.swiper-slide-ani');
   const aAll = document.querySelectorAll('.event');
   const CHANGE = 'active-02';
   const SCALE = 'active-03';

   window.addEventListener('mousemove', (event) => {
       mouse.style.left = `${event.clientX}px`;
       mouse.style.top = `${event.clientY}px`;
   });

  // work swiper slide 
   workSlide.forEach((item) => {
     item.addEventListener('mouseover', () => mouse.classList.add(ACTIVE));
     item.addEventListener('mouseout', () => mouse.classList.remove(ACTIVE));
   });

  // end inner
   endInner.forEach((item) => {
     item.addEventListener('mouseover', () => mouse.classList.add(CHANGE));
     item.addEventListener('mouseout', () => mouse.classList.remove(CHANGE));
   });

  // a tag 
   aAll.forEach((item) => {
     item.addEventListener('mouseover', () => mouse.classList.add(SCALE));
     item.addEventListener('mouseout', () => mouse.classList.remove(SCALE));
   });
// }

