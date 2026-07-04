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
