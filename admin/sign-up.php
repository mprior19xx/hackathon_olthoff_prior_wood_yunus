<?php
    require_once '../load.php';
    if(isset($_POST['submit'])){
        $date = date('Y-m-d');
        $fname = trim($_POST['firstname']);
        $lname = trim($_POST['lastname']);
        $email = trim($_POST['email']);
        $country = trim($_POST['country']);
        $message = db_add($date, $fname, $lname, $email, $country);
    }

    function redirect_to($location) {
        if($location != null){
            header('Location: '.$location);
            exit;
        }
    }
    //function for sending mail
    function send_email($full_name, $email, $subject, $mail_message){
        //filter name
        $full_name = filter_var($full_name, FILTER_SANITIZE_STRING);
        //filter email
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $email);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        //filter subject
        $subject = filter_var($subject, FILTER_SANITIZE_STRING);
        //add headers
        $headers = array(
            'From'=>'a_wood60810@fanshaweonline.ca',
            'Reply-To'=>$full_name.'<'.$email.'>'
        );
        //echo mail($email, $subject, $mail_message, $headers);
        mail($email, $subject, $mail_message, $headers);
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
                <p>Thank You for Resubscribing. An email will be sent to your inbox shortly.</p>
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
            <p>Thank You For Subscribing! An email will be sent to your inbox shortly.</p>
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
        <button type="submit" name="submit">Go To Home Page</button>
    </form>
    <?php
        if(isset($_GET['submit'])){
            redirect_to('/hackathon_olthoff_prior_wood_yunus/#/');
        }
    ?>
</body>
</html>


