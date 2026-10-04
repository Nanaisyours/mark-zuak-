const discord = document.getElementById("discordLink");
const toast = document.getElementById("toast");

discord.addEventListener("click", (e) => {
  if (discord.getAttribute("href") === "#") {
    e.preventDefault();
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }
});
