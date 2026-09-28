function startSurprise() {
    document.body.innerHTML = `
        <div class="surprise-screen">
            <div class="confetti">🎉</div>

            <h1>HAPPY BIRTHDAY 🎂</h1>

            <h2>My Beautiful Bestie 💕</h2>

            <p>
                Today isn't just another day...
                It's the day someone very special was born. 🥹💖
            </p>

            <button onclick="showMessage()">
                💌 Read Your Birthday Message
            </button>
        </div>
    `;
}

function showMessage() {
    document.body.innerHTML = `
        <div class="gallery-screen">

            <h1>Our Beautiful Memories 💕</h1>

            <p class="gallery-subtitle">
                A few memories with my favourite person 🫶
            </p>

            <div class="photo-gallery">

                <div class="photo-card">
                    <img src="./images/p1.jpeg">
                </div>

                <div class="photo-card">
                    <img src="./images/p2.jpeg">
                </div>

                <div class="photo-card">
                    <img src="./images/p3.jpeg">
                </div>

                <div class="photo-card">
                    <img src="./images/p4.jpeg">
                </div>

                <div class="photo-card">
                    <img src="./images/p5.jpeg">
                </div>

                <div class="photo-card">
                    <img src="./images/p6.jpeg">
                </div>

            </div>

            <button onclick="finalMessage()">
                💌 One Last Surprise
            </button>

        </div>
    `;
}
// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.querySelector(".hearts")?.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
function finalMessage() {

    document.body.innerHTML = `

        <div class="message-screen">

            <div class="cake">
                🎂
            </div>

            <h1>
                One Last Thing For You 💌
            </h1>

            <div class="letter">

                <p>
                    Happy Birthday to one of the most precious people
                    in my life. 💗 I honestly don't know where to begin,
                    because there are so many things I want to say to you.
                    From all our random conversations and stupid jokes to
                    the moments when we simply stayed there for each other,
                    every little memory with you has become something I
                    genuinely treasure. You are not just someone I call my
                    bestie; you are someone who has become a really special
                    part of my life. There are people we meet and eventually
                    forget, and then there are people who somehow become a
                    beautiful part of our story — and you are definitely one
                    of those people. 🥹💕
                </p>

                <p>
                    I hope you always remember how special you are, even on
                    the days when you don't feel that way yourself. I hope
                    life gives you countless reasons to smile, people who
                    appreciate you, and moments that make your heart genuinely
                    happy. I want to see you achieve everything you dream
                    about, even the things you haven't told anyone yet. ✨
                    No matter how much life changes, how busy we become, or
                    how many new memories we create along the way, I will
                    always be grateful for the memories we already have.
                    Thank you for every laugh, every conversation, every
                    crazy moment, every piece of advice, and simply for being
                    you. You have made so many ordinary moments feel special,
                    and I hope this birthday reminds you just how loved and
                    appreciated you are. 🫶
                </p>

                <p>
                    So today, I just want to wish you a life full of happiness,
                    peace, success, adventures, and beautiful surprises.
                    May this new year of your life bring you closer to every
                    dream you have, and may you always have a reason to keep
                    smiling. And whenever you look back at these photos and
                    this little website, I hope you remember that behind all
                    these silly moments is someone who is genuinely grateful
                    that you are a part of their life. Happy Birthday once
                    again, bestie. 🎂💗 Here's to more laughs, more crazy
                    conversations, more memories, more adventures, and
                    hopefully a LOT more birthdays to celebrate together.
                    Stay exactly the beautiful person you are. Always keep
                    smiling. And never forget — you are incredibly special
                    to me. 💕✨
                </p>

            </div>

            <h2>
                Happy Birthday, My Bestie! 🎂💗
            </h2>

        </div>

    `;
}