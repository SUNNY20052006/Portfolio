window.addEventListener("load", () => {

    /* ================= SKILL BAR ANIMATION ================= */

    const fills = document.querySelectorAll(".skill-fill");

    fills.forEach((fill, index) => {
        const level = fill.getAttribute("data-level");

        setTimeout(() => {
            fill.style.width = level + "%";
        }, 300 + index * 200);
    });



    /* ================= TYPEWRITER EFFECT ================= */

    const paragraph = document.getElementById("typewriter");
    const text = paragraph.getAttribute("data-text");

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");

    setTimeout(() => {

        paragraph.appendChild(cursor);

        let i = 0;

        const typing = setInterval(() => {

            if (i < text.length) {

                paragraph.insertBefore(
                    document.createTextNode(text.charAt(i)),
                    cursor
                );

                i++;

            } else {

                clearInterval(typing);

            }

        }, 25);

    }, 2000);



    /* ================= PROJECT CARD EXPANSION ================= */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            // close other cards
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("active");
                }
            });

            // toggle clicked card
            card.classList.toggle("active");

        });

    });



    /* ================= CLICK OUTSIDE TO CLOSE ================= */

    document.addEventListener("click", (e) => {

        if (!e.target.closest(".project-card")) {

            cards.forEach(card => {
                card.classList.remove("active");
            });

        }

    });

});