<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "guidajiben3@gmail.com"; // ここを自分のメールアドレスに変更！
  $subject = "【LPからのお問い合わせ】";
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "Content-Type: text/plain; charset=UTF-8";

  $body = "お名前: $name\n";
  $body .= "メールアドレス: $email\n\n";
  $body .= "お問い合わせ内容:\n$message\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "送信が完了しました。ありがとうございました！";
  } else {
    echo "送信に失敗しました。もう一度お試しください。";
  }
} else {
  echo "不正なリクエストです。";
}
?>