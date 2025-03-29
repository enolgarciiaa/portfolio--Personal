
  const hamburger = document.getElementById('hamburger');
  const navigation = document.getElementById('navigation');

  hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
  });


  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

