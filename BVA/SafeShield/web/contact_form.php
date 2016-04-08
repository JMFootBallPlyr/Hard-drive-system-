<?php
if(isset($_POST['email'])) {
   
// CHANGE THE TWO LINES BELOW
$email_to = "you@yourdomain.com";
 
$email_subject = "SafeShield Kontaktformular";
 
 
// ERROR CODE HERE.
function died($error) {
    echo "Haben Sie etwas vergessen?<br>";
    echo "Folgende Felder wurden inkorrekt oder gar nicht ausgefüllt:";
    echo "<ul>".$error."</ul>";
    echo "Bitte füllen Sie das Kontaktformular erneut aus.<br><br>";
    die();
}


// VALIDATION OF NEEDED DATA.
if(!isset($_POST['first_name']) ||
    !isset($_POST['last_name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['telephone']) ||
    !isset($_POST['comments'])) {
    died('Es tut uns Leid, es scheint ein Fehler bei Ihrer Eingabe der Daten vorgefallen zu sein.');      
}
 
$first_name = $_POST['first_name']; // REQUIRED
$last_name = $_POST['last_name']; // REQUIRED
$email_from = $_POST['email']; // REQUIRED
$telephone = $_POST['telephone']; // NOT REQUIRED
$comments = $_POST['comments']; // REQUIRED
 
$error_message = "";
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
if(!preg_match($email_exp,$email_from)) {
    $error_message .= '<li>E-Mail</li>';
}

    $string_exp = "/^[A-Za-z .'-]+$/";
if(!preg_match($string_exp,$first_name)) {
    $error_message .= '<li>Vorname</li>';
}

if(!preg_match($string_exp,$last_name)) {
    $error_message .= '<li>Nachname</li>';
}

if(strlen($comments) < 2) {
    $error_message .= '<li>Nachricht</li>';
}

if(strlen($error_message) > 0) {
    died($error_message);
}

$email_message = "Kontaktformulardaten wie folgt:\n\n";
 
function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
}
 
$email_message .= "Vorname: ".clean_string($first_name)."\n";
$email_message .= "Nachname: ".clean_string($last_name)."\n";
$email_message .= "E-Mail-Adresse: ".clean_string($email_from)."\n";
$email_message .= "Telefonnummer: ".clean_string($telephone)."\n";
$email_message .= "Nachricht: ".clean_string($comments)."\n";
 
 
// CREATE E-MAIL HEADERS.
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
?>
 
<!-- SUCCESS MESSAGE. -->
 
Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.
 
<?php
}
die();
?>
