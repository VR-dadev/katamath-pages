  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function updateCarousel() {
    const width = track.children[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  function lancerJeu() {
    nextBtn.addEventListener('click', () => {
      if (index < track.children.length - 1) index++;
      else index = 0;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (index > 0) index--;
      else index = track.children.length - 1;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
}

lancerJeu()