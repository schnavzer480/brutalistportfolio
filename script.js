const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

const hiddenElements = document.querySelectorAll(".fade-section");

hiddenElements.forEach((el) => observer.observe(el));