function submitQuiz() {
    let answers = [];
    let correctAnswers = [ "c", "b", "b", "d", "c", "a", "b", "c", "b", "d", "a", "b", "c", "d", "c"];
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
    alert(`Your score: ${score}/20`);
}