document.addEventListener("DOMContentLoaded", () => {
    // Темная тема (не работает пока-что)
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", themeToggle.checked);
    });

    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll("img");
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");
        let currentIndex = 0;

        const updateSlider = () => {
            images.forEach((img, index) => {
                img.style.display = index === currentIndex ? "block" : "none";
            });
        };

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        updateSlider();
    });

    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const games = document.querySelectorAll(".game");
        games.forEach(game => {
            const title = game.querySelector("h3").textContent.toLowerCase();
            game.style.display = title.includes(query) ? "block" : "none";
        });
    });
});
