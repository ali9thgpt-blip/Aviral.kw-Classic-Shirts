/* =========================================
   AVIRAL.KW
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP SETTINGS
========================================= */

const whatsappNumber = "00000000";


/* =========================================
   PRODUCT ORDER
========================================= */

function orderNow(productName) {

    const message =
        "Hello Aviral.kw 👋\n\n" +
        "I am interested in ordering:\n\n" +
        "👔 Product: " + productName + "\n\n" +
        "Please send me:\n" +
        "• Available sizes\n" +
        "• Available colours\n" +
        "• Price\n" +
        "• Delivery details\n\n" +
        "Thank you.";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetID = this.getAttribute("href");

        const target = document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   PRODUCT REVEAL ANIMATION
========================================= */

const products = document.querySelectorAll(".product");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


products.forEach(function(product) {

    product.style.opacity = "0";

    product.style.transform = "translateY(35px)";

    product.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(product);

});


/* =========================================
   ADD SHOW CLASS
========================================= */

const style = document.createElement("style");

style.innerHTML = `
    .product.show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);