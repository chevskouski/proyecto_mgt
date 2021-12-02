<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class contactoController extends Controller{    
    public function __construct(){
        parent::__construct();
        $this->modelo=$this->loadModel('contacto','tienda');
        $this->view->template = 'store';
    }

    public function index(){
    }

    public function vistacontacto(){
        $this->view->rendering('contacto');
    }

	public function enviar_correo()
	{
        if(isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['comentario']) && isset($_POST['asunto'])){
    
        $name = $_POST['nombre'];
        $email = $_POST['correo'];
        $comment = $_POST['comentario'];
        $subject = $_POST['asunto'];
    
            $mail = new PHPMailer(true);
    
            try {
                //Server settings
                $mail->SMTPDebug = 0;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'mail.uspgcoders.site';                     //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'info@uspgcoders.site';                     //SMTP username
                $mail->Password   = '+Co=Ji7+D*F6';                            //SMTP password
                $mail->SMTPSecure = 'ssl';           //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
                //Recipients
                $mail->setFrom('info@uspgcoders.site', $name);
                $mail->addAddress('kesecaye@alumno.uspg.edu.gt');     //Add a recipient
                
    
                //Attachments
                //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
    
                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'Correo de contacto: '.$subject;
                $mail->Body    = 'nombre: '.$name.'<br/>Correo: '.$email.'<br/>Comentario: '.$comment;
                //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
                $mail->send();              
				echo 'Mensaje enviado con éxito.';
				
            } catch (Exception $e) {
                echo "Error: {$mail->ErrorInfo}";
            } 
            
            
        }
    }
    
}
?>