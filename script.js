const input = document.getElementById("nameInput");
const button = document.getElementById("openBtn");
const error = document.getElementById("error");
const gate = document.getElementById("gate");
const page = document.getElementById("messagePage");

function openMessage() {
  const name = input.value.trim().toLowerCase();

  if (name === "yui") {
    gate.classList.add("hidden");
    page.classList.remove("hidden");
    document.title = "For Yui ♡";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    error.textContent = "That's not the right name.";
    input.value = "";
    input.focus();
  }
}

button.addEventListener("click", openMessage);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    openMessage();
  }
});
