<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
if(isset( $_POST['phoneno']))
$phoneno = $_POST['phoneno'];

$content="From: $name \n Email: $email \n Message: $message";
$recipient = "banarasibetelleaf@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader, $phoneno) or die("Error!");
echo "Email sent!";

$conn = mysqli_connect("localhost", "root", "test", "blog_samples") or die("Connection Error: " . mysqli_error($conn));
	mysqli_query($conn, "INSERT INTO tblcontact (user_name, user_email,subject,content) VALUES ('" . $name. "', '" . $email. "','" . $subject. "','" . $content. "')");

require_once "contact.html";
?>
