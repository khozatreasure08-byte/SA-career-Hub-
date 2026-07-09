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
// ======================================================
// PART 2/3
// JOB TRACKER + CV DOWNLOAD
// ======================================================

// Download CV
function downloadCV() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");

    if (!name || !email || !phone) return;

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        phone.value.trim() === ""
    ) {

        alert("Please fill in Name, Email and Phone.");

        return;

    }

    const cv = `

SA CAREER HUB CV

===================================

PERSONAL DETAILS

Name:
${name.value}

Email:
${email.value}

Phone:
${phone.value}

===================================

EDUCATION

${education ? education.value : ""}

===================================

WORK EXPERIENCE

${experience ? experience.value : ""}

===================================

SKILLS

${skills ? skills.value : ""}

===================================

Generated by SA Career Hub

`;

    const blob = new Blob([cv], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `${name.value}-CV.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

    alert("✅ CV downloaded successfully!");

}

// ======================================================
// JOB TRACKER
// ======================================================

function initializeJobTracker() {

    displayJobs();

}

function saveJob() {

    const company = document.getElementById("company");
    const position = document.getElementById("position");
    const status = document.getElementById("status");

    if (!company || !position || !status) return;

    if (
        company.value.trim() === "" ||
        position.value.trim() === ""
    ) {

        alert("Please enter Company and Position.");

        return;

    }

    const jobs =
        JSON.parse(localStorage.getItem("jobTracker")) || [];

    jobs.push({

        company: company.value,

        position: position.value,

        status: status.value,

        date: new Date().toLocaleDateString()

    });

    localStorage.setItem(
        "jobTracker",
        JSON.stringify(jobs)
    );

    company.value = "";

    position.value = "";

    status.selectedIndex = 0;

    displayJobs();

}

function displayJobs() {

    const container = document.getElementById("jobList");

    if (!container) return;

    const jobs =
        JSON.parse(localStorage.getItem("jobTracker")) || [];

    container.innerHTML = "";

    if (jobs.length === 0) {

        container.innerHTML =
            "<p>No applications saved yet.</p>";

        return;

    }

    jobs.forEach((job, index) => {

        container.innerHTML += `

<div class="job-item">

<h3>${job.company}</h3>

<p><strong>Position:</strong> ${job.position}</p>

<p><strong>Applied:</strong> ${job.date}</p>

<p>

<strong>Status:</strong>

<span class="status ${job.status.toLowerCase()}">

${job.status}

</span>

</p>

<button onclick="deleteJob(${index})">

Delete

</button>

</div>

`;

    });

}

function deleteJob(index) {

    const jobs =
        JSON.parse(localStorage.getItem("jobTracker")) || [];

    jobs.splice(index, 1);

    localStorage.setItem(
        "jobTracker",
        JSON.stringify(jobs)
    );

    displayJobs();

}
// ======================================================
// PART 3/3
// JOB SEARCH + UTILITIES
// ======================================================

// View Job
function viewJob(jobTitle) {

    alert("Opening application for:\n\n" + jobTitle);

}

// ======================================================
// LIVE JOB SEARCH
// ======================================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = searchInput.value.toLowerCase();

        const jobs = document.querySelectorAll(".job-card");

        jobs.forEach(function (job) {

            const text = job.textContent.toLowerCase();

            if (text.includes(value)) {

                job.style.display = "block";

            } else {

                job.style.display = "none";

            }

        });

    });

}

// ======================================================
// HELPERS
// ======================================================

function showSuccess(message) {

    alert("✅ " + message);

}

function showError(message) {

    alert("❌ " + message);

}

// ======================================================
// FUTURE FEATURES
// ======================================================

// Placeholder for future API integration
function loadOnlineJobs() {

    console.log("Online job integration coming soon.");

}

// Placeholder for user accounts
function loginUser() {

    console.log("Login system coming soon.");

}

// Placeholder for notifications
function sendNotification(message) {

    console.log("Notification:", message);

}

// ======================================================
// END OF SCRIPT
// ======================================================

console.log("SA Career Hub Version 2.0 Loaded Successfully");
// ======================================
// Jobs Search & Filters
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const provinceFilter = document.getElementById("provinceFilter");
    const categoryFilter = document.getElementById("categoryFilter");

    // Exit if we're not on the Jobs page
    if (!searchInput || !provinceFilter || !categoryFilter) {
        return;
    }

    function filterJobs() {

        const search = searchInput.value.toLowerCase().trim();
        const province = provinceFilter.value;
        const category = categoryFilter.value;

        const jobs = document.querySelectorAll(".job");

        jobs.forEach(function (job) {

            const text = job.textContent.toLowerCase();

            const jobProvince = job.dataset.province;
            const jobCategory = job.dataset.category;

            const matchesSearch = text.includes(search);
            const matchesProvince =
                province === "" || jobProvince === province;

            const matchesCategory =
                category === "" || jobCategory === category;

            if (matchesSearch && matchesProvince && matchesCategory) {
                job.style.display = "block";
            } else {
                job.style.display = "none";
            }

        });

    }

    searchInput.addEventListener("input", filterJobs);
    provinceFilter.addEventListener("change", filterJobs);
    categoryFilter.addEventListener("change", filterJobs);

});
// ======================================
// Save Jobs
// ======================================

function saveJob(jobName) {

    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (!savedJobs.includes(jobName)) {

        savedJobs.push(jobName);

        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

        alert("✅ Job saved successfully!");

    } else {

        alert("⭐ You already saved this job.");

    }

}
