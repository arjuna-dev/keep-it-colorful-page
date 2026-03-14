document.querySelectorAll(".button[href='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
