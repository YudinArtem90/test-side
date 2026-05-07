<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  exit;
}

$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$email = trim($_POST["email"] ?? "");

if (
  empty($name) ||
  empty($phone) ||
  empty($email)
) {
  exit("ERROR");
}

$to = "artem.yudin.90@list.ru";

$subject = "Новая заявка с сайта";

$message =
"Хочу купить у вас книгу, высылаю свои данные:\n\n" .
"Имя: $name\n" .
"Телефон: $phone\n" .
"Email: $email\n";

$headers = "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: support@дистанционное-бухгалтерское-обслуживание.рф\r\n";

if (mail($to, $subject, $message, $headers)) {
  echo "OK";
} else {
  echo "ERROR";
}