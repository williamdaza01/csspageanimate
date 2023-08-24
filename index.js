const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

const interactiveElements = document.querySelectorAll(
  ".interactive-element, .slider, .toggle, .card"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    customCursor.classList.add("active");
  });
  element.addEventListener("mouseleave", () => {
    customCursor.classList.remove("active");
  });
});
