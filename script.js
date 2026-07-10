const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");

const syncHeader = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-case-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.caseToggle);
    if (!target) return;

    const isOpen = target.classList.toggle("is-open");
    button.textContent = isOpen ? "Hide case study" : "Case study";
  });
});

syncHeader();

window.addEventListener("scroll", syncHeader, { passive: true });
