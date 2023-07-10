<!DOCTYPE html>
<html>
<head>
  <title>SWAT NEO</title>
  <script>
    function checkAnswer() {
      var answer = document.getElementById("answer").value;
      
      if (answer === "ショルダーハッキング") {
        document.getElementById("result").textContent = "正解";
      } else {
        document.getElementById("result").textContent = 不正解";
      }
    }
  </script>
</head>
<body>
  <h1>SWATNEO</h1>
  <label for="answer">モニター画面やキーボード操作を利用者の背後から盗み見て、ログイン情報等を不正取得する：</label>
  <input type="text" id="answer" />
  <button onclick="checkAnswer()">判定</button>
  <p id="result"></p>
</body>
</html>
