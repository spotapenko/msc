<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the phone
    $emailTo = 'lighty885@gmail.com';

    $company_name = addslashes(trim($_POST['company_name']));
		$name = addslashes(trim($_POST['name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $phone = addslashes(trim($_POST['phone']));
		$address = addslashes(trim($_POST['ship-address']));

    $array = array( 'company_nameMessage' => '', 'nameMessage' => '','emailMessage' => '', 'phoneMessage' => '', 'ship-addressMessage' => '');

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
        $array['ship-addressMessage'] = 'Empty address!';
    }
    if($name != '' && isEmail($clientEmail) && $phone != '') {
        // Send email
		$headers = "From: " . $name . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		$message = "Company:" .$company_name . "\n". "Contact Name: ".$name."\n" ."Email: ".$clientEmail."\r\n"."Fhone: ".$phone."\n"."Business Adress: ". $address;
		mail($emailTo, $subject . " From MSC Ordering Samples", $message, $headers);
    }

    echo json_encode($array);
}
?>
