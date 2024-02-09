// VARIABLES

const header = document.querySelector("#my_header");
const BckToTop = document.querySelector("#Back_To_Top");
const navLinks = document.querySelectorAll('ul a');

let sticky = header.offsetTop;

window.addEventListener('scroll', () => {
  Sticky_Header();
  highlightNavLinks();
});

// STICKY HEADER
function Sticky_Header() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    BckToTop.classList.add("Back_To_Top");
  } else {
    header.classList.remove("sticky");
    BckToTop.classList.remove("Back_To_Top");
  }
}

// HIGHLIGHTED NAVIGATION ACTIVE LINKS
function highlightNavLinks() {
  const currentScrollY = window.scrollY;
  navLinks.forEach((link, index) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const top = section.offsetTop - 10;
      const bottom = top + section.offsetHeight;
      if (currentScrollY >= top && currentScrollY < bottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

// IMAGE GALLERY
function showImage(src) {
  const expandedImgElement = document.querySelector("#expanded_img");
  const imageElement = document.querySelector("#image");
  
  expandedImgElement.style.display = "block";
  imageElement.src = src;
  header.style.display = "none";
  BckToTop.style.display = "none";
  document.body.style.overflow = "hidden";
}

function closeImage() {
  const expandedImgElement = document.querySelector("#expanded_img");
  
  expandedImgElement.style.display = "none";
  header.style.display = "block";
  BckToTop.style.display = "block";
  document.body.style.overflow = "auto";
}


// ANIMATION
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.Zoom-in');
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
  };

  const callbacks = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  };

  let observer = new IntersectionObserver(callbacks, options);

  elements.forEach(element => {
      observer.observe(element);
  });
});