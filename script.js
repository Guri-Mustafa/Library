document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  if (username === "GuriMustafa" && password === "12345678") {
    localStorage.setItem("isStudentLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Incorrect username or password.");
  }
});

document
  .getElementById("adminLoginForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    if (username === "Admin123" && password === "12345678") {
      localStorage.setItem("isAdminLoggedIn", "true");
      window.location.href = "admin.html";
    } else {
      alert("Incorrect admin username or password.");
    }
  });
