document.addEventListener("DOMContentLoaded", function () {
    // Subscription types
    const classType = document.getElementById("classType");
    const featuresContainer = document.getElementById("features");
    const aboutTitle = document.getElementById("aboutTitle");
    const aboutDesc = document.getElementById("aboutDesc");
    const tierButtons = document.querySelectorAll(".membership-tier button");
    const cheapButton = tierButtons[0];
    const costlyButton = tierButtons[1];
    const planButtons = document.querySelectorAll("button.plan");
    const monthlyButton = document.getElementById("monthly");
    const threeMonthsButton = document.getElementById("threeMonths");
    const sixMonthsButton = document.getElementById("sixMonths");
    const link = document.getElementById("buy");
    //plan values
    const monthlyPrice = document.querySelector("#monthly .plan-title .p2 span");
    const monthlyPricePerClass = document.querySelector("#monthly .plan-price .p2");
    const threeMonthsPrice = document.querySelector("#threeMonths .plan-title .p2 span");
    const threeMonthsPricePerClass = document.querySelector(
        "#threeMonths .plan-price .p2"
    );
    const threeMonthsDiscount = document.querySelector("#threeMonths .plan-title del");
    const threeMonthsDiscountPerClass = document.querySelector(
        "#threeMonths .plan-price del"
    );
    const sixMonthsPrice = document.querySelector("#sixMonths .plan-title .p2 span");
    const sixMonthsPricePerClass = document.querySelector("#sixMonths .plan-price .p2");
    const sixMonthsDiscount = document.querySelector("#sixMonths .plan-title del");
    const sixMonthsDiscountPerClass = document.querySelector(
        "#sixMonths .plan-price del"
    );

    //description
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

    //updating the link
    function updateLink() {
        const isCostly = costlyButton.classList.contains("active");
        const isCheap = cheapButton.classList.contains("active");

        const isMonthly = monthlyButton.classList.contains("selected");
        const isThreeMonths = threeMonthsButton.classList.contains("selected");
        const isSixMonths = sixMonthsButton.classList.contains("selected");

        if (classType.value === "private-tutoring" && isCheap && isMonthly) {
            link.href = "#p-c-1";
        } else if (classType.value === "private-tutoring" && isCheap && isThreeMonths) {
            link.href = "#p-c-2";
        } else if (classType.value === "private-tutoring" && isCheap && isSixMonths) {
            link.href = "#p-c-3";
        } else if (classType.value === "private-tutoring" && isCostly && isMonthly) {
            link.href = "#p-e-1";
        } else if (classType.value === "private-tutoring" && isCostly && isThreeMonths) {
            link.href = "#p-e-2";
        } else if (classType.value === "private-tutoring" && isCostly && isSixMonths) {
            link.href = "#p-e-3";
        } else if (classType.value === "group-classes" && isCheap && isMonthly) {
            link.href = "#g-c-1";
        } else if (classType.value === "group-classes" && isCheap && isThreeMonths) {
            link.href = "#g-c-2";
        } else if (classType.value === "group-classes" && isCheap && isSixMonths) {
            link.href = "#g-c-3";
        } else if (classType.value === "group-classes" && isCostly && isMonthly) {
            link.href = "#g-e-1";
        } else if (classType.value === "group-classes" && isCostly && isThreeMonths) {
            link.href = "#g-e-2";
        } else if (classType.value === "group-classes" && isCostly && isSixMonths) {
            link.href = "#g-e-3";
        }
    }

    //updating the plans
    function updatePlans() {
        const isCheap = cheapButton.classList.contains("active");
        const isCostly = costlyButton.classList.contains("active");
        const classDividers = document.querySelectorAll(".plan .plan-price .p3");

        if (classType.value === "group-classes" && isCheap) {
            monthlyPrice.textContent = "$99";
            monthlyPricePerClass.textContent = "$9.90";

            threeMonthsPrice.textContent = "$249";
            threeMonthsPricePerClass.textContent = "$8.30";
            threeMonthsDiscount.textContent = "$297";
            threeMonthsDiscountPerClass.textContent = "$9.90 /class";

            sixMonthsPrice.textContent = "$399";
            sixMonthsPricePerClass.textContent = "$6.65";
            sixMonthsDiscount.textContent = "$594";
            sixMonthsDiscountPerClass.textContent = "$9.90 /class";

            classDividers.forEach((divider) => (divider.style.display = "inline-block"));
        } else if (classType.value === "group-classes" && isCostly) {
            monthlyPrice.textContent = "$149";
            monthlyPricePerClass.textContent = "Unlimited";

            threeMonthsPrice.textContent = "$349";
            threeMonthsPricePerClass.textContent = "Unlimited";
            threeMonthsDiscount.textContent = "$447";
            threeMonthsDiscountPerClass.textContent = "";

            sixMonthsPrice.textContent = "$599";
            sixMonthsPricePerClass.textContent = "Unlimited";
            sixMonthsDiscount.textContent = "$894";
            sixMonthsDiscountPerClass.textContent = "";

            classDividers.forEach((divider) => (divider.style.display = "none"));
        } else if (classType.value === "private-tutoring" && isCheap) {
            monthlyPrice.textContent = "$199";
            monthlyPricePerClass.textContent = "$16.60";

            threeMonthsPrice.textContent = "$499";
            threeMonthsPricePerClass.textContent = "$13.90";
            threeMonthsDiscount.textContent = "$597";
            threeMonthsDiscountPerClass.textContent = "$16.60 /class";

            sixMonthsPrice.textContent = "$799";
            sixMonthsPricePerClass.textContent = "$11.10";
            sixMonthsDiscount.textContent = "$11,94";
            sixMonthsDiscountPerClass.textContent = "$16.60 /class";

            classDividers.forEach((divider) => (divider.style.display = "inline-block"));
        } else if (classType.value === "private-tutoring" && isCostly) {
            monthlyPrice.textContent = "$299";
            monthlyPricePerClass.textContent = "$14.95";

            threeMonthsPrice.textContent = "$749";
            threeMonthsPricePerClass.textContent = "$12.48";
            threeMonthsDiscount.textContent = "$897";
            threeMonthsDiscountPerClass.textContent = "$14.95 /class";

            sixMonthsPrice.textContent = "$1249";
            sixMonthsPricePerClass.textContent = "$10.40";
            sixMonthsDiscount.textContent = "$17,94";
            sixMonthsDiscountPerClass.textContent = "$14.95 /class";

            classDividers.forEach((divider) => (divider.style.display = "inline-block"));
        }
    }

    // Tier buttons actions
    tierButtons.forEach((button) => {
        button.addEventListener("click", function () {
            tierButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            updateLink();
            updatePlans();
        });
    });

    //plan button actions
    planButtons.forEach((button) => {
        button.addEventListener("click", function () {
            planButtons.forEach((btn) => btn.classList.remove("selected"));
            this.classList.add("selected");
            updateLink();
        });
    });

    classType.addEventListener("change", updateAboutTitle);
    classType.addEventListener("change", updateAboutDesc);
    classType.addEventListener("change", updateFeatures);
    classType.addEventListener("change", updateTierButtons);
    classType.addEventListener("change", updateLink);
    classType.addEventListener("change", updatePlans);
    updateAboutTitle();
    updateAboutDesc();
    updateFeatures();
    updateTierButtons();
    updateLink();
    updatePlans();
});
