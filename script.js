/*=========================================
BOOK COVER
=========================================*/

const book = document.getElementById("book");

if (book) {

    book.addEventListener("click", () => {

        book.classList.add("open");

        setTimeout(() => {

            window.location.href = "intro.html";

        }, 1200);

    });

}


/*=========================================
PAGE TURN FUNCTION
=========================================*/

let isTurning = false;

function turnPage(pageSelector, nextPage, buttonId) {

    const page = document.querySelector(pageSelector);
    const button = document.getElementById(buttonId);

    if (!page || !button) return;

    button.addEventListener("click", () => {

        if (isTurning) return;

        isTurning = true;

        button.style.pointerEvents = "none";
        button.innerHTML = "Turning Page...";

        page.classList.add("turn-page");

        setTimeout(() => {

            window.location.href = nextPage;

        }, 1600);

    });

}


/*=========================================
PAGE ROUTING
=========================================*/

const nextPage = document.body.dataset.next;

if (document.querySelector(".intro-page")) {

    turnPage(".intro-page", nextPage, "continueBtn");

}

if (document.querySelector(".chapter-page")) {

    turnPage(".chapter-page", nextPage, "nextChapter");

}

if (document.querySelector(".letter-page")) {

    turnPage(".letter-page", nextPage, "finishBtn");

}


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.18
});

reveals.forEach(item=>observer.observe(item));
const contentBtn = document.getElementById("continueBtn-toc");

contentBtn.addEventListener("click", () => {
    window.location.href = "contents.html";
});