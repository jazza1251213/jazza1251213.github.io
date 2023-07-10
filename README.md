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
  <label for="answer">”不正のトライアングル”の三要素は”動機”と”機会”とあと一つは何か：</label>
  <input type="text" id="answer" />
  <button onclick="checkAnswer()">判定</button>
  <p id="result"></p>
</body>
</html>
