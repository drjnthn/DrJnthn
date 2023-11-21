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
