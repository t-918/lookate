function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top;
    window.scrollBy({ top: offsetTop, left: 0, behavior: 'smooth' });
  }
}

function handleNavigationClick(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  smoothScrollTo(target);
}

document.addEventListener('DOMContentLoaded', function () {
  const navigationLinks = document.querySelectorAll('.navigation-link');
  navigationLinks.forEach(link => {
    link.addEventListener('click', handleNavigationClick);
  });

  function toggleBackToTopButton() {
    var backToTopBtn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    var scrollDuration = 500;
    var scrollStep = -window.scrollY / (scrollDuration / 15);

    var scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  window.onscroll = function () {
    toggleBackToTopButton();
  };

  const backToTopBtn = document.getElementById('back-to-top-btn');
  backToTopBtn.addEventListener('click', function () {
    scrollToTop();
  });
});

function toggleBackToTopButton() {
  var backToTopBtn = document.getElementById("back-to-top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
