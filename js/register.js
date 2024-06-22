document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "Show Password" : "Hide Password";
  });

document
  .getElementById("togglePasswordConfirmation")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password-confirmation");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "Show Password" : "Hide Password";
  });
