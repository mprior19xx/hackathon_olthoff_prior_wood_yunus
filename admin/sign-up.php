<?php
    //files needed to run PHPmailer
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require_once '../load.php';
    require '../vendor/autoload.php';

    // listen for submit post, grab data     
    if(isset($_POST['submit'])){
        $date = date('Y-m-d');
        $fname = trim($_POST['firstname']);
        $lname = trim($_POST['lastname']);
        $email = trim($_POST['email']);
        $country = trim($_POST['country']);
        $message = db_add($date, $fname, $lname, $email, $country);
    }

    //redirect function
    function redirect_to($location) {
        if($location != null){
            header('Location: '.$location);
            exit;
        }
    }

    //function for sending mail
    function send_email($full_name, $email, $subject, $mail_message){
        $mail = new PHPMailer(true);
        try {
            //Server settings                    
            $mail->isSMTP();                                            
            $mail->Host       = 'smtp.gmail.com';                       
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = 'mailtester0912@gmail.com';             
            $mail->Password   = chr(105).chr(109).'s'.chr(111).'hi'.chr(103).chr(104);                             
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
            $mail->Port       = 587;                                    

            //Recipients
            $mail->setFrom('from@test.com', 'IPD BOYS');
            $mail->addAddress($email, $full_name);                      

            // Content
            $mail->isHTML(true);                                  
            $mail->Subject = $subject;
            $mail->Body    = $mail_message;

            $mail->send();
        } catch (Exception $e) {
            //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

        // Block of mail code, works on mac - mail function returns true - no email is sent though

        // //filter name
        // $full_name = filter_var($full_name, FILTER_SANITIZE_STRING);
        // //filter email
        // $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $email);
        // $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        // //filter subject
        // $subject = filter_var($subject, FILTER_SANITIZE_STRING);
        // //add headers
        // $headers = array(
        //     'From'=>'a_wood60810@fanshaweonline.ca',
        //     'Reply-To'=>$full_name.'<'.$email.'>'
        // );
        // //echo mail($email, $subject, $mail_message, $headers);
        // mail($email, $subject, $mail_message, $headers);
    }

    function db_add($date, $fname, $lname, $email, $country) {
        //db connection
        $pdo = Database::getInstance()->getConnection();
        //mail variables
        $full_name = $fname.' '.$lname;
        $subject = '';
        $mail_message = '';
        //initial db query
        $check_query = 'SELECT COUNT(*) FROM tbl_signup WHERE Email =:email';
        $db_check = $pdo->prepare($check_query);
        $db_check->execute(
            array(
                ':email'=>$email
            )
        );
        //look for match in current query
        if($db_check->fetchColumn()>0){
            $match_query = 'SELECT * FROM `tbl_signup` WHERE Email =:email';
            $match_email = $pdo->prepare($match_query);
                $match_email->execute(
                    array(
                        ':email'=>$email
                    )
                );
                //if match is found, update date
            while($found_match = $match_email->fetch(PDO::FETCH_ASSOC)){
                $id = $found_match['ID'];
                $id_query = 'UPDATE tbl_signup SET Update_Date =:dat WHERE ID =:id';
                $ip_set = $pdo->prepare($id_query);
                $ip_set->execute(
                    array(
                        ':dat'=>$date,
                        ':id'=>$id
                    )
                );
                $subject = "Re-subscription";
                $mail_message = "Thank you for re-subscribing to our newsletter!";
                send_email($full_name, $email, $subject, $mail_message);
                
                return '<div class="redirectImg">
                <img src="../images/thankyou_resubscribing.jpg">
                </div>
                ';

            }
            //if no match is found, insert into db
        }else{
            $submit_query = 'INSERT INTO `tbl_signup` (F_Name, L_Name, Email, Country, Subscribe_Date, Update_Date ) VALUES (:fname, :lname, :email, :country, :dat, :dat);';
            $signup_set = $pdo->prepare($submit_query);
            $signup_set->execute(
                array(
                    ':fname'=>$fname,
                    ':lname'=>$lname,
                    ':email'=>$email,
                    ':country'=>$country,
                    ':dat'=>$date
                )
            );
            $subject = "Subscription";
            $mail_message = "Thank you for subscribing to our newsletter!";
            send_email($full_name, $email, $subject, $mail_message);
           

            //new subs
            return '<div class="redirectImg">
            <img src="../images/thankyou_subscribing.jpg">
            </div>
            ';
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="https://use.typekit.net/vom1hdy.css">
    <title>Ontario Summer</title>
</head>
<body>
    <?php echo $message;?>
    <form action="sign-up.php" method="get">
        <button id="homepage" type="submit" name="submit">Go To Home Page</button>
    </form>
    <?php
        if(isset($_GET['submit'])){
            redirect_to('/hackathon_olthoff_prior_wood_yunus/#/');
        }
    ?>
</body>
</html>


