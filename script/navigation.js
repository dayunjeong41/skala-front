document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("routeOverlay");
    const statusText = document.getElementById("routeStatus");
    const routeLinks = document.querySelectorAll("[data-route]");
    const steps = [
        "Locating...",
        "Current Position Found",
        "Calculating Route...",
        "Destination Found",
        "Redirecting..."
    ];

    if (!overlay || !statusText) {
        return;
    }

    routeLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = link.getAttribute("href");

            if (!target || target.startsWith("#")) {
                return;
            }

            event.preventDefault();
            link.classList.add("is-active");
            overlay.classList.add("is-visible");
            overlay.setAttribute("aria-hidden", "false");

            steps.forEach((step, index) => {
                window.setTimeout(() => {
                    statusText.textContent = step;
                }, index * 210);
            });

            window.setTimeout(() => {
                window.location.href = target;
            }, 1100);
        });
    });
});
