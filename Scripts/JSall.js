const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouchDevice) {
    console.log("Плавная прокрутка отключена");
} else {
    // document.addEventListener('DOMContentLoaded', () => {
    //     console.log("Плавная прокрутка включена");

    //     // -----------------------
    //     // Плавная прокрутка 
    //     const smoothCoef = 0.05;
    //     const smoothScroll = document.querySelector(".smooth-scroll");
    //     const smoothScrollBar = document.querySelector(".smooth-scrollbar");

    //     function onResize(e) {
    //         smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
    //     }

    //     window.addEventListener("resize", onResize);
    //     onResize();

    //     let prevY = window.scrollY;
    //     let curY = window.scrollY;
    //     let y = window.scrollY;
    //     let dy;

    //     function loop(now) {
    //         curY = window.scrollY;
    //         dy = curY - prevY;
    //         y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
    //         prevY = y;
    //         smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;

    //         requestAnimationFrame(loop);
    //     }
    //     requestAnimationFrame(loop);
    //         });

}

const circle = document.querySelector('.circle');

  function moveRandomly() {
    // Ограничим движение до 60% ширины/высоты экрана
    const paddingX = window.innerWidth * 0.2;
    const paddingY = window.innerHeight * 0.2;

    const maxX = window.innerWidth - circle.offsetWidth - paddingX;
    const maxY = window.innerHeight - circle.offsetHeight - paddingY;

    const randomX = paddingX + Math.random() * (maxX - paddingX);
    const randomY = paddingY + Math.random() * (maxY - paddingY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
  }

  // Медленное перемещение каждые 6 секунд
  setInterval(moveRandomly, 6000);
  moveRandomly();

fetch('https://api.mcsrvstat.us/2/play.friendshire.net')
.then(response => response.json())
.then(data => {
  document.getElementById('playerCount').textContent = 
    data.players.online + " / " + data.players.max;
});