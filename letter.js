/*==========================
THE TEACHER WHO STAYED
Letter Animation
==========================*/

const openBtn = document.getElementById("openLetter");
const hero = document.querySelector(".letter-hero");
const wrapper = document.querySelector(".letter-wrapper");

const pre = document.getElementById("letterText");

const downloadBtn = document.getElementById("downloadLetter");
const closeBtn = document.getElementById("closeBook");


// Save original text
const fullText = pre.textContent;

// Empty it
pre.textContent = "";

wrapper.classList.add("hidden");

downloadBtn.style.opacity = 0;
closeBtn.style.opacity = 0;

downloadBtn.style.pointerEvents = "none";
closeBtn.style.pointerEvents = "none";


/*==========================
Open Letter
==========================*/

openBtn.addEventListener("click", () => {

    hero.style.transition = "1s";

    hero.style.opacity = "0";

    hero.style.transform = "translateY(-50px)";

    setTimeout(() => {

        hero.style.display = "none";

        wrapper.classList.remove("hidden");

        wrapper.style.opacity = "0";

        setTimeout(() => {

            wrapper.style.opacity = "1";

            typeLetter();

        }, 150);

    }, 900);

});


/*==========================
Typewriter
==========================*/

let index = 0;

function typeLetter() {

    if (index < fullText.length) {

        const char = fullText.charAt(index);

        pre.textContent += char;
        index++;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        let speed = 45 + Math.random() * 20; // 45–65ms per character

        if (char === " ") {
            speed = 25;
        }

        if (char === ",") {
            speed = 180;
        }

        if (char === "." || char === "!" || char === "?" || char === ":") {
            speed = 450;
        }

        if (char === "\n") {
            speed = 700;
        }

        setTimeout(typeLetter, speed);

    } else {

        showButtons();

    }

}


/*==========================
Reveal Buttons
==========================*/

function showButtons(){

    downloadBtn.style.pointerEvents = "auto";
    closeBtn.style.pointerEvents = "auto";

    downloadBtn.animate(

        [

            {

                opacity:0,
                transform:"translateY(30px)"

            },

            {

                opacity:1,
                transform:"translateY(0)"

            }

        ],

        {

            duration:900,
            fill:"forwards"

        }

    );

    closeBtn.animate(

        [

            {

                opacity:0,
                transform:"translateY(30px)"

            },

            {

                opacity:1,
                transform:"translateY(0)"

            }

        ],

        {

            duration:900,
            delay:250,
            fill:"forwards"

        }

    );

}


/*==========================
Close Book
==========================*/

closeBtn.addEventListener("click",()=>{

    document.body.animate(

        [

            {

                opacity:1

            },

            {

                opacity:0

            }

        ],

        {

            duration:800,

            fill:"forwards"

        }

    );

    setTimeout(()=>{

        document.body.innerHTML = `

        <div class="goodbye">

            <h1>The End</h1>

            <p>

            Some teachers finish a syllabus.

            <br><br>

            A few become part of someone's story.

            <br><br>

            Thank you for becoming part of mine.

            </p>

        </div>

        `;

        document.body.style.background="#1f1812";

        document.body.style.display="flex";

        document.body.style.justifyContent="center";

        document.body.style.alignItems="center";

        document.body.style.height="100vh";

        document.body.style.color="#f7f2ea";

        document.body.style.fontFamily="'Cormorant Garamond',serif";

    },1700);

});

/*==========================
Download Letter
==========================*/

downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "images/letter.png";   // Path to your Canva image
    link.download = "The Teacher Who Stayed - Letter.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});