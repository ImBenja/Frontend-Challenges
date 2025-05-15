const btn = document.querySelector(".mark-read");
const unread = document.querySelectorAll(".notification.unread");
const dot = document.querySelectorAll(".unread-dot");
const number = document.querySelector(".title__number");
number.textContent = unread.length;
btn.addEventListener("click", () => {
  for (let i = 0; i < unread.length; i++) {
    unread[i].classList.remove("unread");
    dot[i].style.display = "none";
    number.textContent = 0;
  }
});
