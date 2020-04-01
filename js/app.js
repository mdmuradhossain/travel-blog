const nav = document.querySelector(".nav");
const toggleCollapse = document.querySelector(".toggle-collapse");

toggleCollapse.addEventListener("click", function() {
  nav.classList.add("collapse");
});
