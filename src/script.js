const positions = ["Student", "Developer", "Sleeper", "Musician"];
const positionsElement = document.getElementById("positions");
let positionsIndex = 0;

function switchPositions() {
    setInterval(function () {
        positionsElement.textContent = positions[positionsIndex];
        positionsIndex = (positionsIndex + 1) % positions.length;
    }, 3500);
}

switchPositions();

const currentTheme = document.documentElement.getAttribute("data-theme");
const newTheme = currentTheme === "light" ? "dark" : "light";

document.documentElement.setAttribute("data-theme", newTheme);

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggle");

    themeToggleBtn.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);
    });
});
