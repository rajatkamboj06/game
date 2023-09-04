document.addEventListener("DOMContentLoaded", function () {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  const guessInput = document.getElementById("guess");
  const checkButton = document.getElementById("check");
  const messageElement = document.getElementById("message");

  checkButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      messageElement.textContent =
        "Please enter a valid number between 1 and 100.";
    } else {
      attempts++;
      if (userGuess < secretNumber) {
        messageElement.textContent = `Too low! Try again (Attempt ${attempts}).`;
      } else if (userGuess > secretNumber) {
        messageElement.textContent = `Too high! Try again (Attempt ${attempts}).`;
      } else {
        messageElement.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        checkButton.disabled = true;
        checkButton.style.backgroundColor = "#ccc";
      }
    }
  });
});
