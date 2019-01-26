(function () {
  const scrollBtn = document.getElementById('js-scroll-trigger');

  scrollBtn.addEventListener('click', () => {
    document.querySelector(`#${scrollBtn.dataset.target}`).scrollIntoView({
      behavior: 'smooth',
    });
    scrollBtn.classList.add('inactive');
  });

  // const scrollBtns = document.getElementsByClassName('js-scroll-trigger');
  //
  // scrollBtns.forEach((b) => {
  //   b.addEventListener('click', (e) => {
  //     document.querySelector(`#${e.dataset.target}`).scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   });
  // });
}());
