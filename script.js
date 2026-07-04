document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector("button");
  const searchInput = document.querySelector("input");

  searchButton.addEventListener("click", function () {
    const search = searchInput.value.toLowerCase();

    if (search.includes("shoprite")) {
      alert("🛒 Shoprite Retail Assistant - Johannesburg");
    } else if (search.includes("transnet")) {
      alert("🚆 Transnet General Worker - Durban");
    } else if (search.includes("administrator")) {
      alert("🏥 Department of Health Administrator - Pretoria");
    } else if (search === "") {
      alert("Please type a job name.");
    } else {
      alert("No jobs found. More jobs coming soon!");
    }
  });
});
