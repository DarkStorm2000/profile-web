<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // معلومات المرسل والمستلم
    $to = "recipient@example.com";
    $subject = "New message from $name";
    $body = "From: $name\nEmail: $email\nMessage: $message";

    // معلومات المرسل
    $from = "f.t.tcompany667@gmail.com";
    $headers = "From:" . $from;

    // إرسال الرسالة
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
}
?>





