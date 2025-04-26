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
  
  