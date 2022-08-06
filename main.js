window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + (innerHeight / 2);
  
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = targetLine >= sectionEndsAt;

  const sectionBoundaries = sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active');
  }

}

function showNavOnScroll() {
  if (window.scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if (window.scrollY > 550) {
    document.getElementById('backToTopButton').classList.add('show')
  } else {
    document.getElementById('backToTopButton').classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content`);