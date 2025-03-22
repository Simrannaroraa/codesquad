document.addEventListener("DOMContentLoaded", function() {
    const glitchElements = document.querySelectorAll(".glitch-container");
    glitchElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            el.classList.add("glitch-active");
        });
        el.addEventListener("mouseleave", () => {
            el.classList.remove("glitch-active");
        });
    });
});
