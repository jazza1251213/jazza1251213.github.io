#jazza1251213.github.io

<!DOCTYPE html>
<html>
<head>
  <title>〇×判定</title>
  <script>
    function checkAnswer() {
      var answer = document.getElementById("answer").value;
      
      if (answer === "〇") {
        document.getElementById("result").textContent = "〇が入力されました";
      } else {
        document.getElementById("result").textContent = "〇以外が入力されました";
      }
    }
  </script>
</head>
<body>
  <h1>〇×判定</h1>
  <label for="answer">答えを入力してください（〇または×）：</label>
  <input type="text" id="answer" />
  <button onclick="checkAnswer()">判定</button>
  <p id="result"></p>
</body>
</html>
