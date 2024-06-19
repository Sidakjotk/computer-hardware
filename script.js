function submitQuiz() {
    let answers = [];
    let correctAnswers = ["a", "c", "b", "a", "d", "c", "c", "b", "d", "false", "true", "true", "false", "true", "true", "false", "true", "true", "false"];
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        answers.push(input.value);
    });
    document.querySelectorAll('select').forEach(select => {
        answers.push(select.value);
    });

    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            score++;
        }
    }
    alert("Answers: " + answers.join(", "));
    alert(`Your score: ${score}/20`);
}