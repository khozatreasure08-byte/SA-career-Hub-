window.onload = function () {
  const button = document.querySelector(".hero button");
  const input = document.querySelector(".hero input");

  if (!button || !input) {
    console.log("Search elements not found.");
    return;
  }

  button.onclick = function () {
    const search = input.value.trim().toLowerCase();

    if (search === "shoprite") {
      alert("🛒 Shoprite Retail Assistant - Johannesburg");
    } else if (search === "transnet") {
      alert("🚆 Transnet General Worker - Durban");
    } else if (search === "administrator") {
      alert("🏥 Department of Health Administrator - Pretoria");
    } else if (search === "") {
      alert("Please enter a job to search.");
    } else {
      alert("No matching jobs found.");
    }
  };
};
function viewJob(job) {
  alert(job);
}
function createCV() {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all the fields.");
    return;
  }

  document.getElementById("cvResult").innerHTML = `
    <h3>Your CV Preview</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p>Your professional CV has been started. More sections (Education, Skills, Experience) are coming soon.</p>
  `;
}
function createCV() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (fullName === "" || email === "" || phone === "") {
        alert("Please fill in all the fields.");
        return;
    }

    const cvText =
`SA CAREER HUB CV

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}

Thank you for using SA Career Hub.`;

    const blob = new Blob([cvText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fullName + "-CV.txt";
    link.click();
   function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
   }                       }
function downloadCV() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    const cv = `
SA CAREER HUB CV

Name: ${name}

Email: ${email}

Phone: ${phone}

Education:
${education}

Work Experience:
${experience}

Skills:
${skills}
`;

    const blob = new Blob([cv], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "My_CV.txt";
    link.click();
  }
