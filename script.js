document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;

    if (!name || !phone || !email || !date) {

      alert("Please complete all required fields.");

      return;
    }

    alert(
      "Thank you, " +
      name +
      "! Your event inquiry has been received."
    );

    form.reset();

  });

});