//答え用配列を作成
const filePath = 'ans.txt';
fetch(filePath)
.then(response => {
    return response.text();
    })
.then(text => {
    const ans = text.split('\n');
})

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const resultElement = document.getElementById("result");
    
    // 正解を設定
    const correctAnswer = "〇"; 

    //答えを入力
    const userAnswer = answerInput.value.trim();
    
    if (userAnswer === correctAnswer) {
        resultElement.textContent = ans;
    } else {
        resultElement.textContent = "不正解。もう一度試してみてください。";
    }
}
