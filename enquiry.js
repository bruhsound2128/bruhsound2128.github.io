document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();

    if (name && email && date && message) {
      alert(`Thank you, ${name}! Your enquiry has been submitted.\nWe will contact you at ${email}.`);
      form.reset(); // clear the form after submission
    } else {
      alert("⚠️ Please fill in all fields before submitting.");
    }
  });
});
