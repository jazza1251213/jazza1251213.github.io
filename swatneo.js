function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const resultElement = document.getElementById("result");
    
    // 正しい答えをここで設定します
    const correctAnswer = "正しい答え"; // 例: "〇" または "×"
    
    const userAnswer = answerInput.value.trim();
    
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "正解！";
    } else {
        resultElement.textContent = "不正解。もう一度試してみてください。";
    }
}
