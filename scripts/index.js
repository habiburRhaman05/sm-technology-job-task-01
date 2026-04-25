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


