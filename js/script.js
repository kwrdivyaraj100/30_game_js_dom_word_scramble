const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");






const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    scoreArea.innerHTML = score;

    if (score > 9) {
        winGame();
    }

}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();

    if (!userWord) {
        modal.style.display = "block";
        modalContent.classList.remove("modal-wrong");
        modalContent.classList.remove("modal-correct");
        return modalText.innerHTML = `<br>Please enter the word to check!`;
    }

    if (userWord !== correctWord) {
        if (score >= 1) {
            score = score - 1;
            scoreArea.innerHTML = score;
        }
        modal.style.display = "block";
        modalContent.classList.add("modal-wrong");
        return modalText.innerHTML = `<br>Oops! <b>${userWord}</b> is not a correct word`;
    }
    else {
        modal.style.display = "block";
        modalContent.classList.remove("modal-wrong");
        modalContent.classList.add("modal-correct");
        modalText.innerHTML = `<br>Congrats! <b>${correctWord.toUpperCase()}</b> is the correct word`;
        score++;
    }

    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);