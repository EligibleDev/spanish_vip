document.addEventListener("DOMContentLoaded", function () {
    // Subscription types
    const classType = document.getElementById("classType");
    const featuresContainer = document.getElementById("features");
    const aboutTitle = document.getElementById("aboutTitle");

    function updateFeatures() {
        let features = [
            "Get matched with your perfect tutor",
            "Set classes around your schedule",
            "Personalized for your needs and level",
        ];

        if (classType.value === "group-classes") {
            features = [
                "Interactive classes for all levels",
                "300+ class topics to choose from",
                "Learn with a global community",
            ];
        }

        featuresContainer.innerHTML = features
            .map(
                (feature) => `
              <figure>
                  <img src="./assets/tick-icon.png" alt="✓" />
                  <p class="p2">${feature}</p>
              </figure>
          `
            )
            .join("");
    }

    function updateTitle() {
        aboutTitle.innerText = `About ${
            classType.value === "group-classes" ? "group classes" : "private tutoring"
        }:`;
    }

    classType.addEventListener("change", updateTitle);
    classType.addEventListener("change", updateFeatures);
    updateTitle();
    updateFeatures();

    // Tier buttons
    const tierButtons = document.querySelectorAll(".membership-tier button");

    tierButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            tierButtons.forEach((btn) => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            this.classList.add("active");
        });
    });
});
