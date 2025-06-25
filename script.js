// Mobile Nav
document
  .querySelector(".nav-toggle")
  .addEventListener("click", () =>
    document.querySelector("nav").classList.toggle("open")
  );

// Workout Plan Generator
document.getElementById("planForm").onsubmit = (e) => {
  e.preventDefault();
  const goal = document.getElementById("goal").value;
  const eq = document.getElementById("equipmentSelect").value;
  document.getElementById("planResult").textContent =
    goal && eq
      ? `Your ${goal} program using ${eq}:\n• Warm‑up\n• 3× weekly workouts\n• Progressively added sets\nGood luck!`
      : "Please select goal and equipment.";
};

// Meal Planner
document.getElementById("mealForm").onsubmit = (e) => {
  e.preventDefault();
  const b = document.getElementById("breakfast").value;
  const l = document.getElementById("lunch").value;
  const d = document.getElementById("dinner").value;
  document.getElementById(
    "mealResult"
  ).textContent = `Today's Meals:\nBreakfast: ${b || "-"}\nLunch: ${
    l || "-"
  }\nDinner: ${d || "-"}`;
};
