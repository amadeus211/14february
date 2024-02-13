<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';                       //gmail SMTP server set to send through
    $mail->SMTPAuth   = true;
    $mail->Username   = 'malyuk2004@gmail.com';                     //SMTP username (your gmail account)
    $mail->Password   = 'Sasha21012004';                               //SMTP password (your gmail password or app password)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('malyuk2004@gmail.com', 'Mailer');         //Set the sender of the message (your email address)
    $mail->addAddress('malyuk2004.mail.ru@gmail.com', 'Joe User');     //Add a recipient (your bae's email address)

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Я кохаю тебе!';
    $mail->Body    = 'З Днем Святого Валентина, кохана. Я тебе сильно кохаю. Ти найкраще, що коли-небудь траплялося зі мною ❤.';

    $mail->send();
    echo '+++++';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
