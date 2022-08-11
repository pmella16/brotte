<?php
require('phpmailer/class/class.phpmailer.php');
require('phpmailer/class/class.smtp.php');
require 'emailTemplate.php';

$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

$fechao = date("Y-m-d H:i:s");


function validarEmail($correo) {

        if (preg_match("#^([0-9a-zA-Z]+[!\#$%&'*+-/=?^_`{}|~]*)*[^!\#$%&'*+-/=?^_`{}|~]@[0-9a-zA-Z.+-]+\.[A-Za-z0-9]+$#", $correo)) {
            return 1;
        } else {
            return 0;
        }
    }
    
if(validarEmail($email)==0){ die; }
if(!isset($nombre)){ die; }
if(!isset($mensaje)){ die; }


$mail = new PHPMailer();

$body = getTemplate($nombre, $email);

$mail->Timeout = 20;
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Host = "mail.brotte.cl";
$mail->Port = 587;
$mail->Username = 'formulario@brotte.cl';
$mail->Password = 'ug[mTnEk%@1?';
$mail->SetLanguage('es', 'phpmailer/language/' );

// dirección remitente, p. ej.: no-responder@miempresa.com
$mail->From = 'formulario@brotte.cl';
// nombre remitente, p. ej.: "Servicio de envío automático"
$mail->FromName = 'Brotte.cl';

// asunto y cuerpo alternativo del mensaje
$mail->Subject = 'Contacto Brotte.cl';
$mail->AltBody = $body; 

// si el cuerpo del mensaje es HTML
$mail->MsgHTML($body);

// podemos hacer varios AddAdress
$mail->AddAddress($email, $nombre);



$mail->CharSet = 'UTF-8';

if(!$mail->Send()) {
echo 'Error enviando: ' . $mail->ErrorInfo;
} else {
//echo '¡¡Enviado!! Gracias';
}


$mail = new PHPMailer();

$body = "Nuevo contacto de: ".$nombre."<br>";
$body .= "correo: ".$email." <br>";
$body .= "Mensaje: ".$mensaje."<br>";
$body .= "Fecha de hoy: ".$fechao;


$mail->Timeout = 20;
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Host = "mail.brotte.cl";
$mail->Port = 587;
$mail->Username = 'formulario@brotte.cl';
$mail->Password = 'ug[mTnEk%@1?';
$mail->SetLanguage('es', 'phpmailer/language/' );

// dirección remitente, p. ej.: no-responder@miempresa.com
$mail->From = 'formulario@brotte.cl';
// nombre remitente, p. ej.: "Servicio de envío automático"
$mail->FromName = 'Brotte.cl';

// asunto y cuerpo alternativo del mensaje
$mail->Subject = 'Contacto Brotte.cl';
$mail->AltBody = $body; 

// si el cuerpo del mensaje es HTML
$mail->MsgHTML($body);

// podemos hacer varios AddAdress
$mail->AddAddress('contacto@pablomella.cl', 'Pablo Mella');

// si el SMTP necesita autenticación


// credenciales usuario


$mail->CharSet = 'UTF-8';

if(!$mail->Send()) {

$response = array(
    "success" => false,
    "error" => $mail->ErrorInfo
);
} else {
//echo '¡¡Enviado!! Gracias';

$response = array(
    "success" => true,
);

} 

echo json_encode($response);

?>