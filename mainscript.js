function toggleMenu() {
    let menu = document.querySelector(".menu-overlay");
    menu.classList.toggle("active");
}
const menuOverlay = document.querySelector(".menu-overlay");
const menuButton = document.querySelector(".header--menu");
const closeButton = document.querySelector(".close-menu");

menuButton.addEventListener("click", () => {
    menuOverlay.classList.add("active");
});

closeButton.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
});
// Funkcja blokująca gesty powiększania na urządzeniach mobilnych
function disableZoom() {
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });
}
window.addEventListener("scroll", function () {
    document.querySelectorAll(".podcast-list--hrefs img").forEach((icon) => {
        let scaleFactor = 1 + window.scrollY / 1000; // Skaluje ikonki
        icon.style.transform = `scale(${scaleFactor})`;
    });
});
if (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1) {
    document.querySelectorAll(".podcast-list--hrefs img").forEach((icon) => {
        icon.style.transform = "scale(1)";
    });
}
document.querySelectorAll(".podcast-list--hrefs img").forEach((icon) => {
    icon.style.transform = "scale(1)";
    icon.style.transition = "none";
});
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".upToHeader");

    if (!button) {
        console.error("Przycisk nie został znaleziony!");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            button.classList.add("visible");
        } else {
            button.classList.remove("visible");
        }
    });
});
