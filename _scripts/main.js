$(function() {
  //--------------------------------------------------------------- SWITCH ---------------------------------------------------------------
  const d = new Date();
  const hours = d.getHours();
  const night = false; // between 7pm and 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });
  //--------------------------------------------------------------- SWITCH ---------------------------------------------------------------
  //--------------------------------------------------------------- SCOLL UP ---------------------------------------------------------------
  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
        sun.id = '';
        moon.id = '';
      } else {
        $topButton.fadeOut();
        sun.id = 'light-sun';
        moon.id = 'light-moon';
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
  //--------------------------------------------------------------- SCOLL UP ---------------------------------------------------------------
  //--------------------------------------------------------------- INTRO ---------------------------------------------------------------
  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 4000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.achievements', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
  //--------------------------------------------------------------- INTRO ---------------------------------------------------------------
  //--------------------------------------------------------------- VIDEOS ---------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    const lazyVideos = document.querySelectorAll('video[data-src]');
  
    function loadVideo(video) {
      const source = video.querySelector('source');
      if (source && video.dataset.src) {
        video.src = video.dataset.src; // Assign data-src to the video src
        source.src = video.dataset.src; // Assign data-src to the source src
        video.load(); // Load the video
      }
    }
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadVideo(entry.target); // Load video when it's in view
          observer.unobserve(entry.target); // Stop observing after loading
        }
      });
    });
  
    lazyVideos.forEach(video => {
      observer.observe(video);
    });
  });
  //--------------------------------------------------------------- VIDEOS ---------------------------------------------------------------
});
