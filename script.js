const tierButton = document.querySelectorAll(".membership-tier button");

tierButton.forEach((button) => {
    button.addEventListener("click", function () {
        tierButton.forEach((btn) => btn.classList.remove("active"));

        this.classList.add("active");
    });
});
