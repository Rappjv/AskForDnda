const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group")
const link = document.querySelector(".link");
const secondQuestion = document.querySelectorAll(".question")[1];

yesBtn.addEventListener("click", () => {
  if (question.innerHTML === "I like you") {
    window.location.href = "https://wa.me/6282260946344/?text=I%20like%20you%20too";
  } else {
    question.innerHTML = "I like you";
    secondQuestion.innerHTML = "How about you?"; 
    img.src =
      "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
    // Mengatur ulang teks pada tombol
    yesBtn.innerHTML = "Yes";
    noBtn.innerHTML = "No";
  }
});


noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});