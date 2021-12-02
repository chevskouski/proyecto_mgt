<?php
class loginController extends Controller{
    public function __construct(){
        parent::__construct();
        $this->modelo=$this->loadModel('login','usuarios');
        $this->view->template = 'admin';
    }

    public function index(){
        
    }

    public function ingresar(){
        $this->view->rendering('login');
    }

    public function cerrar_sesion(){
        @session_start();
        session_destroy();
        header('Location: '.BASE_URL);
    }
}
?>