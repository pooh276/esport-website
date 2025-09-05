document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const team = document.getElementById("team").value;

      document.getElementById("result").innerText =
        `Thank you ${name}! Your registration is successful. Team: ${team}. Check your email (${email}) for confirmation.`;
      
      form.reset();
    });
  }
});