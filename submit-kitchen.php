<?php

function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    $emailTo = 'lighty885@gmail.com';

    $company_name = addslashes(trim($_POST['company_name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $phone = addslashes(trim($_POST['phone']));
		// here I need a variable for uploading

    $array = array( 'company_nameMessage' => '','emailMessage' => '', 'phoneMessage' => '');

    if ($company_name == '') {
			$array['company_nameMessage'] = 'Empty company name!';
		}
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($phone == '') {
        $array['phoneMessage'] = 'Empty phone!';
    }
    if($company_name != '' && isEmail($clientEmail) && $phone != '') {

		$headers = "From: " . $$company_name . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		$message = "Company:" .$company_name . "\n"."Email: ".$clientEmail."\r\n"."Fhone: ".$phone;
		mail($emailTo, $subject . " From MSC Submiting Kitchen Plan", $message, $headers);
    }

    echo json_encode($array);
}
?>
