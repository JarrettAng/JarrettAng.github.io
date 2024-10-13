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

  sr.reveal('.background', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.2,
    duration: 400,
    delay: 100,
    scale: 0.95, 
  });
  sr.reveal('.skills', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.5,
    duration: 400,
    delay: 100,
    scale: 0.95, 
  });
  sr.reveal('.experience', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.5,
    duration: 400,
    delay: 100,
    scale: 0.95, 
  });
  sr.reveal('.achievements', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.5,
    duration: 400,
    delay: 100,
    scale: 0.95, 
  });
  sr.reveal('.featured-projects', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.1,
    duration: 400,
    delay: 100,
    scale: 0.95, 
  });
  sr.reveal('.other-projects', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.01,
    duration: 400,
    delay: 100,
    scale: 0.95, 
  });

  // Projects
  sr.reveal('.featured-projects .project', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.1,
    duration: 800,
    delay: 100,
    scale: 0.9, 
  });
  sr.reveal('.other-projects .project', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: 0.1,
    duration: 800,
    delay: 100,
    scale: 0.9, 
  });
  //--------------------------------------------------------------- INTRO ---------------------------------------------------------------
});
