<?php
if (isset($_POST['btn-submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];


  $to = 'busisani@abakhibengcebo.co.za';
  $subject = "Message From Website";
  $message = "Name: " .$name."\n"."Email: ".$email."\n"."Phone: ".$phone."\n"."Message: "."\n".$message;
  $headers = $name;
  $headers .= "Reply-To: Support <$to>\r\n";
    $headers .= "Return-Path: Support <$to>\r\n";
    $headers .= "From: $name <$name>\r\n";
    $headers .= "Organization: Abakhi Bengcebo\r\n";
    $headers .= "Content-Type: text/plain\r\n";


  if(mail($to, $subject, $message)){
    echo "<div style='background: linear-gradient(#B39456, #F7ED9C, #d4b74d); padding:100px; height: 150px; text-align: center;'>
    <h2> Sent Successfully! Thank you ".$name.  ". We will contact you shortly <br> Click <a style='color: red;' href='https://abakhibengcebo.co.za'>here</a> to go back to the home page
    </h2>
    </div>
    " ;

  }else {
    echo "Something went wrong!";
  }
}
?>
