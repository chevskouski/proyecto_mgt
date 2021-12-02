<?php
ini_set('display_errors',1);
define('DS',DIRECTORY_SEPARATOR);
define('ROOT',realpath(dirname(__FILE__)).DS);
define('APP_PATH',ROOT.'application'.DS);
define('SYS_PATH',ROOT.'system'.DS);
define('DEFAULT_CONTROLLER','index');
define('LIB_PATH',ROOT.'libraries'.DS);

try {
    require_once SYS_PATH.'autoload.php';
    require_once SYS_PATH.'config.php';
    require_once LIB_PATH.'phpmailer/src/PHPMailer.php';
    require_once LIB_PATH.'phpmailer/src/SMTP.php';
    require_once LIB_PATH.'phpmailer/src/Exception.php';
    require_once LIB_PATH.'fpdf/fpdf.php';

    sesion::init();
    
    //$_SESSION['autenticado']=FALSE;

    $registry = Registry::obtener_instancia();
    $registry->request = new Request();
    $registry->conexion = new Conexion(HOST,DB_NAME,USER,PASSWORD,'utf8');
    
    Dispatch::run($registry->request);

} catch (Exception $e) {
    echo $e->getMessage();
    echo '<br>';
    echo $e->getFile();
} catch (Error $e) {
    echo $e->getMessage();
    echo '<br>';
    echo $e->getFile();
    echo '<br>';
    echo $e->getLine();
}

?>