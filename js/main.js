// Text for typewriter effect
const text = "APNA GIRIDIH";
const textElement = document.getElementById("text");
const getStartedBtn = document.getElementById("getStartedBtn");

// Show image fade-in first, then start text animation
setTimeout(() => {
  textElement.style.opacity = 1;
  typeWriter(text, textElement, 150);
}, 2000);

// Typewriter effect function
function typeWriter(text, element, speed) {
  let i = 0;
  function write() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(write, speed);
    } else {
      getStartedBtn.style.display = "inline-block"; // Button दिखाओ जब text पूरा हो
    }
  }
  write();
}

// Redirect to login page
function redirectToLogin() {
  window.location.href = "./pages/login.html";
}
