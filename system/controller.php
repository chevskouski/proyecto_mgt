<?php
abstract class controller{
    protected $request;
    protected $modelo;
    protected $registry;
    protected $view;

    function __construct()
    {
        $this->registry=Registry::obtener_instancia();
        $this->request = $this->registry->request;
        $this->view = new View($this->request);
        
    }

    abstract public function index();

    public function loadModel($modelo,$modulo=FALSE){
        if($modulo==FALSE){
            $rutaModelo = APP_PATH.$modelo.DS.$modelo.'Model.php';
        }else{
            $rutaModelo = APP_PATH.'modules'.DS.$modulo.DS.$modelo.DS.$modelo.'Model.php';
        }
        $clase_modelo=$modelo.'Model';

        if(is_readable($rutaModelo)){
            require_once $rutaModelo;
            $model = new $clase_modelo;

            return $model;
        }
    }
}
?>