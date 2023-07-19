const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    //Checking if the difference between the 2 clicks is less than 800ms
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked; //Pre-increment the variable and put it inside the HTML in the same time.
  //Clean the parent element from the added elements.
  setTimeout(() => {
    heart.remove();
  }, 1000);
};
