document.addEventListener("DOMContentLoaded", function () {
    // Subscription types
    const classType = document.getElementById("classType");
    const featuresContainer = document.getElementById("features");
    const aboutTitle = document.getElementById("aboutTitle");
    const aboutDesc = document.getElementById("aboutDesc");
    const tierButtons = document.querySelectorAll(".membership-tier button");

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

    function updateAboutTitle() {
        aboutTitle.innerText = `About ${
            classType.value === "group-classes" ? "group classes" : "private tutoring"
        }:`;
    }

    function updateAboutDesc() {
        aboutDesc.innerText = `${
            classType.value === "group-classes"
                ? "Fun and supportive classes up to 10 students. Available 7am-9pm COT (Mon-Fri). Students 18+ only."
                : "Fun and effective tutoring that adapts as you learn. Get fast results with one-on-one attention. Students 18+ only."
        }`;
    }

    //tier buttons
    const cheapButton = tierButtons[0];
    const costlyButton = tierButtons[1];

    function updateTierButtons() {
        if (classType.value === "group-classes") {
            cheapButton.firstElementChild.innerHTML = "Lite";
            cheapButton.lastElementChild.innerHTML = "Join up to 10 classes per month";
            costlyButton.firstElementChild.innerHTML = "Unlimited";
            costlyButton.lastElementChild.innerHTML = "Take as many classes as you want";
        } else {
            cheapButton.firstElementChild.innerHTML = "Standard";
            cheapButton.lastElementChild.innerHTML =
                "Engaging 1:1 tutoring, up to 3 classes per week.";
            costlyButton.firstElementChild.innerHTML = "Plus";
            costlyButton.lastElementChild.innerHTML =
                "Increased personalization, up to 5 classes per week.";
        }
    }

    // Tier buttons actions

    tierButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            tierButtons.forEach((btn) => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            this.classList.add("active");
        });
    });

    classType.addEventListener("change", updateAboutTitle);
    classType.addEventListener("change", updateAboutDesc);
    classType.addEventListener("change", updateFeatures);
    classType.addEventListener("change", updateTierButtons);
    updateAboutTitle();
    updateAboutDesc();
    updateFeatures();
    updateTierButtons();
});
