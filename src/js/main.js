const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.js-header');

burger.addEventListener('click', () => {
  header.classList.toggle('active');
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const menuItems  = document.querySelectorAll('a')
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault()
        const sectionId = menuItem.getAttribute('href').substring(1)
        scrollToSection(sectionId)
    })
})