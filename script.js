document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const dobInput = document.getElementById("dob");
    const langInput = document.getElementById("language");
    const resultBox = document.getElementById("result");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const today = new Date().toISOString().split("T")[0];
    dobInput.max = today;
  
    submitBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const dob = dobInput.value;
      const lang = langInput.value;
      let message = "";
      let isValid = true;

      if (!name) {
        message = "Please enter your name.";
        isValid = false;
      } else if (!dob) {
        message = "Please enter your date of birth.";
        isValid = false;
      } else if (new Date(dob) > new Date()) {
        message = "Date of birth cannot be in the future.";
        isValid = false;
      } else if (!lang) {
        message = "Please select your favorite programming language.";
        isValid = false;
      } else {
        let languageFeedback;
        switch (lang) {
          case "Javascript":
            languageFeedback = "JavaScript is great for web development!";
            break;
          case "Python":
            languageFeedback =
              "Python is excellent for data science and automation!";
            break;
          case "Java":
            languageFeedback = "Java is widely used in enterprise applications!";
            break;
          case "C":
            languageFeedback = "C is perfect learning basics and building foundation!";
            break;
          case "C++":
            languageFeedback = "That's an interesting choice! As it is more interesting";
            break;
          default:
            languageFeedback = "You haven't selected a language.";
        }
        message = `👋 Hello ${name}! You were born on ${dob} and love ${lang}. ${languageFeedback}`;
      }
  
      resultBox.textContent = message;
      resultBox.className = `result-box ${isValid ? "success" : "error"}`;
    });
  
    resetBtn.addEventListener("click", () => {
      nameInput.value = "";
      dobInput.value = "";
      langInput.value = "";
      resultBox.textContent = "";
      resultBox.className = "result-box";
    });
  });
  