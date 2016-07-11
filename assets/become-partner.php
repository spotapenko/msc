<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the phone
    $emailTo = 'svetlana@sfdev.com';

    $company_name = addslashes(trim($_POST['company_name']));
		$name = addslashes(trim($_POST['name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $phone = addslashes(trim($_POST['phone']));
		$address = addslashes(trim($_POST['address']));

    $array = array( 'company_nameMessage' => '', 'nameMessage' => '','emailMessage' => '', 'phoneMessage' => '', 'addressMessage' => '');

    if ($company_name == '') {
			$array['company_nameMessage'] = 'Empty company name!';
		}
    if($name == '') {
        $array['nameMessage'] = 'Empty name!';
    }
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($phone == '') {
        $array['phoneMessage'] = 'Empty phone!';
    }
    if($address == '') {
        $array['addressMessage'] = 'Empty address!';
    }
    if($company_name != '' && $name != '' && isEmail($clientEmail) && $phone != '') {
        // Send email
		$headers = "From: " . $name . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		$message = "Company:" .$company_name . "\n". "Contact Name: ".$name."\n" ."Email: ".$clientEmail."\r\n"."Fhone: ".$phone."\n"."Business Adress: ". $address ;
		mail($emailTo, $subject . "From MSC Become a Partner", $message, $headers);
    }

    echo json_encode($array);
}
?>
