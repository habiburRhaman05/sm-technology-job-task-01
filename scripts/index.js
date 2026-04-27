// navbar menu open and lik dynamic rendering 

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", hasCaret: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "White level", href: "#white-level" }
];

function caretIcon() {
  return `
    <svg class="nav__caret" width="12" height="12" viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"/>
    </svg>
  `;
}

const desktopNav = document.getElementById("desktopNav");
const mobileNav = document.getElementById("mobileNav");

NAV_LINKS.forEach(link => {
  const a = document.createElement("a");
  a.href = link.href;
  a.className = "nav__link" + (link.hasCaret ? " nav__link--with-icon" : "");
  a.innerHTML = link.label + (link.hasCaret ? caretIcon() : "");
  desktopNav.appendChild(a);

  const m = document.createElement("a");
  m.href = link.href;
  m.className = "mobile-menu__link";
  m.innerHTML = `<span>${link.label}</span>` + (link.hasCaret ? caretIcon() : "");
  m.addEventListener("click", closeMenu);
  mobileNav.appendChild(m);
});

let isOpen = false;

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");


function openMenu() {
  isOpen = true;
  mobileMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
  menuBtn.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  isOpen = false;
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  menuBtn.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// click outside panel then close 
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// scroll effect - header 
window.addEventListener("scroll", () => {
  if (window.scrollY > 8) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

// faqs features 

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-item__btn");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

   
      faqItems.forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".faq-item__btn").setAttribute("aria-expanded", "false");
      });

    
      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
// gallery slider features

document.querySelectorAll(".gallery__viewport").forEach((slider) => {
  const slider_track = slider.querySelector(".gallery__track");
  const nextBtn = slider.querySelector(".gallery__next");
  const prevBtn = slider.querySelector(".gallery__prev");

  let items = Array.from(slider_track.children);
  const visible = 4;
  let index = visible;

  
  const withoutClone = items.slice(-visible).map(el => el.cloneNode(true));
  const withClone = items.slice(0, visible).map(el => el.cloneNode(true));

  withoutClone.forEach(el => slider_track.prepend(el));
  withClone.forEach(el => slider_track.append(el));

  items = Array.from(slider_track.children);

 
  function getStep() {
    const card = slider_track.querySelector(".vcard");
    const style = getComputedStyle(slider_track);
    const gap = parseFloat(style.columnGap || style.gap || 0);
    return card.offsetWidth + gap;
  }

  function move(animate = true) {
    slider_track.style.transition = animate ? "transform 0.45s cubic-bezier(.22,.61,.36,1)" : "none";
    const x = -(index * getStep());
    slider_track.style.transform = `translateX(${x}px)`;
  }

  
  function next() {
    index++;
    move(true);

    if (index >= items.length - visible) {
      setTimeout(() => {
        index = visible;
        move(false);
      }, 450);
    }
  }

  function prev() {
    index--;
    move(true);

    if (index < visible) {
      setTimeout(() => {
        index = items.length - visible * 2;
        move(false);
      }, 450);
    }
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

 
  let startX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;

    if (diff > 50) prev();
    if (diff < -50) next();
  });

 
  move(false);
});