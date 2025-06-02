document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".see_more_btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const parent = button.closest(".small_div_wrapper");
      const extraContent = parent.querySelector(".extra_content");

      if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        button.textContent = "See less";
      } else {
        extraContent.style.display = "none";
        button.textContent = "See more";
      }
    });
  });
});
