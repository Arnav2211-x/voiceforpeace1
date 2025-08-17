// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navigation background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 100) {
    nav.style.background = "rgba(0, 0, 0, 0.95)"
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.9)"
  }
})

// EmailJS functionality (if needed on other pages)
let emailjs
if (typeof window.emailjs !== "undefined") {
  emailjs = window.emailjs
  emailjs.init("31QbCqc3Pwl5WklLF")
}
