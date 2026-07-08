// ======================================================
// SA CAREER HUB
// Version 2.0
// Part 1/3
// ======================================================

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    initializeDarkMode();
    initializeHomeSearch();
    initializeCareerTips();
    initializeJobTracker();

});

// ======================================================
// DARK MODE
// ======================================================

function initializeDarkMode() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}

// ======================================================
// HOME SEARCH
// ======================================================

function initializeHomeSearch() {

    const button = document.querySelector(".hero button");
    const input = document.querySelector(".hero input");

    if (!button || !input) return;

    button.addEventListener("click", searchJobs);

    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            searchJobs();
        }

    });

}

function searchJobs() {

    const input = document.querySelector(".hero input");

    if (!input) return;

    const value = input.value.trim().toLowerCase();

    if (value === "") {

        alert("Please enter a job title.");

        return;

    }

    const jobs = [

        "shoprite",
        "checkers",
        "pick n pay",
        "woolworths",
        "spar",
        "dischem",
        "clicks",
        "transnet",
        "eskom",
        "saps",
        "department of health",
        "administrator",
        "cashier",
        "driver",
        "cleaner",
        "general worker",
        "security",
        "receptionist",
        "teacher",
        "call centre",
        "warehouse",
        "packer"

    ];

    if (jobs.includes(value)) {

        alert("✅ Jobs found for: " + value);

    } else {

        alert("❌ No jobs found. Try another keyword.");

    }

}

// ======================================================
// CAREER TIPS
// ======================================================

const careerTips = [

    "Tailor your CV for every application.",

    "Always keep your phone number active.",

    "Apply for jobs every day.",

    "Practice interview questions weekly.",

    "Improve one new skill every month.",

    "Keep your CV to two pages.",

    "Proofread your CV before sending it.",

    "Create a professional email address.",

    "Follow companies on LinkedIn.",

    "Never stop learning."

];

function initializeCareerTips() {

    const element = document.getElementById("careerTip");

    if (!element) return;

    newCareerTip();

}

function newCareerTip() {

    const element = document.getElementById("careerTip");

    if (!element) return;

    const random = Math.floor(Math.random() * careerTips.length);

    element.textContent = careerTips[random];

}

// ======================================================
// CV BUILDER
// ======================================================

function createCV() {

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cvResult = document.getElementById("cvResult");

    if (!fullName || !email || !phone || !cvResult) return;

    if (
        fullName.value.trim() === "" ||
        email.value.trim() === "" ||
        phone.value.trim() === ""
    ) {

        alert("Please complete all required fields.");

        return;

    }

    cvResult.innerHTML = `

        <h3>Your CV Preview</h3>

        <p><strong>Name:</strong> ${fullName.value}</p>

        <p><strong>Email:</strong> ${email.value}</p>

        <p><strong>Phone:</strong> ${phone.value}</p>

    `;

        }
