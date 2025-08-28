const bunny = document.getElementById("bunny");
const message = document.getElementById("message");
const container = document.querySelector(".container");

bunny.addEventListener("click", () => {
  bunny.classList.toggle("hug");
  message.textContent = "hug delivered!";

  // create floating hearts
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 200 - 100 + "px";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});
