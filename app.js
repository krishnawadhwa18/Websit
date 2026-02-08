const navButtons = document.querySelectorAll("[data-view]");
const panels = document.querySelectorAll("[data-view-panel]");

const showPanel = (target) => {
  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.id === target);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === target);
  });

  document.querySelector(".layout").scrollIntoView({ behavior: "smooth" });
};

navButtons.forEach((button) => {
  button.addEventListener("click", () => showPanel(button.dataset.view));
});

showPanel("login");
