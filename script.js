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
